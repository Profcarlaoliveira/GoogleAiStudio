import { useState, ComponentType } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  BookOpen, 
  Sparkles, 
  Copy, 
  Check, 
  LayoutGrid, 
  Award, 
  Lightbulb, 
  Sliders, 
  FileText, 
  Compass, 
  HelpCircle,
  Puzzle,
  FileCheck,
  MessageSquare,
  HelpCircle as HelpIcon,
  ChevronRight,
  UserCheck
} from "lucide-react";

// Categorias e templates de prompts pedagógicos customizáveis para o Google AI Studio
interface PromptCategory {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
  headline: string;
  modelRecommendation: string;
  systemInstructionTemplate: string;
  promptTemplate: (vars: Record<string, string>) => string;
  variables: {
    key: string;
    label: string;
    placeholder?: string;
    type: "text" | "select" | "textarea";
    options?: string[];
    defaultValue: string;
  }[];
}

const CAT_PROMPTS: PromptCategory[] = [
  {
    id: "planner",
    title: "Plano de Aula Dinâmico",
    description: "Planos de aula realistas focados em metodologias ativas e cronograma estruturado passo a passo.",
    icon: BookOpen,
    headline: "Copiloto para Planos de Aula no Estúdio",
    modelRecommendation: "Gemini 1.5 Flash (Rápido e Altamente Eficiente)",
    systemInstructionTemplate: "Atua como um professor sénior do Ensino Básico e Secundário em Portugal e consultor de excelência pedagógica. O teu objetivo é estruturar sequências didáticas e planos de aula inovadores, práticos, orientados para o sucesso dos alunos e perfeitamente ajustados aos limites temporais propostos.",
    variables: [
      { key: "subject", label: "Disciplina / Área Curricular", placeholder: "Ex: Ciências Naturais", type: "text", defaultValue: "Ciências Naturais" },
      { key: "topic", label: "Tema da Aula / Conteúdo", placeholder: "Ex: A Fotossíntese e a Importância das Plantas", type: "text", defaultValue: "A Fotossíntese e a importância das plantas na biosfera" },
      { key: "grade", label: "Nível / Ano de Escolaridade", placeholder: "Ex: 8º Ano", type: "text", defaultValue: "8º Ano" },
      { key: "duration", label: "Duração Estimada da Sessão", placeholder: "Ex: 90 minutos", type: "text", defaultValue: "90 minutos" },
      { 
        key: "methodology", 
        label: "Metodologia Ativa Principal", 
        placeholder: "Selecione uma abordagem", 
        type: "select", 
        options: [
          "Aprendizagem Baseada em Projetos (PBL)",
          "Sala de Aula Invertida (Flipped Classroom)",
          "Aprendizagem Cooperativa (Trabalho de Núcleos)",
          "Ensino Baseado em Desafios (Challenge-based)",
          "Pesquisa Autónoma e Dramatização Cooperativa"
        ],
        defaultValue: "Aprendizagem Baseada em Projetos (PBL)" 
      },
      { key: "extras", label: "Notas Extra / Recursos Específicos", placeholder: "Ex: Incluir uma experiência simples com folhas e luz solar.", type: "textarea", defaultValue: "Incluir uma mini experiência simples sobre a clorofila usando álcool e folhas, além de um quiz cooperativo à saída da aula." }
    ],
    promptTemplate: (vars) => `Cria um plano de aula detalhado em português europeu (Portugal) para a disciplina de **${vars.subject}**, desenhado especificamente para alunos do **${vars.grade}**, com a duração exata de **${vars.duration}**.

O tema científico e prático central é: **"${vars.topic}"**.
A metodologia pedagógica nuclear indispensável para este plano é: **${vars.methodology}**.
${vars.extras ? `Requisitos adicionais definidos pelo utilizador: "${vars.extras}"` : ""}

Estrutura o plano rigorosamente com as seguintes secções numeradas em Markdown:

1. ENQUADRAMENTO CURRICULAR E METAS
- Breve enquadramento no programa nacional.
- 3 Objetivos de Aprendizagem claros com base na Taxonomia de Bloom: um Conceptual (Saber), um Procedimental (Saber Fazer) e um Atitudinal (Saber Estar/Trabalhar em equipa).

2. RECURSOS DIDÁTICOS E ESPACIAIS
- Lista de recursos necessários e a disposição física recomendada das carteiras (ex: grupos de 4 alunos) para potenciar a colaboração.

3. DESENVOLVIMENTO CRONOLÓGICO DA SESSÃO (Dividido meticulosamente pelo tempo disponível):
- Introdução & Gancho Motivacional (10-15% do tempo): Atividade ou questão disruptiva de partida para captar a curiosidade.
- Descoberta Ativa ou Prática (50-60% do tempo): Tarefa onde os alunos investigam ou criam de forma cooperativa.
- Consolidação e Partilha Coletiva (15-20% do tempo): Discussão aberta conduzida pelo professor e síntese no quadro.
- Ticket de Saída / Diagnóstico Individual (10% do tempo): Uma pergunta ou reflexão curta de avaliação formativa.

4. INCLUSÃO E DIFERENCIAÇÃO PEDAGÓGICA (Estratégias Úteis):
- Uma medida concreta para apoiar alunos com maiores dificuldades de captação teórica.
- Um desafio suplementar (\"Estímulo\") para alunos que terminam a tarefa de forma célere.`
  },
  {
    id: "rubric",
    title: "Grelhas de Avaliação (Rubricas)",
    description: "Critérios de classificação explícitos e níveis transparentes de 1 a 5 para apoiar o feedback.",
    icon: Award,
    headline: "Criador de Rubricas de Avaliação Formativa",
    modelRecommendation: "Gemini 1.5 Flash ou Gemini 2.5 Flash",
    systemInstructionTemplate: "Atua como um avaliador especializado em design instrucional e avaliação formativa transparente. Deves projetar rubricas e grelhas claras com critérios estritamente objetivos, focados no crescimento cognitivo do aluno e fáceis de converter para classificações formais.",
    variables: [
      { key: "subject", label: "Disciplina / Unidade Curricular", placeholder: "Ex: Língua Portuguesa", type: "text", defaultValue: "Língua Portuguesa" },
      { key: "task", label: "Trabalho ou Atividade a Avaliar", placeholder: "Ex: Apresentação Oral de Obra Literária", type: "text", defaultValue: "Apresentação Oral de uma Obra Literária do Plano Nacional de Leitura" },
      { key: "scale", label: "Escala / Níveis de Pontuação", placeholder: "Ex: 1 a 5 (Insuficiente a Excelente)", type: "text", defaultValue: "Níveis de 1 a 5 (Insuficiente, Suficiente, Bom, Muito Bom, Excelente)" },
      { key: "criteria", label: "Critérios de Avaliação Principais", placeholder: "Ex: Conteúdo, Expressão Oral e Tempo", type: "textarea", defaultValue: "Domínio e Rigor do Conteúdo (Saber), Clareza de Oratória/Postura (Saber Fazer), Uso de Suportes Visuais/Tecnologia, Cooperação e Gestão do Tempo." }
    ],
    promptTemplate: (vars) => `Desenha uma grelha de avaliação analítica (rubrica) em português de Portugal para a disciplina de **${vars.subject}**, desenvolvida especificamente para avaliar a seguinte atividade de aprendizagem: **"${vars.task}"**.

A escala de pontuação ou graduação desejada é: **${vars.scale}**.
Os critérios nucleares que devem ser incluídos e pesados na rubrica são: **${vars.criteria}**.

Organize a rubrica de forma visualmente apelativa e rigorosa em Markdown, estruturando:

1. INTRODUÇÃO EXPLICATIVA PARA OS ALUNOS
- Como explicar esta rubrica aos alunos antes do trabalho (para promover autoavaliação).

2. TABELA DE CRITÉRIOS DE CLASSIFICAÇÃO (Apresente em Markdown)
- Para cada um dos critérios indicados, descreva em pormenor o comportamento/evidência que corresponde de forma concreta a cada nível da escala (ex: Nível 1, Nível 2 até ao Nível 5). 
- Certifique-se de que os níveis descrevem factos substantivos observáveis e não adjetivos subjetivos de forma a que não haja dúvidas na avaliação.

3. BANCO DE COMENTÁRIOS DE APOIO (Banco de Feedback):
- Forneça 3 pequenos modelos de frases em português de Portugal para utilizar no feedback escrito:
  - Um modelo para quem obteve classificação de Excelência.
  - Um modelo de Progresso para quem ficou no meio da tabela, com dicas de melhoria.
  - Um modelo de Intervenção Breve com estratégias focadas para alunos que demonstram dificuldades acentuadas no trabalho.`
  },
  {
    id: "activity",
    title: "Desafios Ativos e Gamificação",
    description: "Projetos de cooperação, Escape Rooms pedagógicos e missões temáticas ativas para as aulas.",
    icon: Puzzle,
    headline: "Designer de Atividades Dinâmicas & Jogos",
    modelRecommendation: "Gemini 1.5 Flash (Para ideias de gamificação repletas de criatividade)",
    systemInstructionTemplate: "És um game designer educativo especializado na pedagogia lúdica, gamificação e aprendizagem cooperativa baseada em desafios. O teu propósito é desenhar missões educativas cativantes que agarrem a atenção dos alunos do início ao fim, mantendo o rigor curricular da disciplina.",
    variables: [
      { key: "subject", label: "Disciplina", placeholder: "Ex: História", type: "text", defaultValue: "História de Portugal" },
      { key: "topic", label: "Tema da Missão / Conteúdo", placeholder: "Ex: O 25 de Abril de 1974", type: "text", defaultValue: "A Revolução de 25 de Abril de 1974 e a conquista da Democracia" },
      { key: "grade", label: "Ano Escolar de Destino", placeholder: "Ex: 6º Ano", type: "text", defaultValue: "6º Ano" },
      { key: "duration", label: "Tempo Limite de Jogo", placeholder: "Ex: 45 minutos", type: "text", defaultValue: "50 minutos" },
      { 
        key: "mechanic", 
        label: "Mecânica da Atividade", 
        placeholder: "Selecione o formato", 
        type: "select", 
        options: [
          "Escape Room Cooperativo (Resolver mistérios e enigmas)",
          "Caça ao Tesouro com Códigos QR",
          "Dramatização Ativa em Papéis (Role-Playing)",
          "Torneio de Perguntas de Resolução Rápida (Game Show)",
          "Desafio de Resolução de Problemas Reais do Agrupamento"
        ],
        defaultValue: "Escape Room Cooperativo (Resolver mistérios e enigmas)" 
      }
    ],
    promptTemplate: (vars) => `Escreve o guião detalhado para uma atividade de aprendizagem ativa e gamificada baseada no tema: **"${vars.topic}"**, desenhada especificamente para turmas de **${vars.grade}** na disciplina de **${vars.subject}**, com o tempo exato de execução de **${vars.duration}**.

A mecânica base de gamificação implementada será: **${vars.mechanic}**.

Cria o recurso pedagógico integralmente em português europeu de Portugal e formata em Markdown claro para o professor, contendo:

1. O ENREDO / CONTEXTO LÚDICO DE PARTIDA
- Um texto dramático, mistério ou introdução envolvente que o professor lê em voz alta para dar início à aventura de forma teatral.

2. GUIÃO DE MONTAGEM E CONFIGURAÇÃO
- Instruções práticas indicando como preparar as equipas (recomende equipas com papéis integrados: Porta-voz, Controlador de Tempo, Secretário), os materiais físicos mínimos de baixo custo e como sinalizar as regras.

3. OS 3 ENIGMAS DA SESSÃO (Ordem Progressiva de Complexidade):
- Enigma 1 (Fácil - Retenção Histórica/Curricular): Desafio de escolha ou correspondência para aquecer a equipa.
- Enigma 2 (Médio - Aplicação/Análise): Tarefa onde as equipas interpretam um documento histórico curto, mapa ou imagem e descobrem um código ou palavra secreta.
- Enigma 3 (Complexo - Reflexão/Síntese): Um enigma de interpretação mais rigoroso, no qual a equipa tem de escrever uma breve conclusão cooperativa para ser validada pelo professor.

4. GABARITO E CHAVE DE PIXÉIS (Para o Professor)
- As respostas corretas aos enigmas e pistas rápidas adicionais sobre o que fazer caso uma equipa fique encravada na dinâmica.`
  },
  {
    id: "exercise",
    title: "Fichas & Questões Diferenciadas",
    description: "Gerador de quizzes dinâmicos e fichas com três níveis progressivos de dificuldade.",
    icon: FileCheck,
    headline: "Gerador de Fichas de Trabalho e Exercício",
    modelRecommendation: "Gemini 1.5 Flash ou Gemini 2.5 Flash",
    systemInstructionTemplate: "Atua como um professor autor de manuais escolares certificado em Portugal. Deves criar problemas em português europeu perfeitamente sequenciados, que permitam ao aluno de baixo ritmo recuperar e dêem o desafio necessário ao aluno avançado de alto desempenho.",
    variables: [
      { key: "subject", label: "Disciplina de Destino", placeholder: "Ex: Matemática", type: "text", defaultValue: "Matemática" },
      { key: "topic", label: "Matéria para as Questões", placeholder: "Ex: Teorema de Pitágoras", type: "text", defaultValue: "Teorema de Pitágoras e diagonais de quadriláteros" },
      { key: "grade", label: "Ano / Nível de Escolaridade", placeholder: "Ex: 9º Ano", type: "text", defaultValue: "9º Ano" },
      { key: "numQuestions", label: "Total de Questões Pretendido", placeholder: "Ex: 5 questões", type: "text", defaultValue: "5 questões" }
    ],
    promptTemplate: (vars) => `Cria uma mini ficha de trabalho e exercícios sequenciados em português europeu de Portugal sobre o tema: **"${vars.topic}"**, focada nos objetivos curriculares de **${vars.subject}** para o **${vars.grade}**.

A ficha deve conter exatamente: **${vars.numQuestions}**.

Disponibiliza os exercícios em formato Markdown limpo e atrativo de ler, estruturando as seguintes partes diferenciadas:

1. NOTA BREVE \"NÃO ESQUECER\":
- Um pequeno parágrafo de 3 a 4 linhas de síntese teórica conceptual simplificada para os alunos lerem como lembrete inicial antes de pegarem nos exercícios.

2. EXERCÍCIOS NÍVEL A - DESCOBERTA E CONCEITO (Básico):
- Questões de aplicação imediata que reforçam a retenção direta da fórmula ou conceito nuclear. Útil para dar confiança aos alunos.

3. EXERCÍCIOS NÍVEL B - CONTEXTO E QUOTIDIANO (Intermédio):
- Questões aplicadas a situações práticas reais da vida civil quotidiana, obrigando a interpretar o problema.

4. EXERCÍCIOS NÍVEL C - DESAFIO CRIATIVO (Avançado):
- Exercício mais complexo, de raciocínio múltiplo ou geometria cruzada, ideal para alunos de ritmo célere.

5. GABARITO COMENTADO (Para o Guia do Professor):
- As soluções exatas passo a passo e as advertências para \"Erros Comuns no Exame/Ficha\" que os alunos frequentemente cometem ao tentar resolver estas questões.`
  },
  {
    id: "feedback",
    title: "Feedback Formativo Empático",
    description: "Gera notas pedagógicas empáticas indicando virtudes, pontos críticos e soluções imediatas.",
    icon: MessageSquare,
    headline: "Mentor de Comunicação Escolar Construtiva",
    modelRecommendation: "Gemini 1.5 Flash",
    systemInstructionTemplate: "Atua como um mentor de professores e psicopedagogo com forte formação em comunicação não-violenta (CNV), psicologia positiva e mentoria de alunos em Portugal. Redige sempre feedbacks formativos que evitem rotulagens, que promovam o crescimento cognitivo e a motivação intrínseca.",
    variables: [
      { key: "subject", label: "Disciplina / Unidade Curricular", placeholder: "Ex: Geografia", type: "text", defaultValue: "Geografia" },
      { key: "studentProfile", label: "Perfil do Aluno e Principais Dificuldades", placeholder: "Descreva o comportamento/desempenho do aluno que precisa do feedback.", type: "textarea", defaultValue: "O aluno esforça-se e entrega as fichas, mas obteve classificação de 'Suficiente Baixo' na avaliação escrita porque confunde as escalas numéricas dos mapas e tem dificuldades severas em ler e deduzir coordenadas de latitude e longitude." },
      { 
        key: "tone", 
        label: "Tom e Abordagem Desejada", 
        type: "select", 
        options: [
          "Super Empático & Motivador (Ideal para alunos tímidos)",
          "Direto, Claro e Concreto (Alunos pragmáticos)",
          "Linguagem de Crescimento e Resiliência (Foco no esforço)"
        ],
        defaultValue: "Super Empático & Motivador (Ideal para alunos tímidos)"
      }
    ],
    promptTemplate: (vars) => `Escreve duas opções alternativas de feedback pedagógico formativo em português europeu de Portugal para um aluno da disciplina de **${vars.subject}**.

O perfil clínico ou de desempenho detalhado do estudante que guiará este comentário é:
*"${vars.studentProfile}"*

O tom e diretiva da comunicação devem assentar em: **${vars.tone}**.

Estruture as tuas opções em Markdown de forma muito clara para que o professor possa usá-las instantaneamente:

- **OPÇÃO 1: DIRECIONADA DIRETAMENTE AO ALUNO**
  - Um parágrafo equilibrado para o aluno ler ou receber em mão que inicie com um elogio verdadeiro à dedicação ou esforço demonstrado.
  - O apontamento calmo da lacuna técnica técnica detetada (escala dos mapas e coordenadas), de forma a que não pareça um erro punitivo, mas um passo natural no percurso de aprendizagem.
  - **Ação Prática Imediata:** 2 passos concretos e simples que o aluno pode tentar fazer nos próximos 3 dias de forma autónoma para testar e sanar essa dúvida (ex: um desenho rápido ou consultar um site didático específico).

- **OPÇÃO 2: NOTA DE CADERNETA PEDAGÓGICA (Para a Família / Tutor)**
  - Uma mensagem assertiva, curta, elegante e institucional direcionada aos Encarregados de Educação na caderneta digital do aluno, dando a conhecer que estão cientes da dificuldade mas que já foi traçado um plano conjunto rápido de apoio na aula para o aluno ultrapassar este obstáculo.`
  }
];

