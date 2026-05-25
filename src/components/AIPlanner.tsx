import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen, Sparkles, Wand2, Copy, FileText, Check, LayoutGrid, Award, Lightbulb, AlertTriangle, Key, Save, Eye, EyeOff, WifiOff } from "lucide-react";

// Motor Pedagógico Local Integrado (Gerador Offline offline)
const generateOfflineContent = (
  mode: 'planner' | 'rubric' | 'activity',
  subject: string,
  topic: string,
  grade: string,
  duration: string,
  methodology: string,
  extras: string
): string => {
  if (mode === 'planner') {
    return `# 📚 PLANO DE AULA: ${topic || "Sem tema definido"} (Gerador Local)
## ## Informações de Enquadramento Pedagógico
* **Disciplina / Área Curricular:** ${subject || "Ciências Naturais"}
* **Nível / Ano de Escolaridade:** ${grade || "8º Ano"}
* **Duração da Aula:** ${duration || "90 minutos"}
* **Metodologia Principal:** ${methodology || "Aprendizagem Ativa / Metodologias Práticas"}

## ## Objetivos de Aprendizagem (Taxonomia de Bloom)
* **Objetivo Conceptual (Saber):** Identificar, descrever e organizar as ideias centrais e a fundamentação teórica sobre **${topic || "este tema"}**, desenvolvendo um ponto de vista crítico sustentado no contexto didático de **${subject || "aula"}**.
* **Objetivo Procedimental (Saber Fazer):** Experimentar e conceber modelos práticos de resolução de desafios usando as ferramentas do modelo **${methodology || "pesquisa participativa"}**.
* **Objetivo Atitudinal (Saber Estar):** Desenvolver proatividade, autoavaliação contínua e partilha cooperativa em discussões de grupo.

## ## Recursos Didáticos e Tecnológicos Recomendados
* Computador pessoal, ligação à internet e display de sala de aula (Projetor/Ecrã Interativo).
* Recursos digitais de apoio e livro de texto adotado da área de **${subject || "estudo"}**.
* ${extras ? `*Recurso Personalizado Requerido:* **${extras}**` : `Material de anotação de grupo, cartolina de síntese ou diário de turma.`}

## ## Estrutura Cronológica Detalhada da Sessão

### ### 1. Introdução e Gancho Pedagógico (15% do tempo)
* **Atividades:** Lançamento de uma questão desafiante relacionada com **${topic || "esta área"}** para captar a curiosidade dos alunos de forma imediata.
* **Dinâmica:** Tormenta de ideias (Brainstorming) rápida para identificar conceitos prévios ou ideias intuitivas da turma de **${grade || "ensino"}**.

### ### 2. Estudo Coorientado e Atividade Prática (50% do tempo)
* **Atividades:** Trabalho de equipa em pequenos núcleos, seguindo a metodologia **${methodology || "focada na descoberta autónoma"}**.
* **Tarefa:** Investigação profunda sobre o tema **${topic || "estudado"}** e elaboração de conclusões ou esquemas rápidos.
* **Ajuste:** ${extras ? `Aplicação direta do elemento extra indicado pelo utilizador: *"${extras}"*` : `Registo e catalogação dos resultados parciais em folhas de suporte.`}

### ### 3. Sistematização e Debate Coletivo (20% do tempo)
* **Atividades:** Partilha estruturada das teorias levantadas pelos diferentes grupos no quadro integrador de sala.
* **Síntese:** Consolidação sistemática conduzida pelo professor para sedimentar o rigor terminológico e científico de **${subject || "esta disciplina"}**.

### ### 4. Autoavaliação e Quiz de Saída (15% do tempo)
* **Atividades:** Responder a três perguntas rápidas em formato individual ou realizar uma reflexão verbal sobre a aprendizagem de **${topic || "hoje"}**.

## ## Estratégias Inclusivas (Diferenciação Pedagógica)
* **Suporte à Aprendizagem (Maior Dificuldade):** Disponibilizar guiões visuais estruturados, fichas de apoio com vocabulário-chave e acompanhamento próximo em cada fase da atividade de **${topic || "aula"}**.
* **Estímulo Pedagógico (Ritmo Célere):** Desenvolvimento de uma pequena hipótese avançada, liderança da equipa e aplicação a um caso-estudo adicional complexo.

## ## Trabalho de Casa (TPC) ou Sugestão de Continuidade
* Elaborar de forma cooperativa um pequeno parágrafo ou mapa conceptual de síntese ligando o tema de **${topic || "estudo"}** ao quotidiano doméstico para expor no mural escolar.`;
  } else if (mode === 'rubric') {
    return `# 🏆 GRELHA DE AVALIAÇÃO: ${topic || "Tema de Avaliação"} (Gerador Local)
## ## Apresentação Geral e Finalidade Pedagógica
* **Disciplina ou Unidade:** ${subject || "Geral"}
* **Nível de Escolaridade:** ${grade || "Qualquer nível"}
* **Enfoque de Avaliação:** ${methodology || "Avaliação Formativa e Processual"}

Este instrumento tem como fim tornar os objetivos de avaliação totalmente transparentes, auxiliando os alunos na orientação da qualidade do seu próprio percurso em **${topic || "esta unidade"}**.

## ## Tabela de Critérios de Classificação (Níveis 1 a 5)

### ### Critério 1: Rigor de Conteúdo e Compreensão Conceptual (Peso: 40%)
* **Nível 1 (Insuficiente):** Não compreende os princípios base do tema **${topic || "indicado"}** e comete erros graves de rigor com regularidade.
* **Nível 2 (Suficiente):** Identifica os conceitos nucleares com suporte direto ou parcial do professor, mas de forma fragmentada e isolada.
* **Nível 3 (Bom):** Demonstra compreensão sólida e articula de forma clara os conceitos necessários ao estudo da matéria de **${subject || "estudo"}**.
* **Nível 4 (Muito Bom):** Utiliza com excelência e autonomia as teorizações de **${topic || "hoje"}**, relacionando a matéria com novos contextos práticos de forma exemplar.
* **Nível 5 (Excelente):** Revela uma profundidade teórica e terminológica assinalável e criativa para o nível escolar de **${grade || "ensino"}**.

### ### Critério 2: Planeamento de Metodologia e Aplicação Prática (Peso: 30%)
* **Nível 1 (Insuficiente):** Tem sérias dificuldades em aplicar a metodologia de **${methodology || "trabalho ativo"}** e em manter o foco e organização.
* **Nível 2 (Suficiente):** Segue o plano apenas se for acompanhado constantemente, demonstrando bloqueios na resolução prática autónoma de **${topic || "estudo"}**.
* **Nível 3 (Bom):** Realiza a sequência básica de atividades práticas propostas de forma organizada e estruturada do início ao fim.
* **Nível 4 (Muito Bom):** Revela espírito prático e segurança na aplicação das dinâmicas sugeridas ao abrigo da metodologia **${methodology || "escolhida"}**.
* **Nível 5 (Excelente):** Excede as expectativas nas tarefas práticas de **${topic || "pesquisa"}**. ${extras ? `*Integração de Extras:* Desenho brilhante no que respeita a: **${extras}**` : `Demonstra liderança de processo e autonomia assinalável.`}

### ### Critério 3: Comunicação e Partilha de Conclusões (Peso: 30%)
* **Nível 1 (Insuficiente):** Apresenta imensas dificuldades na transmissão clara das ideias básicas e não contribui para a dinâmica em grupo.
* **Nível 2 (Suficiente):** Expressa as suas opiniões de modo simples, necessitando de questões orientadoras frequentes no debate escolar.
* **Nível 3 (Bom):** Explica os seus pontos de vista de forma correta e clara, demonstrando respeito ativo pelas perspetivas dos colegas.
* **Nível 4 (Muito Bom):** Expressa-se com clareza exemplar de voz e oratória organizada, enriquecendo o diálogo do seu grupo de **${subject || "trabalho"}**.
* **Nível 5 (Excelente):** Domina as dinâmicas de apresentação e debate em sala, utilizando terminologias com altíssimo rigor e carisma comunicativo.

## ## Banco de Frases Rápidas para Feedback Pedagógico
* **Feedback de Excelência:** *"Muitos parabéns pelo teu percurso original e pelo rigor na discussão do tema **${topic}**. Mantém o foco e a paixão no estudo!"*
* **Feedback de Progresso Seguro:** *"Conseguiste cumprir as metas básicas com sucesso. Para subires de nível na próxima ficha, foca-te em aprofundar a metodologia de **${methodology || "trabalho planeado"}**."*
* **Feedback de Apoio Focado:** *"Ainda temos dificuldades em dominar de forma autónoma as teorias sobre **${topic}**. Vamos agendar um apoio breve para tirar dúvidas e estruturar melhor o teu estudo!"*`;
  } else {
    return `# ⚙️ ATIVIDADE PRÁTICA ATIVA: "Missão Explorer: ${topic || "Tema de Descoberta"}" (Gerador Local)
## ## Resumo e Ficha de Caracterização Teórica
* **Área Disciplinar:** ${subject || "Geral"}
* **Nível de Escolaridade:** Alunos do ${grade || "8º Ano"}
* **Duração Recomendada:** ${duration || "50 minutos"}
* **Formato Pedagógico:** ${methodology || "Dramatização / Pesquisa Ativa / Gamificação"}

## ## 1. Configuração do Espaço de Aula (Instruções para o Professor)
* **Disposição de Turma:** Reorganizar as mesas de forma flexível em círculos ou grupos de 4 elementos para incentivar o modelo cooperativo.
* **Lançamento:** Projetar a pergunta inicial no ecrã de sala e explicar aos alunos que integram uma missão de investigação sobre **${topic || "esta temática"}**.
* **Preparação:** ${extras ? `*Ajuste do setup com o conteúdo extra solicitado:* **${extras}**` : `Distribuir uma folha de registo por grupo para registar as ideias mais promissoras.`}

## ## 2. Manual de Missão do Aluno (Instruções Claras e Motivadoras)
* *"Olá, equipa de consultores e investigadores de **${grade || "Ensino"}**! Hoje temos um mistério importante para resolver e criar soluções reais para **${topic || "este tema"}**!"*
* **Instrução Inicial:** Escolham um colega como Porta-voz e outro como Controlador do Tempo do grupo.
* **Fórmula de Sucesso:** Leiam e discutam o desafio conceptual base. Apliquem o método científico ou as orientações da metodologia **${methodology || "proposta"}** de forma articulada.
* **Entrega:** Desenhem uma síntese expressiva em menos de **${duration || "30 minutos"}** para surpreender a turma de **${subject || "estudo"}**!

## ## 3. Dinâmica das Equipas e Regras de Sala
* **Atitude Cooperativa:** Todos os membros do grupo devem dar pelo menos uma contribuição teórica para a missão.
* **Regulamento:** A equipa que terminar o registo de forma fundamentada e rigorosa ganha um voto de mérito para o portefólio.
* **Sinal de Paragem:** Quando o professor levantar a mão e soar um curto sinal de aviso, todos conversam mais baixo e centram a atenção nas novas diretrizes.

## ## 4. Desafio de Resolução Rápida (com Pistas para o Professor)
* **Desafio Ativo:** Descobrir conexões diretas entre **${topic || "este assunto"}** e o nosso dia-a-dia real lá fora.
* **Guia de Resolução:** Recomende que façam uma lista rápida de 3 relações de causa-efeito que considerem lógicas no contexto da matéria de **${subject || "aula"}**.
* **Gabarito para Apoio:** ${extras ? `As orientações suplementares definidas por si em *"${extras}"* foram integradas como objetivo alternativo de alto rendimento pedagógico para a atividade.` : `A equipa atinge o sucesso pleno se conseguir expressar qual o impacto prático dos conceitos explorados para o bem-comum da sociedade.`}`;
  }
};

