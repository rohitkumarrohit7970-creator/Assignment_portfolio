import React, { useState } from 'react';
import { 
  Trophy, 
  TrendingUp, 
  Target, 
  AlertCircle, 
  ChevronDown, 
  ChevronUp, 
  Briefcase, 
  Calendar, 
  User, 
  FileText,
  CheckCircle2,
  Clock,
  ArrowRight,
  PieChart,
  BookOpen,
  Settings,
  Users
} from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// FULL DATA FROM mock-portfolio-data.json
const portfolioData = {
  "portfolioId": "PF-2026-03-00512",
  "uid": "PDGMS-EMP-00512",
  "monthId": "2026-03",
  "orgId": "ORG-VAYURA-001",
  "period": {
    "from": "2026-03-01",
    "to": "2026-03-31"
  },
  "generatedAt": "2026-04-02T09:14:22.000Z",
  "employee": {
    "name": "Rajan Iyer",
    "role": "Production Planning Lead — Sterile Injectables",
    "program": "Facility 3 Commercialization",
    "organization": "Vayura Lifesciences",
    "joinedAt": "2024-08-01",
    "tenureMonths": 19,
    "avatarUrl": null
  },
  "sections": [
    {
      "type": "executive_summary",
      "data": {
        "compositeScore": 71,
        "weekId": "2026-W13",
        "paceStatus": "ahead",
        "currentLevel": "V2",
        "previousMonthScore": 64
      },
      "narrative": "Rajan had his strongest month since joining — composite score jumped from 64 to 71, driven by a breakthrough in Facility 3 batch validation. He closed 16 of 20 assigned deliverables, including the process validation protocol for the lyophilized injectable line that had been stuck in regulatory review since December. Framework application remains his gap area (52, below the 60 threshold), but his delivery and IP scores now exceed V3 requirements. He's tracking ahead of plan for V3 eligibility."
    },
    {
      "type": "contribution_highlights",
      "data": {
        "ipCommitCount": 7,
        "recentCommits": [
          { "id": 1847, "description": "Process validation protocol — lyophilized injectable line (3 product families, 12 SKUs)", "createdAt": "2026-03-05T10:30:00.000Z" },
          { "id": 1862, "description": "Batch record template — sterile fill-finish operations with in-process control checkpoints", "createdAt": "2026-03-09T14:15:00.000Z" },
          { "id": 1879, "description": "Deviation investigation SOP — root cause analysis workflow for OOS results in sterile manufacturing", "createdAt": "2026-03-14T11:45:00.000Z" },
          { "id": 1893, "description": "Equipment qualification matrix — IQ/OQ/PQ status tracker for 14 critical equipment items in Facility 3", "createdAt": "2026-03-18T09:20:00.000Z" },
          { "id": 1905, "description": "Environmental monitoring trend analysis — 6-month particulate and viable data for Grade A/B cleanrooms", "createdAt": "2026-03-22T16:00:00.000Z" },
          { "id": 1918, "description": "Vendor qualification checklist — raw material and primary packaging supplier audit framework", "createdAt": "2026-03-26T13:30:00.000Z" },
          { "id": 1924, "description": "Yield optimization report — identified 8% fill-weight variance in vial line 2, proposed nozzle recalibration", "createdAt": "2026-03-29T10:10:00.000Z" }
        ],
        "totalDeliverables": 20,
        "completed": 16,
        "inProgress": 2,
        "pendingQa": 1,
        "notStarted": 1
      },
      "narrative": "Rajan shipped 16 of 20 deliverables — his highest completion rate since the Facility 3 program launched. The process validation protocol was the critical win: it had been cycling between regulatory affairs and QA since December, and Rajan broke the logjam by organizing a joint review session with both teams instead of sequential sign-offs. He created 7 original work items this month, including the deviation investigation SOP that the Head of Quality has now mandated as the standard across all three manufacturing facilities."
    },
    {
      "type": "capability_growth",
      "data": {
        "deliveryRate": 80,
        "ipScore": 74,
        "kpiScore": 68,
        "frameworkScore": 52,
        "processScore": 58,
        "ritualScore": 85
      },
      "narrative": "Delivery (80) and engagement (85) are Rajan's strongest areas — he ships consistently and participates in every organizational ritual. Original work (74) has been climbing steadily since he started creating reusable SOPs and templates that other teams adopt. The gap is in framework application (52, below the 60 threshold) and process adoption (58). Rajan tends to solve production problems through direct technical troubleshooting rather than applying structured diagnostic frameworks — effective for immediate fixes, but it means root causes sometimes recur. This is the main growth area for V3 readiness."
    },
    {
      "type": "kpi_impact",
      "data": {
        "totalKpiCommits": 5,
        "verifiedCount": 3,
        "details": [
          { "kpiId": "KPI-F3C-001", "label": "Batch Success Rate", "unit": "percent", "target": 92, "actual": 88, "status": "miss", "verified": true },
          { "kpiId": "KPI-F3C-002", "label": "Equipment Qualifications Completed", "unit": "items", "target": 8, "actual": 10, "status": "hit", "verified": true },
          { "kpiId": "KPI-F3C-003", "label": "SOPs Drafted and Approved", "unit": "documents", "target": 5, "actual": 7, "status": "hit", "verified": true },
          { "kpiId": "KPI-F3C-004", "label": "Deviation Closure Rate", "unit": "percent", "target": 90, "actual": 78, "status": "miss", "verified": false },
          { "kpiId": "KPI-F3C-005", "label": "Operator Training Batches Completed", "unit": "batches", "target": 4, "actual": 4, "status": "hit", "verified": false }
        ]
      },
      "narrative": "Hit 3 of 5 KPI targets. Equipment qualifications (10 vs 8 target) and SOP approvals (7 vs 5) both overperformed — Rajan front-loaded qualification work to clear the path for commercial batches in Q2. Batch success rate came in at 88% vs 92% target — two batches failed due to a particulate excursion in Cleanroom 3B that took 11 days to investigate and resolve (environmental monitoring identified a failing HEPA filter). Deviation closure rate (78% vs 90%) was the biggest miss: 4 deviations from January are still open pending root cause confirmation from the contract testing lab."
    },
    {
      "type": "constraint_patterns",
      "data": {
        "totalConstraints": 8,
        "resolved": 5,
        "byType": { "budget": 1, "talent": 1, "internal_support": 2, "assumptions": 2, "permissions": 2, "unspecified": 0 },
        "topConstraints": [
          { "ticketId": "CST-0421", "label": "HEPA filter replacement for Cleanroom 3B delayed — vendor lead time 6 weeks, 2 batches failed during wait", "type": "assumptions", "status": "resolved", "resolvedAt": "2026-03-19T00:00:00.000Z" },
          { "ticketId": "CST-0428", "label": "Contract testing lab turnaround on deviation root cause — 4 open deviations waiting 18+ days for results", "type": "internal_support", "status": "open" },
          { "ticketId": "CST-0433", "label": "Regulatory affairs sequential review cycle adding 3 weeks to every protocol approval", "type": "permissions", "status": "resolved", "resolvedAt": "2026-03-05T00:00:00.000Z" },
          { "ticketId": "CST-0439", "label": "Second shift supervisor vacancy — production planning limited to single shift since February", "type": "talent", "status": "open" },
          { "ticketId": "CST-0445", "label": "Assumed Facility 3 compressed air system was qualified — discovered DQ/IQ incomplete during batch review", "type": "assumptions", "status": "resolved", "resolvedAt": "2026-03-24T00:00:00.000Z" }
        ]
      },
      "narrative": "8 constraints raised, 5 resolved. Two patterns dominate: external dependencies (contract lab turnaround, vendor lead times) and approval bottlenecks (regulatory review cycles). The HEPA filter delay was the costliest — 2 failed batches and 11 days of investigation before the root cause was confirmed, all because replacement filters had a 6-week lead time and no safety stock. Rajan resolved the regulatory review bottleneck by switching from sequential to joint review sessions — a process improvement that now saves 3 weeks per protocol. The second shift supervisor vacancy is the most persistent constraint: single-shift operation since February is capping production throughput at 60% of Facility 3 capacity."
    },
    {
      "type": "career_trajectory",
      "data": {
        "ladderId": "LADDER-MFG-001",
        "milestones": [
          { "level": "V1", "targetDate": "2024-08-01" },
          { "level": "V2", "targetDate": "2025-11-01" },
          { "level": "V3", "targetDate": "2027-05-01" },
          { "level": "V4", "targetDate": "2030-08-01" },
          { "level": "V5", "targetDate": "2036-08-01" }
        ],
        "projectedNextLevel": "V3",
        "projectedDate": "2027-02-15",
        "currentLevel": "V2",
        "paceStatus": "ahead",
        "monthsAtCurrentLevel": 5,
        "gapDrivers": [
          "Framework application score (52) below V3 threshold (60)",
          "Process adoption score (58) below V3 threshold (60)"
        ]
      },
      "narrative": "Rajan is tracking ahead of plan for V3 (Program Lead) — projected February 2027, nearly 3 months ahead of the planned May 2027 target. His delivery and IP scores already exceed V3 thresholds, which is unusual for someone 5 months into V2. The gap is capability: framework application (52) and process adoption (58) both below the 60 minimum. If he consciously applies and documents structured frameworks in his daily work over the next 3-4 months — rather than defaulting to ad-hoc technical problem-solving — he'll be eligible well ahead of schedule."
    }
  ],
  "monthlyReportEnrichment": {
    "deliverableDetail": [
      { "ticketId": "TKT-3001", "label": "Process validation protocol — lyophilized injectable line", "ticketType": "deliverable", "status": "delivered", "estimatedMinutes": 960, "actualMinutes": 1200 },
      { "ticketId": "TKT-3002", "label": "Batch record template — sterile fill-finish", "ticketType": "deliverable", "status": "delivered", "estimatedMinutes": 480, "actualMinutes": 420 },
      { "ticketId": "TKT-3003", "label": "Deviation investigation SOP", "ticketType": "deliverable", "status": "delivered", "estimatedMinutes": 360, "actualMinutes": 380 },
      { "ticketId": "TKT-3004", "label": "Equipment qualification matrix — 14 items", "ticketType": "deliverable", "status": "delivered", "estimatedMinutes": 600, "actualMinutes": 540 },
      { "ticketId": "TKT-3005", "label": "IQ/OQ execution — autoclave unit 3", "ticketType": "deliverable", "status": "delivered", "estimatedMinutes": 480, "actualMinutes": 510 },
      { "ticketId": "TKT-3006", "label": "IQ/OQ execution — vial washing machine", "ticketType": "deliverable", "status": "delivered", "estimatedMinutes": 480, "actualMinutes": 440 },
      { "ticketId": "TKT-3007", "label": "PQ execution — lyophilizer cycle development", "ticketType": "deliverable", "status": "delivered", "estimatedMinutes": 720, "actualMinutes": 780 },
      { "ticketId": "TKT-3008", "label": "Environmental monitoring trend analysis — 6 months", "ticketType": "deliverable", "status": "delivered", "estimatedMinutes": 360, "actualMinutes": 300 },
      { "ticketId": "TKT-3009", "label": "Cleanroom 3B particulate excursion investigation", "ticketType": "deliverable", "status": "delivered", "estimatedMinutes": 240, "actualMinutes": 480 },
      { "ticketId": "TKT-3010", "label": "Vendor qualification checklist — raw materials", "ticketType": "deliverable", "status": "delivered", "estimatedMinutes": 300, "actualMinutes": 270 },
      { "ticketId": "TKT-3011", "label": "Vendor qualification checklist — primary packaging", "ticketType": "deliverable", "status": "delivered", "estimatedMinutes": 300, "actualMinutes": 260 },
      { "ticketId": "TKT-3012", "label": "Yield optimization report — vial line 2", "ticketType": "deliverable", "status": "delivered", "estimatedMinutes": 240, "actualMinutes": 210 },
      { "ticketId": "TKT-3013", "label": "Operator training batch 1 — aseptic filling", "ticketType": "deliverable", "status": "delivered", "estimatedMinutes": 360, "actualMinutes": 380 },
      { "ticketId": "TKT-3014", "label": "Operator training batch 2 — lyophilization loading", "ticketType": "deliverable", "status": "delivered", "estimatedMinutes": 360, "actualMinutes": 350 },
      { "ticketId": "TKT-3015", "label": "Operator training batch 3 — CIP/SIP procedures", "ticketType": "deliverable", "status": "delivered", "estimatedMinutes": 360, "actualMinutes": 340 },
      { "ticketId": "TKT-3016", "label": "Operator training batch 4 — environmental monitoring sampling", "ticketType": "deliverable", "status": "delivered", "estimatedMinutes": 360, "actualMinutes": 370 },
      { "ticketId": "TKT-3017", "label": "Compressed air system DQ/IQ completion", "ticketType": "deliverable", "status": "pending_qa", "estimatedMinutes": 480, "actualMinutes": 520 },
      { "ticketId": "TKT-3018", "label": "Media fill protocol — 3 production lines", "ticketType": "deliverable", "status": "in_progress", "estimatedMinutes": 720, "actualMinutes": null },
      { "ticketId": "TKT-3019", "label": "Stability study protocol — first 3 commercial SKUs", "ticketType": "deliverable", "status": "in_progress", "estimatedMinutes": 600, "actualMinutes": null },
      { "ticketId": "TKT-3020", "label": "Facility 3 commercial readiness assessment for Q2 review", "ticketType": "deliverable", "status": "not_started", "estimatedMinutes": 960, "actualMinutes": null }
    ],
    "capabilityDetail": {
      "frameworks": [
        { "labelId": "FW-001", "label": "First Principles Thinking", "quantity": 3, "description": "Applied during HEPA filter investigation — decomposed cleanroom particulate data to isolate the failing filter before vendor confirmed" },
        { "labelId": "FW-003", "label": "PDCA Cycle", "quantity": 2, "description": "Used in operator training iteration — Plan (session design) → Do (batch 1) → Check (competency assessment) → Act (adjust practical-to-theory ratio for batch 2)" },
        { "labelId": "FW-012", "label": "5 Why Analysis", "quantity": 1, "description": "Applied to vial line 2 fill-weight variance — traced 8% variance to nozzle wear pattern, not operator technique as initially assumed" }
      ],
      "processes": [
        { "labelId": "PR-001", "label": "Daily Plan Submission", "quantity": 21, "description": "Submitted 21 of 23 working days" },
        { "labelId": "PR-003", "label": "Ticket Lifecycle Update", "quantity": 16, "description": "Updated ticket status same-day for 16 of 16 completed deliverables" },
        { "labelId": "PR-005", "label": "Weekly Report Submission", "quantity": 4, "description": "All 4 weekly reports submitted on time" },
        { "labelId": "PR-008", "label": "Change Control Documentation", "quantity": 3, "description": "Raised 3 change controls for equipment modifications — all with impact assessment completed before implementation" }
      ],
      "rituals": [
        { "labelId": "RT-001", "label": "Daily Standup", "attended": 22, "total": 23 },
        { "labelId": "RT-002", "label": "Weekly Review", "attended": 4, "total": 4 },
        { "labelId": "RT-003", "label": "Monthly Retrospective", "attended": 1, "total": 1 },
        { "labelId": "RT-004", "label": "LDI Session", "attended": 2, "total": 2 },
        { "labelId": "RT-005", "label": "Batch Review Meeting", "attended": 8, "total": 9 }
      ]
    },
    "timeDistribution": {
      "operational": 48,
      "research": 14,
      "deepWork": 32,
      "coordination": 24,
      "meetings": 18,
      "planning": 12
    }
  }
};