export default function AIPlanner() {
  const [activeCategory, setActiveCategory] = useState<string>("planner");
  const [guideTab, setGuideTab] = useState<"menu" | "header" | "cards" | "tools">("menu");
  const [inputs, setInputs] = useState<Record<string, string>>(() => {
    // Inicializar os estados do formulário com os valores de defeito de cada categoria para rapidez absoluta
    const initialInputs: Record<string, string> = {};
    CAT_PROMPTS.forEach(cat => {
      cat.variables.forEach(v => {
        initialInputs[`${cat.id}_${v.key}`] = v.defaultValue;
      });
    });
    return initialInputs;
  });

  const [promptCopied, setPromptCopied] = useState(false);
  const [systemCopied, setSystemCopied] = useState(false);

  // Encontrar o prompt correspondente ativo no momento
  const selectedCat = CAT_PROMPTS.find(c => c.id === activeCategory) || CAT_PROMPTS[0];

  const handleInputChange = (key: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [`${activeCategory}_${key}`]: value
    }));
  };

  // Extrair as variáveis correntes aplicáveis e gerar os textos
  const getActiveVars = () => {
    const vars: Record<string, string> = {};
    selectedCat.variables.forEach(v => {
      vars[v.key] = inputs[`${activeCategory}_${v.key}`] || v.defaultValue;
    });
    return vars;
  };

  const compiledPrompt = selectedCat.promptTemplate(getActiveVars());
  const compiledSystem = selectedCat.systemInstructionTemplate;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(compiledPrompt);
    setPromptCopied(true);
    setTimeout(() => setPromptCopied(false), 2000);
  };

  const handleCopySystem = () => {
    navigator.clipboard.writeText(compiledSystem);
    setSystemCopied(true);
    setTimeout(() => setSystemCopied(false), 2000);
  };

  return (
    <div className="space-y-8 text-left font-sans">
      
      {/* Intro Banner: Explaining the philosophy of Google AI Studio Prompt Bank */}
      <div className="bg-gradient-to-br from-indigo-900 via-indigo-950 to-slate-950 p-6 md:p-8 rounded-3xl text-white shadow-sm relative overflow-hidden">
        {/* Subtle decorative vector element as defined in Honesty and Anti-AI-slop philosophy */}
        <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="max-w-2xl relative z-10 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-indigo-500/35 border border-indigo-400/20 text-indigo-300 rounded-full text-[10px] font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Biblioteca de Engenharia de Prompts</span>
          </div>
          <h2 className="text-xl md:text-2xl font-extrabold font-display tracking-tight leading-tight text-white">
            Prompts Profissionais para o Google AI Studio
          </h2>
          <p className="text-xs text-slate-200 leading-relaxed md:text-sm font-medium">
            Para garantir que obtém resultados perfeitos sem os erros típicos de e-mails docentes ou chaves de segurança inválidas, criámos um <strong className="text-amber-350">Banco de Prompts Dinâmicos</strong>.
          </p>
          <p className="text-xs text-slate-300 leading-relaxed md:text-sm">
            Ajuste os parâmetros abaixo e copie diretamente os blocos de texto otimizados para dentro do painel oficial gratuita do <strong className="text-indigo-300">Google AI Studio</strong>.
          </p>
        </div>
      </div>

      {/* Interactive Visual Decode of Google AI Studio Interface (Upgrade moved to dedicated ConsoleExplorer tab) */}
      <div className="hidden bg-slate-50 border border-slate-200 rounded-3xl p-5 md:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/60 pb-4">
          <div className="space-y-1">
            <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 font-display">
              <Compass className="w-4.5 h-4.5 text-indigo-600" />
              Descodificador de Opções (Guia Oficial da Consola)
            </h3>
            <p className="text-[11px] text-slate-500">
              Explicação detalhada de cada botão, menu pendente, de contexto e cartão visual visível na imagem oficial do Google AI Studio:
            </p>
          </div>
          
          {/* Tabs to switch guide focus */}
          <div className="flex bg-slate-200/60 p-1 rounded-xl items-center gap-1 shrink-0 self-start sm:self-center overflow-x-auto max-w-full">
            <button
              id="guide-tab-menu"
              onClick={() => setGuideTab('menu')}
              className={`px-3 py-1.5 rounded-lg text-[10px] whitespace-nowrap font-extrabold transition-all cursor-pointer ${
                guideTab === 'menu' 
                  ? "bg-white text-slate-900 shadow-3xs" 
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Menu Lateral (Esquerda)
            </button>
            <button
              id="guide-tab-header"
              onClick={() => setGuideTab('header')}
              className={`px-3 py-1.5 rounded-lg text-[10px] whitespace-nowrap font-extrabold transition-all cursor-pointer ${
                guideTab === 'header' 
                  ? "bg-white text-slate-900 shadow-3xs" 
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Opções do Topo / Barra Superior
            </button>
            <button
              id="guide-tab-cards"
              onClick={() => setGuideTab('cards')}
              className={`px-3 py-1.5 rounded-lg text-[10px] whitespace-nowrap font-extrabold transition-all cursor-pointer ${
                guideTab === 'cards' 
                  ? "bg-white text-slate-900 shadow-3xs" 
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              Painel Central & Exploração
            </button>
            <button
              id="guide-tab-tools"
              onClick={() => setGuideTab('tools')}
              className={`px-3 py-1.5 rounded-lg text-[10px] whitespace-nowrap font-extrabold transition-all cursor-pointer ${
                guideTab === 'tools' 
                  ? "bg-amber-100 text-amber-900 shadow-3xs border border-amber-200" 
                  : "text-slate-500 hover:text-slate-800"
              }`}
            >
              🛠️ Ferramentas & IA (Novo)
            </button>
          </div>
        </div>

        {/* Content of selected Guide Tab */}
        <AnimatePresence mode="wait">
          {guideTab === 'menu' && (
            <motion.div
              key="menu-guide"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5"
            >
              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  Menu Google AI Studio ∨
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Seletor de Organização</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  Localizado junto ao logótipo no menu lateral. Permite alternar entre diferentes contas Google vinculadas ou selecionar outro ambiente de projeto Cloud no mesmo ecrã de forma limpa.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  🕹️ Playground
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">O Espaço de Trabalho Rápido</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  A página inicial de colagem de prompts (onde está selecionado na imagem). É aqui que cola os nossos **templates de prompts** para gerar os materiais novos rapidamente e de forma privada.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  🛠️ Build (Apps & Gallery)
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Gestão de Projetos</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  Contém a secção <strong>Apps</strong> (para gerir ou ligar as suas próprias aplicações) e a <strong>Gallery</strong> (uma coleção oficial de projetos modelo criativos que servem de inspiração).
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  📊 Dashboard
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Estatísticas e Chaves</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  Permite controlar de forma detalhada o seu volume de tráfego, limites de uso, quotas de chamadas aos servidores e gerir de forma privada as suas chaves API seguras.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  📖 Documentation
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Instruções de Suporte</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  Encaminha diretamente para os guias teóricos da Google, documentação de Engenharia de Prompts oficial para educadores e referências de códigos e APIs.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-50 text-amber-705 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  💎 Upgrade to unlock more
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Sinalizador de Limites</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  Localizado na parte inferior esquerda. Serve para docentes ou instituições que necessitam de migrar para os planos empresariais da Google Cloud para obter maiores taxas de pedidos com modelos Pro.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  🔍 Search
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Pesquisa de Prompts</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  Permite pesquisar rapidamente em toda a sua biblioteca de prompts guardados e conversas de testes guardadas anteriormente, poupando imenso tempo de organização.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  🔔 What's new
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Novidades da Google</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  Atalho com ícone de sino que abre o feed com as últimas atualizações, modificações de modelos da Google e correções de segurança aplicadas à plataforma.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left border-amber-300 bg-amber-50/20">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-amber-100 text-amber-800 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  🔑 Get API key
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Obter Chave API</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  <strong>Crucial!</strong> Aqui gera a sua chave alfanumérica secreta e pessoal para integrar a inteligência do Gemini em ferramentas parceiras ou projetos escolares próprios externos de forma oficial.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  ⚙️ Settings
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Definições Gerais</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  Espaço para definir permissões de privacidade, quotas recomendadas, preferências de layout escuro/claro e gerir as entidades vinculadas de faturamento e equipas.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  👤 Conta Ativa (aluno123educa...)
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Perfil de Sessão</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  No rodapé inferior esquerdo, mostra o e-mail de acesso ativo (como o seu e-mail pessoal de testes). Permite fazer Logout ou alternar a conta principal instantaneamente.
                </p>
              </div>
            </motion.div>
          )}

          {guideTab === 'header' && (
            <motion.div
              key="header-guide"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5"
            >
              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  ☰ Hambúrguer / Toggle Sidebar
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Ocultar o Menu Lateral</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  O botão redondo de transição no topo esquerdo do layout oficial (ao lado do título Playground). Serve para recolher o menu lateral e maximizar a área de inserção dos prompts.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  🔗 Botão de Partilha (Share)
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Divulgação de Prompts</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  No canto superior direito. Ao clicar, cria-se instantaneamente um link para partilhar o prompt ou a conversa atual com colegas docentes para trabalho conjunto.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  ⇅ Get Code / Compare
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Extração de Código e Comparação</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  Botão de setas opostas no canto superior direito. Permite obter o código de programação puro da IA (CJS, Python, REST) ou alternar o modo de teste para comparação de modelos.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  ➕ Botão Criar / New Prompt
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Novo Ambiente Limpo</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  Atalho redondo de mais (+) no canto superior direito para abrir de raiz um Chat Prompt novo, um Freeform Prompt em branco ou uma tabela de Structured Prompt recomendada.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left md:col-span-2 lg:col-span-2">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-indigo-50 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  ⋮ Opções e Definições (Dots)
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Definições da Conta</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  O botão de três pontos horizontais ou verticais no canto extremo direito. Dá acesso rápido às definições de faturamento, configurações Gerais do perfil ou visualização dos atalhos de teclado da Google Consola.
                </p>
              </div>
            </motion.div>
          )}

          {guideTab === 'cards' && (
            <motion.div
              key="cards-guide"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5"
            >
              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  Pills: Models & Agents
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Filtro de IA</h5>
                <p className="text-[10px] text-slate-650 leading-relaxed">
                  As pílulas bilaterais de seleção localizadas no limite centro-direito. Servem para alternar entre ver os Modelos puros de IA estruturados ou os Agentes personalizados no catálogo central de exploração.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  ⭐ Featured
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Novidades em Destaque</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  Espaço para experimentar e testar as mais modernas evoluções de modelos de linguagem da Google colocados à disposição imediatamente após os lançamentos de mercado.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  💬 Code and Chat
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Diálogo e Programação</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  Permite criar conversas estruturadas passo a passo, refinar lógicas, esclarecer dúvidas e programar algoritmos de apoio com o suporte das potências do Gemini.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  🖼️ Image Generation
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Criação de Apoio Visual</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  Acesso interativo a geradores de imagens e ilustrações escolares da Google (Imagen e Nano Banana) para criar esquemas didáticos visuais fantásticos.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  📹 Video Generation
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Simulação de Vídeo</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  Secção experimental para construir sequências visuais e clips rápidos de demonstração pedagógica baseados nos novos modelos de física da tecnologia Veo.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  🎙️ Speech and Music
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Biblioteca de Áudio</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  O local onde testa geradores de vozes faladas a partir de texto teórico (TTS) e fundos musicais de acompanhamento para as suas apresentações ou desafios (com Lyria).
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-blue-50 text-blue-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  ⚡ Real-time
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Respostas Imediatas</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  Sessões de vídeo e voz direta de baixíssima latência powered por Live API para criar interações fluidas com inteligência artificial instantânea.
                </p>
              </div>

              <div className="p-3.5 bg-white rounded-2xl border border-slate-200/80 shadow-3xs space-y-1.5 sm:col-span-2 text-left">
                <div className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-slate-100 text-slate-705 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  Start building →
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Criar Livremente</h5>
                <p className="text-[10px] text-slate-600 leading-relaxed">
                  Atalho ou rodapé central para saltar os caminhos guiados e iniciar logo a programação manual de um prompt vazio para modelações personalizadas de texto.
                </p>
              </div>
            </motion.div>
          )}

          {guideTab === 'tools' && (
            <motion.div
              key="tools-guide"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.15 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5"
            >
              <div className="p-3.5 bg-amber-50/10 rounded-2xl border border-amber-200 shadow-3xs space-y-1.5 text-left border-l-4 border-l-amber-500">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-100 text-amber-900 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  <span>📄 Structured outputs</span>
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Saídas Estruturadas (JSON)</h5>
                <p className="text-[10px] text-slate-650 leading-relaxed">
                  Garante que o Gemini responda exatamente em formatos lógicos fechados (como JSON). Perfeito para retirar do ar qualquer resposta informal ou prolixa da IA, gerando tabelas ou exercícios perfeitamente organizados para copiar.
                </p>
              </div>

              <div className="p-3.5 bg-amber-50/10 rounded-2xl border border-amber-200 shadow-3xs space-y-1.5 text-left border-l-4 border-l-amber-500">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-100 text-amber-900 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  <span>💻 Code execution</span>
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Execução Interna de Código</h5>
                <p className="text-[10px] text-slate-650 leading-relaxed">
                  Dá autonomia à IA para escrever de forma invisível código Python, compilá-lo, processá-lo e correr contas Matemáticas avançadas ou manipulações de textos infalivelmente, sem errar em contas elementares.
                </p>
              </div>

              <div className="p-3.5 bg-amber-50/10 rounded-2xl border border-amber-200 shadow-3xs space-y-1.5 text-left border-l-4 border-l-amber-500">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-amber-100 text-amber-900 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  <span>⚙️ Function calling</span>
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Chamada de Funções Externas</h5>
                <p className="text-[10px] text-slate-650 leading-relaxed">
                  Conecta o chat de inteligência artificial a sistemas lógicos programados por si. A IA deteta de forma inteligente quando deve consultar bancos de dados escolares ou acionar automações programadas.
                </p>
              </div>

              <div className="p-3.5 bg-amber-50/10 rounded-2xl border border-amber-200 shadow-3xs space-y-1.5 text-left border-l-4 border-l-indigo-600">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-indigo-550/15 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  <span>🌐 Grounding with Google Search</span>
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Pesquisa Ativa no Google</h5>
                <p className="text-[10px] text-slate-650 leading-relaxed">
                  Liga o modelo à internet atual em tempo real! Perfeito para o professor certificar factos históricos, verificar novidades didáticas e evitar qualquer tipo de alucinação de factos da IA.
                </p>
              </div>

              <div className="p-3.5 bg-amber-50/10 rounded-2xl border border-amber-200 shadow-3xs space-y-1.5 text-left border-l-4 border-l-indigo-600">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-indigo-550/15 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  <span>📍 Grounding with Google Maps</span>
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Ancoragem Local Maps</h5>
                <p className="text-[10px] text-slate-650 leading-relaxed">
                  Permite enriquecer dados geográficos escolares e localização de pontos didáticos reais mapeando coordenadas e locais com suporte de alta fidelidade da Google Maps Platform.
                </p>
              </div>

              <div className="p-3.5 bg-amber-50/10 rounded-2xl border border-amber-200 shadow-3xs space-y-1.5 text-left border-l-4 border-l-indigo-600">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-indigo-550/15 text-indigo-700 text-[9px] font-extrabold rounded-full uppercase tracking-wider">
                  <span>🔗 URL context</span>
                </div>
                <h5 className="text-[11px] font-bold text-slate-900 uppercase tracking-wider leading-none">Análise de Endereço Web</h5>
                <p className="text-[10px] text-slate-650 leading-relaxed">
                  Introduza diretamente links de portais educacionais, artigos online ou recursos virtuais. O Gemini analisa as informações desse endereço dinonicamente e usa-as como base direta escolar para gerar os outputs.
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Interactive Hub Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Side: Category Navigator & Interactive Input Forms */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Category Selector Tabs List */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-3xs space-y-2">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block px-1.5 mb-1">
              1. Selecionar o tipo de material
            </span>
            <div className="flex flex-col gap-1">
              {CAT_PROMPTS.map((cat) => {
                const CatIcon = cat.icon;
                const isActive = cat.id === activeCategory;
                return (
                  <button
                    key={cat.id}
                    id={`tab-prompt-${cat.id}`}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl text-left select-none cursor-pointer transition-all border ${
                      isActive 
                        ? "bg-blue-50/70 border-blue-200/90 text-blue-700 font-medium" 
                        : "bg-transparent border-transparent text-slate-600 hover:bg-slate-50 hover:text-slate-800"
                    }`}
                  >
                    <div className={`p-1.5 rounded-lg shrink-0 ${isActive ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"}`}>
                      <CatIcon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-bold block truncate leading-tight">{cat.title}</span>
                      <span className="text-[10px] text-slate-400 truncate block mt-0.5 leading-tight">{cat.description}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form Parameters for the chosen template */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-3xs space-y-4">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
              <Sliders className="w-4 h-4 text-slate-500 shrink-0" />
              <div className="text-left">
                <span className="text-xs font-bold text-slate-800 block">2. Customizar Parâmetros</span>
                <span className="text-[10px] text-slate-400">Preencha e o prompt atualizará na hora!</span>
              </div>
            </div>

            <div className="space-y-4">
              {selectedCat.variables.map((v) => {
                const currentVal = inputs[`${selectedCat.id}_${v.key}`] || v.defaultValue;
                return (
                  <div key={v.key} className="space-y-1.5 text-left">
                    <label className="text-xs font-semibold text-slate-700 block">
                      {v.label}
                    </label>
                    
                    {v.type === "text" && (
                      <input
                        type="text"
                        id={`input-${v.key}`}
                        value={currentVal}
                        onChange={(e) => handleInputChange(v.key, e.target.value)}
                        placeholder={v.placeholder}
                        className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-slate-50 focus:bg-white text-slate-800 transition-all font-sans"
                      />
                    )}

                    {v.type === "select" && (
                      <select
                        id={`input-${v.key}`}
                        value={currentVal}
                        onChange={(e) => handleInputChange(v.key, e.target.value)}
                        className="w-full text-xs px-2.5 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-slate-50 focus:bg-white text-slate-800 transition-all cursor-pointer font-sans"
                      >
                        {v.options?.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    )}

                    {v.type === "textarea" && (
                      <textarea
                        id={`input-${v.key}`}
                        rows={3}
                        value={currentVal}
                        onChange={(e) => handleInputChange(v.key, e.target.value)}
                        placeholder={v.placeholder}
                        className="w-full text-xs px-3 py-2 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-slate-50 focus:bg-white text-slate-800 transition-all resize-y font-sans"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Side: Compiled Copy-Paste Blocks (Sleek, transparent, readable design blocks) */}
        <div id="compiled-prompt-workspace" className="lg:col-span-8 space-y-6">

          {/* Quick AI Studio Tutorial Visual block */}
          <div className="bg-amber-50/70 border border-amber-200/80 p-5 rounded-2xl flex gap-3.5 items-start">
            <div className="p-2 bg-amber-100 text-amber-700 rounded-xl shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-slate-900 font-display">Como usar estes dados no Google AI Studio?</h4>
              <p className="text-2xs text-slate-600 leading-relaxed">
                O Google AI Studio divide a orquestração em duas partes para maior controlo pedagógico: as <strong>System Instructions</strong> (regras de atitude e comportamento, localizadas no painel lateral direito) e o <strong>Prompt Central</strong> (onde define o que quer construir especificamente agora). Ao copiá-los separadamente, garante uma qualidade imbatível de resposta!
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-xs space-y-6">
            
            {/* Header of Workspace */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-5">
              <div className="text-left space-y-1">
                <span className="text-[10px] text-indigo-600 font-bold uppercase tracking-widest block font-mono">Workspace Pronto</span>
                <h3 className="text-base font-extrabold text-slate-900 font-display flex items-center gap-1.5">
                  <FileText className="w-5 h-5 text-indigo-500" />
                  {selectedCat.headline}
                </h3>
              </div>
              <div className="shrink-0 flex items-center gap-2">
                <span className="text-[10px] text-slate-500 font-mono bg-slate-100 px-2 py-1 rounded-md border border-slate-200/50">
                  ⚡ Recomendado: {selectedCat.modelRecommendation}
                </span>
              </div>
            </div>

            {/* BLOCK 1: SYSTEM INSTRUCTION (CRITICAL) */}
            <div className="space-y-2 text-left">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                  <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wide">
                    Bloco 1: System Instructions (Instruções do Sistema)
                  </span>
                  <div className="group relative">
                    <HelpCircle className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-900 text-white text-[9px] p-2 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-20 leading-tight">
                      Para colar na caixa cinzenta "System Instructions" no painel direito da interface web do AI Studio.
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={handleCopySystem}
                  className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-2xs font-bold transition-all border shrink-0 cursor-pointer ${
                    systemCopied 
                      ? "bg-emerald-50 text-emerald-600 border-emerald-200" 
                      : "bg-slate-50 text-slate-650 hover:bg-slate-100 border-slate-200/80"
                  }`}
                >
                  {systemCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{systemCopied ? "Copiado!" : "Copiar Sistema"}</span>
                </button>
              </div>
              
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl relative font-mono text-[11px] leading-relaxed text-slate-650 whitespace-pre-wrap select-all font-medium">
                {compiledSystem}
              </div>
              <p className="text-[10px] text-slate-400 leading-tight mt-1">
                💡 <em>Diz ao modelo o enquadramento nacional (Portugal) e a conduta a seguir perante correções curriculares.</em>
              </p>
            </div>

            {/* BLOCK 2: MAIN PROMPT */}
            <div className="space-y-2 text-left pt-2 border-t border-slate-100">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-extrabold text-slate-800 uppercase tracking-wide">
                    Bloco 2: Prompt Principal (Instrução do Desafio)
                  </span>
                  <div className="group relative">
                    <HelpCircle className="w-3.5 h-3.5 text-slate-400 cursor-help" />
                    <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 bg-slate-900 text-white text-[9px] p-2 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-20 leading-tight">
                      Para colar na caixa de texto principal e central de input ("Type something...") onde decorre a conversa.
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={handleCopyPrompt}
                  className={`flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-2xs font-bold transition-all border shrink-0 cursor-pointer ${
                    promptCopied 
                      ? "bg-emerald-50 text-emerald-600 border-emerald-200" 
                      : "bg-blue-600 text-white hover:bg-blue-700 border-blue-500"
                  }`}
                >
                  {promptCopied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{promptCopied ? "Copiado!" : "Copiar Prompt Completo"}</span>
                </button>
              </div>

              <div className="p-4 bg-slate-950 text-white/95 rounded-xl font-mono text-xs leading-relaxed whitespace-pre-wrap select-all overflow-x-auto shadow-inner max-h-[380px] overflow-y-auto block relative border border-slate-900 text-left">
                {compiledPrompt}
              </div>
              <p className="text-[10px] text-slate-400 leading-tight mt-1">
                💡 <em>Instrução detalhada em Markdown com as variáveis que selecionou à esquerda prontas a carregar!</em>
              </p>
            </div>

          </div>

          {/* Quick interactive checklist representing Step-by-Step flow inside the Google AI Studio tool */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 text-left space-y-4 shadow-3xs">
            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 font-display">
              <UserCheck className="w-4 h-4 text-blue-600 shrink-0" />
              Preparações Rápidas no painel do Google AI Studio
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex gap-2">
                <div className="w-5 h-5 bg-indigo-100 text-indigo-700 font-extrabold text-2xs rounded-full flex items-center justify-center shrink-0">1</div>
                <div>
                  <h5 className="text-[11px] font-bold text-slate-800">Escolher o Modelo</h5>
                  <p className="text-[10px] text-slate-500 mt-1 leading-normal">Escolha <strong>Gemini 1.5 Flash</strong> ou <strong>Gemini 2.5 Flash</strong> na coluna do painel direito para respostas em tempo recorde.</p>
                </div>
              </div>
              
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex gap-2">
                <div className="w-5 h-5 bg-indigo-100 text-indigo-700 font-extrabold text-2xs rounded-full flex items-center justify-center shrink-0">2</div>
                <div>
                  <h5 className="text-[11px] font-bold text-slate-800">Definir Parâmetros</h5>
                  <p className="text-[10px] text-slate-500 mt-1 leading-normal">Aconselhamos a colocar a <strong>Temperature</strong> (Temperatura) em <strong>0.7</strong> ou <strong>0.8</strong> se pretender mais criatividade nas atividades.</p>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-100 flex gap-2">
                <div className="w-5 h-5 bg-indigo-100 text-indigo-700 font-extrabold text-2xs rounded-full flex items-center justify-center shrink-0">3</div>
                <div>
                  <h5 className="text-[11px] font-bold text-slate-800">Guardar o Prompt</h5>
                  <p className="text-[10px] text-slate-500 mt-1 leading-normal">Clique em <strong>Save</strong> (Guardar) no canto superior direito para manter as suas customizações associadas à sua conta Google.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
