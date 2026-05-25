import { motion } from "motion/react";
import { Cloud, FileText, ClipboardList, Laptop, HelpCircle, Network, Code, MessageCircle } from "lucide-react";

export default function Integrations() {
  const integrationPoints = [
    {
      title: "Google Docs & Drive",
      desc: "Exporte instantaneamente os planos de aula e grelhas de avaliação gerados para o Docs. Trabalhe colaborativamente com outros professores do seu departamento num único ficheiro seguro.",
      color: "bg-blue-50 border-blue-100 text-blue-700",
      badge: "Produtividade",
      icon: FileText
    },
    {
      title: "Google Classroom",
      desc: "Gere e formate enunciados de problemas, desafios e rubricas, e coloque-os diretamente nas tarefas da turma. Poupe até 80% do tempo de preparação de cópias e instruções.",
      color: "bg-emerald-50 border-emerald-100 text-emerald-700",
      badge: "Gestão Escolar",
      icon: ClipboardList
    },
    {
      title: "Google Sheets & Colab",
      desc: "Utilize o código gerado pela opção 'Code' e aplique-o numa folha de cálculo. Pode analisar e resumir em massa os diários de reflexão dos alunos ou dar feedbacks rápidos.",
      color: "bg-green-50 border-green-100 text-green-700",
      badge: "Automação",
      icon: Laptop
    },
    {
      title: "Moodle & Webhooks do Moodle",
      desc: "Crie webhooks simples gerados pela própria IA em HTML ou Javascript e adicione um tutor interativo focado no currículo escolar nas suas disciplinas digitais de apoio.",
      color: "bg-orange-50 border-orange-100 text-orange-750",
      badge: "Ambientes Virtuais",
      icon: Network
    }
  ];

  return (
    <section id="integrations" className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm mb-12">
      <div className="max-w-5xl mx-auto text-left">
        
        {/* Title */}
        <div className="text-center mb-10">
          <span className="text-sm font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Ecossistema Completo
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mt-3 mb-4 tracking-tight">
            Integração com outras Ferramentas do Professor
          </h2>
          <p className="text-slate-600 text-sm max-w-2xl mx-auto">
            A inovação só faz sentido se encaixar na sua rotina atual. O Google AI Studio não é uma plataforma isolada — ele foi desenhado para ligar-se diretamente com o seu ecossistema escolar.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {integrationPoints.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`p-6 md:p-8 rounded-2xl border flex flex-col justify-between ${item.color} shadow-xs`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xs font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-white/85 shadow-2xs border">
                      {item.badge}
                    </span>
                    <Icon className="w-5 h-5 opacity-90" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-700 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Integration Callout */}
        <div className="bg-slate-900 text-white p-8 rounded-2xl border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h4 className="text-md font-bold text-white mb-2 flex items-center gap-2">
              <Code className="w-5 h-5 text-blue-400" />
              Desenvolvido na Linguagem Escolar
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              O Google AI Studio e os seus modelos Gemini suportam a análise de ficheiros de texto simples, PDFs, imagens e gravações áudio. Isto significa que pode alimentar o estúdio com os seus manuais em formato PDF e criar planos baseados nos mesmos!
            </p>
          </div>
          <div className="bg-slate-800 border border-slate-700/60 p-4 rounded-xl flex items-center gap-3">
            <Cloud className="w-8 h-8 text-blue-400" />
            <div className="text-left font-sans">
              <span className="text-2xs text-slate-400 block font-bold uppercase">Tecnologia da Nuvem</span>
              <span className="text-xs text-slate-200 font-medium">Ligue APIs com o Google AppScript</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
