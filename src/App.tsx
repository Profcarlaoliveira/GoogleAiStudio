import { useState, useEffect } from "react";
import Header from "./components/Header";
import BuildVsCode from "./components/BuildVsCode";
import StudioExplorer from "./components/StudioExplorer";
import ConsoleExplorer from "./components/ConsoleExplorer";
import AIPlanner from "./components/AIPlanner";
import Integrations from "./components/Integrations";
import PracticalTutorial from "./components/PracticalTutorial";
import PublishingGuide from "./components/PublishingGuide";
import { BookOpen, Sparkles, LayoutGrid, Award, ShieldAlert, GraduationCap, Cpu, Home, Compass, Lightbulb, Globe, Sliders } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab ] = useState<'overview' | 'simulator' | 'console' | 'models' | 'playground' | 'publishing' | 'tutorials'>('overview');

  // Smoothly scroll back to the top on page/tab changes for absolute comfort
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <div id="main-container" className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white pb-24 font-sans">
      
      {/* Header Navigation with Tab Triggers */}
      <nav id="app-header-navigation" className="max-w-6xl mx-auto px-4 md:px-8 mt-6">
        <div className="flex flex-col bg-white border border-slate-250/70 rounded-2xl shadow-sm overflow-hidden">
          
          {/* Top Google Branding Colored Accents Bar */}
          <div className="h-[4px] w-full flex shrink-0">
            <div className="h-full bg-[#4285F5] flex-1"></div>
            <div className="h-full bg-[#EA4335] flex-1"></div>
            <div className="h-full bg-[#FBBC05] flex-1"></div>
            <div className="h-full bg-[#34A853] flex-1"></div>
          </div>

          <div className="flex flex-col p-4 md:p-6 gap-4">
            {/* Beautiful, High-Polished Brand Row */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center shadow-xs shrink-0 select-none border border-slate-800">
                  <span className="text-white font-black text-2xl font-mono tracking-tighter">G</span>
                </div>
                <div>
                  <span className="font-extrabold text-lg md:text-xl tracking-tight text-slate-900 font-display block">
                    Google AI Studio
                  </span>
                </div>
              </div>
            </div>

            {/* Navigation Tab Selection (Compact text size, single row, beautifully spaced) */}
            <div className="flex flex-row flex-nowrap items-center md:justify-center gap-1 bg-slate-100 p-1 rounded-xl border border-slate-200/60 font-sans w-full overflow-x-auto scrollbar-none">
              <button
                id="tab-btn-overview"
                onClick={() => setActiveTab('overview')}
                className={`flex items-center gap-1.5 py-1 px-1.5 md:px-2.5 lg:px-3 rounded-lg text-[8px] min-[370px]:text-[8.5px] min-[410px]:text-[9.5px] md:text-[10px] lg:text-[11px] font-bold transition-all uppercase tracking-wide shrink-0 justify-center cursor-pointer ${activeTab === 'overview' ? 'bg-white text-blue-600 shadow-3xs border border-slate-200' : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'}`}
              >
                <Home className="w-3.5 h-3.5 shrink-0" />
                <span>Início</span>
              </button>
              <button
                id="tab-btn-simulator"
                onClick={() => setActiveTab('simulator')}
                className={`flex items-center gap-1.5 py-1 px-1.5 md:px-2.5 lg:px-3 rounded-lg text-[8px] min-[370px]:text-[8.5px] min-[410px]:text-[9.5px] md:text-[10px] lg:text-[11px] font-bold transition-all uppercase tracking-wide shrink-0 justify-center cursor-pointer ${activeTab === 'simulator' ? 'bg-white text-blue-600 shadow-3xs border border-slate-200' : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'}`}
              >
                <Sparkles className="w-3.5 h-3.5 shrink-0 text-amber-500" />
                <span>Como Começar</span>
              </button>
              <button
                id="tab-btn-console"
                onClick={() => setActiveTab('console')}
                className={`flex items-center gap-1.5 py-1 px-1.5 md:px-2.5 lg:px-3 rounded-lg text-[8px] min-[370px]:text-[8.5px] min-[410px]:text-[9.5px] md:text-[10px] lg:text-[11px] font-bold transition-all uppercase tracking-wide shrink-0 justify-center cursor-pointer ${activeTab === 'console' ? 'bg-white text-blue-600 shadow-3xs border border-slate-200' : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'}`}
              >
                <Compass className="w-3.5 h-3.5 shrink-0" />
                <span>Descodificador</span>
              </button>
              <button
                id="tab-btn-models"
                onClick={() => setActiveTab('models')}
                className={`flex items-center gap-1.5 py-1 px-1.5 md:px-2.5 lg:px-3 rounded-lg text-[8px] min-[370px]:text-[8.5px] min-[410px]:text-[9.5px] md:text-[10px] lg:text-[11px] font-bold transition-all uppercase tracking-wide shrink-0 justify-center cursor-pointer ${activeTab === 'models' ? 'bg-white text-blue-600 shadow-3xs border border-slate-200' : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'}`}
              >
                <Sliders className="w-3.5 h-3.5 shrink-0" />
                <span>Modelos & Chaves</span>
              </button>
              <button
                id="tab-btn-playground"
                onClick={() => setActiveTab('playground')}
                className={`flex items-center gap-1.5 py-1 px-1.5 md:px-2.5 lg:px-3 rounded-lg text-[8px] min-[370px]:text-[8.5px] min-[410px]:text-[9.5px] md:text-[10px] lg:text-[11px] font-bold transition-all uppercase tracking-wide shrink-0 justify-center cursor-pointer ${activeTab === 'playground' ? 'bg-white text-blue-600 shadow-3xs border border-slate-200' : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'}`}
              >
                <Lightbulb className="w-3.5 h-3.5 shrink-0" />
                <span>Banco de Prompts</span>
              </button>
              <button
                id="tab-btn-publishing"
                onClick={() => setActiveTab('publishing')}
                className={`flex items-center gap-1.5 py-1 px-1.5 md:px-2.5 lg:px-3 rounded-lg text-[8px] min-[370px]:text-[8.5px] min-[410px]:text-[9.5px] md:text-[10px] lg:text-[11px] font-bold transition-all uppercase tracking-wide shrink-0 justify-center cursor-pointer ${activeTab === 'publishing' ? 'bg-white text-blue-600 shadow-3xs border border-slate-200' : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'}`}
              >
                <Globe className="w-3.5 h-3.5 shrink-0" />
                <span>Como Publicar</span>
              </button>
              <button
                id="tab-btn-tutorials"
                onClick={() => setActiveTab('tutorials')}
                className={`flex items-center gap-1.5 py-1 px-1.5 md:px-2.5 lg:px-3 rounded-lg text-[8px] min-[370px]:text-[8.5px] min-[410px]:text-[9.5px] md:text-[10px] lg:text-[11px] font-bold transition-all uppercase tracking-wide shrink-0 justify-center cursor-pointer ${activeTab === 'tutorials' ? 'bg-white text-blue-600 shadow-3xs border border-slate-200' : 'text-slate-500 hover:text-slate-800 hover:bg-white/40'}`}
              >
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <span>Tutoriais & Prática</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
        
        {/* Dynamic Route View Transitions */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.15 }}
          >
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <Header />
                
                {/* Visual wizard guide helper */}
                <div className="bg-white border border-slate-200 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs mt-8 font-sans">
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 text-sm">Qual é o modo de IA ideal para o seu projeto letivo?</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Clique no nosso menu &quot;Como Começar&quot; para aceder ao simulador, ver recomendações pedagógicas, dicas de segurança e exemplos exatos de prompts prontos a usar.</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('simulator')}
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-slate-900 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all self-stretch md:self-auto justify-center cursor-pointer shrink-0 font-sans"
                  >
                    <span>Seguinte: Como Começar</span>
                    <Sparkles className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'simulator' && (
              <div className="space-y-6">
                <BuildVsCode />
                
                {/* Visual wizard guide helper */}
                <div className="bg-white border border-slate-200 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs mt-8 font-sans">
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 text-sm">Gostaria de ver como navegar nos menus e ativar as ferramentas de IA?</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Visite o descodificador interativo para ver em tempo real o potencial de cada botão da consola.</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('console')}
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-slate-900 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all self-stretch md:self-auto justify-center cursor-pointer shrink-0 font-sans"
                  >
                    <span>Seguinte: Descodificador da Consola</span>
                    <Compass className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'console' && (
              <div className="space-y-6">
                <ConsoleExplorer />
                
                {/* Visual wizard guide helper */}
                <div className="bg-white border border-slate-200 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs mt-8 font-sans">
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 text-sm">Pronto para selecionar o seu modelo de IA e gerar a sua chave API gratuita?</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Veja a comparação entre Gemini Flash e Pro e conselhos técnicos de segurança.</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('models')}
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-slate-900 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all self-stretch md:self-auto justify-center cursor-pointer"
                  >
                    <span>Seguinte: Modelos & Chaves API</span>
                    <Sliders className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'models' && (
              <div className="space-y-6">
                <StudioExplorer />
                
                {/* Visual wizard guide helper */}
                <div className="bg-white border border-slate-200 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs mt-8 font-sans">
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 text-sm">Pronto para criar planos de aula e exercícios otimizados para a consola?</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Aceda ao Banco de Prompts Dinâmicos projetados estruturalmente para professores.</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('playground')}
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-slate-900 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all self-stretch md:self-auto justify-center cursor-pointer"
                  >
                    <span>Seguinte: Banco de Prompts</span>
                    <Lightbulb className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'playground' && (
              <div className="space-y-6">
                <AIPlanner />
                
                {/* Visual wizard guide helper */}
                <div className="bg-white border border-slate-200 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs mt-8 font-sans">
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 text-sm">Gostaria de ver como publicar o seu site na web de forma 100% gratuita?</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Aprenda a alojar no Netlify, GitHub Pages ou Vercel de forma autónoma e simples.</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('publishing')}
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-slate-900 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all self-stretch md:self-auto justify-center cursor-pointer"
                  >
                    <span>Seguinte: Como Publicar</span>
                    <Globe className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'publishing' && (
              <div className="space-y-6">
                <PublishingGuide />
                
                {/* Visual wizard guide helper */}
                <div className="bg-white border border-slate-200 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs mt-8 font-sans">
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 text-sm">Deseja ver tutoriais práticos passo a passo e o manual de integração?</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Descubra as regras de ouro para implementar a IA no Classroom, Teams ou Moodle de forma integrada.</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('tutorials')}
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-slate-900 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all self-stretch md:self-auto justify-center cursor-pointer"
                  >
                    <span>Seguinte: Tutoriais & Prática</span>
                    <BookOpen className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'tutorials' && (
              <div className="space-y-6">
                <PracticalTutorial />
                <Integrations />
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Pedagogical Safety & Ethics Reminder Footer */}
        <footer className="mt-16 bg-white border border-slate-200 p-8 rounded-3xl text-left max-w-4xl mx-auto shadow-xs font-sans">
          <div className="flex flex-col md:flex-row items-start gap-5">
            <div className="bg-amber-50 border border-amber-200 p-3 rounded-2xl text-amber-700 shrink-0">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-2 flex items-center gap-1.5 font-display">
                <GraduationCap className="w-5 h-5 text-indigo-600" />
                Princípios de Uso Ético e Pedagógico da IA
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed space-y-2">
                As ferramentas baseadas em IA generativa, como o Google AI Studio, funcionam como <strong>multiplicadores de potencial pedagógico</strong> e co-pilotos para o professor. No entanto, lembre-se sempre de:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1 text-2xs text-slate-500 leading-normal">
                <li><strong>Supervisão Humana (Human-in-the-loop):</strong> Reveja e valide sempre todos os planos de aulas e respostas de avaliação antes de aplicá-los com os alunos.</li>
                <li><strong>Privacidade dos Alunos:</strong> Nunca insira dados pessoais identificáveis (nome completo, e-mails, moradas) dos seus alunos no prompt da IA. Use pseudónimos ou dados anonimizados.</li>
                <li><strong>Foco Curricular Nacional:</strong> Utilize as System Instructions para adequar os conteúdos e metas aos Programas e Metas Curriculares de Portugal e do agrupamento de escolas.</li>
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-2xs text-slate-400">
                <span>© {new Date().getFullYear()} Guia Pedagógico de Apoio Docente. Desenvolvido para Professores Inovadores.</span>
                <span className="flex items-center gap-1 font-mono text-indigo-500 font-bold bg-indigo-50 px-2.5 py-1 rounded">
                  <Cpu className="w-3.5 h-3.5" /> Powered by Gemini-3.5-Flash
                </span>
              </div>
            </div>
          </div>
        </footer>

      </main>

      {/* Footer Status Bar matching Sleek design theme */}
      <footer className="mt-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-xs font-normal text-slate-600 gap-4 font-sans">
          <div className="text-center sm:text-left text-slate-500">
            Inteligência Artificial na Educação: Estratégias, Ferramentas e Práticas Pedagógicas
          </div>
          <div className="text-slate-400 font-semibold tracking-wider uppercase text-[10px] whitespace-nowrap">
            ©2026 Formadora Carla Oliveira
          </div>
        </div>
      </footer>
    </div>
  );
}
