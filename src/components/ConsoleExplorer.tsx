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
  const [activeTab, setActiveTab] = useState<'sidebar' | 'tools'>('tools');
  const [sidebarClick, setSidebarClick] = useState<string>("playground");
  
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

          <div className="flex bg-slate-100 p-1 rounded-xl items-center gap-1 font-sans shrink-0 border border-slate-200 self-start md:self-center">
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'tools' ? 'bg-white text-indigo-700 shadow-3xs' : 'text-slate-500 hover:text-slate-800'}`}
            >
              🛠️ Ferramentas Avançadas de IA
            </button>
            <button
              onClick={() => setActiveTab('sidebar')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${activeTab === 'sidebar' ? 'bg-white text-indigo-700 shadow-3xs' : 'text-slate-500 hover:text-slate-800'}`}
            >
              🖥️ Menu Lateral & Consola
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
        </AnimatePresence>

      </div>
    </section>
  );
}
