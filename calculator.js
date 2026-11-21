/*
 * Investment calculator.
 * All unit costs, yields and prices are ILLUSTRATIVE defaults (KES) — replace with
 * NISIP / State Department for Irrigation figures before publishing.
 */

const CROPS = {
  maize:    { label: 'Maize',          yield: 6,  price: 44000, cost: 90000  },
  rice:     { label: 'Rice (paddy)',   yield: 6,  price: 60000, cost: 180000 },
  tomatoes: { label: 'Tomatoes',       yield: 30, price: 25000, cost: 600000 },
  onions:   { label: 'Onions',         yield: 15, price: 35000, cost: 380000 },
  bananas:  { label: 'Bananas',        yield: 15, price: 28000, cost: 300000 },
  beans:    { label: 'French beans',   yield: 7,  price: 70000, cost: 300000 }
};

const SYSTEMS = {
  drip:      { label: 'Drip irrigation',      capex: 450000, boost: 0.20 },
  sprinkler: { label: 'Sprinkler irrigation', capex: 330000, boost: 0.10 },
  surface:   { label: 'Surface / furrow',     capex: 180000, boost: 0.00 }
};

const SOURCES = {
  borehole: { label: 'Borehole',            capex: 150000 },
  river:    { label: 'River abstraction',   capex: 80000  },
  dam:      { label: 'Dam / canal supply',  capex: 120000 }
};

const RAMP = [0.6, 0.85]; // share of full production achieved in years 1 and 2
const OM_RATE = 0.03;     // annual system O&M as a share of capex

function computeInvestment(i) {
  const crop = CROPS[i.crop], sys = SYSTEMS[i.system], src = SOURCES[i.source];
  const ha = i.unit === 'acres' ? i.area * 0.404686 : i.area;
  const price = crop.price * (1 + i.priceAdj / 100);

  const capex = ha * (sys.capex + src.capex);
  const revenueFull = ha * crop.yield * (1 + sys.boost) * price * i.seasons;
  const opexFull = ha * crop.cost * i.seasons + capex * OM_RATE;

  const flows = [-capex];
  const cumulative = [-capex];
  for (let y = 1; y <= i.years; y++) {
    const ramp = RAMP[y - 1] !== undefined ? RAMP[y - 1] : 1;
    const net = revenueFull * ramp - opexFull;
    flows.push(net);
    cumulative.push(cumulative[y - 1] + net);
  }

  const r = i.rate / 100;
  const npvAt = (rate) => flows.reduce((s, f, t) => s + f / Math.pow(1 + rate, t), 0);
  const npv = npvAt(r);

  let irr = null;
  let lo = -0.9, hi = 5;
  if (npvAt(lo) * npvAt(hi) < 0) {
    for (let k = 0; k < 100; k++) {
      const mid = (lo + hi) / 2;
      if (npvAt(lo) * npvAt(mid) <= 0) hi = mid; else lo = mid;
    }
    irr = (lo + hi) / 2;
  }

  let payback = null;
  for (let t = 1; t < cumulative.length; t++) {
    if (cumulative[t] >= 0) {
      payback = t - 1 + (-cumulative[t - 1]) / flows[t];
      break;
    }
  }

  return {
    ha, capex, revenueFull, opexFull,
    steadyNet: revenueFull - opexFull,
    flows, cumulative, npv, irr, payback
  };
}

if (typeof module !== 'undefined') module.exports = { computeInvestment, CROPS, SYSTEMS, SOURCES };