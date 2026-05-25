import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronRight, ChevronLeft, Landmark, Check, MousePointerClick, Key, Settings2, FileCode2 } from "lucide-react";

export default function PracticalTutorial() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "1. Aceda ao Google AI Studio",
      detail: "O primeiro passo é fazer o login oficial com a sua conta Google (pessoal ou institucional se a sua escola tiver permissão para IA) em aistudio.google.com. A interface é totalmente segura, rápida e gratuita para realizar testes pedagógicos.",
      instructions: [
        "Navegue até o URL: aistudio.google.com",
        "Registe-se ou faça Login com uma conta Google ativa",
        "Aceite os termos de serviço educacionais e de pesquisa"
      ],
      icon: Landmark,
      color: "border-blue-500 text-blue-500",
      bg: "bg-blue-50/40"
    },
    {
      title: "2. Escolha o seu Ponto de Partida",
      detail: "Ao entrar, escolha a melhor modalidade para o seu objetivo do dia. Lembra-se da nossa lição acima? Se quer fazer uma ferramenta interactiva rápida, escolha 'Build'. Se quer afinar prompts e ver o código técnico para levar para outros sítios, escolha 'Code'.",
      instructions: [
        "Selecione 'Build' para apps prontas e funcionais",
        "Selecione 'Code' para testar prompts e obter snippets de código",
        "Ambos os modos correm nos modelos topo de gama como o Gemini 3.5 Flash"
      ],
      icon: Settings2,
      color: "border-indigo-500 text-indigo-500",
      bg: "bg-indigo-50/40"
    },
    {
      title: "3. Redija a sua Instrução de Sistema",
      detail: "No painel lateral, configure a 'System Instruction' (Instrução do Sistema). Diga à IA exatamente quem ela é e como deve responder. Isto garante respostas consistentes e evita que a IA saia das metas pedagógicas da turma.",
      instructions: [
        "Defina o papel: 'És um professor assistente especialista em Ciências do 3º Ciclo'",
        "Escreva regras: 'Nunca dês as soluções diretamente, guia o aluno com perguntas metodológicas'",
        "Anexe os seus documentos ou PDF da matéria para enriquecer o contexto"
      ],
      icon: MousePointerClick,
      color: "border-emerald-500 text-emerald-500",
      bg: "bg-emerald-50/40"
    },
    {
      title: "4. Teste, Afine e Guarde!",
      detail: "Escreva uma pergunta ou anexe uma redação de teste para ver como a IA reage. Caso goste das respostas, clique no botão 'Get Code' caso queira as APIs, ou partilhe a aplicação gerada diretamente com os seus alunos. Está feito!",
      instructions: [
        "Envie uma pergunta exemplo para aferir o tom das respostas",
        "Regule a temperatura (mais criativo ou mais contido)",
        "Guarde o seu projeto na biblioteca na cloud ou partilhe o link web"
      ],
      icon: FileCode2,
      color: "border-purple-500 text-purple-500",
      bg: "bg-purple-50/40"
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const ActiveIcon = steps[currentStep].icon;

  return (
    <section id="tutorials" className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm mb-12">
      <div className="max-w-4xl mx-auto text-left">
        
        {/* Title */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-purple-600 bg-purple-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Guia Rápido de Início
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            Como se Faz: 4 Passos para o Sucesso
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            Utilizar inteligência artificial profissional não tem de ser complicado. Siga este mini-tutorial interativo e veja como começar em menos de 5 minutos.
          </p>
        </div>

        {/* Wizard Panel */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
          
          {/* Progress Indicators */}
          <div className="flex bg-white border-b border-slate-200 divide-x divide-slate-100 font-sans">
            {steps.map((step, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentStep(idx)}
                className={`flex-1 py-4 text-center text-xs font-semibold transition-all ${idx === currentStep ? 'bg-blue-50 text-blue-700 font-bold border-b-2 border-blue-600' : 'text-slate-500 hover:text-slate-800'}`}
              >
                Passo {idx + 1}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                
                {/* Text Side */}
                <div className="md:col-span-8 space-y-4 font-sans">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                      Passo {currentStep + 1} de 4
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-slate-900">{steps[currentStep].title}</h3>
                  <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                    {steps[currentStep].detail}
                  </p>

                  <div className="space-y-2 mt-4 font-sans">
                    <span className="text-2xs font-bold text-slate-800 uppercase tracking-wider block">O que fazer nesta etapa:</span>
                    {steps[currentStep].instructions.map((inst, index) => (
                      <div key={index} className="flex items-center gap-2.5 text-xs text-slate-700">
                        <Check className="w-4 h-4 text-green-600 shrink-0" />
                        <span>{inst}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Visual/Icon Side */}
                <div className="md:col-span-4 flex justify-center">
                  <div className={`w-32 h-32 md:w-40 md:h-40 rounded-full border-2 ${steps[currentStep].bg} ${steps[currentStep].color} flex items-center justify-center p-6 shadow-xs`}>
                    <ActiveIcon className="w-16 h-16 md:w-20 md:h-20 stroke-[1.2]" />
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

          {/* Nav buttons */}
          <div className="bg-white border-t border-slate-200 px-6 py-4 flex items-center justify-between">
            <button
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 hover:text-slate-900 disabled:opacity-40 disabled:pointer-events-none px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" /> Anterior
            </button>
            <button
              onClick={handleNext}
              disabled={currentStep === steps.length - 1}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-slate-900 disabled:opacity-40 disabled:pointer-events-none px-4 py-2 rounded-lg cursor-pointer shadow-xs"
            >
              Seguinte <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
