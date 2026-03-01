interface DiagramProps {
  variant: "voice" | "support" | "security";
}

// Shared SVG helpers
function Box({
  x, y, w, h, label, sublabel, accent = false,
}: {
  x: number; y: number; w: number; h: number;
  label: string; sublabel?: string; accent?: boolean;
}) {
  return (
    <g>
      <rect
        x={x} y={y} width={w} height={h}
        rx={8}
        fill={accent ? "rgba(249,115,22,0.12)" : "rgba(255,255,255,0.04)"}
        stroke={accent ? "rgba(249,115,22,0.4)" : "rgba(255,255,255,0.1)"}
        strokeWidth={1}
      />
      <text
        x={x + w / 2} y={sublabel ? y + h / 2 - 6 : y + h / 2}
        textAnchor="middle" dominantBaseline="middle"
        fill={accent ? "#4f8eff" : "#f5f5f5"}
        fontSize={11} fontWeight={600} fontFamily="inherit"
      >
        {label}
      </text>
      {sublabel && (
        <text
          x={x + w / 2} y={y + h / 2 + 10}
          textAnchor="middle" dominantBaseline="middle"
          fill="rgba(113,113,122,1)"
          fontSize={9} fontFamily="inherit"
        >
          {sublabel}
        </text>
      )}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.sqrt(dx * dx + dy * dy);
  const arrowLen = 6;
  const arrowX = x2 - (dx / len) * arrowLen;
  const arrowY = y2 - (dy / len) * arrowLen;

  return (
    <g>
      <line
        x1={x1} y1={y1} x2={arrowX} y2={arrowY}
        stroke="rgba(249,115,22,0.35)"
        strokeWidth={1.5}
        strokeDasharray="4 3"
      />
      <polygon
        points={`${x2},${y2} ${arrowX - 3},${arrowY - 3} ${arrowX + 3},${arrowY + 3}`}
        fill="rgba(249,115,22,0.5)"
        transform={`rotate(${Math.atan2(dy, dx) * (180 / Math.PI)}, ${x2}, ${y2})`}
      />
    </g>
  );
}

// ── Voice diagram ──────────────────────────────────────────
function VoiceDiagram() {
  return (
    <svg viewBox="0 0 560 260" className="w-full" aria-label="Voice receptionist architecture diagram" role="img">
      {/* Caller */}
      <Box x={10} y={100} w={100} h={60} label="Caller" sublabel="Inbound Call" />
      <Arrow x1={110} y1={130} x2={148} y2={130} />

      {/* Voice Agent */}
      <Box x={150} y={85} w={120} h={90} label="Voice Agent" sublabel="Retell AI" accent />
      <Arrow x1={270} y1={130} x2={308} y2={115} />
      <Arrow x1={270} y1={130} x2={308} y2={155} />

      {/* Qualification */}
      <Box x={310} y={80} w={110} h={50} label="Qualification" sublabel="Intent + Lead Score" />
      {/* Booking */}
      <Box x={310} y={140} w={110} h={50} label="Booking" sublabel="Calendar API" />
      <Arrow x1={420} y1={105} x2={450} y2={105} />
      <Arrow x1={420} y1={165} x2={450} y2={165} />

      {/* SMS + CRM */}
      <Box x={452} y={75} w={100} h={50} label="SMS Confirm" sublabel="Twilio/n8n" />
      <Box x={452} y={140} w={100} h={50} label="CRM Update" sublabel="Webhook" />

      {/* Monitoring */}
      <Box x={185} y={195} w={140} h={45} label="Monitoring" sublabel="Uptime + Conversation Logs" />
      <line x1={210} y1={175} x2={210} y2={195} stroke="rgba(249,115,22,0.2)" strokeWidth={1} strokeDasharray="3 3" />
    </svg>
  );
}

// ── Support diagram ────────────────────────────────────────
function SupportDiagram() {
  return (
    <svg viewBox="0 0 560 260" className="w-full" aria-label="Support automation architecture diagram" role="img">
      {/* Input */}
      <Box x={10} y={95} w={100} h={70} label="Ticket Inbox" sublabel="Zendesk / Email" />
      <Arrow x1={110} y1={130} x2={148} y2={130} />

      {/* Classifier */}
      <Box x={150} y={85} w={120} h={90} label="AI Classifier" sublabel="Intent + Priority" accent />
      <Arrow x1={270} y1={108} x2={308} y2={90} />
      <Arrow x1={270} y1={130} x2={308} y2={130} />
      <Arrow x1={270} y1={152} x2={308} y2={168} />

      {/* Routing */}
      <Box x={310} y={68} w={110} h={42} label="Auto-Resolve" sublabel="Self-serve deflection" />
      <Box x={310} y={118} w={110} h={42} label="Route to Team" sublabel="Priority queue" />
      <Box x={310} y={150} w={110} h={42} label="Escalation" sublabel="Human handoff" />

      {/* KB */}
      <Box x={452} y={95} w={100} h={70} label="Knowledge Base" sublabel="Notion / Confluence" />
      <Arrow x1={420} y1={130} x2={452} y2={130} />

      {/* Analytics */}
      <Box x={185} y={200} w={140} h={42} label="Analytics" sublabel="CSAT · Volume · SLA" />
      <line x1={210} y1={175} x2={210} y2={200} stroke="rgba(249,115,22,0.2)" strokeWidth={1} strokeDasharray="3 3" />
    </svg>
  );
}

// ── Security diagram ───────────────────────────────────────
function SecurityDiagram() {
  return (
    <svg viewBox="0 0 560 260" className="w-full" aria-label="Security and observability architecture diagram" role="img">
      {/* Identity layer */}
      <Box x={10} y={10} w={160} h={70} label="Identity Layer" sublabel="Okta · SAML · MFA · SSO" accent />

      {/* Integration layer */}
      <Box x={10} y={95} w={160} h={70} label="Integration Layer" sublabel="API Keys · Webhooks · Rate Limits" accent />

      {/* AI Agents */}
      <Box x={10} y={180} w={160} h={60} label="AI Agents" sublabel="Voice · Chat · SMS" />

      {/* Arrow to SIEM */}
      <Arrow x1={170} y1={45} x2={208} y2={100} />
      <Arrow x1={170} y1={130} x2={208} y2={130} />
      <Arrow x1={170} y1={210} x2={208} y2={165} />

      {/* Log aggregation */}
      <Box x={210} y={85} w={130} h={90} label="Log Aggregation" sublabel="AWS · Structured Logs" accent />

      <Arrow x1={340} y1={130} x2={378} y2={108} />
      <Arrow x1={340} y1={130} x2={378} y2={155} />

      {/* Monitoring */}
      <Box x={380} y={70} w={110} h={55} label="Monitoring" sublabel="Alerts · Anomaly Detect" />
      {/* Audit */}
      <Box x={380} y={140} w={110} h={55} label="Audit Trail" sublabel="Conversation Logs" />

      {/* Dashboard */}
      <Box x={185} y={200} w={140} h={42} label="Dashboard" sublabel="Metabase · Compliance Reporting" />
      <Arrow x1={410} y1={195} x2={370} y2={215} />
    </svg>
  );
}

export default function ArchitectureDiagram({ variant }: DiagramProps) {
  return (
    <div className="glass-card rounded-2xl p-4 sm:p-6 overflow-x-auto">
      <p className="text-xs font-semibold tracking-widest uppercase text-[var(--color-text-dim)] mb-4">
        Architecture Overview
      </p>
      {variant === "voice" && <VoiceDiagram />}
      {variant === "support" && <SupportDiagram />}
      {variant === "security" && <SecurityDiagram />}
    </div>
  );
}