const SectionHeader = ({ icon: Icon, title, narrative }) => (
  <div className="mb-10">
    <div className="flex items-center gap-3 mb-6">
      <div className="p-2.5 bg-indigo-50 rounded-xl">
        <Icon className="w-7 h-7 text-indigo-600" />
      </div>
      <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">{title}</h2>
    </div>
    <div className="bg-white border-l-4 border-indigo-500 p-8 rounded-r-2xl shadow-sm italic text-xl text-slate-700 leading-relaxed font-serif">
      "{narrative}"
    </div>
  </div>
);

const StatCard = ({ label, value, subValue, trend, color = "indigo" }) => {
  const colors = {
    indigo: "text-indigo-600 bg-indigo-50/50 border-indigo-100",
    green: "text-emerald-600 bg-emerald-50/50 border-emerald-100",
    amber: "text-amber-600 bg-amber-50/50 border-amber-100",
    rose: "text-rose-600 bg-rose-50/50 border-rose-100",
  };

  return (
    <div className={cn("p-8 rounded-3xl border transition-all hover:shadow-lg hover:-translate-y-1", colors[color])}>
      <div className="text-xs font-bold uppercase tracking-[0.2em] opacity-60 mb-2">{label}</div>
      <div className="text-5xl font-black mb-2 tabular-nums">{value}</div>
      {subValue && <div className="text-sm font-semibold opacity-80">{subValue}</div>}
      {trend && (
        <div className="mt-4 flex items-center gap-1.5 text-xs font-black uppercase tracking-wider">
          <TrendingUp className="w-4 h-4" />
          {trend}
        </div>
      )}
    </div>
  );
};