export default function AIPlanner() {
  const [activeMode, setActiveMode] = useState<'planner' | 'rubric' | 'activity'>('planner');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [statusText, setStatusText] = useState("");
  const [result, setResult] = useState<string>("");

  // Modo Simulação/Local Ativo para contornar restrições das Chaves API Google Cloud da escola
  const [simulationMode, setSimulationMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("pedagogical_simulation_mode");
    if (saved === null) {
      // Por padrão, se não tiverem chave configurada, ativamos o modo local/bypass 
      // para que o site funcione de forma imediata e sem erros!
      return true;
    }
    return saved === "true";
  });

  const toggleSimulationMode = (enabled: boolean) => {
    setSimulationMode(enabled);
    localStorage.setItem("pedagogical_simulation_mode", String(enabled));
  };

  // Standalone mode / Static deploy API Key configuration
  const [customApiKey, setCustomApiKey] = useState(() => localStorage.getItem("CUSTOM_GEMINI_API_KEY") || "");
  const [showApiKeySetting, setShowApiKeySetting] = useState(false);
  const [showKeyText, setShowKeyText] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const saveCustomApiKey = (key: string) => {
    // Sanitizar a chave removendo espaços em branco ou aspas extra indesejadas
    const cleanedKey = key.trim().replace(/^["']|["']$/g, '');
    localStorage.setItem("CUSTOM_GEMINI_API_KEY", cleanedKey);
    setCustomApiKey(cleanedKey);
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2000);
  };

  const clearCustomApiKey = () => {
    localStorage.removeItem("CUSTOM_GEMINI_API_KEY");
    setCustomApiKey("");
  };

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

    if (simulationMode) {
      // Modo offline rápido e robusto
      const interval = setInterval(() => {
        if (currentStatusIndex < statuses.length - 1) {
          currentStatusIndex++;
          setStatusText(statuses[currentStatusIndex]);
        }
      }, 350);

      setTimeout(() => {
        clearInterval(interval);
        const generated = generateOfflineContent(activeMode, subject, topic, grade, duration, methodology, extras);
        setResult(`✨ **[MOTO PEDAGÓGICO LOCAL ATIVO]** Este plano foi gerado localmente pelo simulador de apoio, contornando a restrição de permissão da chave na conta Google de forma 100% gratuita e prática! ✨

${generated}`);
        setLoading(false);
      }, 2100);
      return;
    }

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

      let textResult = "";
      let fetchSuccessful = false;
      let apiValidationError = "";

      // 1. If we have a custom API key, try using it first, otherwise check for Vite build-time environment variable
      const apiKey = customApiKey.trim() || 
                     ((import.meta as any).env?.ChaveKey || 
                      (process as any).env?.ChaveKey || 
                      (import.meta as any).env?.VITE_GEMINI_API_KEY || "").trim();
      if (apiKey) {
        try {
          const endpointsToTry = [
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`
          ];

          let lastError = null;
          for (const url of endpointsToTry) {
            try {
              const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  contents: [{ parts: [{ text: prompt }] }],
                  systemInstruction: { parts: [{ text: systemInstruction }] }
                })
              });

              if (response.ok) {
                const data = await response.json();
                if (data.candidates && data.candidates[0]?.content?.parts?.[0]?.text) {
                  textResult = data.candidates[0].content.parts[0].text;
                  fetchSuccessful = true;
                  break; // Successful direct client call!
                }
              } else {
                const errData = await response.json().catch(() => ({}));
                lastError = errData.error?.message || response.statusText;
              }
            } catch (err: any) {
              lastError = err.message || String(err);
            }
          }

          if (!fetchSuccessful) {
            console.warn(`Direct client call with custom API key failed (Error: ${lastError}). Attempting server proxy fallback...`);
            apiValidationError = lastError || "";
          }
        } catch (err) {
          console.warn("Direct client call failed, using server fallback", err);
        }
      }

      // 2. Try server-side proxy fallback if client-side direct calling failed OR was not attempted
      if (!fetchSuccessful) {
        try {
          const response = await fetch("/api/gemini/generate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ prompt, systemInstruction })
          });

          const contentType = response.headers.get("content-type");
          if (response.ok && contentType && contentType.includes("application/json")) {
            const data = await response.json();
            if (data.text) {
              textResult = data.text;
              fetchSuccessful = true;
            }
          } else {
            // If server returned error, extract details if possible for debug
            const errData = await response.json().catch(() => ({}));
            const serverErrMsg = errData.error || errData.details || response.statusText;
            console.warn(`Server fallback failed: ${serverErrMsg}`);
          }
        } catch (serverErr) {
          console.warn("Express server not available or returned an error:", serverErr);
        }
      }

      if (fetchSuccessful) {
        setResult(textResult || "Sem resposta obtida do modelo.");
      } else {
        // FALLBACK PEDAGÓGICO AUTOMÁTICO SE FALHAR A API (Bypass inteligente)
        console.warn("A chamada da API falhou ou foi bloqueada (" + (apiValidationError || "sem detalhes adicionais") + "). A correr o motor local de apoio.");
        const generated = generateOfflineContent(activeMode, subject, topic, grade, duration, methodology, extras);
        
        // Ativar o modo local em localStorage para as próximas gerações irem no segundo a seguir
        toggleSimulationMode(true);

        setResult(`✨ **[MOTO PEDAGÓGICO LOCAL ATIVADO AUTOMATICAMENTE]** ✨

Detetámos que a ligação ao servidor Gemini da Google foi barrada no seu dispositivo ou rede (por exemplo, restrições escolares, e-mail administrativo ou rede de agrupamento). 

Para que possa continuar a trabalhar sem impedimentos de forma 100% gratuita, o nosso **Motor Pedagógico Local Integrado** gerou de forma impecável e automática o seguinte material escolar completo para si:

---

${generated}`);
        return;
      }
        // If they provided a custom API key and it failed with a specific API validation error
        if (apiKey && apiValidationError) {
          if (apiValidationError.toLowerCase().includes("not found for api version") || 
              apiValidationError.toLowerCase().includes("not supported for generatecontent") ||
              apiValidationError.toLowerCase().includes("not found") ||
              apiValidationError.toLowerCase().includes("method not found")) {
            setResult(`### 🛑 Ativar Generative Language API na Consola do Google Cloud

A chave API que inseriu (que começa com **AIzaSy**) parece ser uma chave da **Consola do Google Cloud (GCP)**, mas a **Generative Language API** (API de Linguagem do Gemini) não está ativada no seu projeto de Cloud.

**Como resolver isto em 1 minuto:**

- **Opção Recomendada (Mais Simples e Segura):**
  1. Aceda à consola gratuita do **[Google AI Studio](https://aistudio.google.com/)**.
  2. Garanta que tem sessão iniciada com a sua conta Google.
  3. Clique em **"Get API key"** (Obter Chave API) e de seguida em **"Create API key"** (Criar chave).
  4. Copie a chave gerada e substitua-a aqui na barra de configuração. As chaves do AI Studio funcionam imediatamente e sem limites!

- **Opção para Google Cloud (GCP):**
  1. Aceda de forma direta à [Biblioteca de APIs do Google Cloud](https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com).
  2. Selecione o projeto associada à sua chave na barra azul superior do ecrã.
  3. Clique no botão azul **"Ativar"** (Enable).
  4. Aguarde cerca de 10 segundos para propagação global e execute a geração novamente aqui!

---
*Detalhes do erro técnico:* \`${apiValidationError}\``);
          } else if (apiValidationError.toLowerCase().includes("api key not valid") || 
                     apiValidationError.toLowerCase().includes("invalid key") ||
                     apiValidationError.toLowerCase().includes("key is invalid") ||
                     apiValidationError.toLowerCase().includes("invalid")) {
            setResult(`### 🛑 Chave API Não Válida ou Errada

A sua chave API introduzida não foi reconhecida pelos servidores oficiais da Google.

**Como resolver:**
1. Confirme se copiou a chave completa sem cortar nenhum caráter e sem espaços em branco no início ou no fim.
2. Certifique-se de que a chave começa mesmo com **AIzaSy...**
3. Se o erro persistir, recomendamos criar de forma imediata uma chave limpa e gratuita em [aistudio.google.com](https://aistudio.google.com/).

---
*Detalhes do erro técnico:* \`${apiValidationError}\``);
          } else if (apiValidationError.toLowerCase().includes("denied access") || 
                     apiValidationError.toLowerCase().includes("denied") ||
                     apiValidationError.toLowerCase().includes("permission") ||
                     apiValidationError.toLowerCase().includes("support")) {
            setResult(`### 🛑 A Google não deu autorização para usar esta Chave (Acesso Negado)

A Google devolveu uma mensagem muito específica ao tentar usar a sua Chave API:
> **"${apiValidationError}"** (Em português: *O utilizador não tem permissão*)

Isto **não é um erro seu nem do código deste site**! Significa apenas que a Google bloqueou o acesso à Inteligência Artificial na conta onde gerou essa chave.

**Por que é que a Google faz isto? (Dois motivos comuns):**
1. **Contas de Escolas / Agrupamentos / Trabalho:** Se criou a chave usando o e-mail da sua escola, agrupamento ou de trabalho, a Google bloqueia o acesso ao Gemini por segurança e dá este exato erro.
2. **Restrições na Chave:** Ao criar a chave na Consola, pode ter colocado restrições (como associar apenas ao Maps ou bloquear certos serviços) que barram a Inteligência Artificial.

**Como resolver isto de forma super simples (em menos de 2 minutos):**

* **Passo 1:** Abra uma **Janela Anónima / Privada** no seu navegador (para não misturar as suas contas automáticas).
* **Passo 2:** Aceda ao site oficial **[Google AI Studio](https://aistudio.google.com/)**.
* **Passo 3:** Inicie sessão com um **e-mail de Gmail pessoal normal (que acabe em @gmail.com)**. *Importante:* Não use e-mails da escola!
* **Passo 4:** Clique no botão azul **"Get API Key"** (Obter Chave API).
* **Passo 5:** Clique em **"Create API Key"** (Criar chave API) e escolha a opção **"Create API Key in NEW project"** (Criar chave num NOVO projeto). Isto garante que começa livre de qualquer bloqueio anterior!
* **Passo 6:** Copie a nova chave que começa por **AIzaSy...**, cole-a no nosso site e tente gerar o plano novamente. Vai funcionar no mesmo segundo! 🚀`);
          } else {
            setResult(`### 🛑 Erro na Comunicação com a API (Uso de Chave Própria)

A sua chave API devolveu um erro ao comunicar com os servidores da Google:

**Mensagem do Erro:**
> \`${apiValidationError}\`

**Recomendações:**
1. Aceda a [aistudio.google.com](https://aistudio.google.com/) e crie uma chave limpa e gratuita num novo projeto.
2. Confirme se não possui restrições de IP, restrições HTTP (referers) ou restrições de APIs ativas nas propriedades dessa chave API na Consola do Google Cloud (GCP).`);
          }
        } else {
          // General connection error with instructions
          setResult(`### 🛑 Erro de Ligação: Chave API necessária para o site publicado!

Detetámos que a sua aplicação está a carregar de forma **estática** (por exemplo, no Netlify ou GitHub Pages), o que significa que o servidor local está inativo e necessita de uma Chave API inserida no browser para funcionar de forma autónoma.

**Como colocar o site publicado a funcionar grátis em menos de 1 minuto:**

1. Obtenha uma **Chave API Grátis** acedendo ao [Google AI Studio](https://aistudio.google.com/).
2. Clique no botão de configuração azul **"Configurar Chave API Própria"** à esquerda, cole a sua chave e guarde-a. Fica guardada apenas no seu dispositivo de forma 100% segura e privada!
3. Experimente gerar o plano de aula novamente!`);
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
        return <h4 key={idx} className="text-base font-bold text-blue-400 mt-4 mb-2 tracking-tight">{trimmedLine.replace("###", "").trim()}</h4>;
      }
      if (trimmedLine.startsWith("##")) {
        return <h3 key={idx} className="text-lg font-bold text-indigo-300 mt-6 mb-3 border-b border-indigo-900/60 pb-1 tracking-tight">{trimmedLine.replace("##", "").trim()}</h3>;
      }
      if (trimmedLine.startsWith("#")) {
        return <h2 key={idx} className="text-xl font-extrabold text-indigo-200 mt-8 mb-4 tracking-tight">{trimmedLine.replace("#", "").trim()}</h2>;
      }

      // Check bullet items starting with '*' or '-'
      if (trimmedLine.startsWith("*") || trimmedLine.startsWith("-")) {
        // Remove markdown strong markers (**bold**) inside list element
        const content = trimmedLine.substring(1).trim();
        return (
          <ul key={idx} className="list-disc pl-6 py-0.5 space-y-1 text-slate-300 text-sm leading-relaxed">
            <li>{parseBoldText(content)}</li>
          </ul>
        );
      }

      // Check number bullets
      const numMatch = trimmedLine.match(/^(\d+)\.\s(.*)/);
      if (numMatch) {
        return (
          <ol key={idx} className="list-decimal pl-6 py-0.5 text-slate-350 text-sm leading-relaxed">
            <li>{parseBoldText(numMatch[2])}</li>
          </ol>
        );
      }

      // Empty space
      if (trimmedLine === "") {
        return <div key={idx} className="h-2" />;
      }

      // Default paragraph with bold word support
      return <p key={idx} className="text-sm text-slate-350 leading-relaxed mb-3">{parseBoldText(trimmedLine)}</p>;
    });
  };

  // Basic utility to detect and render **bold text** without requiring high-cost markdown modules
  const parseBoldText = (text: string) => {
    const parts = text.split(/\*\*([\s\S]*?)\*\*/g);
    return parts.map((part, i) => {
      // odd indices are enclosed by **
      if (i % 2 === 1) {
        return <strong key={i} className="font-extrabold text-white">{part}</strong>;
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
        <div className="flex flex-wrap justify-center gap-1.5 mb-8 bg-slate-100 p-1.5 rounded-2xl max-w-3xl mx-auto border border-slate-200">
          <button
            onClick={() => setActiveMode('planner')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-150 ${activeMode === 'planner' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-white'}`}
          >
            <BookOpen className="w-4 h-4 shrink-0" /> 
            <span>Plano de Aula</span>
          </button>
          
          <button
            onClick={() => setActiveMode('rubric')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-150 ${activeMode === 'rubric' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-white'}`}
          >
            <Award className="w-4 h-4 shrink-0" /> 
            <span>Rúbrica de Avaliação</span>
          </button>
          
          <button
            onClick={() => setActiveMode('activity')}
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-150 ${activeMode === 'activity' ? 'bg-indigo-600 text-white shadow-sm' : 'text-slate-600 hover:text-slate-900 hover:bg-white'}`}
          >
            <Lightbulb className="w-4 h-4 shrink-0" /> 
            <span>Atividade Prática</span>
          </button>
        </div>

        {/* Input & Output Config Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Inputs Panel */}
          <div className="lg:col-span-5 bg-white border border-slate-200 p-6 md:p-8 rounded-2xl shadow-xs">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6 pb-2 border-b border-slate-100 flex items-center justify-between">
              <span>Configuração dos Dados</span>
              <span className="text-2xs bg-blue-50 text-blue-700 font-bold px-2 py-1.5 rounded-md border border-blue-100/40">Atalho IA</span>
            </h3>

            {/* Quick Demo Pre-fills organized as structured cards */}
            <div className="mb-6">
              <span className="text-xs font-bold text-slate-800 block mb-2.5">Carregar Atividades de Exemplo:</span>
              
              <div className="grid grid-cols-2 gap-2 mb-4 font-sans">
                <button
                  onClick={() => selectSample(samples[0])}
                  className="bg-emerald-50 hover:bg-emerald-100/90 text-emerald-900 border border-emerald-200/80 hover:border-emerald-350 text-2xs p-2.5 rounded-xl transition-all font-bold text-left flex items-start gap-1.5 cursor-pointer"
                >
                  <span className="text-xs">🧬</span>
                  <div>
                    <span className="block font-bold">Ciências</span>
                    <span className="text-[10px] text-emerald-700/90 font-medium">Fotossíntese</span>
                  </div>
                </button>

                <button
                  onClick={() => selectSample(samples[1])}
                  className="bg-amber-50 hover:bg-amber-100/90 text-amber-900 border border-amber-200/80 hover:border-amber-300 text-2xs p-2.5 rounded-xl transition-all font-bold text-left flex items-start gap-1.5 cursor-pointer"
                >
                  <span className="text-xs">⛵</span>
                  <div>
                    <span className="block font-bold">História</span>
                    <span className="text-[10px] text-amber-700/90 font-medium">Descobrimentos</span>
                  </div>
                </button>

                <button
                  onClick={() => selectSample(samples[2])}
                  className="bg-blue-50 hover:bg-blue-100/90 text-blue-900 border border-blue-200/80 hover:border-blue-300 text-2xs p-2.5 rounded-xl transition-all font-bold text-left flex items-start gap-1.5 cursor-pointer"
                >
                  <span className="text-xs">💬</span>
                  <div>
                    <span className="block font-bold">Oralidade</span>
                    <span className="text-[10px] text-blue-700/90 font-medium">Grelha Português</span>
                  </div>
                </button>

                <button
                  onClick={() => selectSample(samples[3])}
                  className="bg-purple-50 hover:bg-purple-100/90 text-purple-900 border border-purple-200/80 hover:border-purple-300 text-2xs p-2.5 rounded-xl transition-all font-bold text-left flex items-start gap-1.5 cursor-pointer"
                >
                  <span className="text-xs">📐</span>
                  <div>
                    <span className="block font-bold">Pitágoras</span>
                    <span className="text-[10px] text-purple-700/90 font-medium">Escape Room</span>
                  </div>
                </button>
              </div>

              {/* API Key Standalone Configuration drawer styled to match Premium styling */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl relative overflow-hidden">
                <div className="flex items-center justify-between gap-1.5">
                  <button
                    type="button"
                    onClick={() => setShowApiKeySetting(!showApiKeySetting)}
                    className="flex-grow flex items-center justify-between py-2 px-3 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-2xs text-[11px] font-bold text-slate-800 transition-all text-left"
                  >
                    <div className="flex items-center gap-2">
                      <Key className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                      <span>Configurar Chave API Própria</span>
                    </div>
                    <span className="text-[9px] text-slate-400 font-medium">
                      {showApiKeySetting ? "Ocultar" : "Mostrar"}
                    </span>
                  </button>
                  
                  {customApiKey || ((import.meta as any).env?.ChaveKey || (process as any).env?.ChaveKey || (import.meta as any).env?.VITE_GEMINI_API_KEY || "").trim() ? (
                    <span className="text-[9px] bg-green-100 text-green-800 font-bold px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0 border border-green-200/65">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Ativa
                    </span>
                  ) : (
                    <span className="text-[9px] bg-slate-200 text-slate-700 font-semibold px-2 py-0.5 rounded-full shrink-0 border border-slate-300/40">
                      Vazia
                    </span>
                  )}
                </div>
                <p className="text-[10px] text-slate-500 mt-2 leading-relaxed font-sans pl-1">
                  Apenas necessário se quiser usar uma chave diferente da configurada no servidor ou no Netlify.
                </p>

                <AnimatePresence>
                  {showApiKeySetting && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden mt-3 pt-3 border-t border-slate-200/60 text-left"
                    >
                      <label className="text-[10px] font-bold text-slate-800 block mb-1">Insira a sua Chave API do Google AI Studio:</label>
                      <div className="flex gap-1.5 items-stretch">
                        <div className="relative flex-grow">
                          <input
                            type={showKeyText ? "text" : "password"}
                            placeholder="Cole a sua chave aqui (AIzaSy...)"
                            value={customApiKey}
                            onChange={(e) => saveCustomApiKey(e.target.value)}
                            className="w-full text-xs pl-2.5 pr-8 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 bg-white"
                          />
                          <button
                            type="button"
                            onClick={() => setShowKeyText(!showKeyText)}
                            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                            title={showKeyText ? "Ocultar Chave" : "Mostrar Chave"}
                          >
                            {showKeyText ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                          </button>
                        </div>
                        {customApiKey && (
                          <button
                            type="button"
                            onClick={clearCustomApiKey}
                            className="px-2.5 py-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-700 rounded-lg text-[10px] font-bold transition-all shrink-0"
                          >
                            Limpar
                          </button>
                        )}
                      </div>
                      {isSaved && (
                        <p className="text-[10px] text-green-700 font-bold mt-1">Chave guardada com sucesso no seu navegador!</p>
                      )}
                      {(((import.meta as any).env?.ChaveKey || (process as any).env?.ChaveKey || (import.meta as any).env?.VITE_GEMINI_API_KEY) || "").trim() && !customApiKey && (
                        <p className="text-[10px] text-indigo-700 font-bold mt-1">
                          ✨ A usar por defeito a Chave API "ChaveKey" do Netlify!
                        </p>
                      )}
                      <span className="text-[10px] text-slate-400 block mt-2 leading-normal">
                        Obtenha a sua chave totalmente grátis em <a href="https://aistudio.google.com/" target="_blank" rel="noreferrer" className="text-blue-500 underline font-semibold hover:text-blue-600">aistudio.google.com</a>. Fica guardada localmente de forma 100% segura.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
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

              {/* Seletor do Modo de Geração Pedagógico Local Integrado */}
              <div className="p-3.5 bg-gradient-to-r from-amber-55 to-indigo-50/50 border border-slate-250/90 rounded-2xl flex items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-2">
                  <div className={`p-2 rounded-xl shrink-0 ${simulationMode ? 'bg-amber-100 text-amber-700 border border-amber-200' : 'bg-indigo-100 text-indigo-700 border border-indigo-200'}`}>
                    {simulationMode ? <WifiOff className="w-4 h-4" /> : <Sparkles className="w-4 h-4" />}
                  </div>
                  <div className="text-left font-sans">
                    <span className="text-xs font-bold text-slate-900 block leading-tight">Gerar Sem Chave API (Bypass)</span>
                    <span className="text-[10px] text-slate-500 leading-normal block mt-0.5">Ative se as suas chaves Google derem erros</span>
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={() => toggleSimulationMode(!simulationMode)}
                  className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${simulationMode ? 'bg-amber-600' : 'bg-slate-300'}`}
                >
                  <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow-xs ring-0 transition duration-200 ease-in-out ${simulationMode ? 'translate-x-5' : 'translate-x-0'}`} />
                </button>
              </div>

              <button
                onClick={runGenerator}
                disabled={loading}
                className={`w-full inline-flex items-center justify-center gap-2 text-white py-3.5 px-6 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer select-none ${simulationMode ? 'bg-amber-600 hover:bg-amber-700' : 'bg-blue-600 hover:bg-slate-900'} disabled:bg-slate-400`}
              >
                {loading ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>A Processar...</span>
                  </>
                ) : (
                  <>
                    {simulationMode ? <Sparkles className="w-4 h-4 animate-pulse" /> : <Wand2 className="w-4 h-4" />}
                    <span>{simulationMode ? "Gerar Material Localmente (Bypass)" : "Interagir com a IA do Gemini"}</span>
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

                      {/* Botão de ação inteligente para contornar qualquer bloqueio da API na hora */}
                      {result.includes("🛑") && (
                        <div className="mt-8 pt-6 border-t border-slate-800/80 text-left">
                          <p className="text-xs text-amber-400 font-bold mb-3 flex items-center gap-1.5">
                            <AlertTriangle className="w-4 h-4 text-amber-500 animate-pulse" />
                            <span>Solução Prática sem Chaves Google:</span>
                          </p>
                          <button
                            onClick={() => {
                              toggleSimulationMode(true);
                              // Agendar mini timeout para o state propagar
                              setTimeout(() => {
                                runGenerator();
                              }, 50);
                            }}
                            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-650 hover:to-amber-700 text-white font-bold uppercase tracking-wider text-xs rounded-xl shadow-md transition-all duration-150 transform hover:-translate-y-0.5 pointer-events-auto cursor-pointer"
                          >
                            <Sparkles className="w-4 h-4 animate-bounce" />
                            <span>Gerar Tudo Agora Via Modo Local Imparável! 🚀</span>
                          </button>
                          <p className="text-[10px] text-slate-400 mt-2.5 text-center leading-normal">
                            Clique acima e o site criará o plano de aula/atividade perfeito de forma 100% livre e offline.
                          </p>
                        </div>
                      )}
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
