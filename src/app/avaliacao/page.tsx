"use client";

import Link from "next/link";
import { useState } from "react";
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
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const alegreya = Alegreya({ subsets: ["latin"] });

export default function AvaliacaoPage() {
  const [showRequestModal, setShowRequestModal] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    specialties: [] as string[],
  });

  return (
    <div className="min-h-screen bg-white text-black antialiased flex flex-col">
      {/* Top Bar (same structure as home) */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link href="/">
            <img src="/logo.png" alt="Logo" className="h-5" />
          </Link>
          <nav className="text-sm text-gray-600 flex items-center gap-5">
            <button
              onClick={() => setShowRequestModal(true)}
              className="hover:underline"
            >
              Solicitar análise
            </button>
          </nav>
        </div>
      </header>

      {/* Main */}
      <main className="flex-1">
        {/* Hero / Intro */}
        <section className="px-4">
          <div className="max-w-3xl mx-auto py-12">
            <h1
              className={`${alegreya.className} text-3xl sm:text-4xl font-normal tracking-tight text-black mb-4`}
            >
              Análise de Dados: Como Clínicas Aumentaram a Receita e a Margem de
              Lucro Otimizando a Base de Clientes Existente
            </h1>
            <p className="text-gray-700 leading-relaxed">
              O crescimento sustentável de uma clínica não depende do aumento
              contínuo do investimento em tráfego pago ou da expansão da equipe.
              A estratégia mais lucrativa reside na otimização de ativos já
              existentes: a sua base de clientes.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              O Método Zuzz é uma metodologia data-driven, inspirada em
              operações de alta performance nos Estados Unidos, que implementa
              sistemas para aumentar o Valor Vitalício do Cliente (LTV), a
              frequência de recompra e a aquisição de novos clientes a um Custo
              de Aquisição (CAC) drasticamente reduzido.
            </p>
            <p className="text-gray-700 leading-relaxed mt-4">
              A seguir, apresentamos a análise de cinco casos de implementação
              com resultados quantificáveis.
            </p>
          </div>
        </section>

        {/* Cases */}
        <section className="px-4">
          <div className="max-w-3xl mx-auto space-y-10">
            {/* Caso 1 */}
            <div>
              <h2 className="text-xl font-semibold text-black">
                Caso 1: Aumento do LTV e do Valor por Transação (AOV)
              </h2>
              <ul className="mt-2 text-gray-700 space-y-1">
                <li>
                  <span className="font-medium">Clínica:</span> Na Belle Ame
                  Med Spa, Phoenix, Arizona.
                </li>
                <li>
                  <span className="font-medium">Desafio Financeiro:</span> Pacientes
                  com comportamento transacional, limitando o LTV a procedimentos
                  pontuais.
                </li>
                <li>
                  <span className="font-medium">Metodologia Zuzz Aplicada:</span>
                  Implementação de um programa de fidelidade com acúmulo de
                  pontos por dólar gasto, incentivando o retorno e a compra de
                  produtos.
                </li>
              </ul>
              <div className="mt-2">
                <p className="font-medium text-gray-900">Resultados Quantificáveis:</p>
                <ul className="list-disc pl-5 text-gray-800 space-y-1 mt-1">
                  <li>
                    +25% de aumento na frequência de visitas recorrentes,
                    impactando diretamente o LTV.
                  </li>
                  <li>
                    +15% de aumento nas vendas de produtos de alta margem,
                    elevando o AOV.
                  </li>
                </ul>
              </div>
            </div>

            {/* Caso 2 */}
            <div>
              <h2 className="text-xl font-semibold text-black">
                Caso 2: Redução do Custo de Aquisição de Clientes (CAC)
              </h2>
              <ul className="mt-2 text-gray-700 space-y-1">
                <li>
                  <span className="font-medium">Clínica:</span> Rejuvenation
                  Clinic, Nashville, Tennessee.
                </li>
                <li>
                  <span className="font-medium">Desafio Financeiro:</span> Alta
                  dependência e custo crescente de canais de publicidade paga
                  para aquisição.
                </li>
                <li>
                  <span className="font-medium">Metodologia Zuzz Aplicada:</span>
                  Lançamento de um programa de indicações com incentivo duplo
                  (para o indicador e o indicado) para converter clientes
                  satisfeitos em um canal de aquisição.
                </li>
              </ul>
              <div className="mt-2">
                <p className="font-medium text-gray-900">Resultados Quantificáveis:</p>
                <ul className="list-disc pl-5 text-gray-800 space-y-1 mt-1">
                  <li>
                    +20% de aumento na aquisição de novos clientes em 6 meses.
                  </li>
                  <li>
                    Redução do CAC em comparação com canais de mídia paga,
                    aumentando a margem de lucro sobre cada novo cliente.
                  </li>
                </ul>
              </div>
            </div>

            {/* Caso 3 */}
            <div>
              <h2 className="text-xl font-semibold text-black">
                Caso 3: Otimização da Receita em Serviços de Alta Margem
              </h2>
              <ul className="mt-2 text-gray-700 space-y-1">
                <li>
                  <span className="font-medium">Clínica:</span> Lux Med Spa, Los
                  Angeles, California.
                </li>
                <li>
                  <span className="font-medium">Desafio Financeiro:</span> Baixa
                  taxa de retenção de pacientes para sessões de manutenção de
                  injetáveis, o serviço mais lucrativo.
                </li>
                <li>
                  <span className="font-medium">Metodologia Zuzz Aplicada:</span>
                  Criação de um programa de pontos focado exclusivamente em
                  procedimentos de injetáveis para criar um custo de mudança e
                  incentivar a lealdade.
                </li>
              </ul>
              <div className="mt-2">
                <p className="font-medium text-gray-900">Resultados Quantificáveis:</p>
                <ul className="list-disc pl-5 text-gray-800 space-y-1 mt-1">
                  <li>+40% de aumento na receita específica de injetáveis.</li>
                  <li>
                    +18% de crescimento na base de clientes recorrentes para
                    este serviço, gerando receita previsível.
                  </li>
                </ul>
              </div>
            </div>

            {/* Caso 4 */}
            <div>
              <h2 className="text-xl font-semibold text-black">
                Caso 4: Aumento da Adesão a Pacotes de Tratamento
              </h2>
              <ul className="mt-2 text-gray-700 space-y-1">
                <li>
                  <span className="font-medium">Clínica:</span> Revive Med Spa,
                  Boston, Massachusetts.
                </li>
                <li>
                  <span className="font-medium">Desafio Operacional:</span> Baixa
                  taxa de conclusão de pacotes de tratamento a laser, resultando
                  em perda de receita futura.
                </li>
                <li>
                  <span className="font-medium">Metodologia Zuzz Aplicada:</span>
                  Estruturação de um caminho de recompensas com um
                  incentivo-chave (desconto ou serviço bônus) ativado após a
                  terceira sessão.
                </li>
              </ul>
              <div className="mt-2">
                <p className="font-medium text-gray-900">Resultados Quantificáveis:</p>
                <ul className="list-disc pl-5 text-gray-800 space-y-1 mt-1">
                  <li>
                    Taxa de conclusão de pacotes atingiu 75% entre os pacientes
                    participantes.
                  </li>
                  <li>
                    +20% de aumento em upsells para serviços complementares
                    durante o tratamento.
                  </li>
                </ul>
              </div>
            </div>

            {/* Caso 5 */}
            <div>
              <h2 className="text-xl font-semibold text-black">
                Caso 5: Otimização da Capacidade Operacional
              </h2>
              <ul className="mt-2 text-gray-700 space-y-1">
                <li>
                  <span className="font-medium">Clínica:</span> Serenity Day Spa,
                  Colorado.
                </li>
                <li>
                  <span className="font-medium">Desafio Operacional:</span>
                  Demanda concentrada nos fins de semana, resultando em horários
                  ociosos e perda de receita durante a semana.
                </li>
                <li>
                  <span className="font-medium">Metodologia Zuzz Aplicada:</span>
                  Implementação de um sistema de pontos ponderados, oferecendo
                  bônus para agendamentos em dias e horários de baixa demanda.
                </li>
              </ul>
              <div className="mt-2">
                <p className="font-medium text-gray-900">Resultados Quantificáveis:</p>
                <ul className="list-disc pl-5 text-gray-800 space-y-1 mt-1">
                  <li>
                    +30% de aumento nos agendamentos durante os dias de menor
                    movimento.
                  </li>
                  <li>
                    +25% de aumento na frequência geral de visitas dos clientes,
                    otimizando a ocupação da clínica.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tech section */}
        <section className="px-4 mt-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-black">
              A Tecnologia por Trás dos Resultados
            </h2>
            <ul className="mt-2 text-gray-700 space-y-2">
              <li>
                <span className="font-medium">Portal do Cliente White-Label:</span>
                Uma área com a identidade visual da sua clínica onde o paciente
                monitora pontos, recompensas e acessa benefícios de um programa
                de membros.
              </li>
              <li>
                <span className="font-medium">Motor de Campanhas:</span> Ferramentas
                para segmentar clientes e automatizar campanhas focadas em
                recompra, recuperação de clientes inativos e ativação de
                indicações.
              </li>
              <li>
                <span className="font-medium">Sistema de Indicações Automatizado:</span>
                Um canal de aquisição previsível e de baixo custo, transformando
                a satisfação do cliente em um fluxo contínuo de novos leads
                qualificados.
              </li>
            </ul>
          </div>
        </section>

        {/* Efeito Zuzz */}
        <section className="px-4 mt-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-semibold text-black">Análise Final: O Efeito Zuzz</h2>
            <p className="text-gray-700 leading-relaxed mt-2">
              O Efeito Zuzz é a otimização de KPIs de negócio através da
              monetização de dados de clientes existentes. O resultado é o
              aumento da margem de lucro (via redução de CAC), o crescimento do
              LTV, a maximização da receita por cliente e a criação de um fluxo
              de faturamento previsível e menos dependente de investimentos
              externos em marketing.
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 mt-12 mb-16">
          <div className="max-w-3xl mx-auto border-t border-gray-200 pt-6">
            <p className="text-gray-700">Próximo Passo:</p>
            <div className="mt-3 flex items-center gap-4 text-sm">
              <button
                onClick={() => setShowRequestModal(true)}
                className="text-blue-700 hover:underline inline-flex items-center"
              >
                Clique para solicitar uma análise de perfil
                <ArrowRightIcon className="w-4 h-4 ml-1" />
              </button>
            </div>
          </div>
        </section>

        {/* Request Access Modal (reused from home) */}
        <Dialog open={showRequestModal} onOpenChange={setShowRequestModal}>
          <DialogContent className="bg-white max-w-[95%] sm:max-w-2xl w-full p-0 rounded-2xl border border-gray-200 shadow-xl overflow-hidden mx-auto my-4 sm:my-8">
            <div className="grid grid-cols-1 sm:grid-cols-5">
              {/* Intro panel */}
              <div className="hidden sm:block sm:col-span-2 bg-gradient-to-b from-slate-50 to-white border-r border-gray-200 p-6">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-semibold text-black leading-snug">
                    Solicitar análise de perfil
                  </DialogTitle>
                  <DialogDescription className="text-sm text-gray-600 mt-2">
                    Compartilhe seus dados de contato para avaliarmos o fit e
                    projetarmos o impacto potencial no faturamento.
                  </DialogDescription>
                </DialogHeader>
                <ul className="mt-6 space-y-3 text-sm text-gray-700 list-disc pl-5">
                  <li>Diagnóstico de coortes base</li>
                  <li>Mecânicas de programa e incentivos</li>
                  <li>Plano de experimentação e acompanhamento de ROI</li>
                </ul>
              </div>

              {/* Form panel */}
              <div className="col-span-1 sm:col-span-3 p-4 sm:p-6">
                <DialogHeader className="sm:hidden">
                  <DialogTitle className="text-xl font-semibold text-black leading-snug">
                    Solicitar análise de perfil
                  </DialogTitle>
                  <DialogDescription className="text-sm text-gray-600 mt-1">
                    Compartilhe seus dados de contato para avaliarmos o fit e
                    projetarmos o impacto potencial no faturamento.
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-2 sm:mt-4 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium text-gray-800">
                        Nome
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3 py-2 bg-white border-gray-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                        placeholder="Jane Smith"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-800">
                        Telefone
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3 py-2 bg-white border-gray-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                        placeholder="+55 (11) 00000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-800">
                        E-mail
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3 py-2 bg-white border-gray-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:border-blue-600"
                        placeholder="jane@company.com"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="industry" className="text-sm font-medium text-gray-800">
                        Segmento
                      </Label>
                      <Select onValueChange={(value) => setFormData({ ...formData, specialties: [value] })}>
                        <SelectTrigger className="w-full px-3 py-2 bg-white border-gray-300 rounded-md focus:ring-1 focus:ring-blue-600 focus:border-blue-600">
                          <SelectValue placeholder="Selecione o seu segmento" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border border-gray-200 rounded-md">
                          <SelectItem value="beauty-aesthetics">Beleza & Estética</SelectItem>
                          <SelectItem value="health-wellness">Saúde & Bem-estar</SelectItem>
                          <SelectItem value="retail">Varejo</SelectItem>
                          <SelectItem value="hospitality">Hospitalidade</SelectItem>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="other">Outro</SelectItem>
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
                          const response = await fetch("/api/access-request", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(formData),
                          });

                          if (!response.ok) throw new Error("Failed to submit request");

                          setFormData({ name: "", email: "", phone: "", specialties: [] });
                          setShowRequestModal(false);
                          alert("Obrigado. Entraremos em contato para agendar sua análise.");
                        } catch (error) {
                          alert("Falha ao enviar. Tente novamente.");
                        } finally {
                          setIsSubmitting(false);
                        }
                      }}
                      disabled={isSubmitting}
                      className={`w-full bg-blue-700 text-white hover:bg-blue-800 transition-colors py-2.5 text-sm rounded-md ${
                        isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? "Processando..." : "Enviar"}
                    </Button>
                    <p className="mt-3 text-xs text-center text-gray-500">
                      Ao enviar, você concorda com nossos termos e política de privacidade.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </main>

      {/* Footer (same as home) */}
      <footer className="mt-auto py-6 sm:py-8 px-4 sm:px-6 border-t border-blue-100/50 bg-transparent">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-xs text-gray-600 text-center sm:text-left">
              Zuzz Corporation — 123 Buckingham Palace Rd, London SW1W 9SH, London — Floor 2
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              <Link
                href="#"
                className="text-sm bg-gradient-to-r from-zinc-600 via-slate-500 to-zinc-600 bg-clip-text text-transparent hover:from-zinc-800 hover:via-slate-600 hover:to-zinc-800 transition-all duration-300"
              >
                Terms
              </Link>
              <Link
                href="#"
                className="text-sm bg-gradient-to-r from-zinc-600 via-slate-500 to-zinc-600 bg-clip-text text-transparent hover:from-zinc-800 hover:via-slate-600 hover:to-zinc-800 transition-all duration-300"
              >
                Privacy
              </Link>
              <Link
                href="#"
                className="text-sm bg-gradient-to-r from-zinc-600 via-slate-500 to-zinc-600 bg-clip-text text-transparent hover:from-zinc-800 hover:via-slate-600 hover:to-zinc-800 transition-all duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
