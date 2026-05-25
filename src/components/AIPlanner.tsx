import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Sparkles, Wand2, Copy, FileText, Check, LayoutGrid, Award, Lightbulb, AlertTriangle } from "lucide-react";

export default function AIPlanner() {
  const [activeMode, setActiveMode] = useState<'planner' | 'rubric' | 'activity'>('planner');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [result, setResult] = useState<string>("");

  // Input states
  const [subject, setSubject] = useState("Ciências Naturais");
  const [topic, setTopic] = useState("A Fotossíntese e a importância das plantas");
  const [grade, setGrade] = useState("8º Ano");
  const [duration, setDuration] = useState("90 minutos");
  const [methodology, setMethodology] = useState("Aprendizagem Baseada em Projetos (PBL)");
  const [extras, setExtras] = useState("Incluir uma experiência simples com folhas e luz solar, e um quiz rápido.");

  // Pre-filled quick samples for teachers to test instantly
  const samples = [
    {
      mode: 'planner',
      subject: "Ciências Naturais",
      topic: "A Fotossíntese e a importância das plantas",
      grade: "8º Ano",
      duration: "90 minutos",
      methodology: "Aprendizagem Baseada em Projetos (PBL)",
      extras: "Incluir uma experiência simples com folhas e luz solar, e um quiz rápido."
    },
    {
      mode: 'planner',
      subject: "História",
      topic: "Os Descobrimentos Portugueses e a Rota das Normas",
      grade: "10º Ano",
      duration: "45 minutos",
      methodology: "Dramatização de Diários de Viagem",
      extras: "Focar do ponto de vista do cotidiano de um marinheiro à época."
    },
    {
      mode: 'rubric',
      subject: "Língua Portuguesa",
      topic: "Apresentação Oral sobre uma Obra Literária",
      grade: "9º Ano",
      duration: "Grelha Anual",
      methodology: "Avaliação Formativa e Sumativa",
      extras: "Fazer uma grelha estruturada de 1 a 5 pontos com 4 critérios: Domínio de Conteúdo, Expressão Oral, Recursos Visuais e Gestão de Tempo."
    },
    {
      mode: 'activity',
      subject: "Matemática",
      topic: "Teorema de Pitágoras no mundo real",
      grade: "9º Ano",
      duration: "50 minutos",
      methodology: "Gamificação (Escape Room de mistério)",
      extras: "Criar 3 enigmas onde os alunos usem o teorema para calcular distâncias e encontrar pistas para destrancar a sala virtual."
    }
  ];

  const selectSample = (sample: typeof samples[0]) => {
    setActiveMode(sample.mode as any);
    setSubject(sample.subject);
    setTopic(sample.topic);
    setGrade(sample.grade);
    setDuration(sample.duration);
    setMethodology(sample.methodology);
    setExtras(sample.extras);
  };

  const runGenerator = async () => {
    setLoading(true);
    setResult("");
    setCopied(false);

    const statuses = [
      "A analisar as orientações curriculares...",
      "A redigir os objetivos de aprendizagem (Cognitivo e Atitudinal)...",
      "A desenhar o cronograma passo-a-passo sugerido...",
      "A estruturar estratégias de diferenciação pedagógica...",
      "A criar propostas de avaliação formativa...",
      "Quase pronto! A polir a formatação pedagógica final..."
    ];

    let currentStatusIndex = 0;
    setStatusText(statuses[0]);

    const interval = setInterval(() => {
      if (currentStatusIndex < statuses.length - 1) {
        currentStatusIndex++;
        setStatusText(statuses[currentStatusIndex]);
      }
    }, 2000);

    try {
      let prompt = "";
      let systemInstruction = "És um pedagogo especialista em desenho pedagógico, diferenciação escolar e metodologias ativas. Escreve em Português de Portugal estruturado e motivador.";

      if (activeMode === 'planner') {
        prompt = `Cria um PLANO DE AULA detalhado e profissional com os seguintes parâmetros:
        - Disciplina/Matéria: ${subject}
        - Tema da Aula: ${topic}
        - Ano/Nível Escolar: ${grade}
        - Duração da Sessão: ${duration}
        - Metodologia Pedagógica Principal: ${methodology}
        - Instruções Extra de Conteúdo: ${extras}
        
        O plano deve incluir:
        1. **Título da Aula** (atrativo para alunos)
        2. **Objetivos de Aprendizagem** (alinhados com a taxonomia de Bloom: conceituais e procedimentais)
        3. **Recursos e Materiais** sugeridos
        4. **Estrutura Cronológica da Aula** dividido em minutos (Introdução/Motivação, Exploração Ativa, Consolidação e Síntese)
        5. **Diferenciação Pedagógica**: Como apoiar alunos com maiores dificuldades e como desafiar alunos com ritmos mais céleres.
        6. **Sugestão de Atividade de TPC ou Extensão**`;
      } else if (activeMode === 'rubric') {
        prompt = `Desenha uma GRELHA/RUBRICA DE AVALIAÇÃO pedagógica profissional com os seguintes parâmetros:
        - Matéria/Disciplina: ${subject}
        - Tema/Tarefa a Avaliar: ${topic}
        - Ano/Nível Escolar: ${grade}
        - Abordagem Pedagógica: ${methodology}
        - Detalhes Extra: ${extras}
        
        A grelha deve vir formatada em tabela simples ou blocos de critérios legíveis, contendo:
        1. **Breve introdução** sobre o propósito formativo desta avaliação.
        2. **Definição Clara dos Critérios** (Ex: Domínio Conceptual, Apresentação, Rigor Científico, Trabalho de Equipa).
        3. **Níveis de Desempenho descritos qualitativamente** (Ex: Insuficiente, Suficiente, Bom, Muito Bom, Excelente) explicando exatamente o que um aluno precisa de demonstrar para atingir cada nível de classificação.
        4. **Sugestões de Notas de Feedback Rápido** recomendadas para o professor utilizar.`;
      } else {
        prompt = `Cria uma ATIVIDADE PRÁTICA INTERATIVA e criativa para enriquecer uma aula com os seguintes parâmetros:
        - Disciplina/Área: ${subject}
        - Tema: ${topic}
        - Ano/Nível Escolar: ${grade}
        - Formato/Metodologia: ${methodology}
        - Requisitos Complementares: ${extras}
        
        A atividade deve conter:
        1. **Nome Motivador da Atividade**
        2. **Instruções Detalhadas para o Professor** (Como preparar e iniciar)
        3. **Instruções Diretas para os Alunos** (Claras e em linguagem apropriada para a idade)
        4. **Dinámica de Grupo e Regras**
        5. **Desafio de Resolução Rápida (com respostas / guias de solução para o professor)**`;
      }

      const response = await fetch("/api/gemini/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, systemInstruction })
      });

      const data = await response.json();
      
      if (response.ok) {
        setResult(data.text || "Sem resposta obtida do modelo.");
      } else {
        setResult(`Erro ao comunicar com a IA: ${data.details || data.error}`);
      }
    } catch (err: any) {
      console.error(err);
      setResult(`Ocorreu um erro ao ligar ao servidor: ${err.message || String(err)}`);
    } finally {
      clearInterval(interval);
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(result);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Safe and clean text conversion to HTML to display markdown elements beautifully
  const renderFormattedResult = (text: string) => {
    if (!text) return null;

    // Split text into paragraphs/lines to parse minimal styling safely (headings, bold, lists)
    const lines = text.split("\n");
    return lines.map((line, idx) => {
      const trimmedLine = line.trim();
      
      // Headers
      if (trimmedLine.startsWith("###")) {
        return <h4 key={idx} className="text-base font-bold text-slate-800 mt-4 mb-2 tracking-tight">{trimmedLine.replace("###", "").trim()}</h4>;
      }
      if (trimmedLine.startsWith("##")) {
        return <h3 key={idx} className="text-lg font-bold text-indigo-900 mt-6 mb-3 border-b border-indigo-100 pb-1 tracking-tight">{trimmedLine.replace("##", "").trim()}</h3>;
      }
      if (trimmedLine.startsWith("#")) {
        return <h2 key={idx} className="text-xl font-extrabold text-indigo-950 mt-8 mb-4 tracking-tight">{trimmedLine.replace("#", "").trim()}</h2>;
      }

      // Check bullet items starting with '*' or '-'
      if (trimmedLine.startsWith("*") || trimmedLine.startsWith("-")) {
        // Remove markdown strong markers (**bold**) inside list element
        const content = trimmedLine.substring(1).trim();
        return (
          <ul key={idx} className="list-disc pl-6 py-0.5 space-y-1 text-slate-700 text-sm leading-relaxed">
            <li>{parseBoldText(content)}</li>
          </ul>
        );
      }

      // Check number bullets
      const numMatch = trimmedLine.match(/^(\d+)\.\s(.*)/);
      if (numMatch) {
        return (
          <ol key={idx} className="list-decimal pl-6 py-0.5 text-slate-700 text-sm leading-relaxed">
            <li>{parseBoldText(numMatch[2])}</li>
          </ol>
        );
      }

      // Empty space
      if (trimmedLine === "") {
        return <div key={idx} className="h-2" />;
      }

      // Default paragraph with bold word support
      return <p key={idx} className="text-sm text-slate-700 leading-relaxed mb-3">{parseBoldText(trimmedLine)}</p>;
    });
  };

  // Basic utility to detect and render **bold text** without requiring high-cost markdown modules
  const parseBoldText = (text: string) => {
    const parts = text.split(/\*\*([\s\S]*?)\*\*/g);
    return parts.map((part, i) => {
      // odd indices are enclosed by **
      if (i % 2 === 1) {
        return <strong key={i} className="font-bold text-slate-900">{part}</strong>;
      }
      return part;
    });
  };

  return (
    <section id="ai-playground" className="bg-white border border-slate-200 p-8 md:p-12 rounded-3xl shadow-sm mb-12">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Demonstração Prática de Geração de Conteúdos
          </span>
          <h2 className="text-3xl md:text-3xl font-bold text-slate-900 mt-3 mb-3 tracking-tight">
            Simulador de Geração de Recursos de Apoio (Gemini API)
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm">
            Este simulador interativo utiliza o modelo Gemini da Google. Selecione uma modalidade, ajuste as informações abaixo e clique em gerar para ver como a API estrutura os materiais em segundos.
          </p>
        </div>

        {/* Rapid Choice bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 bg-slate-200/50 p-1.5 rounded-2xl max-w-3xl mx-auto border border-slate-200">
          <button
            onClick={() => setActiveMode('planner')}
            className={`flex items-center gap-2 py-2.5 px-5 rounded-xl text-xs font-semibold transition-all ${activeMode === 'planner' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-700 hover:bg-slate-200'}`}
          >
            <BookOpen className="w-4 h-4" /> Plano de Aula Detalhado
          </button>
          
          <button
            onClick={() => setActiveMode('rubric')}
            className={`flex items-center gap-2 py-2.5 px-5 rounded-xl text-xs font-semibold transition-all ${activeMode === 'rubric' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-700 hover:bg-slate-200'}`}
          >
            <Award className="w-4 h-4" /> Grelha de Avaliação (Rubrica)
          </button>
          
          <button
            onClick={() => setActiveMode('activity')}
            className={`flex items-center gap-2 py-2.5 px-5 rounded-xl text-xs font-semibold transition-all ${activeMode === 'activity' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-700 hover:bg-slate-200'}`}
          >
            <Lightbulb className="w-4 h-4" /> Atividade Prática Ativa
          </button>
        </div>

        {/* Input & Output Config Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Panel */}
          <div className="lg:col-span-5 bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-xs">
            <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wider mb-6 pb-2 border-b border-slate-100 flex items-center justify-between">
              <span>Configuração dos Dados</span>
              <span className="text-2xs bg-blue-50 text-blue-600 font-semibold px-2 py-1.5 rounded-md">Atalho IA</span>
            </h3>

            {/* Quick Demo Pre-fills */}
            <div className="mb-6">
              <span className="text-[11px] font-semibold text-slate-500 block mb-2">Preencher Configurações de Exemplo:</span>
              <div className="flex flex-wrap gap-1.5">
                <button
                  onClick={() => selectSample(samples[0])}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-2xs px-2.5 py-1.5 rounded-md transition-all font-medium"
                >
                  🧬 Ciências (Fotossíntese)
                </button>
                <button
                  onClick={() => selectSample(samples[1])}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-2xs px-2.5 py-1.5 rounded-md transition-all font-medium"
                >
                  ⛵ História (Descobrimentos)
                </button>
                <button
                  onClick={() => selectSample(samples[2])}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-2xs px-2.5 py-1.5 rounded-md transition-all font-medium"
                >
                  💬 Oralidade (Grelha Português)
                </button>
                <button
                  onClick={() => selectSample(samples[3])}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 text-2xs px-2.5 py-1.5 rounded-md transition-all font-medium"
                >
                  📐 Pitágoras (Scape Room)
                </button>
              </div>
            </div>

            <div className="space-y-4 text-left">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Disciplina ou Áreas Críticas:</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-350 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 font-medium"
                  placeholder="Ex: Ciências Naturais, Matemática, História"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Ano / Nível de Ensino:</label>
                <input
                  type="text"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-350 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  placeholder="Ex: 8º Ano, 3º Ciclo, Secundário"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Duração Estimada:</label>
                  <input
                    type="text"
                    value={duration}
                    onChange={(e) => setDuration(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-350 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                    placeholder="Ex: 90 minutos"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Metodologia sugerida:</label>
                  <input
                    type="text"
                    value={methodology}
                    onChange={(e) => setMethodology(e.target.value)}
                    className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-350 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                    placeholder="Ex: Ensino por Descoberta, STEAM"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Conteúdo/Tema para a Sessão:</label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-lg border border-slate-350 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50"
                  placeholder="Ex: A fotossíntese e a importância para a vida"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Diretivas Extra, Atividades ou Notas adicionais:</label>
                <textarea
                  value={extras}
                  onChange={(e) => setExtras(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 h-24 rounded-lg border border-slate-350 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-slate-50 resize-none leading-relaxed"
                  placeholder="Ex: Adicionar uma atividade experimental de laboratório simples, TPC com reflexão diária."
                />
              </div>

              <button
                onClick={runGenerator}
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-slate-900 disabled:bg-slate-400 py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer select-none"
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>A Processar...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    <span>Interagir com a IA do Gemini</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Outputs Panel */}
          <div className="lg:col-span-7 h-full flex flex-col">
            <div className="bg-slate-900 text-slate-100 rounded-2xl flex flex-col flex-grow border border-slate-800 shadow-md min-h-[440px]">
              
              {/* Output Header bar */}
              <div className="flex items-center justify-between border-b border-slate-800/80 px-6 py-4 bg-slate-900/60 rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-300 tracking-wider uppercase">Visualizador da Sessão</span>
                </div>
                {result && !loading && (
                  <button
                    onClick={handleCopy}
                    className="flex items-center gap-1 text-slate-400 hover:text-white bg-slate-800/60 border border-slate-700 px-3 py-1.5 rounded-lg text-2xs transition-all pointer-events-auto"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-green-400" />
                        <span className="text-green-400 font-bold">Copiado!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copiar Tudo</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* Console Output Area */}
              <div className="p-6 md:p-8 flex-grow overflow-y-auto max-h-[500px] text-left">
                <AnimatePresence mode="wait">
                  {loading && (
                    <motion.div
                      key="loading"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex flex-col items-center justify-center h-full min-h-[300px] text-center"
                    >
                      <span className="w-12 h-12 border-3 border-indigo-400 border-t-transparent rounded-full animate-spin mb-4" />
                      <p className="text-slate-200 font-medium text-sm animate-pulse">{statusText}</p>
                      <p className="text-slate-500 text-xs mt-1">Processando através do servidor seguro Express da escola.</p>
                    </motion.div>
                  )}

                  {!loading && !result && (
                    <motion.div
                      key="empty"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex flex-col items-center justify-center h-full text-center py-16"
                    >
                      <div className="bg-slate-800 border border-slate-700/50 p-4 rounded-full mb-4">
                        <Sparkles className="w-8 h-8 text-slate-500" />
                      </div>
                      <h4 className="font-bold text-slate-300 mb-2 text-sm">O seu material será renderizado aqui!</h4>
                      <p className="text-slate-500 text-xs max-w-sm px-4 leading-relaxed">
                        Preencha as configurações ao lado esquerdo ou escolha um dos atalhos rápidos de exemplo e clique em <strong>&quot;Interagir com a IA&quot;</strong> para ver a mágica do Gemini.
                      </p>
                    </motion.div>
                  )}

                  {!loading && result && (
                    <motion.div
                      key="result"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-slate-950/40 p-5 rounded-xl border border-slate-800 text-slate-100 font-sans overflow-x-auto select-text prose prose-invert"
                    >
                      {/* Formatted result layout */}
                      {renderFormattedResult(result)}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            </div>
          </div>

        </div>

        {/* Pro Tip/Insights for Teachers */}
        <div className="mt-8 p-5 bg-blue-50/50 border border-blue-200 rounded-2xl flex items-start gap-4">
          <div className="bg-blue-100 border border-blue-200 p-2.5 rounded-xl text-blue-700 shrink-0">
            <LayoutGrid className="w-5 h-5" />
          </div>
          <div className="text-left">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">Como levar isto para as suas aulas?</h4>
            <p className="text-xs text-slate-600 leading-relaxed md:max-w-4xl">
              Utilizando o Google AI Studio, o professor pode modelar roteiros inteiros como as opções testadas aqui. Se pretender automatizar isto na escola de forma definitiva, pode premir no botão de código duma prompt testada, e com apenas uma linha ligá-lo a um formulário onde todos os colegas professores geram planos à velocidade da luz.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