const DisclosureCard = ({ title, items, icon: Icon }) => (
  <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
    <div className="flex items-center gap-2 mb-6">
      <Icon className="w-5 h-5 text-slate-400" />
      <h3 className="text-sm uppercase font-black tracking-widest text-slate-400">{title}</h3>
    </div>
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div key={idx} className="group p-5 bg-slate-50 border border-slate-100 rounded-2xl hover:border-indigo-200 hover:bg-white transition-all">
          <div className="flex items-start gap-4">
            <CheckCircle2 className="w-6 h-6 text-emerald-500 mt-0.5 shrink-0" />
            <div>
              <div className="text-slate-800 font-bold text-lg mb-1">{item.label || item.description}</div>
              {item.description && item.label && <div className="text-slate-500 text-sm leading-relaxed">{item.description}</div>}
              {item.quantity && <div className="mt-2 text-xs font-black text-indigo-500 uppercase tracking-widest">{item.quantity} Occurrences</div>}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function App() {
  const getSection = (type) => portfolioData.sections.find(s => s.type === type);

  const execSummary = getSection('executive_summary');
  const contribution = getSection('contribution_highlights');
  const capability = getSection('capability_growth');
  const kpis = getSection('kpi_impact');
  const constraints = getSection('constraint_patterns');
  const trajectory = getSection('career_trajectory');

  const enrichment = portfolioData.monthlyReportEnrichment;

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 pb-32 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Identity Bar */}
      <header className="bg-white/80 backdrop-blur-md border-b sticky top-0 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-8 h-24 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="relative">
              <div className="w-14 h-14 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg rotate-3">
                {portfolioData.employee.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full" />
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900 tracking-tight">{portfolioData.employee.name}</h1>
              <p className="text-sm text-slate-500 font-bold flex items-center gap-2">
                {portfolioData.employee.role} 
                <span className="text-slate-300">•</span>
                {portfolioData.employee.program}
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <div className="text-right">
              <div className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 mb-1">Current Period</div>
              <div className="text-sm font-black text-slate-800">March 2026</div>
            </div>
            <div className="w-px h-10 bg-slate-200" />
            <div className="text-right">
              <div className="text-[10px] uppercase font-black tracking-[0.2em] text-slate-400 mb-1">Portfolio UID</div>
              <div className="text-sm font-mono font-bold text-indigo-600">{portfolioData.uid}</div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-8 pt-16">
        {/* Signal Section */}
        <section className="mb-24 text-center">
          <div className="inline-block px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-8">
            Monthly Performance Verdict
          </div>
          <h2 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight max-w-4xl mx-auto leading-[1.1]">
            Strong delivery month — Rajan is <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">tracking ahead</span> for V3.
          </h2>
          <p className="text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            A breakthrough in Facility 3 validation drove your score from 64 to 71.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <StatCard 
              label="Composite Impact" 
              value={execSummary.data.compositeScore}
              subValue={`+${execSummary.data.compositeScore - execSummary.data.previousMonthScore} points increase`}
              trend="Velocity: High"
            />
            <StatCard 
              label="Promotion Pace" 
              value={execSummary.data.paceStatus.toUpperCase()}
              subValue="Projected Feb 2027"
              color="green"
            />
            <StatCard 
              label="Current Level" 
              value={execSummary.data.currentLevel}
              subValue="Senior/Manager Scope"
              color="amber"
            />
          </div>
        </section>

        {/* Section 2: Contribution */}
        <section className="mb-24">
          <SectionHeader 
            icon={Trophy} 
            title="Contribution Highlights" 
            narrative={contribution.narrative} 
          />
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <DisclosureCard 
                icon={Briefcase}
                title="Recent Original Work Commits"
                items={contribution.data.recentCommits}
              />
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-6">
                  <Clock className="w-5 h-5 text-slate-400" />
                  <h3 className="text-sm uppercase font-black tracking-widest text-slate-400">Time Allocation</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {Object.entries(enrichment.timeDistribution).map(([key, value]) => (
                    <div key={key} className="p-4 bg-slate-50 rounded-2xl">
                      <div className="text-2xl font-black text-slate-800 mb-1">{value}h</div>
                      <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">{key}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="p-8 bg-indigo-600 rounded-3xl text-white shadow-xl shadow-indigo-100">
                <div className="text-xs font-black uppercase tracking-[0.2em] opacity-70 mb-4">Verified Delivery</div>
                <div className="text-6xl font-black mb-2">{contribution.data.completed}</div>
                <div className="text-lg font-bold opacity-90 mb-6">Units Shipped</div>
                <div className="space-y-3 opacity-80 text-sm">
                  <div className="flex justify-between">
                    <span>Target Assigned</span>
                    <span className="font-bold">{contribution.data.totalDeliverables}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Awaiting Review</span>
                    <span className="font-bold">{contribution.data.pendingQa}</span>
                  </div>
                  <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
                    <div className="h-full bg-white w-[80%]" />
                  </div>
                </div>
              </div>
              <div className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm">
                <div className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-4">KPI Impact</div>
                <div className="text-4xl font-black text-slate-900 mb-2">{kpis.data.verifiedCount}/{kpis.data.totalKpiCommits}</div>
                <div className="text-sm font-bold text-slate-500 mb-6">Targets Met & Verified</div>
                <div className="space-y-4">
                  {kpis.data.details.map((kpi, idx) => (
                    <div key={idx} className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-600 truncate mr-2">{kpi.label}</span>
                      <span className={cn(
                        "font-black uppercase tracking-widest",
                        kpi.status === 'hit' ? 'text-emerald-500' : 'text-rose-400'
                      )}>{kpi.actual}/{kpi.target}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Capability */}
        <section className="mb-24">
          <SectionHeader 
            icon={TrendingUp} 
            title="Capability Growth" 
            narrative={capability.narrative} 
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <DisclosureCard 
              icon={BookOpen}
              title="Applied Frameworks"
              items={enrichment.capabilityDetail.frameworks}
            />
            <div className="space-y-8">
              <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
                <div className="flex items-center gap-2 mb-8">
                  <Target className="w-5 h-5 text-slate-400" />
                  <h3 className="text-sm uppercase font-black tracking-widest text-slate-400">Measurement Axes</h3>
                </div>
                <div className="space-y-10">
                  {[
                    { label: "Delivery Performance", score: capability.data.deliveryRate, status: 'ahead' },
                    { label: "Knowledge Creation", score: capability.data.ipScore, status: 'ahead' },
                    { label: "Organizational Rituals", score: capability.data.ritualScore, status: 'ahead' },
                    { label: "Framework Mastery", score: capability.data.frameworkScore, status: 'behind' },
                    { label: "Process Adoption", score: capability.data.processScore, status: 'behind' },
                  ].map((axis, idx) => (
                    <div key={idx} className="relative">
                      <div className="flex justify-between items-end mb-3">
                        <span className="text-sm font-black text-slate-800 uppercase tracking-wider">{axis.label}</span>
                        <span className={cn("text-2xl font-black", axis.status === 'behind' ? 'text-rose-500' : 'text-indigo-600')}>
                          {axis.score}%
                        </span>
                      </div>
                      <div className="h-4 bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={cn(
                            "h-full rounded-full transition-all duration-1000",
                            axis.status === 'behind' ? 'bg-rose-400' : 'bg-indigo-500'
                          )}
                          style={{ width: `${axis.score}%` }}
                        />
                      </div>
                      <div className="absolute left-[60%] top-8 w-px h-10 bg-slate-200 -translate-y-full" />
                      <div className="absolute left-[60%] top-[2.5rem] text-[9px] font-black text-slate-400 uppercase tracking-widest -translate-x-1/2">
                        V3 Threshold
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Constraints */}
        <section className="mb-24">
          <SectionHeader 
            icon={AlertCircle} 
            title="Obstacles & Constraints" 
            narrative={constraints.narrative} 
          />
          <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              <div className="lg:col-span-1 space-y-6">
                <div className="p-8 bg-slate-50 rounded-2xl text-center">
                  <div className="text-5xl font-black text-slate-900 mb-2">{constraints.data.totalConstraints}</div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest">Identified</div>
                </div>
                <div className="p-8 bg-emerald-50 rounded-2xl text-center">
                  <div className="text-5xl font-black text-emerald-600 mb-2">{constraints.data.resolved}</div>
                  <div className="text-xs font-black text-emerald-600 uppercase tracking-widest">Resolved</div>
                </div>
              </div>
              <div className="lg:col-span-3">
                <h3 className="text-sm uppercase font-black tracking-widest text-slate-400 mb-8">Top Blockers & Resolutions</h3>
                <div className="space-y-4">
                  {constraints.data.topConstraints.map((c, idx) => (
                    <div key={idx} className="flex items-center justify-between p-6 bg-slate-50 border border-slate-100 rounded-2xl">
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "w-3 h-3 rounded-full shadow-sm",
                          c.status === 'resolved' ? 'bg-emerald-500' : 'bg-rose-500'
                        )} />
                        <span className="text-slate-800 font-bold text-lg">{c.label}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest bg-white px-3 py-1 rounded-full border border-slate-100">
                          {c.type}
                        </span>
                        <span className={cn(
                          "text-[10px] uppercase font-black tracking-widest px-4 py-2 rounded-xl",
                          c.status === 'resolved' ? 'bg-emerald-100 text-emerald-700' : 'bg-rose-100 text-rose-700'
                        )}>
                          {c.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 6: Trajectory */}
        <section className="mb-32">
          <SectionHeader 
            icon={Briefcase} 
            title="Career Trajectory" 
            narrative={trajectory.narrative} 
          />
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-[3rem] blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-white rounded-[3rem] p-12 lg:p-16 border border-slate-100 shadow-xl overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full -mr-48 -mt-48 blur-3xl opacity-50" />
              
              <div className="relative z-10 flex flex-col lg:flex-row justify-between gap-16">
                <div className="flex-1 space-y-10">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50 text-indigo-700 rounded-full text-xs font-black uppercase tracking-[0.2em] mb-6">
                      <Target className="w-4 h-4" /> Next Milestone
                    </div>
                    <h3 className="text-6xl font-black text-slate-900 mb-2">V3 Eligibility</h3>
                    <p className="text-2xl font-bold text-slate-400 italic">Program Lead Authority</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-12">
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2">Planned Target</div>
                      <div className="text-3xl font-black text-slate-800">May 2027</div>
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-indigo-400 uppercase tracking-[0.2em] mb-2">Projected Early</div>
                      <div className="text-3xl font-black text-emerald-600">Feb 2027</div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-96 space-y-8">
                  <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Capability Gap Analysis</h4>
                    <div className="space-y-6">
                      {trajectory.data.gapDrivers.map((gap, idx) => (
                        <div key={idx} className="flex items-start gap-4 text-sm font-bold text-slate-600 leading-relaxed">
                          <div className="w-6 h-6 bg-rose-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                            <AlertCircle className="w-4 h-4 text-rose-500" />
                          </div>
                          <span>{gap}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Nav */}
      <footer className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t h-20 z-50">
        <div className="max-w-6xl mx-auto h-full px-8 flex items-center justify-between">
          <button className="flex items-center gap-3 text-slate-400 font-black uppercase tracking-widest text-xs hover:text-indigo-600 transition-colors group">
            <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" /> 
            February 2026
          </button>
          <div className="flex items-center gap-4">
            <div className="px-3 py-1 bg-slate-100 rounded-lg text-[10px] font-black text-slate-400 uppercase tracking-widest">
              Physics-Grade Verified
            </div>
            <div className="w-1.5 h-1.5 bg-slate-200 rounded-full" />
            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              PDGMS v4.22
            </div>
          </div>
          <button className="flex items-center gap-3 text-indigo-600 font-black uppercase tracking-widest text-xs group">
            April 2026 
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </footer>
    </div>
  );
}
