import React from 'react';

interface AgendaItem {
  id: string;
  category: string;
  title: string;
  status: string;
  statusType: 'phase' | 'stabilizing' | 'partnership';
  description: string;
  destination: string;
  vehicle: string;
  link: string;
}

const agendaData: AgendaItem[] = [
  {
    id: 'us-iran',
    category: 'NUCLEAR DIPLOMACY',
    title: 'US–Iran Non-Proliferation Framework',
    status: 'DIPLOMATIC PHASE',
    statusType: 'phase',
    description: 'Tentative agreement reached to open the Strait of Hormuz. High-stakes negotiations are finalized to continue for a 60-day diplomatic window amid phrase restructuring.',
    destination: 'Persian Gulf, Strait of Hormuz',
    vehicle: 'Multilateral Diplomatic Framework',
    link: '#',
  },
  {
    id: 'wash-delhi',
    category: 'BILATERAL SECURITY',
    title: 'Washington–New Delhi Strategic Alignment',
    status: 'STABILIZING',
    statusType: 'stabilizing',
    description: 'Following high-level bilateral summits in New Delhi, a temporary trade framework has been established to ease tariff barriers and secure American energy imports.',
    destination: 'Indo-Pacific Transit Sectors',
    vehicle: 'Bilateral Defense Logistics Pact',
    link: '#',
  },
  {
    id: 'india-viet',
    category: 'REGIONAL COALITION',
    title: 'India–Vietnam Maritime Coalition',
    status: 'ENHANCED PARTNERSHIP',
    statusType: 'partnership',
    description: 'Bilateral ties elevated to an Enhanced Comprehensive Strategic Partnership targeting a $25B defense and technology trade framework by 2030.',
    destination: 'South China Sea Surveillance Arc',
    vehicle: 'Joint Strategic Maritime Array',
    link: '#',
  },
];

export default function ActiveAgenda() {
  return (
    <section class="bg-[#060a12] py-20 px-4 border-t border-zinc-800/40">
      <div class="max-w-7xl mx-auto">
        
        {/* Header Block with Neon Glow Elements */}
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div class="flex items-center gap-2 mb-2">
              {/* Pulsing Glowing Radar Indicator */}
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_12px_#3b82f6]"></span>
              </span>
              {/* Cyber Glowing Text Layer */}
              <span class="text-[10px] font-bold tracking-widest text-blue-400 uppercase block drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]">
                🌐 Strategic Intelligence Matrix
              </span>
            </div>
            <h2 class="text-3xl md:text-4xl font-black text-white tracking-tight font-display">
              Active Agenda
            </h2>
          </div>
          <a href="/research" class="text-xs font-bold tracking-widest text-zinc-400 hover:text-white uppercase transition-colors flex items-center gap-2">
            View All Intelligence <span class="text-sm">↗</span>
          </a>
        </div>

        {/* Data Grid Matrix */}
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          {agendaData.map((item) => (
            <div key={item.id} class="bg-[#0b121f]/40 border border-zinc-800/60 rounded-sm p-6 flex flex-col justify-between hover:border-blue-500/30 transition-all duration-300 group">
              
              <div>
                <div class="flex items-center justify-between mb-6">
                  <div class="w-8 h-8 rounded-sm bg-zinc-800/30 border border-zinc-700/40 flex items-center justify-center text-zinc-400 group-hover:text-blue-400 transition-colors">
                    {item.id === 'us-iran' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                    )}
                    {item.id === 'wash-delhi' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                    )}
                    {item.id === 'india-viet' && (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                    )}
                  </div>
                  
                  <span class={`text-[9px] font-bold tracking-widest px-2 py-1 rounded-sm border ${
                    item.statusType === 'phase' ? 'text-blue-400 border-blue-500/20 bg-blue-500/5' :
                    item.statusType === 'stabilizing' ? 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5' :
                    'text-purple-400 border-purple-500/20 bg-purple-500/5'
                  }`}>
                    {item.status}
                  </span>
                </div>

                <span class="text-[10px] font-bold tracking-wider text-zinc-500 uppercase block mb-1">
                  {item.category}
                </span>
                <h3 class="text-xl font-bold text-white tracking-tight mb-4 group-hover:text-zinc-200 transition-colors">
                  {item.title}
                </h3>
                <p class="text-sm text-zinc-400 leading-relaxed mb-6 font-light">
                  {item.description}
                </p>
              </div>

              {/* Technical Tracking Fields */}
              <div class="mt-4 pt-4 border-t border-zinc-800/40">
                <div class="mb-3">
                  <span class="text-[9px] font-bold tracking-widest text-blue-500 uppercase block mb-0.5">
                    Destination
                  </span>
                  <span class="text-xs text-zinc-300 font-light">
                    {item.destination}
                  </span>
                </div>
                <div class="mb-6">
                  <span class="text-[9px] font-bold tracking-widest text-blue-500 uppercase block mb-0.5">
                    Vehicle
                  </span>
                  <span class="text-xs text-zinc-300 font-light">
                    {item.vehicle}
                  </span>
                </div>

                <a href={item.link} class="text-[10px] font-bold tracking-widest text-blue-400 hover:text-blue-300 uppercase flex items-center gap-1 transition-colors">
                  Access Briefing File <span class="text-xs group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
