import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Terminal, 
  Settings, 
  Key, 
  Globe, 
  MapPin, 
  Code, 
  FileText, 
  Check, 
  Layers, 
  Search, 
  Compass, 
  Cpu, 
  Sparkles,
  ArrowRight,
  Info,
  Sliders,
  Play,
  HelpCircle,
  HelpCircle as QuestionIcon
} from "lucide-react";

interface ToolInfo {
  id: string;
  name: string;
  badge: "Recomendado" | "Avançado" | "Foco Didático" | "Tempo Real" | "Sistemas";
  category: "Parâmetros" | "Grounding" | "Avançados";
  description: string;
  howToUse: string;
  teacherUsecase: string;
  simulationInput: string;
  simulationOutput: string;
}

export default function ConsoleExplorer() {
  const [activeTab, setActiveTab ] = useState<'sidebar' | 'tools' | 'playground-cards'>('tools');
  const [sidebarClick, setSidebarClick] = useState<string>("playground");
  const [playgroundSubTab, setPlaygroundSubTab] = useState<'models' | 'agents'>('models');
  const [selectedPlaygroundCard, setSelectedPlaygroundCard] = useState<string>("featured");
  
  // Interactive tools panel simulation (from screenshot!)
  const [toolsState, setToolsState] = useState({
    structured: true,
    code_exec: false,
    fn_calling: false,
    search_ground: true,
    maps_ground: false,
    url_context: false,
  });

  const [selectedTool, setSelectedTool] = useState<string>("search_ground");

  const playgroundModelsList = [
    {
      id: "featured",
      name: "Featured",
      desc: "Test out our most advanced and newest models.",
      label: "Modelos em Destaque",
      practical: "Acesso direto aos modelos mais inteligentes (ex: Gemini 2.5 Pro ou experimentais) para avaliar raciocínio profundo antes de criar aplicações.",
      pedagogical: "Excelente para avaliar a inteligência do modelo de raiz face a questões teóricas nacionais complexas (ex: Exames Nacionais de Biologia/Geologia).",
      prompt: "Analisa a seguinte questão de Exame Nacional do Secundário e explica a resposta correta passo a passo com base na matriz oficial..."
    },
    {
      id: "code_chat",
      name: "Code and Chat",
      desc: "Build chatbots, agents, and code with Gemini 3.",
      label: "Conversação e Programação",
      practical: "A consola clássica de chat interativo do Google AI Studio para fazer perguntas abertas, manter histórico e obter sugestões de código.",
      pedagogical: "Desenho iterativo de prompts educativos. O professor pode ajustar a conversa de forma dinâmica e testar o tom de voz da IA.",
      prompt: "Cria uma simulação onde és um filósofo grego (Sócrates) e questionas o utilizador usando o método maiêutico nas respostas."
    },
    {
      id: "image_gen",
      name: "Image Generation",
      desc: "Create and edit images with Nano Banana and Imagen.",
      label: "Geração de Apoio Visual",
      practical: "Editor visual integrado que converte as suas descrições escritas em ilustrações ou fotos de alta qualidade.",
      pedagogical: "Criação de materiais e recursos de apoio visuais livres de direitos de autor, ótimos para capas de fichas de trabalho ou slides interativos.",
      prompt: "Gera uma ilustração minimalista e clara, estilo vetor límpido, de uma molécula tridimensional de Clorofila para fins de biologia escolar."
    },
    {
      id: "video_gen",
      name: "Video Generation",
      desc: "Generate videos with Veo models, our state of the art video generation models.",
      label: "Geração de Vídeo Curto",
      practical: "Geração de breves blocos visuais e clips em movimento de alta fidelidade recorrendo aos novos modelos físicos Veo da Google.",
      pedagogical: "Produção de vídeos demonstrativos de processos difíceis de ilustrar em tempo real na aula (ex: erupção de vulcão ou placas tectónicas).",
      prompt: "Gera uma animação curta e em close-up de uma célula animal a dividir-se por mitose, mostrando os cromossomas a afastar-se."
    },
    {
      id: "speech_music",
      name: "Speech and Music",
      desc: "Explore our text to speech and music generation models.",
      label: "Voz e Fundo Musical",
      practical: "Conversor de PDFs e textos escritos em ficheiros de voz falada de elevada expressividade natural ou produção de melodias.",
      pedagogical: "Promover a acessibilidade e inclusão de conteúdos de suporte para estudantes cegos, ou sonorização temática de projetos letivos de gamificação.",
      prompt: "Cria um arquivo de voz falada em tons calmos a ler o poema 'Mar Português' de Fernando Pessoa para usar no apoio de Língua Portuguesa."
    },
    {
      id: "real_time",
      name: "Real-time",
      desc: "Real-time voice and video with Live API.",
      label: "Multimodalidade Ligeira (Live API)",
      practical: "Sessões dinâmicas de voz falada e vídeo em tempo real com atraso nulo de resposta, powered de forma nativa por Live API.",
      pedagogical: "Prática intensiva de línguas estrangeiras no formato oral. O estudante fala diretamente de viva voz com a IA, praticando a oralidade.",
      prompt: "Atua como um examinador e falante nativo de inglês que está a realizar uma entrevista de nível B2 para aferir a fluência oral do aluno."
    }
  ];

  const playgroundAgentsList = [
    {
      id: "antigravity",
      name: "Antigravity Preview",
      desc: "A general-purpose autonomous agent running in a remote, Google-hosted Linux environment.",
      label: "Agente Autónomo Linux",
      practical: "Agente inovador autónomo que consegue navegar num terminal Linux virtual da Google, executar comandos de shell e rever códigos.",
      pedagogical: "Cenários interativos avançados nas disciplinas tecnológicas ou profissionais de informática para demonstrar a administração de sistemas.",
      prompt: "Instala pacotes básicos de Python e corre uma simulação estatística para verificar o crescimento populacional, corrigindo falhas..."
    },
    {
      id: "talk_radio",
      name: "AI Talk Radio",
      desc: "Transforms a text source into a polished, simulated radio show with hosts, callers, and background music.",
      label: "Geração de Rádio/Podcasts",
      practical: "Converte de forma automática manuscritos de texto em diálogos de rádio realistas com locutores virtuais, fintas e música no fundo.",
      pedagogical: "Excelente para a aprendizagem auditiva. O professor converte um tema teórico comprido num podcast de rádio cativante para os alunos.",
      prompt: "Transforma o seguinte ensaio sobre o Iluminismo numa emissão de rádio com dois debatedores dinâmicos e uma chamada de ouvinte."
    },
    {
      id: "support",
      name: "Customer Support",
      desc: "Scans a website to build a custom knowledge base and answer support questions using that content.",
      label: "Suporte e Dúvidas Frequentes",
      practical: "Analisa portais de internet, manuais de conduta ou regras para estruturar um assistente que responde unicamente sobre esse documento.",
      pedagogical: "Desenvolve um consultor do Regulamento Geral da Escola ou do plano de estudos para que alunos e famílias esclareçam regras de forma imediata.",
      prompt: "Lê o regulamento de avaliação escolar fornecido neste endereço e responde estritamente a dúvidas sobre prazos e recursos de classificação."
    },
    {
      id: "data_analyst",
      name: "Data Analyst",
      desc: "Delivers interactive business intelligence and data analysis using the Microsoft Northwind dataset.",
      label: "Analista de Dados / Estatística",
      practical: "Processa tabelas numéricas, calcula tendências de médias e entrega visualizações gráficas e relatórios analíticos limpos.",
      pedagogical: "Auxilia o professor no cálculo estatístico de turma, identificando de imediato percentis de sucesso e pontos críticos de insucesso.",
      prompt: "Importa a tabela de notas agregadas deste trimestre escolar e gera um sumário detalhado identificando quais os principais eixos de reforço."
    },
    {
      id: "doc_proc",
      name: "Document Processor",
      desc: "Reconciles expenses and invoices, verifies vendors, and creates interactive HTML slideshow reports.",
      label: "Tratamento de Documentos de Apoio",
      practical: "Analisa múltiplos documentos PDF (recibos, relatórios didáticos) com cruzamento matemático e compila em apresentações HTML limpas.",
      pedagogical: "Apoiar a organização burocrática e faturas em disciplinas lúdicas de Literacia Financeira ou triagem de documentação institucional.",
      prompt: "Lê e analisa os 3 relatórios escolares anexados de forma autónoma e gera um ecrã HTML limpo que resuma as principais áreas temáticas..."
    },
    {
      id: "repo_maint",
      name: "Repo Maintainer",
      desc: "Analyzes your codebase to identify issues, answer questions, and generate bug-fixing patches.",
      label: "Revisor e Corretor Técnico",
      practical: "Um analisador técnico que vasculha pastas de código para detetar erros, responder a dúvidas de arquitetura e corrigir bugs de programação.",
      pedagogical: "Ajuda professores de informática ou robótica a rever os códigos de programação dos alunos, gerando correções comentadas na hora.",
      prompt: "Revê este código pedagógico em Javascript partilhado pelo estudante, identifica onde está a falha de ciclo e sugere a correção."
    }
  ];

  // Detailed data for the 6 advanced tools in the screenshot
  const toolsData: Record<string, ToolInfo> = {
    structured: {
      id: "structured",
      name: "Structured outputs (Saídas Estruturadas JSON)",
      badge: "Avançado",
      category: "Parâmetros",
      description: "Garante que o Gemini responda estritamente num formato lógico fechado (geralmente JSON). Remove do ar quaisquer introduções informais da IA (como o habitual 'Aqui tem o seu exercício...') ou conversas secundárias.",
      howToUse: "Clique no botão 'Edit' ao lado de 'Structured outputs' e defina o esquema de dados esperado (ex: uma lista com 'pergunta', 'opcoes_resposta' e 'alternativa_correta'). O modelo preenche os campos cirurgicamente.",
      teacherUsecase: "Ideal para criar questionários ou testes automatizados interativos. O JSON resultante pode ser integrado diretamente em aplicações ou no Moodle da escola sem requerer filtragem manual.",
      simulationInput: "Gere 3 perguntas de escolha múltipla sobre células em formato JSON.",
      simulationOutput: `{
  "perguntas": [
    {
      "id": 1,
      "enunciado": "Qual é a central energética da célula?",
      "opcoes": ["A) Vacúolo", "B) Mitocôndria", "C) Complexo de Golgi", "D) Ribossoma"],
      "resposta_correta": "B"
    }
  ]
}`
    },
    code_exec: {
      id: "code_exec",
      name: "Code execution (Execução de Código-Fonte Python)",
      badge: "Recomendado",
      category: "Avançados",
      description: "Dá ao Gemini um interpretador de Python invisível. Se o utilizador pedir contas matemáticas avançadas ou problemas complexos, a IA escreve código Python na hora, executa-o no servidor e devolve o resultado com precisão científica absoluta de 100%, eliminando o risco de alucinações matemáticas.",
      howToUse: "Ative o interruptor lateral 'Code execution'. Quando o Gemini estiver a processar uma pergunta matemática, ele criará e correrá um bloco de código Python automaticamente para confirmar a veracidade das respostas das equações.",
      teacherUsecase: "Excelente para a criação de matrizes estatísticas complexas, resolução de exercícios de Física/Química e verificação matemática rigorosa de problemas avançados.",
      simulationInput: "Verifica se 153 é um número de Armstrong.",
      simulationOutput: `(O Gemini escreve e executa em Python:)
def is_armstrong(n):
    return n == sum(int(x)**len(str(n)) for x in str(n))
result = is_armstrong(153) # Retorna True

"O número 153 é de facto um número de Armstrong, pois: 1³ + 5³ + 3³ = 1 + 125 + 27 = 153!"`
    },
    fn_calling: {
      id: "fn_calling",
      name: "Function calling (Chamada de Funções)",
      badge: "Sistemas",
      category: "Avançados",
      description: "Permite que a IA se ligue e fale com sistemas de software externos programados por si. Em vez de inventar respostas, a IA percebe quando necessita de consultar um banco de dados escolar real e gera uma requisição estruturada para realizar essa pesquisa de forma oficial.",
      howToUse: "Configure funções externas fornecendo nomes de parâmetros e descrições das funções ao modelo. A IA decide dinamicamente chamar ou não essas funções durante o diálogo dependendo da pergunta do utilizador.",
      teacherUsecase: "Comunicação entre o assistente escolar inteligente e bases de dados reais, por exemplo, pesquisar marcas de faltas, encontrar disponibilidades de salas de aula na secretaria ou agendar reuniões.",
      simulationInput: "O aluno João Silva faltou hoje? Verifica no sistema.",
      simulationOutput: `(A IA identifica que deve chamar a função "verificar_presenca_aluno(nome_aluno: 'João Silva')")

➔ Resposta do Sistema: {"falta_registada": true, "data": "2026-05-26", "disciplina": "Matemática"}

"Sim, confirmo nos registos escolares que o João Silva tem uma falta registada no dia de hoje à disciplina de Matemática."`
    },
    search_ground: {
      id: "search_ground",
      name: "Grounding with Google Search (Ancoragem na Pesquisa Google)",
      badge: "Tempo Real",
      category: "Grounding",
      description: "Conecta a Inteligência Artificial diretamente ao motor de pesquisa em tempo real mais poderoso do mundo: o Google Search. Sempre que o utilizador perguntar algo recente ou factual, o Gemini pesquisa na internet antes de responder, adicionando hiperligações de fontes fidedignas no rodapé como referências.",
      howToUse: "Ative o interruptor lateral 'Grounding with Google Search'. O modelo saberá instantaneamente responder sobre notícias escolares, decretos de lei atuais e metas curriculares aprovadas recentemente.",
      teacherUsecase: "Fundamental para professores prepararem aulas de História Contemporânea, Geopolítica ou Economia. Reduz a zero as alucinações factuais de datas e traz fontes jornalísticas ou científicas fidedignas.",
      simulationInput: "Quais as datas previstas para os exames nacionais do Ensino Secundário em Portugal este ano?",
      simulationOutput: `(O Gemini aciona o Google Search em tempo real...)
➔ Fontes Consultadas: dgeec.mec.pt, dge.mec.pt

"De acordo com o calendário oficial de exames nacionais do Ensino Secundário em Portugal, as provas decorrerão na 1ª fase de 15 de junho a 3 de julho, sendo os resultados provisórios publicados a 14 de julho."`
    },
    maps_ground: {
      id: "maps_ground",
      name: "Grounding with Google Maps (Ancoragem e Dados Geográficos)",
      badge: "Foco Didático",
      category: "Grounding",
      description: "Enriquece as saídas de inteligência com o poder geoespacial da Google Maps Platform. Facilita o mapeamento estruturado de pontos de interesse geográficos de alta fidelidade, coordenadas e referências de mapas didáticos reais do nosso planeta.",
      howToUse: "Ligue o interruptor 'Grounding with Google Maps'. O modelo ganha conhecimento contextual estruturado para ligar nomes de localidades e escolas a dados cartográficos e de navegação oficiais.",
      teacherUsecase: "Planeamento de visitas de estudo geográficas locais, cálculo de distâncias reais entre polos educativos e exercícios interactivos escolares de orientação cartográfica.",
      simulationInput: "Planeia uma rota para visita de estudo geográfico partindo de Coimbra para as ruínas minerais de Conímbriga, indicando coordenadas aproximadas.",
      simulationOutput: `(A IA ativa o módulo de dados geoespaciais Google Maps...)
"A rota recomendada é via IC2 sul (~16.2 km). 
- Partida: Coimbra (40.2033° N, 8.4103° W)
- Destino: Ruínas de Conímbriga (40.1009° N, 8.4907° W)
A viagem de autocarro escolar demorará cerca de 18 minutos."`
    },
    url_context: {
      id: "url_context",
      name: "URL context (Análise Direta de Páginas Web)",
      badge: "Foco Didático",
      category: "Parâmetros",
      description: "Permite introduzir links diretos de portais públicos, artigos ou manuais científicos online no ecrã de prompt. O Gemini lê e processa as informações dinâmicas desse endereço e usa-as como base escolar cirúrgica para as respostas.",
      howToUse: "Insira uma hiperligação no seletor 'URL context'. A IA acede ao conteúdo sob essa URL de forma prioritária e executa resumos, análises ou gera perguntas com base estritamente no documento digital referenciado.",
      teacherUsecase: "Ótimo para pedir resumos automáticos de artigos científicos de portais como a Wikipédia ou portais de educação, perguntas sobre diretrizes publicadas pela Direção-Geral de Educação (DGE), ou lições interativas baseadas em blogues específicos.",
      simulationInput: "Gere 2 perguntas de interpretação com base no artigo letivo online de geologia fornecido no Link.",
      simulationOutput: `(A IA analisa dinamicamente o link escolar fornecido...)
"Com base no texto analisado, aqui ficam as perguntas preparadas:
1. Segundo o artigo, qual a principal diferença de cristalização entre o Basalto e o Granito?
2. Explique o fator de arrefecimento rápido que dita as propriedades do basalto."`
    }
  };

  const handleToggleTool = (key: keyof typeof toolsState) => {
    setToolsState(prev => {
      const updated = { ...prev, [key]: !prev[key] };
      // Switch active selection to the toggled tool to highlight it and explain
      setSelectedTool(key);
      return updated;
    });
  };

  const currentTool = toolsData[selectedTool];

  const sidebarButtons = [
    { id: "playground", label: "🕹️ Playground", desc: "A consola principal de testes. Aqui escreve os seus prompts livres e experimenta como a IA responde instantaneamente." },
    { id: "build", label: "🛠️ Build (Apps)", desc: "Permite organizar as suas aplicações digitais ligadas ao Google AI Studio, organizar equipas e rever recursos de faturamento." },
    { id: "gallery", label: "🖼️ Gallery", desc: "Mostra uma coleção (galeria) oficial de aplicações construídas pela comunidade tecnológica global para servir de inspiração." },
    { id: "dashboard", label: "📊 Dashboard", desc: "Exibe de forma visível as suas estatísticas de chamadas, volume de dados, quotas consumidas diariamente e velocidade." },
    { id: "docs", label: "📖 Documentation", desc: "Encaminha diretamente para as referências e tutoriais lógicos criados para o desenvolvimento com modelos Gemini." },
    { id: "get-api", label: "🔑 Get API Key", desc: "O botão dourado para obter as suas chaves confidenciais necessárias para usar inteligência em servidores do Netlify ou folhas de Excel." },
  ];

  return (
    <section id="console-explorer-section" className="bg-white p-6 md:p-10 rounded-3xl border border-slate-200 shadow-xs mb-10 text-left">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
          <div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
              Descodificador da Plataforma
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Dominar o Google AI Studio a 100%
            </h2>
            <p className="text-slate-500 text-xs md:text-sm mt-1">
              Desenvolvemos um <strong>Ambiente de Apresentação Simulado</strong> para que possa entender detalhadamente o menu lateral e as grandiosas superferramentas contidas na sua imagem de exploração real.
            </p>
          </div>

          <div className="flex flex-wrap bg-slate-100 p-1 rounded-xl items-center gap-1 font-sans shrink-0 border border-slate-200 self-start md:self-center">
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${activeTab === 'tools' ? 'bg-white text-indigo-700 shadow-3xs' : 'text-slate-500 hover:text-slate-800'}`}
            >
              🛠️ Ferramentas Avançadas de IA
            </button>
            <button
              onClick={() => setActiveTab('sidebar')}
              className={`px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${activeTab === 'sidebar' ? 'bg-white text-indigo-700 shadow-3xs' : 'text-slate-500 hover:text-slate-800'}`}
            >
              🖥️ Menu Lateral & Consola
            </button>
            <button
              onClick={() => {
                setActiveTab('playground-cards');
                setSelectedPlaygroundCard('featured');
              }}
              className={`px-3 py-1.5 rounded-lg text-[10px] sm:text-xs font-bold transition-all cursor-pointer ${activeTab === 'playground-cards' ? 'bg-white text-indigo-700 shadow-3xs' : 'text-slate-500 hover:text-slate-800'}`}
            >
              🕹️ Modelos vs Agentes (Playground)
            </button>
          </div>
        </div>

        {/* Dynamic Panel */}
        <AnimatePresence mode="wait">
          {activeTab === 'tools' && (
            <motion.div
              key="tools-panel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Context Warning Alert */}
              <div className="bg-indigo-50/50 border border-indigo-100 p-4 rounded-2xl flex items-start gap-3">
                <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 leading-relaxed font-sans">
                  <strong>O segredo do Google AI Studio está nas Ferramentas (Tools):</strong> Estes botões localizam-se na barra inferior do ecrã de chat do estúdio da Google. Eles expandem dramaticamente as potencialidades da IA generativa de um simples chat para um autêntico centro de soluções em tempo real. Use os botões abaixo para ligar e simular cada ferramenta!
                </div>
              </div>

              {/* Main Interactive Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                
                {/* Visual Emulator matching the user's cropped image exactly */}
                <div className="lg:col-span-5 bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-xs select-none relative">
                  <div>
                    {/* Simulator Header */}
                    <div className="flex items-center justify-between pb-3.5 border-b border-slate-800 mb-4 text-[10px] text-slate-500 font-mono">
                      <span>Google AI Studio - Painel de Ferramentas</span>
                      <span className="flex items-center gap-1.5 font-bold text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded uppercase">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping"></span>
                        Simulador Ativo
                      </span>
                    </div>

                    <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-3">
                      Seletor de Ferramentas Opcionais (Clique para Ativar):
                    </p>

                    {/* Simulating your image structure */}
                    <div className="bg-slate-950 rounded-xl p-3 border border-slate-800 space-y-3 font-sans">
                      
                      {/* Structured outputs */}
                      <div 
                        onClick={() => setSelectedTool("structured")}
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all ${selectedTool === "structured" ? "bg-slate-800 border border-slate-700" : "hover:bg-slate-900"}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xs text-slate-400">JSON</span>
                          <span className="text-xs font-medium text-slate-200">Structured outputs</span>
                        </div>
                        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                          <button 
                            onClick={() => setSelectedTool("structured")}
                            className="text-[10px] text-slate-400 hover:text-white px-2 py-0.5 bg-slate-800 hover:bg-slate-705 border border-slate-705 rounded"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => handleToggleTool('structured')}
                            className={`w-8 h-4.5 rounded-full transition-colors relative flex items-center ${toolsState.structured ? 'bg-blue-600 justify-end' : 'bg-slate-700 justify-start'}`}
                          >
                            <span className="w-3.5 h-3.5 bg-white rounded-full mx-0.5 shadow-xs"></span>
                          </button>
                        </div>
                      </div>

                      {/* Code Execution */}
                      <div 
                        onClick={() => setSelectedTool("code_exec")}
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all ${selectedTool === "code_exec" ? "bg-slate-800 border border-slate-700" : "hover:bg-slate-900"}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-slate-400">&lt; &gt;</span>
                          <span className="text-xs font-medium text-slate-200">Code execution</span>
                        </div>
                        <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
                          <button 
                            onClick={() => handleToggleTool('code_exec')}
                            className={`w-8 h-4.5 rounded-full transition-colors relative flex items-center ${toolsState.code_exec ? 'bg-blue-600 justify-end' : 'bg-slate-700 justify-start'}`}
                          >
                            <span className="w-3.5 h-3.5 bg-white rounded-full mx-0.5 shadow-xs"></span>
                          </button>
                        </div>
                      </div>

                      {/* Function Calling */}
                      <div 
                        onClick={() => setSelectedTool("fn_calling")}
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all ${selectedTool === "fn_calling" ? "bg-slate-800 border border-slate-700" : "hover:bg-slate-900"}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="font-mono text-xs text-slate-400">ƒx</span>
                          <span className="text-xs font-medium text-slate-200">Function calling</span>
                        </div>
                        <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                          <button 
                            onClick={() => setSelectedTool("fn_calling")}
                            className="text-[10px] text-slate-400 hover:text-white px-2 py-0.5 bg-slate-800 hover:bg-slate-705 border border-slate-705 rounded"
                          >
                            Edit
                          </button>
                          <button 
                            onClick={() => handleToggleTool('fn_calling')}
                            className={`w-8 h-4.5 rounded-full transition-colors relative flex items-center ${toolsState.fn_calling ? 'bg-blue-600 justify-end' : 'bg-slate-700 justify-start'}`}
                          >
                            <span className="w-3.5 h-3.5 bg-white rounded-full mx-0.5 shadow-xs"></span>
                          </button>
                        </div>
                      </div>

                      {/* Grounding with Google Search */}
                      <div 
                        onClick={() => setSelectedTool("search_ground")}
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all ${selectedTool === "search_ground" ? "bg-slate-800 border border-slate-700" : "hover:bg-slate-900"}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Search className="w-3.5 h-3.5 text-blue-400" />
                          <span className="text-xs font-medium text-slate-200">Grounding with Google Search</span>
                        </div>
                        <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
                          <button 
                            onClick={() => handleToggleTool('search_ground')}
                            className={`w-8 h-4.5 rounded-full transition-colors relative flex items-center ${toolsState.search_ground ? 'bg-blue-600 justify-end' : 'bg-slate-700 justify-start'}`}
                          >
                            <span className="w-3.5 h-3.5 bg-white rounded-full mx-0.5 shadow-xs"></span>
                          </button>
                        </div>
                      </div>

                      {/* Grounding with Google Maps */}
                      <div 
                        onClick={() => setSelectedTool("maps_ground")}
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all ${selectedTool === "maps_ground" ? "bg-slate-800 border border-slate-700" : "hover:bg-slate-900"}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <MapPin className="w-3.5 h-3.5 text-rose-400" />
                          <span className="text-xs font-medium text-slate-200">Grounding with Google Maps</span>
                        </div>
                        <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
                          <button 
                            onClick={() => handleToggleTool('maps_ground')}
                            className={`w-8 h-4.5 rounded-full transition-colors relative flex items-center ${toolsState.maps_ground ? 'bg-blue-600 justify-end' : 'bg-slate-700 justify-start'}`}
                          >
                            <span className="w-3.5 h-3.5 bg-white rounded-full mx-0.5 shadow-xs"></span>
                          </button>
                        </div>
                      </div>

                      {/* URL Context */}
                      <div 
                        onClick={() => setSelectedTool("url_context")}
                        className={`flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all ${selectedTool === "url_context" ? "bg-slate-800 border border-slate-700" : "hover:bg-slate-900"}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Globe className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-xs font-medium text-slate-200">URL context</span>
                        </div>
                        <div className="flex items-center" onClick={(e) => e.stopPropagation()}>
                          <button 
                            onClick={() => handleToggleTool('url_context')}
                            className={`w-8 h-4.5 rounded-full transition-colors relative flex items-center ${toolsState.url_context ? 'bg-blue-600 justify-end' : 'bg-slate-700 justify-start'}`}
                          >
                            <span className="w-3.5 h-3.5 bg-white rounded-full mx-0.5 shadow-xs"></span>
                          </button>
                        </div>
                      </div>

                    </div>

                    <div className="mt-4 p-3 bg-slate-950/45 rounded-xl border border-slate-800/80 text-2xs text-slate-400 leading-normal">
                      💡 <strong>Dica de Aula:</strong> Clique em qualquer botão para ler a sua finalidade pedagógica à direita e simular o seu comportamento!
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-800 text-[9px] text-slate-500 font-mono flex justify-between">
                    <span>Menu: Tools &gt; Options</span>
                    <span>Consola do Professor</span>
                  </div>
                </div>

                {/* Detailed Explanation Dynamic Card */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between font-sans">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2.5">
                      <span className="px-2.5 py-1 bg-indigo-100 text-indigo-800 text-[10px] font-bold uppercase rounded-full tracking-wider">
                        {currentTool.badge}
                      </span>
                      <span className="text-2xs text-slate-400 font-bold uppercase tracking-wider">
                        {currentTool.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 leading-tight">
                      {currentTool.name}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed md:text-sm">
                      {currentTool.description}
                    </p>

                    <div className="p-4 bg-white border border-slate-250/60 rounded-xl space-y-1">
                      <strong className="text-xs text-slate-800 uppercase tracking-wide block">Como utilizar no Estúdio?</strong>
                      <p className="text-xs text-slate-500 leading-relaxed">
                        {currentTool.howToUse}
                      </p>
                    </div>

                    <div className="p-4 bg-indigo-50/40 border border-indigo-100 rounded-xl space-y-1">
                      <strong className="text-xs text-indigo-900 uppercase tracking-wide block">💡 Cenário Prático Didático:</strong>
                      <p className="text-xs text-indigo-750 font-medium leading-relaxed">
                        {currentTool.teacherUsecase}
                      </p>
                    </div>

                    {/* Interactive Active Mock Chat Panel */}
                    <div className="pt-4 border-t border-slate-200">
                      <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase mb-2">
                        <Play className="w-3 h-3 text-blue-500" />
                        Simulação do Diálogo Escolar:
                      </div>

                      <div className="space-y-3 font-mono text-2xs max-w-full overflow-x-auto">
                        <div className="p-3 bg-slate-200/50 rounded-xl rounded-tl-none text-slate-700 text-left">
                          <strong className="text-[9px] text-slate-450 uppercase block font-sans font-bold">👤 Entrada do Professor (Prompt):</strong>
                          &quot;{currentTool.simulationInput}&quot;
                        </div>

                        <div className="p-3 bg-blue-600 text-white rounded-xl rounded-tr-none text-left whitespace-pre-wrap leading-relaxed shadow-3xs">
                          <strong className="text-[9px] text-blue-200 uppercase block font-sans font-bold mb-1">🤖 Resposta Inteligente Gemini:</strong>
                          {currentTool.simulationOutput}
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

              </div>
            </motion.div>
          )}

          {activeTab === 'sidebar' && (
            <motion.div
              key="sidebar-panel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="bg-blue-50/50 border border-blue-100 p-4 rounded-2xl flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-700 leading-relaxed font-sans">
                  <strong>Organização da Consola:</strong> O menu lateral esquerdo do Google AI Studio dá suporte a toda a navegação de gestão de conteúdos, utilizadores e segurança técnica. Para que todos os professores entendam ao pormenor, clique nos botões simulados abaixo para obter uma deﬁnição de ajuda rápida.
                </div>
              </div>

              {/* Console Sidebar grid */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch font-sans">
                
                {/* Left panel buttons */}
                <div className="md:col-span-4 bg-slate-900 text-slate-100 p-4 rounded-2xl border border-slate-850 flex flex-col justify-between font-sans shadow-md">
                  <div className="space-y-2">
                    <span className="text-[9px] uppercase tracking-wider text-slate-500 font-bold block px-2 mb-2">Links da Plataforma Google</span>
                    
                    {sidebarButtons.map(btn => (
                      <button
                        key={btn.id}
                        onClick={() => setSidebarClick(btn.id)}
                        className={`w-full text-left py-2.5 px-3.5 rounded-lg text-xs font-semibold tracking-wide transition-all ${sidebarClick === btn.id ? 'bg-blue-600 text-white shadow-3xs' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'}`}
                      >
                        {btn.label}
                      </button>
                    ))}
                  </div>

                  <div className="text-[10px] text-slate-500 font-mono text-center pt-6 border-t border-slate-800 mt-6">
                    Clique em qualquer botão do simulador.
                  </div>
                </div>

                {/* Right explainer panel */}
                <div className="md:col-span-8 bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between">
                  {sidebarClick && (
                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-black uppercase rounded-full">
                        Definição do Botão
                      </div>
                      
                      <h4 className="text-lg font-bold text-slate-900 tracking-tight leading-none uppercase">
                        {sidebarButtons.find(b => b.id === sidebarClick)?.label}
                      </h4>

                      <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                        {sidebarButtons.find(b => b.id === sidebarClick)?.desc}
                      </p>

                      <div className="p-4 bg-white border border-slate-200 rounded-xl">
                        <h5 className="font-bold text-slate-800 text-xs mb-1.5 uppercase tracking-wide">Como isto ajuda o Professor?</h5>
                        <p className="text-xs text-slate-500 leading-relaxed">
                          {sidebarClick === "playground" && "Serve para estruturar o seu rascunho de aula imediatamente, carregar PDFs em formato livre e ajustar respostas para a sua turma de forma dinâmica."}
                          {sidebarClick === "build" && "Permite que agrupe múltiplos assistentes criados ou teste integrações mais complexas com outros professores parceiros de departamento."}
                          {sidebarClick === "gallery" && "Ótimo repositório para ver as potencialidades de IA na educação de forma real, analisando ideias inovadoras criadas por educadores do mundo inteiro."}
                          {sidebarClick === "dashboard" && "Controla a rapidez da IA e verifica a quota diária grátis de chamadas para que as ferramentas dos estudantes continuem a funcionar de modo ininterrupto."}
                          {sidebarClick === "docs" && "Explica o funcionamento dos SDKs, parâmetros e modelos do ecossistema Google para as suas automações e folhas de cálculos."}
                          {sidebarClick === "get-api" && "Gera a credencial que liga o Netlify ao Gemini. É o elemento-chave e imprescindível de ligação de dados para publicar as suas páginas com sucesso pedagógico."}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

              </div>

            </motion.div>
          )}

          {activeTab === 'playground-cards' && (
            <motion.div
              key="playground-cards-panel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Informational banner and description */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 border border-blue-150 p-5 rounded-2xl flex items-start gap-3">
                <Compass className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs text-slate-705 leading-relaxed font-sans space-y-1">
                  <p>
                    <strong>A Área de Trabalho do Playground:</strong> O Google AI Studio remodelou o seu ecrã central de acolhimento em duas secções fundamentais. Agora, pode alternar livremente entre explorar os <strong>Modelos Puros Google (Explore Google models)</strong> ou testar de forma interativa os novíssimos <strong>Agentes Pedagógicos Pré-programados (Build with Agents)</strong>.
                  </p>
                  <p className="text-slate-500">
                    Clique nas pílulas azuis para alternar a perspetiva visual do simulador, selecione qualquer cartão para obter a sua explicação prática profunda de apoio à preparação das suas aulas e veja exemplos reais de prompts didáticos prontos a utilizar no console oficial!
                  </p>
                </div>
              </div>

              {/* Sub-tab selection pill area mimicking Google AI Studio */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-4 border border-slate-200 rounded-2xl">
                <div className="text-left">
                  <span className="text-[10px] text-slate-405 font-mono uppercase tracking-widest block font-bold">Catálogo Central de Testes</span>
                  <h3 className="text-base font-extrabold text-slate-900 tracking-tight leading-none">
                    {playgroundSubTab === 'models' ? 'Explore Google models (Filtro por Modelos)' : 'Build with Agents (Filtro por Agentes)'}
                  </h3>
                </div>

                {/* Simulated original pills */}
                <div className="flex bg-slate-205 p-1 rounded-full items-center gap-1 border border-slate-300 shadow-2xs self-start sm:self-center font-sans">
                  <button
                    onClick={() => {
                      setPlaygroundSubTab('models');
                      setSelectedPlaygroundCard('featured');
                    }}
                    className={`px-4 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer ${playgroundSubTab === 'models' ? 'bg-indigo-600 text-white shadow-3xs' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    Models
                  </button>
                  <button
                    onClick={() => {
                      setPlaygroundSubTab('agents');
                      setSelectedPlaygroundCard('antigravity');
                    }}
                    className={`px-4 py-1.5 rounded-full text-xs font-black transition-all cursor-pointer ${playgroundSubTab === 'agents' ? 'bg-indigo-600 text-white shadow-3xs' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    Agents
                  </button>
                </div>
              </div>

              {/* Interactive Grid & Deep Information display */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch font-sans">
                
                {/* Simulated Playground Grid Panel (Left side) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {playgroundSubTab === 'models' ? (
                    playgroundModelsList.map(card => {
                      const isActive = selectedPlaygroundCard === card.id;
                      return (
                        <button
                          key={card.id}
                          onClick={() => setSelectedPlaygroundCard(card.id)}
                          className={`flex flex-col text-left p-4 rounded-2xl border transition-all cursor-pointer group ${
                            isActive
                              ? 'bg-blue-50/70 border-blue-300 ring-1 ring-blue-300 shadow-3xs'
                              : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 shadow-2xs'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-base">
                              {card.id === 'featured' && '⭐'}
                              {card.id === 'code_chat' && '💬'}
                              {card.id === 'image_gen' && '🖼️'}
                              {card.id === 'video_gen' && '📹'}
                              {card.id === 'speech_music' && '🎙️'}
                              {card.id === 'real_time' && '⚡'}
                            </span>
                            <span className="text-xs font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                              {card.name}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-500 leading-normal line-clamp-2">
                            {card.desc}
                          </p>
                          <div className="mt-auto pt-2.5 flex items-center justify-between border-t border-slate-100 w-full">
                            <span className="text-[9px] font-bold text-slate-400 font-mono uppercase">
                              {card.label}
                            </span>
                            <ArrowRight className={`w-3.5 h-3.5 text-slate-350 transition-transform ${isActive ? 'translate-x-1 text-blue-600' : 'group-hover:translate-x-0.5'}`} />
                          </div>
                        </button>
                      );
                    })
                  ) : (
                    playgroundAgentsList.map(card => {
                      const isActive = selectedPlaygroundCard === card.id;
                      return (
                        <button
                          key={card.id}
                          onClick={() => setSelectedPlaygroundCard(card.id)}
                          className={`flex flex-col text-left p-4 rounded-2xl border transition-all cursor-pointer group ${
                            isActive
                              ? 'bg-blue-50/70 border-blue-300 ring-1 ring-blue-300 shadow-3xs'
                              : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 shadow-2xs'
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-base">
                              {card.id === 'antigravity' && '🤖'}
                              {card.id === 'talk_radio' && '📻'}
                              {card.id === 'support' && '🙋'}
                              {card.id === 'data_analyst' && '📈'}
                              {card.id === 'doc_proc' && '📄'}
                              {card.id === 'repo_maint' && '🔍'}
                            </span>
                            <span className="text-xs font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                              {card.name}
                            </span>
                          </div>
                          <p className="text-[10px] text-slate-500 leading-normal line-clamp-2">
                            {card.desc}
                          </p>
                          <div className="mt-auto pt-2.5 flex items-center justify-between border-t border-slate-100 w-full">
                            <span className="text-[9px] font-bold text-slate-400 font-mono uppercase">
                              {card.label}
                            </span>
                            <ArrowRight className={`w-3.5 h-3.5 text-slate-350 transition-transform ${isActive ? 'translate-x-1 text-blue-600' : 'group-hover:translate-x-0.5'}`} />
                          </div>
                        </button>
                      );
                    })
                  )}

                  {/* Empty space card mock footer */}
                  <div className="sm:col-span-2 p-4 bg-slate-50 border border-slate-200 rounded-2xl flex items-center justify-between">
                    <div className="text-left">
                      <h5 className="text-[11px] font-extrabold text-slate-800 font-sans">Pretende criar um Prompt totalmente do zero?</h5>
                      <span className="text-[10px] text-slate-500 font-sans">Clique na barra superior no botão superior (+) para uma nova conversa em branco.</span>
                    </div>
                    <span className="text-xs font-bold text-indigo-600 font-mono bg-indigo-50 border border-indigo-150 px-2.5 py-1 rounded-lg shrink-0">
                      Start building →
                    </span>
                  </div>
                </div>

                {/* Explainer Panel & Interactive prompt generator (Right side) */}
                <div className="lg:col-span-5 bg-slate-50/70 border border-slate-200 rounded-3xl p-6 flex flex-col justify-between">
                  {(() => {
                    const activeCard = (playgroundSubTab === 'models' ? playgroundModelsList : playgroundAgentsList).find(c => c.id === selectedPlaygroundCard) || (playgroundSubTab === 'models' ? playgroundModelsList[0] : playgroundAgentsList[0]);
                    
                    return (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-105 text-blue-800 text-[10px] font-extrabold uppercase rounded-full">
                            {playgroundSubTab === 'models' ? 'Explore Models' : 'Build Agents'}
                          </span>
                          <span className="text-[10px] text-slate-400 font-mono bg-white px-2.5 py-0.5 rounded border border-slate-200 shadow-3xs">
                            {activeCard.name}
                          </span>
                        </div>

                        <div>
                          <h4 className="text-base font-extrabold text-slate-900 tracking-tight leading-none mb-1">
                            {activeCard.name} ({activeCard.label})
                          </h4>
                          <em className="text-[10px] text-slate-450 block leading-tight">
                            &quot;{activeCard.desc}&quot;
                          </em>
                        </div>

                        {/* Practical Guide */}
                        <div className="space-y-1 text-left">
                          <strong className="text-[11px] font-bold text-slate-800 uppercase tracking-wide block">💡 O que é na prática?</strong>
                          <p className="text-xs text-slate-650 leading-relaxed font-sans mt-0.5">
                            {activeCard.practical}
                          </p>
                        </div>

                        {/* Educational Value */}
                        <div className="p-4 bg-indigo-50 border border-indigo-100 rounded-xl space-y-1 text-left">
                          <strong className="text-[11px] font-extrabold text-indigo-900 uppercase tracking-wide block flex items-center gap-1">
                            🎒 Utilização na Escola / Professores:
                          </strong>
                          <p className="text-xs text-indigo-950 font-medium leading-relaxed mt-0.5 font-sans">
                            {activeCard.pedagogical}
                          </p>
                        </div>

                        {/* Interactive ready-to-use Prompt */}
                        <div className="space-y-2 text-left pt-2 border-t border-slate-200">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-bold text-slate-455 uppercase tracking-wider block">
                              Exemplo de Prompt para Copiar:
                            </span>
                            <button
                              onClick={() => {
                                navigator.clipboard.writeText(activeCard.prompt);
                                alert("Prompt copiado com sucesso! Pode agora colá-lo no Google AI Studio.");
                              }}
                              className="px-2.5 py-1 bg-white border border-slate-200 text-slate-650 hover:bg-slate-100 text-[10px] rounded-lg font-bold transition-all shadow-3xs shrink-0 cursor-pointer"
                            >
                              Copiar Exemplo
                            </button>
                          </div>

                          <div className="p-3 bg-slate-950 text-emerald-400 rounded-xl font-mono text-2xs leading-relaxed max-h-[140px] overflow-y-auto block border border-slate-900">
                            &quot;{activeCard.prompt}&quot;
                          </div>
                        </div>

                      </div>
                    );
                  })()}
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
