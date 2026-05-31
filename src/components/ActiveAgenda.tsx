import { ShieldAlert, RefreshCw, FileText, ArrowUpRight, Globe } from 'lucide-react';

interface BriefingCard {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'diplomatic' | 'stabilizing' | 'strategic-pivot';
  statusLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

const strategicBriefings: BriefingCard[] = [
  {
    id: 'b-1',
    title: 'US–Iran Non-Proliferation Framework',
    description: 'Tentative agreement reached to open the Strait of Hormuz. High-stakes negotiations are finalized to continue for a 60-day diplomatic window amid phrase restructuring.',
    category: 'Nuclear Diplomacy',
    status: 'diplomatic',
    statusLabel: 'DIPLOMATIC PHASE',
    icon: RefreshCw,
  },
  {
    id: 'b-2',
    title: 'Washington–New Delhi Strategic Alignment',
    description: 'Following high-level bilateral summits in New Delhi, a temporary trade framework has been established to ease tariff barriers and secure American energy imports.',
    category: 'Bilateral Security',
    status: 'stabilizing',
    statusLabel: 'STABILIZING',
    icon: ShieldAlert,
  },
  {
    id: 'b-3',
    title: 'India–Vietnam Maritime Coalition',
    description: 'Bilateral ties elevated to an Enhanced Comprehensive Strategic Partnership targeting a $25B defense and technology trade framework by 2030.',
    category: 'Regional Coalition',
    status: 'strategic-pivot',
    statusLabel: 'ENHANCED PARTNERSHIP',
    icon: FileText,
  },
];

const statusStyles = {
  diplomatic: 'bg-blue-950/40 text-blue-400 border-blue-500/20',
  stabilizing: 'bg-emerald-950/40 text-emerald-400 border-emerald-500/20',
  'strategic-pivot': 'bg-purple-950/40 text-purple-400 border-purple-500/20',
};

export default function ActiveAgenda() {
  return (
    <section className="bg-[#060a12] py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-900">
      <div className="mx-auto max-w-7xl">
        
        <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-blue-400">
              <Globe size={14} className="animate-pulse" />
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em]">
                Strategic Intelligence Matrix
              </span>
            </div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-slate-100 sm:text-4xl">
              Active Agenda
            </h2>
          </div>
          
          <a
            href="/briefings"
            className="group inline-flex items-center gap-2 font-display text-[11px] uppercase tracking-[0.2em] text-slate-400 transition-colors duration-300 hover:text-blue-400"
          >
            View All Intelligence
            <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {strategicBriefings.map((briefing) => {
            const IconComponent = briefing.icon;
            
            return (
              <article
                key={briefing.id}
                className="relative flex flex-col justify-between border border-slate-800/60 bg-[#0b1320]/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-slate-700 hover:bg-[#0b1320]/80"
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="rounded-md border border-slate-800 bg-[#060a12] p-2.5 text-slate-400">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className={`rounded-full border px-3 py-0.5 font-display text-[9px] font-bold tracking-widest ${statusStyles[briefing.status]}`}>
                      {briefing.statusLabel}
                    </span>
                  </div>

                  <div className="space-y-3">
                    <span className="block font-display text-[10px] uppercase tracking-wider text-slate-500">
                      {briefing.category}
                    </span>
                    <h3 className="font-display text-xl font-semibold tracking-wide text-slate-100">
                      {briefing.title}
                    </h3>
                    <p className="text-[14px] leading-relaxed font-light text-slate-400">
                      {briefing.description}
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/40">
                  <a
                    href={`/briefings/${briefing.id}`}
                    className="group inline-flex items-center gap-2 font-display text-[10px] font-semibold uppercase tracking-widest text-blue-400 transition-colors duration-300 hover:text-blue-300"
                  >
                    Access Briefing File
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}
