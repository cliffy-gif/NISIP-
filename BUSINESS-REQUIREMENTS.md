# NISIP-MIS Business Requirements — corrected copy

**Status:** Corrected requirements baseline derived from the supplied “Revised Task4” BRS and project prototype.  
**System name:** National Irrigation Sector Investment Plan Management Information System (NISIP-MIS).

## 1. Purpose and institutional scope

NISIP-MIS is intended to improve transparency, project oversight, access to approved irrigation information, investment planning and evidence-based decisions. It supports a shared catalogue and controlled information workflows; it does not replace financial, HR or government source systems.

The source BRS alternates between the National Irrigation Authority (NIA) and the State Department for Irrigation as the owning/operating body. The process diagram and user interface identify the State Department, while the BRS title and mandate identify NIA. The institution must resolve system ownership, data-controller responsibilities, approvals and support boundaries before production. This document does not infer a legal or organizational resolution.

## 2. Objectives and measurable outcomes

| ID | Objective | Measure / qualification |
|---|---|---|
| BO-01 | Reduce reliance on manual acquisition and physical report requests | Measure online submissions and turnaround only after operational channels, baselines and service targets are agreed. |
| BO-02 | Improve access to approved sector reports | Establish a service-charter baseline and measure request-to-decision/delivery time. |
| BO-03 | Improve project oversight | Show the last approved update, reporting period, source, progress, dates and cost where verified; do not claim live telemetry. |
| BO-04 | Improve public access to scheme information | Track completeness and approval of the official catalogue; the current sample list is not a national register. |
| BO-05 | Support investment exploration | Provide clearly labeled scenarios and approved pathway information; no transfer, funding allocation or return guarantee. |
| BO-06 | Improve spatial visibility | Map approved geocoded scheme/project records; measure coverage after authoritative data is available. |

The source’s 100% coverage and “real-time” criteria are not accepted as current facts or commitments. They require a defined baseline, complete source data and an approved service owner.

## 3. Scope

### Intended capabilities

- Public scheme catalogue searchable by approved attributes such as type, county, water source and status.
- Project tracking with verified progress, dates, cost, implementing party and contractor only when sourced and approved.
- Interactive map for approved geospatial scheme/project records.
- Report request, acknowledgement/reference, staff review and controlled report delivery.
- Indicative investment calculator with dated, sourced assumptions and an optional separately governed enquiry process.
- Role-based staff access for assigned data entry, review, administration and read-only decision support.
- News and updates as a planned content-management capability; it is not present in the supplied prototype.

### Excluded from this system boundary

- Payments, investor fund transfers or allocation of capital.
- Automated IoT/sensor telemetry or claims of live field status.
- IFMIS, accounting, budgeting, payroll and HR functions.
- Automatic data sharing with eCitizen, the National Treasury, counties, Auditor-General or other bodies without approved interfaces and agreements.

## 4. Stakeholders and access model

| Stakeholder | Intended access |
|---|---|
| Public / citizens | Approved public scheme and project information, map, report request and scenario calculator. |
| Investors and development partners | Approved investment-pathway information, calculator and report/enquiry process. |
| Field/project officers | Create or update only assigned records; submission and review history retained. |
| Review and M&E personnel | Validate, return and approve designated updates; access according to assignment. |
| Leadership | Read-only, authorized dashboards and reports. |
| County, ministry and audit stakeholders | Approved reports or coordinated access as authorized; no assumed direct integration. |
| System administrator | Manage accounts, roles and configuration; administrative changes audited. |

The organization responsible for each role and record must be decided by the institutional owner. Administrative privileges do not automatically grant approval authority over business records.

## 5. Functional requirements

Priorities below retain the original BRS’s “High/Medium” intent; they do not imply that functions already exist.

