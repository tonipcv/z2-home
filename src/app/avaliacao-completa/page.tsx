"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Alegreya } from "next/font/google";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const alegreya = Alegreya({ subsets: ["latin"] });

export default function AvaliacaoCompletaPage() {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    whatsapp: "",
    clinicLocation: "",
    annualRevenue: "",
  });

  useEffect(() => {
    // Open the modal on page load to gate the content
    setShowRequestModal(true);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black antialiased flex flex-col">
      {/* Top Bar */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-5" />
          </Link>
          <nav className="text-sm text-gray-600 flex items-center gap-5">
            <a
              href="https://calendly.com/getcxlus/30min?month=2025-08"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Solicitar análise
            </a>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        {/* Title */}
        <section className={`px-4 transition filter ${!hasAccess ? "blur-[2px]" : ""}`}>
          <div className="max-w-3xl mx-auto py-12">
            <h1 className={`${alegreya.className} text-3xl sm:text-4xl font-normal tracking-tight text-black mb-4`}>
              Metodologia Zuzz: Uma Análise Estratégica para Aumentar a Rentabilidade de Clínicas
            </h1>
          </div>
        </section>

        {/* Overview */}
        <section className={`px-4 transition filter ${!hasAccess ? "blur-[2px]" : ""}`}>
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-xl font-semibold text-black">Overview da Estratégia Geral</h2>
            <p className="text-gray-700 leading-relaxed">
              O paradigma de crescimento para clínicas de estética está a mudar. A aquisição de clientes através de tráfego pago é um modelo de custo crescente e retorno decrescente. A metodologia Zuzz inverte esta lógica, focando-se na Maximização do Valor do Cliente (CVM), um ativo que a sua clínica já possui.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A nossa estratégia assenta em três pilares, fundamentados por décadas de pesquisa em economia comportamental:
            </p>
            <ul className="list-disc pl-5 text-gray-800 space-y-2">
              <li>
                <span className="font-medium">Otimização da Frequência e do Valor por Transação (AOV):</span> Implementar sistemas de recompensa que aumentam a taxa de recompra e o ticket médio.
              </li>
              <li>
                <span className="font-medium">Redução do Custo de Aquisição de Cliente (CAC):</span> Transformar a sua base de clientes num motor de indicações de alta conversão e custo marginal baixo.
              </li>
              <li>
                <span className="font-medium">Aumento da Retenção e do Valor Vitalício (LTV):</span> Criar custos de mudança (switching costs) que blindam os seus clientes mais lucrativos da concorrência.
              </li>
            </ul>
          </div>
        </section>

        {/* Psicologia */}
        <section className={`px-4 mt-10 transition filter ${!hasAccess ? "blur-[2px]" : ""}`}>
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-xl font-semibold text-black">A Estratégia Psicológica por Trás dos Resultados (Dados e Estudos)</h2>
            <p className="text-gray-700 leading-relaxed">
              A eficácia do método não é acidental; é baseada em princípios de comportamento do consumidor cientificamente validados.
            </p>
            <ul className="space-y-3 text-gray-700">
              <li>
                <span className="font-medium">O Efeito da Meta Gradiente (Goal-Gradient Effect):</span> Proposto pela primeira vez em 1934 e validado por múltiplos estudos, como os da Universidade de Columbia, este princípio demonstra que a motivação de um indivíduo para alcançar uma recompensa aumenta exponencialmente à medida que ele se aproxima do objetivo. Programas de pontos, como os da Zuzz, exploram este efeito: um cliente que vê que está perto de um prémio é psicologicamente impelido a fazer a próxima compra para o alcançar.
              </li>
              <li>
                <span className="font-medium">O Efeito da Posse de Progresso (Endowed Progress Effect):</span> Uma investigação da Harvard Business Review por Nunes e Drèze demonstrou que as pessoas são significativamente mais propensas a completar uma tarefa se lhes for dado um avanço artificial. Ao estruturar pacotes com recompensas intermédias, como no caso da Revive Med Spa, aumentamos drasticamente a taxa de conclusão, pois os clientes sentem que já "possuem" parte do progresso em direção ao objetivo.
              </li>
              <li>
                <span className="font-medium">Princípio da Reciprocidade e Prova Social:</span> O programa de indicações da Zuzz é construído sobre estes dois pilares. A reciprocidade dita que, ao receber um benefício (a recompensa pela indicação), o cliente sente uma obrigação social de retribuir. A prova social, como documentado pela Nielsen (que afirma que 92% dos consumidores confiam mais em indicações de pessoas que conhecem do que em qualquer outra forma de publicidade), garante que o lead gerado seja de altíssima qualidade e confiança.
              </li>
            </ul>
          </div>
        </section>

        {/* Casos e Projeções (BRL) */}
        <section className={`px-4 mt-10 transition filter ${!hasAccess ? "blur-[2px] pointer-events-none select-none" : ""}`}>
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Caso 1 */}
            <div>
              <h3 className="text-lg font-semibold text-black">Caso 1: Na Belle Ame Med Spa (Aumento do LTV e AOV)</h3>
              <p className="text-gray-700 mt-2">Resultados-Chave: +25% de visitas recorrentes; +15% em vendas de produtos.</p>
              <div className="mt-3 space-y-2 text-gray-700">
                <p className="font-medium">Análise Financeira e Projeção (BRL):</p>
                <p>Premissas: Base de 500 clientes ativos; Gasto médio anual por cliente de R$ 2.000 em serviços e R$ 500 em produtos.</p>
                <p>Cenário Anterior: 500 clientes x R$ 2.500 = R$ 1.250.000 de faturação anual.</p>
                <p>Receita de Serviços (com +25% de frequência): R$ 1.250.000 x 1.25 = R$ 1.562.500</p>
                <p>Receita de Produtos (com +15% de vendas): R$ 250.000 x 1.15 = R$ 287.500</p>
                <p className="font-medium">Impacto Financeiro Anual Projetado: + R$ 350.000</p>
              </div>
            </div>

            {/* Caso 2 */}
            <div>
              <h3 className="text-lg font-semibold text-black">Caso 2: Rejuvenation Clinic (Redução Radical do CAC)</h3>
              <p className="text-gray-700 mt-2">Resultados-Chave: +20% de novos clientes em 6 meses com CAC inferior.</p>
              <div className="mt-3 space-y-2 text-gray-700">
                <p className="font-medium">Análise Financeira e Projeção (BRL):</p>
                <p>Premissas: Custo de Aquisição por Anúncios (CAC Pago) = R$ 550; Custo do Incentivo de Indicação (CAC Zuzz) = R$ 200; Média de 30 novos clientes/mês.</p>
                <p>Cenário Anterior: 30 clientes x R$ 550 (CAC Pago) = R$ 16.500/mês em custos de aquisição.</p>
                <p>Cenário Pós-Zuzz: O aumento de 20% gera 6 novos clientes/mês via indicação.</p>
                <p>Custo para adquirir 6 clientes via anúncios: 6 x R$ 550 = R$ 3.300</p>
                <p>Custo para adquirir 6 clientes via Zuzz: 6 x R$ 200 = R$ 1.200</p>
                <p className="font-medium">Impacto Financeiro Anual Projetado: R$ 25.200 de poupança em marketing, com o bónus de que clientes indicados têm um LTV 16-25% superior.</p>
              </div>
            </div>

            {/* Caso 3 */}
            <div>
              <h3 className="text-lg font-semibold text-black">Caso 3: Lux Med Spa (Otimização de Serviços de Alta Margem)</h3>
              <p className="text-gray-700 mt-2">Resultados-Chave: +40% na receita de injetáveis; +18% de clientes recorrentes neste serviço.</p>
              <div className="mt-3 space-y-2 text-gray-700">
                <p className="font-medium">Análise Financeira e Projeção (BRL):</p>
                <p>Premissas: Ticket médio por sessão de injetáveis: R$ 2.800; Receita anual inicial com o serviço: R$ 800.000.</p>
                <p>Cenário Anterior: Faturação de R$ 800.000.</p>
                <p>Cenário Pós-Zuzz: R$ 800.000 x 1.40 = R$ 1.120.000</p>
                <p className="font-medium">Impacto Financeiro Anual Projetado: + R$ 320.000 de receita adicional, concentrada no serviço de maior margem de lucro da clínica.</p>
              </div>
            </div>

            {/* Caso 4 */}
            <div>
              <h3 className="text-lg font-semibold text-black">Caso 4: Revive Med Spa (Aumento da Adesão e Upsell)</h3>
              <p className="text-gray-700 mt-2">Resultados-Chave: 75% dos pacientes completaram o pacote; +20% em upsells.</p>
              <div className="mt-3 space-y-2 text-gray-700">
                <p className="font-medium">Análise Financeira e Projeção (BRL):</p>
                <p>Premissas: Pacote de laser de 6 sessões no valor de R$ 4.000; Apenas 50% dos clientes completavam o pacote; Média de 20 novos pacotes/mês.</p>
                <p>Cenário Anterior: 10 clientes (50%) completavam, gerando 10 x R$ 4.000 = R$ 40.000.</p>
                <p>Cenário Pós-Zuzz: 15 clientes (75%) completam, gerando 15 x R$ 4.000 = R$ 60.000.</p>
                <p>O aumento de 20% em upsells (e.g., R$ 500 extra) por estes 15 clientes adiciona: 15 x R$ 500 = R$ 7.500.</p>
                <p className="font-medium">Impacto Financeiro Anual Projetado: + R$ 330.000</p>
              </div>
            </div>

            {/* Caso 5 */}
            <div>
              <h3 className="text-lg font-semibold text-black">Caso 5: Serenity Day Spa (Otimização da Capacidade Operacional)</h3>
              <p className="text-gray-700 mt-2">Resultados-Chave: +30% de agendamentos em horários ociosos.</p>
              <div className="mt-3 space-y-2 text-gray-700">
                <p className="font-medium">Análise Financeira e Projeção (BRL):</p>
                <p>Premissas: 4 salas de tratamento com 20 horas ociosas por semana; Ticket médio por hora de R$ 200.</p>
                <p>Potencial de Receita Perdida: 4 salas x 20h x R$ 200 = R$ 16.000/semana.</p>
                <p>Cenário Pós-Zuzz: O programa recupera 30% desta capacidade ociosa.</p>
                <p>Receita Recuperada: R$ 16.000 x 0.30 = R$ 4.800/semana.</p>
                <p className="font-medium">Impacto Financeiro Anual Projetado: + R$ 249.600 de receita gerada a partir de tempo e espaço que antes eram custo fixo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Síntese Final */}
        <section className={`px-4 mt-10 transition filter ${!hasAccess ? "blur-[2px] pointer-events-none select-none" : ""}`}>
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-xl font-semibold text-black">Síntese Final: O Efeito Zuzz como Ativo Financeiro</h2>
            <p className="text-gray-700 leading-relaxed">
              A análise dos cinco casos demonstra que a metodologia Zuzz transcende o marketing tradicional. Trata-se de uma intervenção estratégica que otimiza as principais alavancas de rentabilidade de uma clínica:
            </p>
            <ul className="list-disc pl-5 text-gray-800 space-y-2">
              <li>
                <span className="font-medium">Redução de Despesas:</span> Diminui drasticamente a dependência de canais de marketing de alto custo (CAC), libertando capital para ser reinvestido no negócio ou convertido em margem de lucro.
              </li>
              <li>
                <span className="font-medium">Maximização de Ativos Existentes:</span> Transforma a sua base de clientes – um ativo frequentemente subutilizado – num motor previsível de receita recorrente, indicações qualificadas e vendas de maior valor agregado.
              </li>
              <li>
                <span className="font-medium">Otimização da Capacidade:</span> Converte horas e espaços ociosos, que antes representavam apenas custo fixo, em novas fontes de receita, aumentando a eficiência e a lucratividade por metro quadrado.
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              Em conjunto, estes pilares creem um ecossistema de crescimento autossustentável, onde cada cliente satisfeito não só aumenta o seu próprio LTV, mas também contribui activamente para a aquisição de novos clientes de alta qualidade, gerando um efeito composto no faturamento e na avaliação do negócio.
            </p>
          </div>
        </section>

        {/* Próximo Passo */}
        <section className={`px-4 mt-10 mb-16 transition filter ${!hasAccess ? "blur-[2px]" : ""}`}>
          <div className="max-w-3xl mx-auto border-t border-gray-200 pt-6">
            <h2 className="text-lg font-semibold text-black">Próximo Passo: Análise de Potencial para a Sua Clínica</h2>
            <p className="text-gray-700 leading-relaxed mt-2">
              Os dados apresentados refletem o potencial da nossa metodologia. O próximo passo é entender como estes princípios podem ser aplicados à sua operação específica para gerar resultados semelhantes.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">
              Convidamo-lo a clicar no botão abaixo para solicitar uma Sessão de Análise Estratégica.
            </p>
            <p className="text-gray-700 leading-relaxed mt-2">Nesta sessão, a nossa equipa de especialistas irá:</p>
            <ul className="list-disc pl-5 text-gray-800 space-y-2 mt-2">
              <li>Analisar o perfil e os objetivos financeiros da sua clínica.</li>
              <li>Caso haja compatibilidade com a nossa metodologia, apresentar a plataforma Zuzz em detalhe.</li>
              <li>Construir uma projeção de ROI personalizada, utilizando os seus próprios dados de ticket médio, frequência de visitas e custos de aquisição para estimar o impacto financeiro potencial no seu primeiro ano.</li>
            </ul>

            <div className="mt-5 flex items-center gap-4 text-sm">
              <a
                href="https://calendly.com/getcxlus/30min?month=2025-08"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 hover:underline inline-flex items-center"
              >
                Agendar Sessão de Avaliação de Implementação
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </section>

        {/* Modal */}
        <Dialog
          modal={false}
          open={showRequestModal}
          onOpenChange={(open) => {
            // Block closing unless access is granted
            if (open) {
              setShowRequestModal(true);
            } else {
              if (hasAccess) setShowRequestModal(false);
              else setShowRequestModal(true);
            }
          }}
        >
          <DialogContent
            className="bg-white w-[92%] sm:max-w-2xl p-0 rounded-2xl border border-gray-200 shadow-xl overflow-hidden mx-auto my-4 sm:my-8 max-h-[85vh] sm:max-h-[90vh] overflow-y-auto"
            onInteractOutside={(e) => {
              if (!hasAccess) e.preventDefault();
            }}
            onEscapeKeyDown={(e) => {
              if (!hasAccess) e.preventDefault();
            }}
            hideClose
            overlayClassName="bg-black/40"
          >
            <div className="grid grid-cols-1">
              {/* Unified header + form (mobile style on all sizes) */}
              <div className="col-span-1 p-4 sm:p-6">
                {!showSuccess ? (
                  <>
                    <DialogHeader>
                      <div className="mb-2">
                        <span className="inline-flex items-center rounded-full bg-blue-50 text-blue-700 border border-blue-200 px-2 py-0.5 text-[11px] font-medium uppercase tracking-wide">
                          Estudo de Caso Gratuito
                        </span>
                      </div>
                      <DialogTitle className="text-xl sm:text-2xl font-semibold text-black leading-snug">
                        Inteligência de Crescimento para Clínicas: Relatório Completo sobre Práticas Americanas para criar um aumento de Faturamento Previsível
                      </DialogTitle>
                      <DialogDescription className="text-sm text-gray-700 mt-1 sm:mt-2">
                        Somente para Donos ou C-Levels de Clínicas
                      </DialogDescription>
                    </DialogHeader>

                    <div className="mt-2 sm:mt-4 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name" className="text-sm font-medium text-gray-800">Nome</Label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3 py-2 bg-white border-gray-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                            placeholder="Seu nome completo"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-800">Whatsapp</Label>
                          <Input
                            id="whatsapp"
                            type="tel"
                            value={formData.whatsapp}
                            onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                            className="w-full px-3 py-2 bg-white border-gray-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                            placeholder="+55 (11) 90000-0000"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="clinicLocation" className="text-sm font-medium text-gray-800">Localização da Clínica</Label>
                          <Input
                            id="clinicLocation"
                            value={formData.clinicLocation}
                            onChange={(e) => setFormData({ ...formData, clinicLocation: e.target.value })}
                            className="w-full px-3 py-2 bg-white border-gray-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                            placeholder="Cidade / Estado"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="annualRevenue" className="text-sm font-medium text-gray-800">Faturamento anual</Label>
                          <Select onValueChange={(value) => setFormData({ ...formData, annualRevenue: value })}>
                            <SelectTrigger className="w-full px-3 py-2 bg-white border-gray-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                              <SelectValue placeholder="Selecionar" />
                            </SelectTrigger>
                            <SelectContent className="bg-white border border-gray-200 rounded-md">
                              <SelectItem value="<500k">Abaixo de R$ 500 mil</SelectItem>
                              <SelectItem value="500k-1m">R$ 500 mil a R$ 1 milhão</SelectItem>
                              <SelectItem value="1m-3m">R$ 1 milhão a R$ 3 milhões</SelectItem>
                              <SelectItem value=">3m">Acima de R$ 3 milhões</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="pt-2">
                        <Button
                          onClick={async () => {
                            if (isSubmitting) return;
                            setIsSubmitting(true);
                            try {
                              const response = await fetch("/api/report-access", {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(formData),
                              });
                              if (!response.ok) throw new Error("Failed to submit request");
                              setFormData({ name: "", whatsapp: "", clinicLocation: "", annualRevenue: "" });
                              // Track lead conversion - Facebook when unlocking the page
                              if (typeof window !== 'undefined' && (window as any).fbq) {
                                (window as any).fbq('track', 'Lead');
                              }
                              setHasAccess(true);
                              setShowSuccess(true);
                              // Auto close after a brief confirmation
                              setTimeout(() => {
                                setShowRequestModal(false);
                                setShowSuccess(false);
                              }, 1400);
                            } catch (error) {
                              // You may want to show an inline error here
                            } finally {
                              setIsSubmitting(false);
                            }
                          }}
                          disabled={isSubmitting}
                          className={`w-full bg-blue-700 text-white hover:bg-blue-800 transition-colors py-2.5 text-sm rounded-md ${
                            isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                          }`}
                        >
                          {isSubmitting ? "Processando..." : "Acessar Relatório"}
                        </Button>
                        <p className="mt-3 text-xs text-center text-gray-500">
                          Ao enviar, você concorda com nossos termos e política de privacidade.
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-16">
                    <CheckCircleIcon className="w-14 h-14 text-green-600" />
                    <p className="mt-4 text-lg font-medium text-black">Acesso liberado</p>
                    <p className="mt-1 text-sm text-gray-600">Abrindo o relatório completo...</p>
                  </div>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 sm:py-8 px-4 sm:px-6 border-t border-blue-100/50 bg-transparent">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-xs text-gray-600 text-center sm:text-left">
              Zuzz Corporation — 123 Buckingham Palace Rd, London SW1W 9SH, London — Floor 2
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              <Link href="#" className="text-sm bg-gradient-to-r from-zinc-600 via-slate-500 to-zinc-600 bg-clip-text text-transparent hover:from-zinc-800 hover:via-slate-600 hover:to-zinc-800 transition-all duration-300">Terms</Link>
              <Link href="#" className="text-sm bg-gradient-to-r from-zinc-600 via-slate-500 to-zinc-600 bg-clip-text text-transparent hover:from-zinc-800 hover:via-slate-600 hover:to-zinc-800 transition-all duration-300">Privacy</Link>
              <Link href="#" className="text-sm bg-gradient-to-r from-zinc-600 via-slate-500 to-zinc-600 bg-clip-text text-transparent hover:from-zinc-800 hover:via-slate-600 hover:to-zinc-800 transition-all duration-300">Contact</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
