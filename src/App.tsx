import Header from "./components/Header";
import BuildVsCode from "./components/BuildVsCode";
import StudioExplorer from "./components/StudioExplorer";
import AIPlanner from "./components/AIPlanner";
import Integrations from "./components/Integrations";
import PracticalTutorial from "./components/PracticalTutorial";
import { BookOpen, Sparkles, LayoutGrid, Award, ShieldAlert, GraduationCap, Cpu } from "lucide-react";

export default function App() {
  return (
    <div id="main-container" className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-indigo-500 selection:text-white pb-24">
      
      {/* Educational Promo Top Banner (subtle and high-contrast) */}
      <div id="top-school-banner" className="bg-gradient-to-r from-blue-600 via-indigo-600 to-indigo-700 text-white py-3 px-4 text-center text-xs font-semibold relative z-20 flex items-center justify-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-300 animate-bounce" />
        <span>Como é que a Inteligência Artificial pode apoiar o Ensino em Portugal? Explore abaixo!</span>
      </div>

      {/* Header Navigation */}
      <nav className="max-w-6xl mx-auto px-4 md:px-8 mt-6">
        <div className="flex items-center justify-between px-6 py-4 bg-white border border-slate-200 rounded-2xl shadow-sm">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg font-display">G</span>
            </div>
            <span className="font-semibold text-base md:text-lg tracking-tight text-slate-900 font-display">
              Google AI Studio
            </span>
          </div>
          <div className="hidden md:flex space-x-6 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <a href="#build-vs-code" className="text-blue-600 border-b-2 border-blue-600 pb-0.5">Visão Geral</a>
            <a href="#studio-explorer" className="hover:text-blue-600 transition-colors">Estúdio & Netlify</a>
            <a href="#ai-playground" className="hover:text-blue-600 transition-colors">Playground IA</a>
            <a href="#integrations" className="hover:text-blue-600 transition-colors">Integração</a>
            <a href="#tutorials" className="hover:text-blue-600 transition-colors">Como Começar</a>
          </div>
          <a href="#ai-playground" className="px-4 py-2.5 bg-slate-950 hover:bg-slate-850 text-white rounded-full text-2xs font-bold uppercase tracking-wider transition-all">
            Começar Agora
          </a>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 md:px-8 pt-8">
        
        {/* Hero Section */}
        <Header />

        {/* Build vs Code Deep Dive Section */}
        <BuildVsCode />

        {/* Studio Explorer: Features screenshots and Publishing guide */}
        <StudioExplorer />

        {/* AI Generator Real Interactive Playground */}
        <AIPlanner />

        {/* Integrations with Classroom, Docs, sheets, etc */}
        <Integrations />

        {/* Step-by-Step Practical Tutorial */}
        <PracticalTutorial />

        {/* Pedagogical Safety & Ethics Reminder Footer */}
        <footer className="mt-16 bg-white border border-slate-200 p-8 rounded-3xl text-left max-w-4xl mx-auto shadow-sm">
          <div className="flex flex-col md:flex-row items-start gap-5">
            <div className="bg-amber-50 border border-amber-200 p-3 rounded-2xl text-amber-750 shrink-0">
              <ShieldAlert className="w-6 h-6 prose-amber" />
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
