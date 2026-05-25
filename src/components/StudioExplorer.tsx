import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Sparkles, 
  Code, 
  Image, 
  Film, 
  Music, 
  Radio, 
  Key, 
  Terminal, 
  Layout, 
  BarChart2, 
  BookOpen, 
  Cloud, 
  ShieldCheck,
  Server,
  ArrowRight,
  Globe,
  Info,
  Layers,
  HelpCircle,
  Eye,
  EyeOff
} from "lucide-react";

export default function StudioExplorer() {
  const [activeTab, setActiveTab] = useState<'models' | 'sidebar' | 'netlify' | 'apikey'>('models');
  const [selectedMockModel, setSelectedMockModel] = useState<'flash' | 'pro' | 'experimental'>('flash');
  const [showMockApiKey, setShowMockApiKey] = useState(false);
  const [clickCount, setClickCount] = useState(0);

  // Data for the Gemini mock selector
  const mockModelsData = {
    flash: {
      name: "Gemini 1.5 Flash",
      purpose: "O modelo padrão ultra-rápido para tarefas gerais",
      speed: "Elevadíssima (Milissegundos)",
      contextWindow: "1 Milhão de tokens (~700.000 palavras / 500 páginas de manual escolar)",
      idealFor: "Chatbots em tempo real, respostas instantâneas, correções simples e processamento ágil de ficheiros em lote.",
      cost: "Gratuito (Free Tier com limites flexíveis de 15 pedidos por minuto)",
      badge: "Mais Popular"
    },
    pro: {
      name: "Gemini 1.5 Pro",
      purpose: "Inteligência máxima para raciocínio analítico complexo",
      speed: "Média (Prioriza a precisão cognitiva)",
      contextWindow: "2 Milhões de tokens (~1.500.000 palavras / Livros inteiros, manuais ou áudios longos)",
      idealFor: "Análise profunda de planificações, correção cruzada complexa, tradução académica rigorosa e criação de códigos avançados.",
      cost: "Gratuito no Estúdio (Free Tier com limites de 2 pedidos por minuto)",
      badge: "Alta Performance"
    },
    experimental: {
      name: "Gemini 2.0 Flash (Experimental)",
      purpose: "A mais recente tecnologia multimodal em tempo real",
      speed: "Extrema (Tempo real com áudio e vídeo)",
      contextWindow: "1 Milhão de tokens com latência de resposta extremamente reduzida",
      idealFor: "Aplicações de voz natural direta, processamento de streaming contínuo e interações instantâneas em sala de aula.",
      cost: "Disponível para testes livres do ecossistema Google no estúdio",
      badge: "Nova Geração"
    }
  };

  const modelFeaturesList = [
    {
      title: "Featured (Destaques Multimédia / Multimodal)",
      desc: "Espaço para experimentar os modelos mais recentes e avançados da Google. Permite processar texto, imagem, som ou vídeo em simultâneo no mesmo prompt.",
      icon: Sparkles,
      color: "text-amber-600 bg-amber-50 border-amber-100"
    },
    {
      title: "Chat & Freeform (Conversação e Fluxo Livre)",
      desc: "Permite criar chatbots interativos ou assistentes virtuais escolares, simulando dinâmicas de conversação direta para esclarecer de dúvidas.",
      icon: Code,
      color: "text-blue-600 bg-blue-50 border-blue-100"
    },
    {
      title: "Structured (Prompts Estruturados)",
      desc: "Excelente para obter saídas de dados rigorosas. Pode dar tabelas de exemplos (Entrada -> Saída) para garantir que a IA responde sempre no mesmo formato descritivo.",
      icon: Layers,
      color: "text-purple-600 bg-purple-50 border-purple-100"
    }
  ];

  const sidebarFeatures = [
    {
      id: "prompts",
      title: "Create New Prompt",
      desc: "O ponto de partida. Abre as três opções fundamentais: Chat Prompt (conversas), Freeform Prompt (análise livre com imagens ou PDFs) e Structured Prompt (tabelas de exemplos).",
      icon: Terminal,
      color: "text-indigo-600 bg-indigo-50 border-indigo-100"
    },
    {
      id: "apikey_btn",
      title: "Get API key",
      desc: "A chave de ouro para programadores e professores. Onde cria e copia as credenciais confidenciais de acesso para ligar a inteligência do Gemini à sua própria folha de Excel ou site Netlify.",
      icon: Key,
      color: "text-rose-600 bg-rose-50 border-rose-100 focus-ring"
    },
    {
      id: "library",
      title: "My Library",
      desc: "Pasta de arquivo na nuvem que guarda de forma privada todos os seus prompts guardados, testes, estruturas de chatbots e rascunhos de system instructions.",
      icon: BookOpen,
      color: "text-amber-600 bg-amber-50 border-amber-100"
    },
    {
      id: "tuning",
      title: "Model Tuning",
      desc: "Modo avançado para ajustar finamente pesos de resposta baseado em dados estruturados específicos (opcional para utilizadores seniores).",
      icon: BarChart2,
      color: "text-emerald-600 bg-emerald-50 border-emerald-100"
    }
  ];

  return (
    <section id="studio-explorer" className="bg-white p-6 md:p-12 rounded-3xl border border-slate-200 shadow-sm mb-12">
      <div className="max-w-6xl mx-auto text-left">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Consola Principal Detalhada
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-3 mb-3 tracking-tight font-sans">
            Guia Visual Interativo do Google AI Studio
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto font-sans">
            O Google AI Studio possui uma interface limpa dividida em menus. Explore como funcionam as opções de modelos, o menu lateral esquerdo e a exportação direta de código para publicação rápida de aplicações gratuitas no Netlify.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap bg-slate-100 p-1.5 rounded-2xl justify-center gap-1 max-w-4xl mx-auto mb-10 border border-slate-200/60 font-sans">
          <button 
            onClick={() => setActiveTab('models')}
            className={`flex-1 min-w-[140px] py-3 px-4 text-xs font-bold rounded-xl transition-all duration-150 ${activeTab === 'models' ? 'bg-white text-slate-900 border border-slate-200 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            1. Gama de Modelos Gemini
          </button>
          <button 
            onClick={() => setActiveTab('sidebar')}
            className={`flex-1 min-w-[140px] py-3 px-4 text-xs font-bold rounded-xl transition-all duration-150 ${activeTab === 'sidebar' ? 'bg-white text-slate-900 border border-slate-200 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            2. Menu de Navegação Lateral
          </button>
          <button 
            onClick={() => setActiveTab('netlify')}
            className={`flex-1 min-w-[140px] py-3 px-4 text-xs font-bold rounded-xl transition-all duration-150 ${activeTab === 'netlify' ? 'bg-white text-slate-900 border border-slate-200 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            3. Métodos de Publicação Web
          </button>
          <button 
            onClick={() => setActiveTab('apikey')}
            className={`flex-1 min-w-[140px] py-3 px-4 text-xs font-bold rounded-xl transition-all duration-150 ${activeTab === 'apikey' ? 'bg-white text-slate-900 border border-slate-200 shadow-xs' : 'text-slate-600 hover:text-slate-900'}`}
          >
            4. O que é a Chave API & Custos?
          </button>
        </div>

        {/* Tab Panel Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'models' && (
            <motion.div 
              key="models"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              {/* Explanation Banner */}
              <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                  <strong>Escolha do Modelo ideal no Estúdio:</strong> No canto superior direito da sua folha de trabalho do Google AI Studio, verá um dropdown de seleção de modelo. Os modelos diferem fundamentalmente em velocidade, capacidade analítica, consumo de quotas e tamanho da janela de contexto.
                </div>
              </div>

              {/* Interactive Mock Dropdown & Info card */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Left controls mockup */}
                <div className="lg:col-span-5 bg-slate-900 text-slate-200 p-6 rounded-2xl border border-slate-800 flex flex-col justify-between font-mono text-xs shadow-md">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4 text-[10px] text-slate-400">
                      <span>Google AI Studio - Definições</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    </div>
                    
                    <label className="text-slate-400 uppercase text-[9px] tracking-wider block mb-2 font-sans font-bold">
                      Selecione o Modelo para teste (Simulação do Dropdown):
                    </label>
                    <div className="space-y-2 font-sans mb-6">
                      <button 
                        onClick={() => setSelectedMockModel('flash')}
                        className={`w-full p-3 rounded-lg border text-left flex items-center justify-between transition-all ${selectedMockModel === 'flash' ? 'bg-blue-600 text-white border-blue-400 shadow-xs' : 'bg-slate-800 text-slate-300 border-slate-755 hover:bg-slate-750'}`}
                      >
                        <span className="font-semibold text-xs">🚀 Gemini 1.5 Flash</span>
                        <span className="text-[9px] uppercase font-bold tracking-wider opacity-90 block">Recomendado</span>
                      </button>
                      <button 
                        onClick={() => setSelectedMockModel('pro')}
                        className={`w-full p-3 rounded-lg border text-left flex items-center justify-between transition-all ${selectedMockModel === 'pro' ? 'bg-indigo-600 text-white border-indigo-400 shadow-xs' : 'bg-slate-800 text-slate-300 border-slate-755 hover:bg-slate-750'}`}
                      >
                        <span className="font-semibold text-xs">🧠 Gemini 1.5 Pro</span>
                        <span className="text-[9px] uppercase font-bold tracking-wider opacity-90 block">Alta Capacidade</span>
                      </button>
                      <button 
                        onClick={() => setSelectedMockModel('experimental')}
                        className={`w-full p-3 rounded-lg border text-left flex items-center justify-between transition-all ${selectedMockModel === 'experimental' ? 'bg-purple-600 text-white border-purple-400 shadow-xs' : 'bg-slate-800 text-slate-300 border-slate-755 hover:bg-slate-750'}`}
                      >
                        <span className="font-semibold text-xs">⚡ Gemini 2.0 (Experimental)</span>
                        <span className="text-[9px] uppercase font-bold tracking-wider opacity-90 block">Nova Tecnologia</span>
                      </button>
                    </div>

                    <div className="space-y-3 font-sans text-xs bg-slate-950/40 p-3.5 rounded-xl border border-slate-850">
                      <div className="flex justify-between items-center">
                        <span className="text-slate-400 text-2xs uppercase">Temperatura:</span>
                        <span className="font-bold text-slate-200">0.7</span>
                      </div>
                      <div className="w-full h-1 bg-slate-800 rounded-lg overflow-hidden relative">
                        <div className="w-[70%] h-full bg-blue-500 rounded-lg"></div>
                      </div>
                      <div className="text-slate-500 text-[10px] leading-relaxed">
                        Arraste para cima se quiser respostas mais criativas ou para 0 se precisar de respostas factuais consistentes e precisas.
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] text-slate-500 flex justify-between">
                    <span>Free Tier quotas ativas</span>
                    <span>Consola Protegida</span>
                  </div>
                </div>

                {/* Right Explanation details box reflecting selection */}
                <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-6 rounded-2xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-[10px] bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wide">
                        {mockModelsData[selectedMockModel].badge}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900">{mockModelsData[selectedMockModel].name}</h3>
                    </div>
                    
                    <div className="space-y-4 text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                      <p>
                        <strong>Objetivo Principal:</strong> {mockModelsData[selectedMockModel].purpose}
                      </p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        <div className="p-3 bg-white border rounded-xl shadow-2xs">
                          <span className="text-2xs text-slate-400 block font-bold uppercase">Velocidade de Resposta:</span>
                          <span className="font-semibold text-slate-900">{mockModelsData[selectedMockModel].speed}</span>
                        </div>
                        <div className="p-3 bg-white border rounded-xl shadow-2xs">
                          <span className="text-2xs text-slate-400 block font-bold uppercase">Janela de Contexto (Limite):</span>
                          <span className="font-semibold text-slate-900">{mockModelsData[selectedMockModel].contextWindow}</span>
                        </div>
                      </div>

                      <div className="pt-2">
                        <strong>Casos de Uso Recomendados:</strong>
                        <p className="text-slate-600 mt-1 text-xs">
                          {mockModelsData[selectedMockModel].idealFor}
                        </p>
                      </div>

                      <div className="p-3 bg-emerald-50 text-emerald-900 border border-emerald-100 rounded-xl text-xs">
                        <strong>Custo de Operação:</strong> {mockModelsData[selectedMockModel].cost}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Other capabilities list */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-sans mt-4">
                {modelFeaturesList.map((m, index) => {
                  const Icon = m.icon;
                  return (
                    <div key={index} className="p-5 bg-slate-50 border border-slate-200/80 rounded-2xl flex flex-col items-start hover:bg-slate-50/50 transition-all">
                      <div className={`p-2 rounded-lg mb-3 border ${m.color}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">{m.title}</h4>
                      <p className="text-2xs md:text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {activeTab === 'sidebar' && (
            <motion.div 
              key="sidebar"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-8"
            >
              <div className="bg-indigo-50/50 border border-indigo-100 p-5 rounded-2xl flex items-start gap-3">
                <Info className="w-5 h-5 text-indigo-600 shrink-0 mt-0.5" />
                <div className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                  <strong>Navegabilidade Lateral Sem Erros:</strong> Como não existem capturas de ecrã estáticas no guia, criámos um <strong>Simulador Interativo da Consola do Estúdio</strong> abaixo. Clique em cada botão do painel escuro à esquerda para ler imediatamente a explicação do que esse recurso faz e como o encontrar!
                </div>
              </div>

              {/* Console Mockup Simulator */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                {/* Simulated Sidebar left panel */}
                <div className="lg:col-span-4 bg-slate-900 text-slate-100 rounded-2xl p-4 border border-slate-800 flex flex-col justify-between font-sans shadow-md">
                  <div>
                    {/* Header */}
                    <div className="flex items-center gap-2 px-2 pb-4 border-b border-slate-800 mb-4">
                      <div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center font-bold text-xs text-white">
                        G
                      </div>
                      <span className="font-bold text-xs tracking-tight text-white">Google AI Studio</span>
                    </div>

                    {/* Menu items */}
                    <div className="space-y-1.5">
                      <div className="text-[9px] uppercase tracking-wider text-slate-500 font-bold px-2 py-1">
                        Utilização Geral
                      </div>
                      
                      <button 
                        onClick={() => { setClickCount(1); }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${clickCount === 1 ? 'bg-slate-800 text-blue-400 border border-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
                      >
                        <Terminal className="w-4 h-4 shrink-0" />
                        <span>Create new prompt</span>
                      </button>

                      <button 
                        onClick={() => { setClickCount(2); }}
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${clickCount === 2 ? 'bg-slate-800 text-rose-400 border border-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
                      >
                        <div className="flex items-center gap-2.5">
                          <Key className="w-4 h-4 text-rose-500 shrink-0" />
                          <span className="font-semibold text-rose-300">Get API key</span>
                        </div>
                        <span className="text-[8px] bg-rose-600/20 text-rose-400 px-1.5 py-0.5 rounded font-black uppercase">Obter</span>
                      </button>

                      <button 
                        onClick={() => { setClickCount(3); }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${clickCount === 3 ? 'bg-slate-800 text-amber-400 border border-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
                      >
                        <BookOpen className="w-4 h-4 shrink-0" />
                        <span>My Library</span>
                      </button>

                      <button 
                        onClick={() => { setClickCount(4); }}
                        className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-medium text-left transition-all ${clickCount === 4 ? 'bg-slate-800 text-emerald-400 border border-slate-700' : 'text-slate-400 hover:text-white hover:bg-slate-800/50'}`}
                      >
                        <BarChart2 className="w-4 h-4 shrink-0" />
                        <span>Model Tuning</span>
                      </button>
                    </div>

                    <div className="space-y-1.5 mt-6">
                      <div className="text-[9px] uppercase tracking-wider text-slate-500 font-bold px-2 py-1">
                        Saber mais
                      </div>
                      <a 
                        href="https://ai.google.dev/gemini-api/docs" 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center gap-2.5 px-3 py-1.5 text-[11px] text-slate-400 hover:text-white transition-all font-mono"
                      >
                        <span>&gt;_ Docs de Engenharia</span>
                      </a>
                    </div>
                  </div>

                  <div className="mt-8 pt-3 border-t border-slate-800 text-[10px] text-slate-500 text-center">
                    Clique num botão acima para ver a deﬁnição de ajuda.
                  </div>
                </div>

                {/* Simulated Explanation Panel right */}
                <div className="lg:col-span-8 bg-slate-50 border border-slate-200 p-6 md:p-8 rounded-2xl flex flex-col justify-between">
                  <div>
                    {clickCount === 0 && (
                      <div className="h-full flex flex-col items-center justify-center text-center py-10">
                        <HelpCircle className="w-12 h-12 text-slate-300 mb-3 animate-bounce" />
                        <h4 className="font-bold text-slate-800 text-sm mb-1 uppercase tracking-wider font-sans">Simulação Prática Lateral</h4>
                        <p className="text-slate-500 text-xs max-w-sm leading-relaxed font-sans">
                          Selecione qualquer uma das opções no painel à esquerda do ecrã para ler o seu enquadramento, pormenores práticos de uso e segredos de engenharia de prompt.
                        </p>
                      </div>
                    )}

                    {clickCount === 1 && (
                      <div>
                        <h4 className="font-bold text-indigo-700 text-xs uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <Terminal className="w-4 h-4" /> Create New Prompt
                        </h4>
                        <h3 className="text-lg font-bold text-slate-900 mb-3 font-sans">Criar Novas Instruções</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4 font-sans">
                          Ao clicar neste botão no Google AI Studio, abrem-se três modalidades essenciais:
                        </p>
                        <ul className="space-y-3 text-xs md:text-sm text-slate-700 font-sans list-disc pl-5">
                          <li><strong>Chat Prompt (Conversa):</strong> Perfeito para criar assistentes, robôs de conversação, jogos de interpretação (roleplay) ou tutores online que mantêm a memória do diálogo com o utilizador.</li>
                          <li><strong>Freeform Prompt (Livre):</strong> Ideal para análise rápida de conteúdos estruturados. Permite inserir e carregar ficheiros pesados em anexo (como PDFs de manuais de centenas de páginas ou gravações áudio) e escrever perguntas sobre os mesmos.</li>
                          <li><strong>Structured Prompt (Prompts de Exemplificação):</strong> É a joia da coroa para garantir padrões de saída rígidos. Pode definir pares exatos de exemplos (ex: Introduzo este texto &rarr; IA devolve este formato) antes de submeter o prompt real.</li>
                        </ul>
                      </div>
                    )}

                    {clickCount === 2 && (
                      <div>
                        <h4 className="font-bold text-rose-600 text-xs uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <Key className="w-4 h-4 text-rose-500" /> Get API key
                        </h4>
                        <h3 className="text-lg font-bold text-slate-900 mb-3 font-sans">Chave API: A Credencial Mágica</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-4 font-sans">
                          Este é o botão crucial que permite exportar a inteligência do Gemini para as suas próprias ferramentas práticas ou partilhar produtos web online.
                        </p>
                        <p className="text-slate-755 text-xs md:text-sm leading-relaxed font-sans">
                          Ao clicar aqui, a Google permite gerar uma <strong>Chave de Segurança pessoal e única (API Key)</strong>. Copie esta chave de forma segura e configure-a nas variáveis de ambiente (.env) da sua aplicação que está prestes a publicar, ou nas variáveis de administração de alojadores sem servidores (como o Netlify).
                        </p>
                        <div className="mt-4 bg-amber-50 border border-amber-200 p-3.5 rounded-xl text-xs text-amber-900">
                          <strong>🚨 Proteção Rigorosa:</strong> Nunca cole esta chave diretamente no código visível de páginas web ou no GitHub público. Se outros utilizadores a visualizarem, poderão fazer chamadas em seu nome esgotando a sua quota diária disponível!
                        </div>
                      </div>
                    )}

                    {clickCount === 3 && (
                      <div>
                        <h4 className="font-bold text-amber-600 text-xs uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <BookOpen className="w-4 h-4" /> My Library
                        </h4>
                        <h3 className="text-lg font-bold text-slate-900 mb-3 font-sans">Biblioteca Privada do Utilizador</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans">
                          A sua My Library funciona como um gestor privado de ficheiros na nuvem da Google. Tudo o que guarda fica sincronizado com a sua conta Google, de forma inteiramente secreta e segura.
                        </p>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed mt-2 font-sans">
                          Permite catalogar prompts longos, reabrir rascunhos de system-instructions para fins de edição, ou guardar estruturas de chatbots pedagógicos que queira continuar a alimentar e a testar noutros dias de trabalho.
                        </p>
                      </div>
                    )}

                    {clickCount === 4 && (
                      <div>
                        <h4 className="font-bold text-emerald-600 text-xs uppercase tracking-widest mb-2 flex items-center gap-1.5">
                          <BarChart2 className="w-4 h-4" /> Model Tuning
                        </h4>
                        <h3 className="text-lg font-bold text-slate-900 mb-3 font-sans">Ajuste de Comportamento Técnico</h3>
                        <p className="text-slate-600 text-xs md:text-sm leading-relaxed font-sans">
                          Permite recalibrar a rede neuronal do modelo alimentando-o com um dataset (conjunto volumoso) de formação próprio. Isto é usado quase exclusivamente por programadores avançados de inteligência artificial corporativa quando precisam que o modelo aprenda gírias técnicas exclusivas de uma empresa ou regras estritas.
                        </p>
                        <p className="text-slate-500 text-2xs md:text-xs leading-relaxed mt-3 font-mono">
                          Nota: Para a esmagadora maioria das necessidades docentes e gerais de planeamento ou automação, o uso das normais <strong>System Instructions</strong> no modo de Prompt Livre é mais do que suficiente e não requer model tuning complexo.
                        </p>
                      </div>
                    )}
                  </div>

                  <div className="flex gap-2 justify-end mt-6">
                    <span className="text-[10px] bg-slate-200 py-1 px-2.5 rounded text-slate-500 uppercase tracking-widest font-mono">Interativo</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'netlify' && (
            <motion.div 
              key="netlify"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              {/* Question card highlighting that Netlify is NOT the only one */}
              <div className="bg-blue-50/75 border border-blue-200 p-6 rounded-2xl flex items-start gap-4">
                <div className="p-3 bg-blue-100/80 rounded-xl text-blue-700 font-bold text-xl leading-none">
                  ❓
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm md:text-base font-sans mb-1">
                    Só é possível publicar no Netlify?
                  </h3>
                  <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                    <strong>Absolutamente não!</strong> O Netlify é muito popular porque permite publicar aplicações estáticas em segundos apenas arrastando uma pasta. No entanto, o Google AI Studio e os projetos associados geram código e recursos Web padrão de engenharia. Pode usar <strong>qualquer plataforma de alojamento moderno</strong> do mercado, quase todas com planos gratuitos altamente generosos para fins educativos ou experimentais.
                  </p>
                </div>
              </div>

              {/* Bento Grid layout of major publishing alternatives */}
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mt-4 mb-2 flex items-center gap-2 font-sans">
                <Globe className="w-4 h-4 text-slate-700" />
                As 6 Principais Formas de Publicar as suas Aplicações
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 font-sans">
                {/* 1. Netlify */}
                <div className="p-5 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-slate-350 transition-all shadow-2xs">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-teal-500"></span>
                      <h4 className="font-bold text-slate-950 text-xs">1. Netlify (Drag & Drop)</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      A rota mais intuitiva para quem não quer mexer em comandos do terminal. Basta arrastar a sua pasta do projeto compilada diretamente para a página do browser do Netlify.
                    </p>
                  </div>
                  <div className="text-[10px] bg-slate-100 py-1.5 px-2.5 rounded text-slate-700 font-semibold inline-block self-start">
                    Dificuldade: Muito Fácil 🟢
                  </div>
                </div>

                {/* 2. Vercel */}
                <div className="p-5 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-slate-350 transition-all shadow-2xs">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
                      <h4 className="font-bold text-slate-950 text-xs">2. Vercel (Foco em Git/React)</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Líder em publicações Web modernas. Conecta-se diretamente ao seu repositório do GitHub e recompila o seu site de cada vez que atualiza o código com total eficiência.
                    </p>
                  </div>
                  <div className="text-[10px] bg-slate-100 py-1.5 px-2.5 rounded text-slate-700 font-semibold inline-block self-start">
                    Dificuldade: Fácil 🟢
                  </div>
                </div>

                {/* 3. GitHub Pages */}
                <div className="p-5 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-slate-350 transition-all shadow-2xs">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-800"></span>
                      <h4 className="font-bold text-slate-950 text-xs">3. GitHub Pages (100% Integrado)</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Se já armazena os seus trabalhos em repositórios GitHub, pode ativar as &quot;Pages&quot; nas definições do repositório para publicar o site gratuitamente sem intermediários de terceiras partes.
                    </p>
                  </div>
                  <div className="text-[10px] bg-slate-100 py-1.5 px-2.5 rounded text-slate-700 font-semibold inline-block self-start">
                    Dificuldade: Média 🟡
                  </div>
                </div>

                {/* 4. Firebase Hosting */}
                <div className="p-5 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-slate-350 transition-all shadow-2xs">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      <h4 className="font-bold text-slate-950 text-xs">4. Firebase Hosting (Nuvem Google)</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Parte do ecossistema Google Cloud. Se a sua inteligência artificial necessitar de bases de dados robustas (Firestore) ou logins seguros, o Firebase aloja tudo de forma nativa.
                    </p>
                  </div>
                  <div className="text-[10px] bg-slate-100 py-1.5 px-2.5 rounded text-slate-700 font-semibold inline-block self-start">
                    Dificuldade: Conhecedor 🔴
                  </div>
                </div>

                {/* 5. Google AI Studio Share */}
                <div className="p-5 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-slate-350 transition-all shadow-2xs">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse"></span>
                      <h4 className="font-bold text-slate-950 text-xs">5. Partilha Direta do Estúdio</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      O próprio Google AI Studio tem um botão azul com a inscrição <strong className="text-blue-600">Share</strong> (Partilhar). Ele gera uma hiperligação para que outros possam reabrir o prompt e interagir diretamente no seu ambiente escolar ou laboratório de testes.
                    </p>
                  </div>
                  <div className="text-[10px] bg-emerald-100 text-emerald-800 py-1.5 px-2.5 rounded font-bold inline-block self-start">
                    Sem Servidores 🚀
                  </div>
                </div>

                {/* 6. Servidores HTTP ou Moodle */}
                <div className="p-5 bg-white border border-slate-200 rounded-2xl flex flex-col justify-between hover:border-slate-350 transition-all shadow-2xs">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-slate-400"></span>
                      <h4 className="font-bold text-slate-950 text-xs">6. Servidores HTTP ou Moodle</h4>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-3">
                      Como a compilação gera puros ficheiros HTML, CSS e JavaScript estáticos, pode alojá-los em servidores internos de Agrupamentos, redes locais escolares de professores ou até integrá-los como recursos do Moodle.
                    </p>
                  </div>
                  <div className="text-[10px] bg-slate-100 py-1.5 px-2.5 rounded text-slate-700 font-semibold inline-block self-start">
                    Universais 🌐
                  </div>
                </div>
              </div>

              {/* General Build and steps walkthrough */}
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 font-sans">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                  <Server className="w-4 h-4 text-indigo-600" />
                  Mecânica Geral: Como as Aplicações vão do Computador ao Servidor
                </h3>

                <div className="relative border-l-2 border-slate-200 pl-6 space-y-6 text-xs text-slate-600">
                  <div className="relative">
                    <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-slate-200 border border-white text-[9px] font-bold text-slate-600 flex items-center justify-center">1</span>
                    <h4 className="font-bold text-slate-900 mb-1">Passo 1: Gerar os Ficheiros Finais para o Servidor (Compilação)</h4>
                    <p className="leading-relaxed mb-2">
                      No terminal de comandos do seu computador (estando dentro da pasta raiz do seu projeto), corra o comando standard:
                    </p>
                    <code className="bg-slate-900 text-slate-100 p-2.5 rounded block font-mono text-[11px] w-full text-left my-1">
                      npm run build
                    </code>
                    <p className="text-slate-500 leading-relaxed mt-1">
                      Isto junta e otimiza todas as centenas de ficheiros React/TypeScript, transformando-os numa única pasta simples chamada <strong className="text-slate-800">dist/</strong> ou <strong className="text-slate-800">build/</strong> que contém ficheiros universais compreendidos por qualquer servidor do planeta.
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-slate-200 border border-white text-[9px] font-bold text-slate-600 flex items-center justify-center">2</span>
                    <h4 className="font-bold text-slate-900 mb-1">Passo 2: Entregar a Pasta ao Servidor Escolhido</h4>
                    <p className="leading-relaxed">
                      Ligue-se ao seu alojador gratuito de eleição (seja <strong>Netlify</strong>, <strong>Vercel</strong>, ou envie pelo <strong>GitHub Desktop</strong>). Faça o upload da pasta <strong className="text-slate-800">dist/</strong> inteira. O seu site ficará imediatamente disponível através de uma hiperligação segura com encriptação HTTPS ativa (com o cadeado de segurança).
                    </p>
                  </div>

                  <div className="relative">
                    <span className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-slate-200 border border-white text-[9px] font-bold text-slate-600 flex items-center justify-center">3</span>
                    <h4 className="font-bold text-slate-900 mb-1">Passo 3: Configurar a Chave API como Variável Invisível</h4>
                    <p className="leading-relaxed mb-1">
                      Para que a inteligência do Gemini responda aos utilizadores do seu website sem expor a sua chave privada aos visitantes nos navegadores:
                    </p>
                    <p className="leading-relaxed">
                      Aceda ao menu de definições do seu painel do alojador (ex: no Netlify está em <i>Site Settings &gt; Environment Variables</i>, e na Vercel está em <i>Settings &gt; Environment Variables</i>). Crie uma variável com o nome <code className="bg-slate-200 px-1.5 py-0.5 rounded font-mono font-bold text-rose-700">VITE_GEMINI_API_KEY</code> e cole o código da sua Chave API obtida no Google AI Studio. O servidor tratará de gerir as comunicações de forma de segurança garantida!
                    </p>
                  </div>
                </div>
              </div>

              {/* GitHub Flow Quick Guide */}
              <div className="bg-indigo-50/40 border border-indigo-100 rounded-2xl p-6 font-sans">
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-2 bg-indigo-100 rounded-lg text-indigo-700">
                    <Globe className="w-5 h-5" />
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Já publicou no GitHub? Como Ativar o Link de Visualização Gratuito
                  </h3>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Se já submeteu ou sincronizou os seus ficheiros com um repositório no **GitHub**, tem à disposição os dois métodos padrão mais profissionais para gerar e obter a hiperligação de visualização pública:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 text-xs">
                    <span className="font-bold text-indigo-750 block">Método A: Ligar ao Netlify/Vercel (Recomendado/Automático)</span>
                    <p className="text-slate-600 leading-relaxed">
                      Este é o método mais simples e robusto. Em vez de fazer o upload manual de ficheiros, deixa que a nuvem compile e atualize o código de forma autónoma:
                    </p>
                    <ol className="list-decimal pl-4 text-slate-500 space-y-1 text-2xs md:text-xs">
                      <li>Crie conta no <strong>Netlify</strong> ou <strong>Vercel</strong> e selecione a opção para se registar/conectar via <strong>GitHub</strong>.</li>
                      <li>Clique em <strong>Add New Site</strong> (ou <i>New Project</i>) &gt; selecione o seu repositório sincronizado.</li>
                      <li>As plataformas detetam as configurações Vite do projeto de imediato. Clique em <strong>Deploy</strong> (Publicar).</li>
                      <li><strong>Vantagem única:</strong> Sempre que fizer um novo &quot;Push&quot; ou alteração de código no GitHub, a sua aplicação reconstrói-se no seu link público de forma 100% automática!</li>
                    </ol>
                  </div>
                  <div className="p-4 bg-white border border-slate-200 rounded-xl space-y-2 text-xs">
                    <span className="font-bold text-slate-800 block">Método B: Ativar o GitHub Pages Nativo</span>
                    <p className="text-slate-600 leading-relaxed">
                      Se deseja que a página seja servida diretamente a partir do próprio GitHub sem usar terceiros, configure a biblioteca do Pages:
                    </p>
                    <ol className="list-decimal pl-4 text-slate-500 space-y-1 text-2xs md:text-xs">
                      <li>No terminal da pasta local do seu projeto, instale executando: <code className="bg-slate-105 p-0.5 rounded font-mono text-[10px] text-slate-800">npm install gh-pages --save-dev</code>.</li>
                      <li>Adicione a propriedade <code className="bg-slate-105 p-0.5 rounded font-mono text-[10px] text-slate-800">&quot;homepage&quot;: &quot;https://utilizador.github.io/repositorio&quot;</code> no ficheiro <code className="font-mono text-[10px]">package.json</code>.</li>
                      <li>Adicione a linha em scripts do package.json: <code className="bg-slate-105 p-0.5 rounded font-mono text-[10px] text-slate-800">&quot;deploy&quot;: &quot;gh-pages -d dist&quot;</code>.</li>
                      <li>Execute <code className="bg-slate-105 p-0.5 rounded font-mono text-[10px] text-slate-850">npm run deploy</code> para compilar e enviar o site para o ramo especial gh-pages que fornece o link de visualização público.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'apikey' && (
            <motion.div 
              key="apikey"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="bg-rose-50/50 border border-rose-100 p-5 rounded-2xl flex items-start gap-3">
                <Key className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
                  <strong>O que é a Chave API (API Key)?</strong> Pense na sua Chave API como uma <strong>chave digital ou uma palavra-passe de acesso exclusivo</strong>. Ela autentica as requisições que o seu software ou site autónomo faz aos modelos Gemini alojados na infraestrutura de servidores da Google.
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-sans">
                {/* How to get it and test placeholder */}
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-4">
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <Server className="w-4 h-4 text-rose-600" />
                    Como Obter No Google AI Studio
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Basta olhar para a barra de navegação lateral esquerda da consola do seu Google AI Studio e clicar sobre o botão <strong className="text-rose-600">Get API key</strong> (Obter Chave da API).
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Aparecerá uma janela onde deve clicar em <strong>Create API Key</strong>. Pode associar a sua chave a um projeto Cloud existente (ou criar um novo gratuito na hora em poucos segundos) e copiar o código alfa-numérico resultante.
                  </p>

                  {/* interactive widget placeholder to test key format */}
                  <div className="pt-3 border-t border-slate-200">
                    <label className="text-[10px] font-bold text-slate-500 block mb-1.5 uppercase font-sans">Simule um Verificador de Formato de Chave (Seguro):</label>
                    <div className="flex gap-2">
                      <div className="relative flex-1">
                        <input 
                          type={showMockApiKey ? "text" : "password"}
                          placeholder="AIzaSy..." 
                          className="w-full bg-white border border-slate-200 p-2 rounded text-xs focus:ring focus:ring-blue-100 focus:outline-none"
                        />
                        <button 
                          onClick={() => setShowMockApiKey(!showMockApiKey)}
                          className="absolute right-2.5 top-2.5 text-slate-400 hover:text-slate-600"
                        >
                          {showMockApiKey ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                        </button>
                      </div>
                      <span className="bg-blue-50 text-blue-700 border border-blue-100 text-[10px] px-2.5 py-1.5 rounded font-bold uppercase whitespace-nowrap self-center">Formato Correto</span>
                    </div>
                    <span className="text-[9px] text-slate-400 block mt-1.5">Uma Chave API real da Google começa sempre com as letras &quot;AIzaSy&quot;.</span>
                  </div>
                </div>

                {/* Practical recommendations */}
                <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl text-xs space-y-4">
                  <h4 className="font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    Recomendações e Boas Práticas de Quotas
                  </h4>
                  
                  <div className="space-y-3 font-sans">
                    <p className="text-slate-600 leading-relaxed">
                      <strong>1. Nunca insira dados pessoais dos alunos:</strong> A privacidade de dados escolares (RGPD) obriga a que informações sensíveis não circulem de forma descuidada. Garanta a anonimização antes do processamento.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      <strong>2. Limites Gratuitos (Free Tier):</strong> A Google disponibiliza quotas generosas sem custos. Por exemplo, o Gemini 1.5 Flash na versão gratuita permite até 15 pedidos por minuto (RPM) e 1.500 solicitações por dia, o que é mais do que suficiente para suportar as necessidades diárias de múltiplos agrupamentos ou departamentos de docentes inovadores.
                    </p>
                    <p className="text-slate-600 leading-relaxed">
                      <strong>3. Ocultação de Segurança, Sem Githuub Público:</strong> Se colocar o código público com a Chave exposta em texto limpo, os robôs de detecção mundiais podem apanhá-la em segundos, bloqueando o acesso da Google à sua chave. Ocultar é prevenir!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