| IDs | Corrected requirement |
|---|---|
| FR-001–007 User management | Staff and any approved user accounts are provisioned through an approved identity workflow; role-based permissions govern access. Administrators manage roles; officers may edit only assigned schemes/projects; leadership access is read-only unless explicitly authorized. Public browsing must not require a staff account. Email registration/activation is conditional on an approved external-user account policy. |
| FR-008–012 Scheme registry | Provide searchable, filterable scheme records and approved details. Authorized officers may create/update assigned scheme records; changes carry source, actor, timestamp, review state and history. “All national schemes” is a target requiring authoritative completeness verification. |
| FR-013–017 Project tracking | Display approved project records and filter/sort by supported fields. Show progress, start/end dates, cost, implementing agency and contractor only when verified. Report the latest update date and status; do not imply sensor-driven or real-time tracking. |
| FR-018–023 Report requests | Capture requester, request type/purpose and contact; issue a unique reference; enable authorized staff review; record decision/status; deliver approved documents through a controlled channel; notify the requester only through a configured service. |
| FR-024–028 Investment | Offer transparent scenario calculations and approved pathways. Capture investor enquiries only with a defined lawful purpose and secure follow-up workflow. The calculator does not execute payments or financial transactions. |
| FR-029–032 Interactive map | Display approved scheme/project locations with visually distinct layers and filters by available type, status and county. Missing or imprecise coordinates must not be represented as exact. |
| FR-033–034 News and updates | If retained in scope, authorized editors can publish/update public content with review and publication history. This capability is not implemented in the current demonstration and may be staged separately. |

## 6. Non-functional requirements and status

| IDs | Corrected requirement | Status |
|---|---|---|
| NFR-001–003 | Set and load-test concurrency, search/map latency and report-processing objectives; the supplied 5,000-user / 3-second / 5-second values are proposed, not verified. | Proposed targets |
| NFR-004–009 | Enforce role checks, secure transport, lawful personal-data handling, backup/recovery and access restrictions. ISO/IEC 27001 alignment is an organizational program; no certification is claimed. | Required design controls; implementation pending |
| NFR-010–012 | Provide accessible, understandable interfaces and usable forms. Training under 30 minutes is a proposed outcome to test. “Terms & Conditions” and search affordances are functional UI checks, not stand-alone architecture requirements. | Required / proposed measure |
| NFR-013–015 | Define and measure availability, maintenance notice and hosting. 99.5% is proposed. The original BRS specified government hosting; Render is now selected for the current static project site, which changes that original requirement and requires approval if binding. | Hosting decision / proposed SLO |
| NFR-016–017 | Record actor/time and applicable location/provenance; validate submitted data and preserve change history. | Required design controls |
| NFR-018–019 | Design for measured growth and modular additions; “2x current capacity” requires a baseline. | Proposed target |
| NFR-020–022 | Maintain technical/system documentation and provide user/ICT training per the approved rollout plan. | Required |

## 7. Current-state and prototype boundary

The BRS describes prior manual, decentralized information acquisition and report requests; this is a source-document account, not independently measured process evidence. The supplied folder is a static front-end prototype. Its 11 sample schemes and 8 sample projects, coordinates, budgets, and investment assumptions are illustrative. It has no database, API, real authentication, staff workflow, server-side reports, notification service, official scheme register or audit system. The report form only previews; the sign-in page must not simulate authentication.

## 8. Acceptance and governance

Before production acceptance, the institutional owner should approve: authoritative data sources and update cadence; system owner/data-controller and role matrix; data classifications, lawful purposes and retention; report disclosure/appeal workflow; interface owners and agreements; government hosting; load/availability objectives; security, backup and recovery tests; and operational support/incident procedures.

## 9. External systems

The original BRS specified Konza / government infrastructure. Render is selected for the current static project site; confirm approval if the government-hosting requirement is mandatory. Ministry, Treasury, counties, Auditor-General and development partners are stakeholders, not confirmed integrated services. eCitizen is described as potential/planned. IFMIS remains outside scope. Do not describe any of these as connected until an interface, authorization, agreement and test evidence exist.

