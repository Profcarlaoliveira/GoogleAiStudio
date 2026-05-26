import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Code, Layout, ArrowRight, CheckCircle2, Terminal, PlayCircle, Laptop, Sparkles, HelpCircle, Copy, Check } from "lucide-react";

export default function BuildVsCode() {
  const [activeTab, setActiveTab] = useState<'both' | 'build' | 'code'>('both');
  const [testScenario, setTestScenario] = useState<string>('');
  const [scenarioAnswer, setScenarioAnswer] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scenarios = [
    {
      question: "Quero criar um simulador interativo de fotossíntese para os meus alunos usarem em computadores e telemóveis.",
      choice: "Build",
      reason: "Porque quer uma aplicação web interativa e pronta a correr, onde os alunos possam clicar em botões e ver reações químicas animadas. O Build constrói todo o código de interface gráfica para si!"
    },
    {
      question: "Quero criar um script automatizado que lê 50 redações de alunos no Google Sheets e dá feedback detalhado com base numa grelha específica.",
      choice: "Code",
      reason: "Porque precisa de automatizar um fluxo de dados. No Code, pode ajustar a 'Instrução do Sistema' com a sua grelha de avaliação, testar respostas e obter o código em Python para correr no seu Sheets ou Google Colab."
    },
    {
      question: "Quero experimentar prompts para criar problemas de matemática inovadores e depois exportar o prompt para meter num portal da escola.",
      choice: "Code",
      reason: "O Code é o playground perfeito para testar texto. Permite afinar variáveis como a 'Temperatura' (criatividade do modelo) e gerar códigos de API limpos em Node.js ou Javascript para integrar no portal."
    },
    {
      question: "Quero disponibilizar um assistente digital no meu website de turma para ajudar os alunos a esclarecer dúvidas de história.",
      choice: "Build",
      reason: "O Build permite criar e ver de imediato a interface gráfica de conversação (chatbot). Pode pedir ao agente do Build para construir um chat com histórico, um visual temático medieval e barras de progresso."
    },
    {
      question: "Quero carregar a planificação anual da minha disciplina em PDF (150 páginas) e pedir ideias de fichas de trabalho personalizadas.",
      choice: "Code",
      reason: "Porque o Code suporta uma imensa janela de contexto, permitindo carregar PDFs extensos no painel lateral de ficheiros e fazer testes interativos e sistemáticos do comportamento do prompt."
    },
    {
      question: "Quero criar uma calculadora interativa onde o aluno insere a sua nota de testes e de trabalhos e recebe um gráfico estético com o seu progresso.",
      choice: "Build",
      reason: "Uma app com caixas numéricas e gráficos interativos é perfeita para o modo Build. O assistente cria o design visual completo e interativo em meros segundos!"
    },
    {
      question: "Quero afinar um modelo para responder estritamente no formato estruturado JSON com respostas de escolha múltipla para importar no Moodle.",
      choice: "Code",
      reason: "O Code tem uma opção dedicada na barra lateral para forçar o output do modelo no formato estruturado (Schema JSON), garantindo que nada falha ao importar no seu Moodle."
    },
    {
      question: "Quero construir um gerador de guiões de laboratório com cronómetros e listas de segurança clicáveis para as aulas práticas de química.",
      choice: "Build",
      reason: "Trata-se de um utilitário prático com componentes táteis e interativos (cronómetro, checklist). O Build resolve isto de imediato com um layout reativo limpo."
    }
  ];

  const handleScenarioCheck = (scen: typeof scenarios[0]) => {
    setTestScenario(scen.question);
    setScenarioAnswer(`A opção ideal é o **Começar com ${scen.choice}**! \n\n**Porquê?** ${scen.reason}`);
  };

  // State for Custom Interactive Questionnaire
  const [goal, setGoal] = useState<string>('');
  const [fileType, setFileType] = useState<string>('');
  const [targetUser, setTargetUser] = useState<string>('');
  const [customRecommendation, setCustomRecommendation] = useState<{
    mode: string;
    description: string;
    tips: string[];
    samplePrompt: string;
  } | null>(null);

  const calculateCustomRecommendation = (g: string, f: string, t: string) => {
    if (!g || !f || !t) return;

    let mode = '';
    let description = '';
    let tips: string[] = [];
    let samplePrompt = '';

    if (g === 'interactive' || t === 'students') {
      mode = 'Modo BUILD (Interface de App)';
      description = 'O seu objetivo principal necessita de uma interface gráfica amigável, botões clicáveis, ou destina-se a ser partilhado diretamente com os alunos. O modo Build simplifica tudo, desenhando os ecrãs e fluxos visuais prontos a usar.';
      tips = [
        'Descreva detalhadamente como quer que os botões se comportem.',
        'Se pretender, use a integração com Netlify descrita no separador "Como Publicar" para obter um website eterno gratuito.',
        'Peça ao assistente para criar temas claros, escuros ou cartões didáticos dinâmicos para tornar as aulas mais apelativas.'
      ];
      samplePrompt = `Cria um simulador interativo para aulas de Ciências Naturais de 8.º ano sobre "Sistema Solar". Quero um ecrã com uma simulação visual em que os planetas rodem em redor do Sol, um botão para controlar a velocidade da órbita e um questionário dinâmico de 3 perguntas rápidas com feedback imediato para os alunos.`;
    } else {
      mode = 'Modo CODE (Foco no Modelo & API)';
      description = 'O seu propósito envolve forte processamento pedagógico sob diretrizes exatas, uso de materiais complexos como PDFs escolares, ou necessita de códigos de exportação limpos. O modo Code na consola tradicional dar-lhe-á a precisão necessária.';
      tips = [
        'Use as Instruções de Sistema (System Instructions) para ditar as regras éticas e o tom de voz pedagógico do modelo.',
        'Configure a Temperatura baixa (e.g., 0.2 a 0.4) para obter avaliações rigorosas ou alta (e.g., 0.8 a 1.0) para gerar ideias de aula criativas.',
        'Selecione o modelo Gemini Pro caso queira processar redações longas e materiais escolares complexos e pesados.'
      ];
      samplePrompt = `Atua como avaliador pedagógico e mentor científico para relatórios de laboratório de Física de 11.º ano. Analisa o PDF de planificação e o trabalho enviado pelo aluno e extrai uma análise estruturada contendo:\n1) Resumo da experiência\n2) Identificação de desvios experimentais mais comuns\n3) Um parágrafo de feedback formativo construtivo e positivo para incentivar o aluno.`;
    }

    setCustomRecommendation({ mode, description, tips, samplePrompt });
  };

  const resetCustomForm = () => {
    setGoal('');
    setFileType('');
    setTargetUser('');
    setCustomRecommendation(null);
  };

  return (
    <section id="build-vs-code" className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm mb-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Arquitetura e Metodologias do Estúdio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-3 mb-4 tracking-tight">
            Iniciar por &quot;Build&quot; ou por &quot;Code&quot;?
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm">
            Ao aceder ao Google AI Studio, depara-se com duas formas fundamentais de interagir com o Gemini. Ambas aproveitam a inteligência do modelo, mas destinam-se a fins e perfis inteiramente diferentes.
          </p>
        </div>

        {/* Visual Selector Tabs */}
        <div className="flex bg-slate-100 p-1.5 rounded-xl justify-center gap-1 max-w-md mx-auto mb-10 border border-slate-200/60 font-sans">
          <button 
            onClick={() => setActiveTab('both')}
            className={`flex-1 py-2.5 px-4 text-xs font-semibold rounded-lg transition-all duration-200 ${activeTab === 'both' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Lado a Lado
          </button>
          <button 
            onClick={() => setActiveTab('build')}
            className={`flex-1 py-2.5 px-4 text-xs font-semibold rounded-lg transition-all duration-200 ${activeTab === 'build' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Foco no BUILD
          </button>
          <button 
            onClick={() => setActiveTab('code')}
            className={`flex-1 py-2.5 px-4 text-xs font-semibold rounded-lg transition-all duration-200 ${activeTab === 'code' ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'}`}
          >
            Foco no CODE
          </button>
        </div>

        {/* Animate Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'both' && (
            <motion.div 
              key="both"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Build Box */}
              <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-8 rounded-2xl relative shadow-sm">
                <div className="absolute top-4 right-4 bg-blue-100 text-blue-700 text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
                  <Sparkles className="w-3 h-3" /> Sem Programação
                </div>
                <div className="text-blue-600 mb-4 bg-blue-100/50 w-12 h-12 rounded-xl flex items-center justify-center border border-blue-200">
                  <Layout className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Opção BUILD (Interface de App)</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Permite-lhe <strong>descrever um software ou recurso interativo</strong> em linguagem humana (Português corrido), e o assistente cria um aplicativo funcional imediatamente visível e editável.
                </p>
                
                <h4 className="font-semibold text-slate-800 text-sm mb-3">Principais Vantagens:</h4>
                <ul className="space-y-2.5 text-sm text-slate-600 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span><strong>Imediato:</strong> Interage com botões, listas, animações e gráficos de forma visual e intuitiva.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span><strong>Autonomia:</strong> Desenha e distribui as suas próprias ferramentas web completas sem precisar de programar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                    <span><strong>Iterativo:</strong> Modifique a app dizendo apenas &quot;Muda as cores para o tema escuro&quot; ou &quot;Adiciona um botão de exportar PDF&quot;.</span>
                  </li>
                </ul>

                <div className="bg-blue-100/30 p-4 rounded-xl border border-blue-100/60 text-xs text-blue-900 leading-relaxed">
                  <strong>Ideal para:</strong> Criar simuladores conceituais, calculadoras à medida, geradores de questionários, jogos textuais interativos e painéis visuais rápidos para partilhar através de links directos.
                </div>
              </div>

              {/* Code Box */}
              <div className="bg-gradient-to-br from-indigo-50 to-white border border-indigo-100 p-8 rounded-2xl relative shadow-sm">
                <div className="absolute top-4 right-4 bg-indigo-100 text-indigo-700 text-xs px-2.5 py-1 rounded-full font-bold flex items-center gap-1">
                  <Terminal className="w-3 h-3" /> Foco na API e Modelo
                </div>
                <div className="text-indigo-600 mb-4 bg-indigo-100/50 w-12 h-12 rounded-xl flex items-center justify-center border border-indigo-200">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Opção CODE (Foco no Modelo & API)</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  É a tradicional &quot;bancada de trabalho&quot; da API. Serve para <strong>configurar instruções de sistema, comportamentos exatos do modelo e regras</strong>, obtendo o código de integração chave para usar onde quiser.
                </p>

                <h4 className="font-semibold text-slate-800 text-sm mb-3">Principais Vantagens:</h4>
                <ul className="space-y-2.5 text-sm text-slate-600 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                    <span><strong>Controlo de Parâmetros:</strong> Defina valores de temperatura, limites de segurança e filtros de segurança.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                    <span><strong>Exportação Fácil:</strong> Obtenha o código exato em Python, cURL, JavaScript, Node.js ou Swift pronto a copiar.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                    <span><strong>Elevada Janela de Contexto:</strong> Alimente o modelo com PDFs volumosos ou áudios pesados e teste as suas respostas estruturadas.</span>
                  </li>
                </ul>

                <div className="bg-indigo-100/30 p-4 rounded-xl border border-indigo-100/60 text-xs text-indigo-900 leading-relaxed">
                  <strong>Ideal para:</strong> Desenhar prompts complexos com PDFs de apoio em anexo, automatizar o processamento de folhas de cálculo via script, e integrar o cérebro do Gemini em qualquer sistema existente.
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'build' && (
            <motion.div 
              key="build"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-slate-50 border border-slate-200 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Layout className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-slate-900">Como funciona a Metodologia BUILD</h3>
              </div>
              <p className="text-slate-700 leading-relaxed mb-6 font-sans">
                Imagine que quer criar um simulador interativo, como uma simulação de laboratório ou um jogo educativo onde os seus utilizadores tomam decisões. Com o modo <strong>Build</strong>, basta pedir em linguagem natural: 
                <br />
                <span className="text-sm bg-blue-100/50 text-blue-900 px-2 py-1 rounded inline-block my-2 border border-blue-200 font-mono">
                  &quot;Faz uma aventura em texto em que o participante assume o papel de um explorador científico. Dá-lhe escolhas com pontuação de decisão de risco e mostra um gráfico com o perfil no final.&quot;
                </span>
                <br />
                O estúdio irá estruturar toda a lógica, os componentes visuais de botões, barras de progresso e o layout responsivo automaticamente. <strong>Sem programar!</strong> O resultado é uma app web moderna que pode partilhar de imediato.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-white border border-slate-200 rounded-lg">
                  <span className="font-bold text-blue-600 block mb-1">Passo 1: Descrever</span>
                  Peça em português simples as regras de negócio, o visual pretendido e a finalidade da app.
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg">
                  <span className="font-bold text-blue-600 block mb-1">Passo 2: Gerar</span>
                  O assistente gera toda a interface gráfica interativa de forma instantânea.
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg">
                  <span className="font-bold text-blue-600 block mb-1">Passo 3: Partilhar</span>
                  Disponibiliza um link ou exporta os ficheiros para o Netlify para alojamento público gratuito.
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'code' && (
            <motion.div 
              key="code"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="bg-slate-50 border border-slate-200 p-8 rounded-2xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Code className="w-8 h-8 text-indigo-600" />
                <h3 className="text-2xl font-bold text-slate-900">Como funciona a Engenharia no modo CODE</h3>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4 font-sans">
                O modo <strong>Code</strong> é a central de engenharia e modelabilidade. É ideal para calibrar a inteligência do Gemini. Pode introduzir um PDF em anexo no painel de contexto como manuais, regulamentos ou tabelas de dados de teste, e calibrar com precisão a <strong>Instrução de Sistema (System Instruction)</strong>:
                <br />
                <span className="text-sm bg-indigo-100/50 text-indigo-900 px-3 py-1.5 rounded inline-block my-2 border border-indigo-200 font-mono">
                  &quot;Tu és o professor corretor da escola. Com base no PDF letivo anexado, analisa pedagogicamente as resoluções anónimas anexadas (ex: Resposta do Aluno A, Aluno B, sem qualquer identificação de dados pessoais) identificando se estão em conformidade com os objetivos de aprendizagem. Devolve sempre a análise estruturada numa tabela.&quot;
                </span>
                <br />
                Uma vez validado o comportamento, clica em <strong>&quot;Get Code&quot;</strong> e exporta o código na sua linguagem favorita para automatizar sistemas externos ou programar scripts locais!
              </p>

              {/* Conspicuous Ethics & Privacy Alert Callout */}
              <div className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-xs text-amber-900 leading-relaxed mb-6 font-sans">
                <div className="font-bold flex items-center gap-1.5 text-amber-800 uppercase tracking-wide mb-1.5">
                  <span>🚨 Proteção de Dados e Ética Pedagógica (RGPD)</span>
                </div>
                <p>
                  <strong>Regra de Ouro:</strong> Nunca insira dados pessoais dos seus alunos (como nomes, e-mails, números de identificação ou pormenores que permitam identificá-los) em ferramentas e modelos de IA públicos ou comerciais. Para corrigir ou analisar trabalhos, <strong>substitua sempre os nomes por identificadores genéricos</strong> (ex: <i>&quot;Aluno A&quot;</i>, <i>&quot;Resposta 1&quot;</i>) e certifique-se de que os PDFs em anexo não contêm cabeçalhos com dados privados.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 bg-white border border-slate-200 rounded-lg">
                  <span className="font-bold text-indigo-600 block mb-1">Entrada Estruturada</span>
                  Defina exatamente as tarefas do modelo usando System Instructions e teste cenários com ficheiros reais.
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg">
                  <span className="font-bold text-indigo-600 block mb-1">Integração Externa</span>
                  Exporte o modelo em código e execute-o em programas locais, scripts do Moodle, Telegram ou Colab.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Interactive Scenario Quiz helper */}
        <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-200">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-blue-600" />
            <h4 className="text-base font-bold text-slate-800">Simulador de Decisão do Professor: O que devo usar?</h4>
          </div>
          <p className="text-xs text-slate-500 mb-4">
            Escolha um cenário comum de planeamento ou avaliação escolar para ver qual das opções é a sua aliada mais forte:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
            {scenarios.map((scen, index) => (
              <button
                key={index}
                onClick={() => handleScenarioCheck(scen)}
                className={`text-left p-3.5 rounded-xl text-xs transition-all border ${testScenario === scen.question ? 'bg-blue-50 border-blue-500 text-blue-900 font-medium' : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700'}`}
              >
                {scen.question}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {testScenario && (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="bg-white border border-green-250 p-5 rounded-xl shadow-xs"
              >
                <div className="text-sm font-semibold text-emerald-700 flex items-center gap-1.5 mb-2">
                  <PlayCircle className="w-4 h-4" /> Recomendação da IA:
                </div>
                <div className="text-sm text-slate-700 whitespace-pre-line leading-relaxed pb-1">
                  {scenarioAnswer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Dynamic Custom Questionnaire */}
        <div className="mt-8 p-6 bg-slate-100/40 rounded-2xl border border-slate-200/60 font-sans">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-5 h-5 text-blue-600" />
            <h4 className="text-base font-bold text-slate-900">Gerador de Decisão Dinâmico Personalizado</h4>
          </div>
          <p className="text-xs text-slate-500 mb-6 leading-relaxed">
            Não encontrou o seu caso exato acima? Responda a 3 perguntas simples sobre o seu objetivo pedagógico real para ver de imediato qual o modo e os parâmetros seguros de que precisa em Google AI Studio:
          </p>

          <div className="space-y-5">
            {/* Question 1: Goal */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2 select-none">
                1. Qual é o formato final pretendido para a atividade?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => { setGoal('interactive'); calculateCustomRecommendation('interactive', fileType, targetUser); }}
                  className={`p-3 text-left rounded-xl text-xs border transition-all cursor-pointer ${goal === 'interactive' ? 'bg-blue-600 text-white border-blue-600 font-medium' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-350'}`}
                >
                  <strong className="block mb-1">Visual & Interativo (App)</strong>
                  Quero botões, caixas de entrada numéricas, gráficos, barras de progresso ou cronómetros clicáveis para interação autónoma.
                </button>
                <button
                  type="button"
                  onClick={() => { setGoal('backend'); calculateCustomRecommendation('backend', fileType, targetUser); }}
                  className={`p-3 text-left rounded-xl text-xs border transition-all cursor-pointer ${goal === 'backend' ? 'bg-blue-600 text-white border-blue-600 font-medium' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-350'}`}
                >
                  <strong className="block mb-1">Lógica, Automação ou Escrita</strong>
                  Quero processar PDFs complexos, grelhas de critérios, analisar redações anonimizadas ou extrair scripts para o Moodle.
                </button>
              </div>
            </div>

            {/* Question 2: Files */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2 select-none">
                2. Vai carregar manuais ou ficheiros letivos muito extensos?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => { setFileType('large'); calculateCustomRecommendation(goal, 'large', targetUser); }}
                  className={`p-3 text-left rounded-xl text-xs border transition-all cursor-pointer ${fileType === 'large' ? 'bg-blue-600 text-white border-blue-600 font-medium' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-350'}`}
                >
                  <strong className="block mb-1">Sim, de grande volume (PDFs, Livros)</strong>
                  Preciso que o modelo consulte regulamentos, planificações anuais detalhadas ou exames nacionais de apoio.
                </button>
                <button
                  type="button"
                  onClick={() => { setFileType('simple'); calculateCustomRecommendation(goal, 'simple', targetUser); }}
                  className={`p-3 text-left rounded-xl text-xs border transition-all cursor-pointer ${fileType === 'simple' ? 'bg-blue-600 text-white border-blue-600 font-medium' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-350'}`}
                >
                  <strong className="block mb-1">Não / Textos Curtos ou Prompts Diretos</strong>
                  Apenas pretendo produzir exercícios, corrigir pequenos enunciados ou gerar dinâmicas rápidas de brainstorming de aula.
                </button>
              </div>
            </div>

            {/* Question 3: Audience */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide mb-2 select-none">
                3. Quem usará diretamente o produto gerado na escola?
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => { setTargetUser('students'); calculateCustomRecommendation(goal, fileType, 'students'); }}
                  className={`p-3 text-left rounded-xl text-xs border transition-all cursor-pointer ${targetUser === 'students' ? 'bg-blue-600 text-white border-blue-600 font-medium' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-350'}`}
                >
                  <strong className="block mb-1">Estudantes / Turmas</strong>
                  Eles vão manipular a ferramenta de estudo diretamente durante as aulas ou em casa para auto-estudo.
                </button>
                <button
                  type="button"
                  onClick={() => { setTargetUser('teacher_or_system'); calculateCustomRecommendation(goal, fileType, 'teacher_or_system'); }}
                  className={`p-3 text-left rounded-xl text-xs border transition-all cursor-pointer ${targetUser === 'teacher_or_system' ? 'bg-blue-600 text-white border-blue-600 font-medium' : 'bg-white border-slate-200 text-slate-700 hover:border-slate-350'}`}
                >
                  <strong className="block mb-1">Eu (Professor) ou Scripts Automatizados</strong>
                  O meu foco é otimizar tempo, analisar resoluções anonimizadas ou programar pequenos scripts locais.
                </button>
              </div>
            </div>

            {/* Reset Form Button */}
            {(goal || fileType || targetUser) && (
              <div className="pt-2 text-right">
                <button
                  onClick={resetCustomForm}
                  className="text-xs text-red-600 hover:text-red-700 font-bold uppercase tracking-wider cursor-pointer"
                >
                  Limpar Respostas
                </button>
              </div>
            )}
          </div>

          {/* Results Output Block */}
          <AnimatePresence mode="wait">
            {customRecommendation && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mt-6 p-5 bg-white border border-blue-200 rounded-2xl shadow-xs"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-3">
                  🚀 Recomendação Atribuída: {customRecommendation.mode}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {customRecommendation.description}
                </p>
                <div className="space-y-2 border-t border-slate-100 pt-3">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider">
                    Dicas Práticas & Segurança para Professores:
                  </span>
                  {customRecommendation.tips.map((tip, idx) => (
                    <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-700 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                      <span>{tip}</span>
                    </div>
                  ))}
                </div>

                {/* Styled Prompt Example with Copy Utility */}
                <div className="mt-4 border-t border-slate-100 pt-4">
                  <span className="text-[10px] font-bold uppercase text-slate-400 block tracking-wider mb-2">
                    💡 Exemplo de Prompt Recomendado (Copie e use no Google AI Studio):
                  </span>
                  <div className="relative p-4 bg-slate-50 border border-slate-205 rounded-xl text-slate-700 leading-relaxed pr-12 select-text whitespace-pre-line font-sans text-xs">
                    <p className="italic text-slate-800">{customRecommendation.samplePrompt}</p>
                    <button
                      onClick={() => copyToClipboard(customRecommendation.samplePrompt)}
                      title="Copiar prompt"
                      className="absolute top-3 right-3 p-1.5 bg-white hover:bg-slate-100 border border-slate-200 rounded-lg text-slate-500 hover:text-slate-850 transition-all cursor-pointer shadow-3xs flex items-center justify-center shrink-0"
                    >
                      {copied ? (
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    {copied && (
                      <span className="absolute bottom-3 right-3 text-[9px] font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-100 leading-none">
                        Copiado!
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
