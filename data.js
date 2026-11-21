/*
 * SAMPLE DATA — illustrative only. Replace with official NISIP / State Department
 * for Irrigation figures. Every id must be unique across SCHEMES and PROJECTS
 * (the map merges both lists). lat/lng are decimal degrees.
 *
 * Scheme status:  Operational | Under construction | Rehabilitation | Planned
 * Scheme type:    Public | Smallholder | Private
 */
const SCHEMES = [
  { id: 's1', name: 'Mwea Irrigation Scheme', county: 'Kirinyaga', type: 'Public', status: 'Operational',
    crops: ['Rice'], source: 'River diversion', potentialHa: 12000, developedHa: 9500, farmers: 4200, lat: -0.70, lng: 37.35,
    description: 'Large public rice scheme fed by river intakes and gravity canals.' },
  { id: 's2', name: 'Ahero Irrigation Scheme', county: 'Kisumu', type: 'Public', status: 'Rehabilitation',
    crops: ['Rice'], source: 'River diversion', potentialHa: 1200, developedHa: 880, farmers: 700, lat: -0.17, lng: 34.92,
    description: 'Lakeside rice scheme undergoing canal and pump rehabilitation.' },
  { id: 's3', name: 'West Kano Irrigation Scheme', county: 'Kisumu', type: 'Public', status: 'Operational',
    crops: ['Rice', 'Maize'], source: 'River diversion', potentialHa: 3500, developedHa: 1000, farmers: 900, lat: -0.22, lng: 34.82,
    description: 'Plains scheme with scope for expansion of the irrigated area.' },
  { id: 's4', name: 'Bura Irrigation Scheme', county: 'Tana River', type: 'Public', status: 'Rehabilitation',
    crops: ['Maize', 'Cotton', 'Bananas'], source: 'River pumping', potentialHa: 6700, developedHa: 2100, farmers: 2000, lat: -1.10, lng: 39.95,
    description: 'Pump-fed scheme on the Tana River being brought back into production.' },
  { id: 's5', name: 'Hola Irrigation Scheme', county: 'Tana River', type: 'Public', status: 'Operational',
    crops: ['Maize', 'Bananas', 'Cotton'], source: 'River pumping', potentialHa: 1000, developedHa: 650, farmers: 800, lat: -1.50, lng: 40.03,
    description: 'Long-running scheme supplying smallholders along the Tana floodplain.' },
  { id: 's6', name: 'Perkerra Irrigation Scheme', county: 'Baringo', type: 'Public', status: 'Operational',
    crops: ['Onions', 'Maize', 'Watermelon'], source: 'River diversion', potentialHa: 2400, developedHa: 1000, farmers: 1100, lat: 0.47, lng: 35.99,
    description: 'Semi-arid scheme known for onions and fodder crops.' },
  { id: 's7', name: 'Yatta Canal Smallholder Scheme', county: 'Machakos', type: 'Smallholder', status: 'Operational',
    crops: ['Tomatoes', 'Maize', 'Beans'], source: 'Canal', potentialHa: 2500, developedHa: 1800, farmers: 3000, lat: -1.05, lng: 37.55,
    description: 'Farmer-managed plots served by a long gravity canal.' },
  { id: 's8', name: 'Kibwezi Horticulture Scheme', county: 'Makueni', type: 'Private', status: 'Operational',
    crops: ['Bananas', 'French beans', 'Mangoes'], source: 'Borehole', potentialHa: 1500, developedHa: 900, farmers: 120, lat: -2.40, lng: 37.97,
    description: 'Commercial horticulture estates using drip irrigation from boreholes.' },
  { id: 's9', name: 'Taveta Smallholder Scheme', county: 'Taita Taveta', type: 'Smallholder', status: 'Operational',
    crops: ['Bananas', 'Tomatoes', 'Onions'], source: 'Spring', potentialHa: 1800, developedHa: 1200, farmers: 1600, lat: -3.40, lng: 37.68,
    description: 'Spring-fed community scheme at the foot of Kilimanjaro.' },
  { id: 's10', name: 'Lower Nzoia Irrigation Scheme', county: 'Siaya', type: 'Public', status: 'Planned',
    crops: ['Rice', 'Maize'], source: 'River diversion', potentialHa: 5000, developedHa: 0, farmers: 0, lat: 0.15, lng: 34.35,
    description: 'Planned flood-plain scheme on the lower Nzoia River.' },
  { id: 's11', name: 'Katilu Irrigation Scheme', county: 'Turkana', type: 'Smallholder', status: 'Under construction',
    crops: ['Sorghum', 'Maize'], source: 'River diversion', potentialHa: 1100, developedHa: 400, farmers: 650, lat: 1.95, lng: 35.55,
    description: 'Community scheme being extended along the Kerio River.' }
];

