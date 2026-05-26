import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Globe, 
  ArrowRight, 
  Cloud, 
  Terminal, 
  Key, 
  Copy, 
  Check, 
  Info, 
  HelpCircle, 
  BookOpen, 
  Share2, 
  Sparkles,
  Server,
  ShieldCheck
} from "lucide-react";

export default function PublishingGuide() {
  const [activePlatform, setActivePlatform] = useState<'netlify' | 'github' | 'vercel'>('netlify');
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(id);
    setTimeout(() => setCopiedText(null), 2000);
  };

  return (
    <section id="publishing-guide" className="bg-white p-6 md:p-12 rounded-3xl border border-slate-200 shadow-sm mb-12 text-left">
      <div className="max-w-5xl mx-auto">
        
        {/* Header Block */}
        <div className="text-center mb-10">
          <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Guia de Alojamento e Partilha Gratuita
          </span>
          <h2 className="text-3xl font-bold text-slate-900 mt-3 mb-3 tracking-tight font-sans">
            Como Publicar o seu Web Site e Partilhar com o Mundo? 🚀
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
            Aprenda a colocar as suas aplicações escolares interativas online de forma 100% gratuita, autónoma e simples. Explicado passo a passo de forma simples, para que qualquer pessoa (até se tivesse 10 anos!) possa compreender.
          </p>
        </div>

        {/* Explain like I'm 10 Intro Banner */}
        <div className="bg-gradient-to-br from-indigo-500/10 via-blue-500/5 to-slate-50 border border-indigo-100 p-6 rounded-2xl mb-8 flex flex-col md:flex-row items-center gap-5">
          <div className="bg-white p-4 rounded-2xl shadow-sm text-center shrink-0">
            <span className="text-3xl">💡</span>
          </div>
          <div>
            <h3 className="font-bold text-indigo-900 text-sm md:text-base font-sans mb-1 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500 shrink-0" />
              O que significa &quot;Publicar um Site&quot;? (Explicado de forma simples!)
            </h3>
            <p className="text-xs md:text-sm text-slate-700 leading-relaxed font-sans">
              Imagine que criar uma aplicação no seu computador é como escrever uma história fantástica no seu diário de papel. Só você a consegue ler! 
              <strong> Publicar o site</strong> é como fazer cópias desse livro e colocá-lo na biblioteca da escola com um endereço especial (o Link). 
              A partir desse momento, qualquer pessoa com esse link pode aceder e interagir com o seu trabalho online. E o melhor? É <strong>totalmente gratuito</strong>!
            </p>
          </div>
        </div>

        {/* Step-by-Step Overview Process map */}
        <div className="mb-10">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-6 flex items-center gap-2">
            <Server className="w-4 h-4 text-indigo-600" />
            O Processo de Publicação em 3 Passos Universais
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="p-5 bg-slate-50/50 border border-slate-200 rounded-2xl relative">
              <span className="absolute -top-3 left-6 w-7 h-7 bg-blue-600 text-white font-bold text-xs rounded-full flex items-center justify-center shadow-xs">1</span>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mt-2 mb-2">Preparar os ficheiros (Build)</h4>
              <p className="text-2xs text-slate-600 leading-relaxed mb-3">
                Transforma o código em ficheiros HTML/JS limpos que qualquer computador entende.
              </p>
              <div className="bg-slate-900 p-2.5 rounded-lg border border-slate-800 text-left">
                <code className="text-[10px] text-indigo-300 font-mono block">npm run build</code>
              </div>
            </div>

            <div className="p-5 bg-slate-50/50 border border-slate-200 rounded-2xl relative">
              <span className="absolute -top-3 left-6 w-7 h-7 bg-blue-600 text-white font-bold text-xs rounded-full flex items-center justify-center shadow-xs">2</span>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mt-2 mb-2">Enviar para o Servidor</h4>
              <p className="text-2xs text-slate-600 leading-relaxed">
                Faz o upload da pasta gerada (<strong className="text-slate-900">dist/</strong>) de forma simples para um alojador web gratuito.
              </p>
              <div className="mt-3 text-[10px] bg-indigo-50 text-indigo-800 py-1 px-2.5 rounded font-black uppercase text-center self-start inline-block">
                Uploading Grátis 🌐
              </div>
            </div>

            <div className="p-5 bg-slate-50/50 border border-slate-200 rounded-2xl relative">
              <span className="absolute -top-3 left-6 w-7 h-7 bg-blue-600 text-white font-bold text-xs rounded-full flex items-center justify-center shadow-xs">3</span>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mt-2 mb-2">Ligar o cofre da chave (API)</h4>
              <p className="text-2xs text-slate-600 leading-relaxed">
                Insere a sua Chave API do Gemini em segurança nas definições do Painel do Alojador para que o site use inteligência.
              </p>
              <div className="mt-2 text-[10px] text-emerald-700 font-bold flex items-center gap-1">
                <Key className="w-3.5 h-3.5" /> Chave Protegida & Ativa
              </div>
            </div>

          </div>
        </div>

        {/* ALERTA: Resolução do Erro e Blank Screen */}
        <div className="bg-rose-50 border border-rose-200 p-6 rounded-2xl mb-8 flex flex-col md:flex-row items-stretch gap-4 font-sans text-left">
          <div className="bg-white border border-rose-200 p-4 rounded-xl flex items-center justify-center text-4xl shrink-0">
            ⚠️
          </div>
          <div className="space-y-2">
            <h4 className="font-extrabold text-rose-950 text-xs sm:text-sm uppercase tracking-wider">
              A sua página aparece completamente em BRANCO (ou não mostra nada) na Web?
            </h4>
            <div className="text-2xs sm:text-xs text-rose-900 leading-relaxed space-y-2">
              <p>
                Isto acontece maioritariamente por <strong>duas razões cruciais</strong> que todos os programadores enfrentam:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>
                  <strong>Carregar o Código Errado (Upload do ZIP Cru):</strong> Se descarregou o ZIP das fontes e copiou os ficheiros originais, o navegador fica sem saber o que fazer. O navegador dos computadores normais não lê TypeScript (.tsx) ou React puro diretamente! É 100% obrigatório correr o comando <code>npm run build</code> localmente ou no servidor e carregar <strong>exclusivamente a pasta gerada chamada <code>dist/</code></strong>.
                </li>
                <li>
                  <strong>Problema das Rotas Absolutas (Resolvido!):</strong> Por defeito, os sites Vite procuravam recursos na raiz absoluta (<code>/</code>). Se o seu repositório do GitHub Pages chama-se <code>meu-site</code>, o navegador tentava carregar os ficheiros no domínio mãe e falhava. <strong>Atualizámos agora o ficheiro de configuração (<code>vite.config.ts</code>) com <code>base: "./"</code> para garantir que todos os links agora são interpretados de forma relativa e já funciona de fábrica em qualquer plataforma!</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Platform Selector buttons to choose detailed guide */}
        <div className="border border-slate-200/80 p-1.5 rounded-2xl flex flex-wrap justify-between gap-1.5 bg-slate-100 max-w-3xl mx-auto mb-8 font-sans">
          <button
            onClick={() => setActivePlatform('netlify')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${activePlatform === 'netlify' ? 'bg-white text-teal-600 shadow-xs border border-slate-200' : 'text-slate-600 hover:text-slate-900'}`}
          >
            🎈 Método 1: Netlify (O Mais Rápido)
          </button>
          <button
            onClick={() => setActivePlatform('github')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${activePlatform === 'github' ? 'bg-white text-slate-900 shadow-xs border border-slate-200' : 'text-slate-600 hover:text-slate-900'}`}
          >
            🐙 Método 2: GitHub Pages (Nativo)
          </button>
          <button
            onClick={() => setActivePlatform('vercel')}
            className={`flex-1 py-3 px-4 rounded-xl text-xs font-bold transition-all uppercase tracking-wider ${activePlatform === 'vercel' ? 'bg-white text-indigo-600 shadow-xs border border-slate-200' : 'text-slate-600 hover:text-slate-900'}`}
          >
            ⚡ Método 3: Vercel (Total Sincronia)
          </button>
        </div>

        {/* Detailed Manual Step Display */}
        <AnimatePresence mode="wait">
          {activePlatform === 'netlify' && (
            <motion.div
              key="netlify-manual"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-teal-500"></span>
                  <h3 className="text-base font-bold text-slate-950 font-sans">Alojamento Autónomo no Netlify (Drag & Drop)</h3>
                </div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  O Netlify é muito famoso pela sua simplicidade extrema. Permite-lhe publicar um site com apenas um clique arrastando a pasta do seu computador para uma caixa no navegador.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-2xs font-bold flex items-center justify-center shrink-0 mt-0.5">A</span>
                    <div className="text-xs text-slate-700 font-sans">
                      <strong>Crie a sua pasta final (Build):</strong> Abra o terminal de comandos e execute o seu script de agrupamento. Isto condensará o React, gerando uma pasta simples chamada <code className="bg-slate-200 px-1 py-0.5 rounded font-mono text-2xs font-bold">dist/</code> na raiz do projeto.
                      <div className="mt-2 bg-slate-900 text-slate-100 p-2.5 rounded font-mono text-2xs max-w-md text-left flex justify-between items-center group">
                        <span>npm run build</span>
                        <button 
                          onClick={() => handleCopy("npm run build", "net-build")}
                          className="text-slate-400 hover:text-white transition-all text-3xs"
                        >
                          {copiedText === "net-build" ? "Copiado!" : "Copiar"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-2xs font-bold flex items-center justify-center shrink-0 mt-0.5">B</span>
                    <div className="text-xs text-slate-700 font-sans">
                      <strong>Faça o upload do Site:</strong> Aceda a <a href="https://app.netlify.com/drop" target="_blank" rel="noreferrer" className="text-teal-600 hover:underline font-bold">app.netlify.com/drop</a> e registe-se de forma gratuita. Arraste a pasta <code className="bg-slate-200 px-1 py-0.5 rounded font-mono text-2xs font-bold">dist/</code> para a caixa de upload. Em segundos, o Netlify dá-lhe um link seguro como <code className="text-slate-500 font-mono text-2xs">https://o-teu-site.netlify.app</code>!
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-teal-100 text-teal-800 text-2xs font-bold flex items-center justify-center shrink-0 mt-0.5">C</span>
                    <div className="text-xs text-slate-700 font-sans">
                      <strong>Adicione as suas Chaves de Segurança (Variável de Ambiente):</strong> No painel de definições do seu novo site no Netlify, aceda a:
                      <div className="my-2 bg-white border border-slate-200 p-3 rounded-lg text-slate-600 font-sans italic text-2xs">
                        Site configuration &gt; Environment variables &gt; Add a variable
                      </div>
                      Crie uma variável com a chave <code className="bg-slate-200 px-1.5 py-0.5 rounded font-mono font-bold text-rose-700 text-2xs">VITE_GEMINI_API_KEY</code> e cole a sua Chave API secreta da Google obtida no Google AI Studio. Aguarde 1 minuto e volte a carregar o seu link público para que o site comece de imediato a conversar com os utilizadores!
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activePlatform === 'github' && (
            <motion.div
              key="github-manual"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-slate-800"></span>
                  <h3 className="text-base font-bold text-slate-950 font-sans">Alojamento Nativo com o GitHub Pages</h3>
                </div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  O GitHub Pages permite-lhe transformar qualquer repositório de código público do GitHub num site visível de forma totalmente nativa e sem intermediários de terceiras partes.
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-2xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                    <div className="text-xs text-slate-700 font-sans">
                      <strong>Instale o utilitário de páginas:</strong> No terminal local dentro da pasta do seu projeto, instale o pacote de deploy executando:
                      <div className="mt-2 bg-slate-900 text-slate-100 p-2.5 rounded font-mono text-2xs max-w-md text-left flex justify-between items-center">
                        <span>npm install gh-pages --save-dev</span>
                        <button 
                          onClick={() => handleCopy("npm install gh-pages --save-dev", "git-inst")}
                          className="text-slate-400 hover:text-white transition-all text-3xs"
                        >
                          {copiedText === "git-inst" ? "Copiado!" : "Copiar"}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-2xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                    <div className="text-xs text-slate-700 font-sans">
                      <strong>Configure o package.json:</strong> Abra o ficheiro <code className="font-mono">package.json</code> da raiz e adicione estas duas linhas super importantes:
                      
                      <div className="my-2 bg-white border border-slate-200 rounded-xl p-3 text-2xs font-mono text-slate-750 space-y-1 block text-left">
                        <p>{`"homepage": "https://o-teu-utilizador.github.io/o-teu-repositorio",`}</p>
                        <p className="text-slate-400 font-sans text-3xs italic mb-2">// (Coloque o seu nome de utilizador do GitHub e o nome do seu repositório)</p>
                        <p>{`"scripts": {`}</p>
                        <p className="pl-4 text-emerald-700">{`  "deploy": "gh-pages -d dist",`}</p>
                        <p className="pl-4">{`  "predeploy": "npm run build",`}</p>
                        <p>{`  ...`}</p>
                        <p>{`}`}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-200 text-slate-700 text-2xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                    <div className="text-xs text-slate-700 font-sans">
                      <strong>Envie o site (Deploy):</strong> No seu terminal local, execute:
                      <div className="mt-2 bg-slate-900 text-slate-100 p-2.5 rounded font-mono text-2xs max-w-md text-left flex justify-between items-center">
                        <span>npm run deploy</span>
                        <button 
                          onClick={() => handleCopy("npm run deploy", "git-dep")}
                          className="text-slate-400 hover:text-white transition-all text-3xs"
                        >
                          {copiedText === "git-dep" ? "Copiado!" : "Copiar"}
                        </button>
                      </div>
                      <p className="text-slate-500 text-2xs leading-relaxed mt-2">
                        Isto irá correr a build automaticamente, enviando todos os ficheiros compilados para o ramo especial <strong className="font-mono">gh-pages</strong> do seu repositório, ativando de imediato a visualização pública.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activePlatform === 'vercel' && (
            <motion.div
              key="vercel-manual"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-6"
            >
              <div className="p-6 bg-slate-50 border border-slate-200 rounded-2xl space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-indigo-600 animate-pulse"></span>
                  <h3 className="text-base font-bold text-slate-950 font-sans">Vercel: Publicação Automatizada via Sincronia Git</h3>
                </div>
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed">
                  A Vercel liga-se diretamente à sua conta de GitHub. Quando faz uma alteração no seu código local e a envia (Push) para o GitHub, a Vercel deteta isso e atualiza o seu site de forma 100% silenciosa e sem cliques adicionais!
                </p>

                <div className="space-y-4 pt-2">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 text-2xs font-bold flex items-center justify-center shrink-0 mt-0.5">I</span>
                    <div className="text-xs text-slate-700 font-sans">
                      <strong>Crie conta e Importe o Repositório:</strong> Registe-se em <a href="https://vercel.com" target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline font-bold">vercel.com</a> utilizando o seu login de GitHub. No painel principal da plataforma, clique em <strong>Add New &gt; Project</strong> e selecione o seu repositório de projeto da lista.
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 text-2xs font-bold flex items-center justify-center shrink-0 mt-0.5">II</span>
                    <div className="text-xs text-slate-700 font-sans">
                      <strong>Configure a Variável de Ambiente em 1 segundo:</strong> No ecrã de importação antes do clique final de Build:
                      <ul className="list-disc pl-5 mt-2 space-y-1 text-2xs text-slate-500">
                        <li>Abra a secção recolhível de nome <strong>Environment Variables</strong>.</li>
                        <li>No campo <strong>Name</strong> escreva: <code className="bg-slate-200 px-1 py-0.5 rounded font-mono font-bold text-rose-700">VITE_GEMINI_API_KEY</code></li>
                        <li>No campo <strong>Value</strong> cole a sua chave segura do Google AI Studio.</li>
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-800 text-2xs font-bold flex items-center justify-center shrink-0 mt-0.5">III</span>
                    <div className="text-xs text-slate-700 font-sans">
                      <strong>Clique em Deploy:</strong> Aguarde 40 segundos enquanto a Vercel cria o link seguro de visualização. Tudo pronto e seguro de forma autónoma!
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Explain the Environment Variables in depth for clear understanding */}
        <div className="my-10 bg-indigo-950 text-slate-100 p-6 md:p-8 rounded-3xl border border-indigo-900 shadow-md">
          <div className="flex items-start gap-4">
            <div className="bg-indigo-900 p-3 rounded-2xl shrink-0 text-amber-400">
              <Key className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h3 className="text-md md:text-lg font-bold font-sans text-rose-300 mb-2 flex items-center gap-2">
                O Grande Segredo: A Chave API está segura de espias? 🔑
              </h3>
              <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-sans">
                Se colocar a sua Chave API visível no meio dos ficheiros HTML ou CSS, um utilizador malicioso que clique com o botão direito e selecione &quot;Inspecionar&quot; no navegador poderá ver a sua palavra de passe confidencial. 
              </p>
              <div className="my-4 bg-indigo-1000 p-4 rounded-xl border border-indigo-850 text-xs text-slate-300 font-mono">
                <span className="text-amber-300 uppercase text-[10px] block font-bold tracking-wider mb-2">💡 REGRA DE SEGURANÇA OURO DO PROGRAMADOR:</span>
                Utilize as <strong className="text-white">Variáveis de Ambiente (.env)</strong> para referenciar segredos. E se a sua aplicação for estática sem servidor (como Netlify simples), configure as chaves na administração do alojador para se auto-injetarem em segurança ou peça ao utilizador para usar uma chave própria (recurso que adicionámos como botão inteligente no nosso Playground IA!).
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                Desta forma, os seus limites de quotas grátis estão salvaguardados e tem o controlo total de segurança sobre todas as despesas da API do Gemini sem qualquer sobressalto.
              </p>
            </div>
          </div>
        </div>

        {/* Troubleshooting Section / FAQs */}
        <div className="border border-slate-200 rounded-2xl p-6 md:p-8 font-sans">
          <h3 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
            <HelpCircle className="w-4.5 h-4.5 text-blue-600" />
            Resolução de Erros e Questões Frequentes (FAQs)
          </h3>
          
          <div className="space-y-4 divide-y divide-slate-100">
            <div className="pt-4 first:pt-0">
              <h4 className="font-semibold text-slate-900 text-xs md:text-sm mb-1 leading-snug">
                ❓ &quot;Enviei o site, mas está tudo em branco e diz que não encontra ficheiros.&quot;
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Este é o erro mais comum! Não deve enviar os ficheiros originais que usa para trabalhar. Certifique-se de que correu o comando <code className="bg-slate-100 px-1 rounded">npm run build</code> e que fez o upload exclusivamente da pasta <strong className="font-mono text-slate-900 font-bold text-[11px]">dist/</strong> que é gerada automaticamente pelo compilador.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold text-slate-900 text-xs md:text-sm mb-1 leading-snug">
                ❓ &quot;Por que preciso de inserir a minha chave de API num botão do site?&quot;
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Se publicou o site sem ligar as variáveis de ambiente corretas, o site corre no navegador mas não consegue pedir ajuda ao cérebro do Gemini porque não tem uma palavra-passe válida. Nesse caso, a aplicação grita de forma amigável dando-lhe a opção de colar a sua própria chave obtida grátis em <code className="bg-slate-100 px-1 rounded">aistudio.google.com</code> para correr no seu browser pessoal de forma inteiramente isolada.
              </p>
            </div>

            <div className="pt-4">
              <h4 className="font-semibold text-slate-900 text-xs md:text-sm mb-1 leading-snug">
                ❓ &quot;Qual o plano grátis do Google AI Studio? Custa dinheiro?&quot;
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                O Google AI Studio possui um <strong>Plano Grátis (Free Tier)</strong> muito generoso de até 15 pedidos por cada minuto para o modelo Gemini 1.5 Flash. Isto é mais do que suficiente para suportar uma turma inteira de alunos sem qualquer despesa!
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
