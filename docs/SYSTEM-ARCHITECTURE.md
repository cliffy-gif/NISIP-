# NISIP-MIS System Architecture — corrected copy

**Status:** Revised high-level architecture; production design remains subject to institutional approval.  
**System name:** National Irrigation Sector Investment Plan Management Information System (NISIP-MIS).

## 1. Goal and architecture principle

The system supports irrigation planning, project oversight and public information by combining field/project updates with governed scheme, water-resource, financial and M&E information. It turns approved records into maps, reports and dashboards for authorized users.

Business processes determine application capabilities; application services validate and route information; governed data supports decisions; technology hosts and protects the services. Security, auditability, data protection, backup and monitoring cross all layers.

## 2. Logical architecture

| Layer | Components and responsibilities |
|---|---|
| People and business | Public users, investors, partners, field/project officers, reviewers, M&E staff, administrators and leadership; planning, submission, review, report release and decision-making processes. |
| Presentation and applications | Public scheme catalogue, project pipeline, map, investment scenario calculator and report request; restricted staff workspace for entry, review and administration. |
| Application services | Authentication and authorization, input validation, workflow/routing, reference generation, audit/event capture, reporting and API boundary. |
| Information | Scheme registry, project register, water resources, performance/M&E, financial/governance records, users/roles and report-request metadata. Source, update time, status, provenance and disclosure classification accompany applicable records. |
| Technology | Browser clients, HTTPS network, application hosting, persistent relational data service, protected file storage, backups, monitoring and messaging integrations. Concrete production products and sizing are to be selected by the approved service owner. |

The supplied context and DFD diagrams support this layered view. The DFD’s project, financial and scheme-performance stores are represented as logical record domains; they are not evidence of three deployed databases.

## 3. Interfaces and data exchange

| Interface | Intended exchange | Current status |
|---|---|---|
| Browser ↔ public services | HTTPS reads for approved catalogues, projects, map features and calculator content | Demonstrated with local illustrative JavaScript data; no API. |
| Browser ↔ staff services | HTTPS authenticated submissions, review actions and restricted reads | Proposed; authentication and staff workspace are not implemented. |
| Application ↔ data service | Validated CRUD transactions, audit events and reporting queries | Proposed; no persistent database in the demonstration. |
| Reporting ↔ stakeholders | Approved dashboards, report extracts or controlled documents | Process described; no government sharing endpoint configured. |
| Application ↔ email provider | Acknowledgement and report-status notices | Proposed; no provider or delivery integration configured. |
| Application ↔ eCitizen / agency systems | Optional identity or approved data exchange | Future consideration only; not confirmed or implemented. |
| Map ↔ tile service | Tile requests and attribution to render the interactive basemap | Demonstration depends on third-party internet services; not a government data integration. |

For production, define versioned same-origin APIs, structured error responses, request IDs, schema validation, authorization at the service boundary and explicit data-sharing agreements. Use HTTPS/TLS and protect credentials in the host’s secret manager. Do not treat a stakeholder relationship as proof that an API exists.

## 4. Security, reliability and performance

The target design requires role-based access, least privilege, secure authentication, encrypted transport, data minimization, input validation, audit trails, approved retention, encrypted backups and tested restoration. Security controls must cover browser, application, database, file and integration layers. Data Protection Act obligations require institutional governance and lawful processing; architecture alone cannot certify compliance. ISO/IEC 27001 is an organizational information-security management standard, not a feature the prototype can claim to satisfy.

Proposed targets from the BRS—5,000 concurrent users, search/map under three seconds, report requests under five seconds, 99.5% availability and daily backups—are unverified acceptance targets, not current service levels. Define service ownership, alerting, health checks, dashboards, logs, recovery objectives, load tests and incident response before production.

## 5. Hosting and deployment decision

Render is the selected ongoing host for the current static project site. The supplied BRS originally names Konza Technopolis / government infrastructure as the production hosting requirement; choosing Render changes that requirement and should be approved if it is binding. The app has no backend, staff authentication or persistent database and must not hold sensitive or authoritative production data.

An operational information system needs an institutionally approved hosting environment, persistent database and file storage, identity provider, secrets management, backup/recovery, operational monitoring and approved integrations. The folder includes a container/nginx package if Konza/government hosting is required later. No Konza endpoint, registry credentials, Render connection or production data were supplied; the site has not been published.

## 6. Implemented demonstration versus target design

| Capability | Folder demonstration | Target NISIP-MIS |
|---|---|---|
| Scheme and project views | Static sample records and client-side filtering | Authoritative, reviewed records with provenance and access rules |
| Map | Leaflet and third-party tiles; sample coordinates | Approved geospatial records and managed map-service policy |
| Investment calculator | Illustrative assumptions and local calculation | Approved, sourced assumptions with governance and clear disclaimers |
| Report requests | Browser-only preview; no send or persistence | Reference, staff review, controlled release and configured notification |
| Sign-in / roles | Not connected; no account or session is created | Approved identity provider, RBAC and audit |
| Reports and dashboards | No server-side reporting | Governed queries, access-controlled outputs and monitoring |
| External agency services | None | Each integration approved and separately specified |

## 7. Source corrections carried forward

The supplied materials inconsistently name NIA and the State Department for Irrigation as system owner/operator; confirm accountable ownership before assigning roles. “Real-time” progress is replaced by “latest officer-submitted/approved update” because automated sensors are explicitly out of scope. eCitizen, Treasury, county, Auditor-General and ministry relationships are not described as live APIs. Proposed performance figures remain targets until measured.

