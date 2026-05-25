import { motion } from "motion/react";
import { Sparkles, GraduationCap, Brain, Compass } from "lucide-react";

export default function Header() {
  return (
    <header className="relative bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm mb-12 overflow-hidden">
      {/* Background elegant flare */}
      <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-blue-600 rounded-full blur-3xl opacity-10 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-start text-left">
        {/* Badge */}
        <motion.div 
          id="header-badge"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200/50 px-3 py-1.5 rounded-full mb-6"
        >
          <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
          <span className="text-xs font-semibold tracking-wide text-blue-700">
            Manual & Guia Didático do Google AI Studio
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1 
          id="header-title"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-sans font-bold tracking-tight text-slate-900 mb-6 leading-tight"
        >
          Explore o Google AI Studio: Saiba tudo o que <span className="text-blue-600">pode realizar</span>, integrar e <span className="text-indigo-600 font-display">publicar gratuitamente</span>.
        </motion.h1>

        {/* Subheader */}
        <motion.p 
          id="header-desc"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-slate-600 max-w-3xl leading-relaxed mb-8"
        >
          O Google AI Studio é a plataforma oficial da Google para experimentar, configurar e integrar a inteligência artificial do Gemini em múltiplos contextos. Este guia foi concebido para ajudar a compreender cada funcionalidade do estúdio, os modos de prototipagem, as chaves API de segurança, os princípios éticos e o passo a passo para colocar as suas criações online na plataforma Netlify.
        </motion.p>

        {/* Quick Stats/Insights Grid */}
        <motion.div 
          id="header-stats"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full"
        >
          <div className="p-5 bg-blue-50/80 border border-blue-100/70 rounded-2xl flex flex-col items-start transition-all hover:bg-blue-50">
            <div className="text-blue-600 mb-2 font-bold uppercase text-[11px] tracking-wider flex items-center gap-1.5">
              <GraduationCap className="w-4 h-4" /> Experimentar e Desenhar
            </div>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">Crie prompts diretos, configure instruções de chatbot estruturadas e desenhe páginas interativas completas sem precisar de programar.</p>
          </div>

          <div className="p-5 bg-indigo-50/80 border border-indigo-100/70 rounded-2xl flex flex-col items-start transition-all hover:bg-indigo-50">
            <div className="text-indigo-600 mb-2 font-bold uppercase text-[11px] tracking-wider flex items-center gap-1.5">
              <Brain className="w-4 h-4" /> Exportação de Código
            </div>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">Gere chaves API credenciadas e exporte código em TypeScript, Python ou cURL para potenciar os seus próprios websites e ferramentas.</p>
          </div>

          <div className="p-5 bg-emerald-50/80 border border-emerald-100/70 rounded-2xl flex flex-col items-start transition-all hover:bg-emerald-50">
            <div className="text-emerald-600 mb-2 font-bold uppercase text-[11px] tracking-wider flex items-center gap-1.5">
              <Compass className="w-4 h-4" /> Distribuição e Alojamento
            </div>
            <p className="text-xs font-medium text-slate-700 leading-relaxed">Publique as suas aplicações interativas na Web através da plataforma Netlify de forma 100% autónoma, rápida e gratuita.</p>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