/*
 * Project status: Under construction | Planned | Rehabilitation | Operational
 * start / end are years. budgetBn is KES billions.
 */
const PROJECTS = [
  { id: 'p1', name: 'Galana Kulalu Food Security Project', county: 'Tana River', category: 'Large-scale irrigation', status: 'Under construction',
    progress: 62, budgetBn: 14.5, areaHa: 10000, start: 2014, end: 2028, lat: -2.85, lng: 39.60,
    description: 'Large-scale irrigated farming development drawing water from the Galana River.' },
  { id: 'p2', name: 'Thwake Multipurpose Dam', county: 'Makueni', category: 'Dam', status: 'Under construction',
    progress: 78, budgetBn: 36.0, areaHa: 40000, start: 2018, end: 2027, lat: -1.60, lng: 37.85,
    description: 'Multipurpose dam for irrigation, hydropower and bulk water supply.' },
  { id: 'p3', name: 'Siyoi-Muruny Dam', county: 'West Pokot', category: 'Dam', status: 'Under construction',
    progress: 41, budgetBn: 7.8, areaHa: 3200, start: 2022, end: 2028, lat: 1.45, lng: 35.10,
    description: 'Dam and distribution network for smallholder irrigation in the north-west.' },
  { id: 'p4', name: 'Rahole Irrigation and Water Project', county: 'Garissa', category: 'Canal', status: 'Planned',
    progress: 0, budgetBn: 5.2, areaHa: 4000, start: 2027, end: 2030, lat: -0.30, lng: 39.75,
    description: 'Canal-based irrigation to support pastoral and agro-pastoral livelihoods.' },
  { id: 'p5', name: 'Bura Scheme Revitalisation', county: 'Tana River', category: 'Rehabilitation', status: 'Rehabilitation',
    progress: 35, budgetBn: 2.4, areaHa: 2100, start: 2024, end: 2027, lat: -1.20, lng: 39.85,
    description: 'Replacement of pumps and desilting of canals to restore full production.' },
  { id: 'p6', name: 'Ahero Scheme Rehabilitation', county: 'Kisumu', category: 'Rehabilitation', status: 'Rehabilitation',
    progress: 55, budgetBn: 1.1, areaHa: 880, start: 2024, end: 2026, lat: -0.12, lng: 34.98,
    description: 'Canal lining, drainage upgrades and new water control structures.' },
  { id: 'p7', name: 'Lower Nzoia Irrigation Development', county: 'Siaya', category: 'Large-scale irrigation', status: 'Planned',
    progress: 0, budgetBn: 6.5, areaHa: 5000, start: 2027, end: 2031, lat: 0.20, lng: 34.28,
    description: 'Flood protection and new irrigation infrastructure on the Nzoia flood plain.' },
  { id: 'p8', name: 'Kerio Valley Irrigation Expansion', county: 'Elgeyo-Marakwet', category: 'Canal', status: 'Planned',
    progress: 0, budgetBn: 3.0, areaHa: 2500, start: 2027, end: 2029, lat: 0.85, lng: 35.60,
    description: 'New intakes and canals to extend smallholder irrigation in the Kerio Valley.' }
];