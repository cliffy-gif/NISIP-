/* Illustrative irrigation investment model. Monetary inputs are KES per hectare. */
'use strict';
const RAMP = [0.6, 0.85];
const OM_RATE = 0.03;
function computeInvestment(input) {
  const crop = CROPS[input.crop], system = SYSTEMS[input.system], source = SOURCES[input.source];
  if (!crop || !system || !source) throw new RangeError('Choose a valid crop, irrigation system and water source.');
  const area = Number(input.area), seasons = Number(input.seasons), years = Number(input.years), rate = Number(input.rate) / 100;
  if (!Number.isFinite(area) || area <= 0 || !Number.isFinite(seasons) || seasons < 1 || seasons > 3 || !Number.isInteger(years) || years < 1 || years > 50 || !Number.isFinite(rate) || rate < 0 || rate >= 1) throw new RangeError('Calculator inputs are outside the supported range.');
  const ha = input.unit === 'acres' ? area * 0.404686 : area;
  const price = crop.price * (1 + Number(input.priceAdj || 0) / 100);
  const capex = ha * (system.capex + source.capex);
  const revenueFull = ha * crop.yield * (1 + system.boost) * price * seasons;
  const opexFull = ha * crop.cost * seasons + capex * OM_RATE;
  const flows = [-capex], cumulative = [-capex];
  for (let year = 1; year <= years; year++) {
    const net = revenueFull * (RAMP[year - 1] ?? 1) - opexFull;
    flows.push(net); cumulative.push(cumulative[year - 1] + net);
  }
  const npvAt = discount => flows.reduce((sum, cash, t) => sum + cash / Math.pow(1 + discount, t), 0);
  const npv = npvAt(rate);
  // Bisection finds an IRR only when NPV changes sign in this bounded interval.
  let irr = null, low = -0.999, high = 10, lowNpv = npvAt(low), highNpv = npvAt(high);
  if (Number.isFinite(lowNpv) && Number.isFinite(highNpv) && lowNpv * highNpv < 0) {
    for (let k = 0; k < 120; k++) { const mid = (low + high) / 2; if (lowNpv * npvAt(mid) <= 0) high = mid; else { low = mid; lowNpv = npvAt(low); } }
    irr = (low + high) / 2;
  }
  let payback = null;
  for (let t = 1; t < cumulative.length; t++) if (cumulative[t] >= 0 && flows[t] > 0) { payback = t - 1 + (-cumulative[t - 1]) / flows[t]; break; }
  return {ha,capex,revenueFull,opexFull,steadyNet:revenueFull-opexFull,flows,cumulative,npv,irr,payback};
}
