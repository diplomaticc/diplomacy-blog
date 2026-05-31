import { Calendar, Layers, ChevronRight } from 'lucide-react';

interface SummitEvent {
  title: string;
  date: string;
  location: string;
  theme?: string;
}

const upcomingEvents: SummitEvent[] = [
  {
    title: '81st Session of the UN General Assembly',
    date: 'Sept 08, 2026',
    location: 'New York, USA',
    theme: 'Plenary Debates on Multilateral Fragility'
  },
  {
    title: '16th India–EU Summit',
    date: 'Q4 2026',
    location: 'New Delhi, India',
    theme: 'Next-Generation Digital Cooperation for Strategic Autonomy'
  },
  {
    title: 'COP31 Climate Change Conference',
    date: 'Nov 09–20, 2026',
    location: 'Antalya, Türkiye',
    theme: 'Global Climate Adjudication Frameworks'
  },
  {
    title: 'WTO 14th Ministerial Conference',
    date: 'Late 2026',
    location: 'Barcelona, Spain',
    theme: 'Strengthening Multilateralism for Inclusive Global Trade'
  }
];

export default function UpcomingSummits() {
  return (
    <section className="bg-[#060a12] py-24 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-purple-400">
            <Layers size={14} />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em]">Macro Intelligence Shift</span>
          </div>
          <h3 className="font-display text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
            The Rise of <br />Minilateral Coalitions
          </h3>
          <p className="text-[14px] leading-relaxed font-light text-slate-400">
            Global diplomacy is undergoing a structural fragmentation. High-visibility forums are experiencing paralysis due to domestic polarization and systemic rivalries. 
          </p>
          <p className="text-[14px] leading-relaxed font-light text-slate-400">
            Strategic actors are pivoting toward agile, issue-focused minilateral coalitions (such as tailored adjustments across EU, BRICS, and QUAD architectures) to yield high-velocity, practical outcomes.
          </p>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <div className="flex items-center gap-2 text-slate-500 mb-6">
            <Calendar size={14} />
            <span className="font-display text-[10px] font-bold uppercase tracking-[0.25em]">Bilateral & Multilateral Calendar</span>
          </div>

          <div className="divide-y divide-slate-800/60 border-t border-b border-slate-800/60">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="group flex flex-col sm:flex-row justify-between items-start sm:items-center py-5 gap-4 transition-colors duration-300 hover:bg-slate-900/20 px-2"
              >
                <div className="space-y-1">
                  <h4 className="font-display text-[15px] font-medium text-slate-200 group-hover:text-blue-400 transition-colors duration-300">
                    {event.title}
                  </h4>
                  {event.theme && (
                    <p className="text-[12px] text-slate-500 italic font-light">
                      Theme: {event.theme}
                    </p>
                  )}
                  <p className="text-[12px] text-slate-400 font-light">
                    {event.location}
                  </p>
                </div>
                
                <div className="flex items-center gap-3 shrink-0">
                  <span className="font-display text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded">
                    {event.date}
                  </span>
                  <ChevronRight size={14} className="text-slate-600 group-hover:text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
