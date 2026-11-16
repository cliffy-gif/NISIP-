/* Shared sample data. Replace with validated official figures before publication. */
'use strict';
const SCHEMES = [
  {id:'mwea',name:'Mwea Irrigation Scheme',county:'Kirinyaga',type:'Public',status:'Operational',crops:['Rice','Maize'],potentialHa:30000,developedHa:26000,farmers:8000,lat:-0.65,lng:37.35,description:'A major rice-growing scheme in central Kenya.'},
  {id:'perkerra',name:'Perkerra Irrigation Scheme',county:'Baringo',type:'Public',status:'Operational',crops:['Maize','Seed crops'],potentialHa:25000,developedHa:2000,farmers:800,lat:0.47,lng:35.98,description:'Public irrigation scheme in the Kerio Valley.'},
  {id:'galana',name:'Galana-Kulalu',county:'Kilifi',type:'Public',status:'Under construction',crops:['Maize','Horticulture'],potentialHa:100000,developedHa:10000,farmers:1200,lat:-2.57,lng:39.45,description:'Large-scale irrigation development programme.'},
  {id:'lower-nzoia',name:'Lower Nzoia Irrigation',county:'Busia',type:'Public',status:'Under construction',crops:['Rice','Maize'],potentialHa:10000,developedHa:4000,farmers:5000,lat:0.12,lng:34.15,description:'Irrigation infrastructure supporting farmers in the lower Nzoia basin.'},
  {id:'marigat',name:'Marigat Smallholder Scheme',county:'Baringo',type:'Smallholder',status:'Rehabilitation',crops:['Onions','Tomatoes'],potentialHa:800,developedHa:350,farmers:420,lat:0.47,lng:36.02,description:'Community-managed smallholder irrigation scheme.'},
  {id:'atha',name:'Athi River Horticulture',county:'Machakos',type:'Private',status:'Planned',crops:['French beans','Tomatoes'],potentialHa:1200,developedHa:0,farmers:160,lat:-1.45,lng:37.0,description:'Illustrative planned private horticulture scheme.'}
];
const PROJECTS = [
  {id:'ndakaini',name:'Thwake Multipurpose Project',county:'Makueni',category:'Dam and irrigation',status:'Under construction',progress:62,budgetBn:82.0,areaHa:40000,start:2018,end:2027,lat:-1.85,lng:37.65},
  {id:'lower-nzoia-project',name:'Lower Nzoia Phase II',county:'Busia',category:'Canal infrastructure',status:'Under construction',progress:48,budgetBn:7.8,areaHa:10000,start:2020,end:2026,lat:0.12,lng:34.15},
  {id:'bura-rehab',name:'Bura Scheme Rehabilitation',county:'Tana River',category:'Rehabilitation',status:'Planned',progress:12,budgetBn:3.2,areaHa:6000,start:2024,end:2028,lat:-1.1,lng:39.9},
  {id:'galana-project',name:'Galana-Kulalu Development',county:'Kilifi',category:'Irrigation development',status:'Planned',progress:20,budgetBn:12.5,areaHa:100000,start:2023,end:2030,lat:-2.57,lng:39.45},
  {id:'mwea-expansion',name:'Mwea Irrigation Expansion',county:'Kirinyaga',category:'Scheme expansion',status:'Operational',progress:100,budgetBn:4.1,areaHa:10000,start:2016,end:2022,lat:-0.65,lng:37.35}
];
const CROPS = {
  maize:{label:'Maize',yield:6,price:44000,cost:90000}, rice:{label:'Rice (paddy)',yield:6,price:60000,cost:180000},
  tomatoes:{label:'Tomatoes',yield:30,price:25000,cost:600000}, onions:{label:'Onions',yield:15,price:35000,cost:380000},
  bananas:{label:'Bananas',yield:15,price:28000,cost:300000}, beans:{label:'French beans',yield:7,price:70000,cost:300000}
};
const SYSTEMS = {drip:{label:'Drip irrigation',capex:450000,boost:.20},sprinkler:{label:'Sprinkler irrigation',capex:330000,boost:.10},surface:{label:'Surface / furrow',capex:180000,boost:0}};
const SOURCES = {borehole:{label:'Borehole',capex:150000},river:{label:'River abstraction',capex:80000},dam:{label:'Dam / canal supply',capex:120000}};
