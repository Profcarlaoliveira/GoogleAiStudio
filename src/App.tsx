import { useState, useEffect } from "react";
import Header from "./components/Header";
import BuildVsCode from "./components/BuildVsCode";
import StudioExplorer from "./components/StudioExplorer";
import AIPlanner from "./components/AIPlanner";
import Integrations from "./components/Integrations";
import PracticalTutorial from "./components/PracticalTutorial";
import PublishingGuide from "./components/PublishingGuide";
import { BookOpen, Sparkles, LayoutGrid, Award, ShieldAlert, GraduationCap, Cpu, Home, Compass, Lightbulb, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab ] = useState<'overview' | 'explorer' | 'playground' | 'publishing' | 'tutorials'>('overview');

  // Smoothly scroll back to the top on page/tab changes for absolute comfort
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <div id="main-container" className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white pb-24 font-sans">
      
      {/* Header Navigation with Tab Triggers */}
      <nav className="max-w-6xl mx-auto px-4 md:px-8 mt-6">
        <div className="flex flex-col gap-4 p-5 bg-white border border-slate-200 rounded-2xl shadow-xs">
          {/* Brand & Action Button Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-slate-100 pb-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 bg-blue-600 rounded-xl flex items-center justify-center shadow-xs shrink-0">
                <span className="text-white font-bold text-xl font-display">G</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg md:text-xl tracking-tight text-slate-900 font-display">
                  Google AI Studio
                </span>
              </div>
            </div>

            <button 
              onClick={() => setActiveTab('playground')}
              className="px-5 py-2.5 bg-slate-950 hover:bg-slate-850 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-xs shrink-0"
            >
              Abrir Gerador IA
            </button>
          </div>

          {/* Navigation Tab Selection (Fully spacious, centering beautifully) */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 bg-slate-100 p-1.5 rounded-xl border border-slate-200/60 font-sans w-full">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-1.5 py-2 px-3.5 md:px-4 rounded-lg text-xs font-bold transition-all uppercase tracking-wider grow md:grow-0 justify-center ${activeTab === 'overview' ? 'bg-white text-blue-600 shadow-xs border border-slate-200' : 'text-slate-500 hover:text-slate-850 hover:bg-white/40'}`}
            >
              <Home className="w-3.5 h-3.5 shrink-0" />
              <span>Início</span>
            </button>
            <button
              onClick={() => setActiveTab('explorer')}
              className={`flex items-center gap-1.5 py-2 px-3.5 md:px-4 rounded-lg text-xs font-bold transition-all uppercase tracking-wider grow md:grow-0 justify-center ${activeTab === 'explorer' ? 'bg-white text-blue-600 shadow-xs border border-slate-200' : 'text-slate-500 hover:text-slate-850 hover:bg-white/40'}`}
            >
              <Compass className="w-3.5 h-3.5 shrink-0" />
              <span>Manual do Estúdio</span>
            </button>
            <button
              onClick={() => setActiveTab('playground')}
              className={`flex items-center gap-1.5 py-2 px-3.5 md:px-4 rounded-lg text-xs font-bold transition-all uppercase tracking-wider grow md:grow-0 justify-center ${activeTab === 'playground' ? 'bg-white text-blue-600 shadow-xs border border-slate-200' : 'text-slate-500 hover:text-slate-850 hover:bg-white/40'}`}
            >
              <Lightbulb className="w-3.5 h-3.5 shrink-0" />
              <span>Playground IA</span>
            </button>
            <button
              onClick={() => setActiveTab('publishing')}
              className={`flex items-center gap-1.5 py-2 px-3.5 md:px-4 rounded-lg text-xs font-bold transition-all uppercase tracking-wider grow md:grow-0 justify-center ${activeTab === 'publishing' ? 'bg-white text-blue-600 shadow-xs border border-slate-200' : 'text-slate-500 hover:text-slate-850 hover:bg-white/40'}`}
            >
              <Globe className="w-3.5 h-3.5 shrink-0" />
              <span>Como Publicar</span>
            </button>
            <button
              onClick={() => setActiveTab('tutorials')}
              className={`flex items-center gap-1.5 py-2 px-3.5 md:px-4 rounded-lg text-xs font-bold transition-all uppercase tracking-wider grow md:grow-0 justify-center ${activeTab === 'tutorials' ? 'bg-white text-blue-600 shadow-xs border border-slate-200' : 'text-slate-500 hover:text-slate-850 hover:bg-white/40'}`}
            >
              <BookOpen className="w-3.5 h-3.5 shrink-0" />
              <span>Tutoriais & Prática</span>
            </button>
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
                <BuildVsCode />
                
                {/* Visual wizard guide helper */}
                <div className="bg-white border border-slate-200 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs mt-8 font-sans">
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 text-sm">Gostaria de ver como estruturar chaves API ou publicar no Netlify/GitHub?</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Visite o manual detalhado para entender as mecânicas de compilação e alojamento.</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('explorer')}
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-slate-900 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all self-stretch md:self-auto justify-center"
                  >
                    <span>Seguinte: Manual do Estúdio</span>
                    <Compass className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            {activeTab === 'explorer' && (
              <div className="space-y-6">
                <StudioExplorer />
                
                {/* Visual wizard guide helper */}
                <div className="bg-white border border-slate-200 p-6 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-4 shadow-2xs mt-8 font-sans">
                  <div className="text-left">
                    <h4 className="font-bold text-slate-900 text-sm">Pronto para testar a Inteligência Artificial diretamente?</h4>
                    <p className="text-xs text-slate-500 mt-0.5">Utilize o nosso Playground de testes interativos para criar planos de aula, rubricas e atividades escolares.</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('playground')}
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-slate-900 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all self-stretch md:self-auto justify-center"
                  >
                    <span>Seguinte: Playground IA</span>
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
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-slate-900 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all self-stretch md:self-auto justify-center"
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
                    className="flex items-center gap-1.5 bg-blue-600 hover:bg-slate-900 text-white font-bold text-xs py-2.5 px-5 rounded-xl transition-all self-stretch md:self-auto justify-center"
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
