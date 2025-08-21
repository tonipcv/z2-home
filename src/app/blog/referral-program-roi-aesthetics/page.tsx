"use client";

import Link from 'next/link'
import { getDict } from '@/lib/i18n';

export default function BlogPost() {
  const t = getDict('pt')
  return (
    <div className="min-h-screen bg-white text-black flex flex-col">
      {/* Top Bar */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center justify-between">
            <Link href={{ pathname: '/' }}>
              <img src="/logo.png" alt="Logo" className="h-5" />
            </Link>
            <div className="text-sm text-gray-600 flex items-center gap-5">
              <Link href={{ pathname: '/blog' }} className="hover:underline">{t.articleMeta.blog}</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-10 pb-6 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl sm:text-4xl font-light tracking-[-0.02em]">
            De Anúncios Caros a um Ecossistema de Crescimento: Uma Análise Técnica de ROI de Programas de Indicação na Indústria de Estética
          </h1>
          <div className="text-sm text-gray-600 mt-2">Análise de Indicação · 8 min de leitura</div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-2xl">
          <article className="prose prose-neutral max-w-none">
            <p>
              No competitivo mercado de Nashville (Tennessee), a Rejuvenation Clinic enfrentava um desafio comum na estética: forte dependência de mídia paga para adquirir novos pacientes. Embora gere visibilidade, essa estratégia costuma resultar em CAC elevado e ROI decrescente. A migração para um modelo de crescimento orgânico, com a implementação de um programa de indicação via Zuzz, representou uma otimização estratégica fundamental.
            </p>
            <p>
              Como especialistas em sistemas de crescimento na Zuzz.org, analisamos este caso como exemplo de como transformar a base atual de clientes no motor de vendas mais poderoso e eficiente. O resultado reportado — +20% de novos clientes em seis meses com CAC drasticamente reduzido — é o desfecho lógico de uma mecânica de indicação orientada por dados e alinhada à psicologia do consumidor.
            </p>

            <h2>Deconstruindo os Métricos Centrais</h2>
            <p>
              A estratégia implementada foi um programa de indicação com incentivo duplo: tanto quem indica (advocate) quanto o novo cliente indicado recebem recompensa. Esse modelo ganha-ganha alinha interesses e maximiza taxas de conversão.
            </p>

            <h3>1) Reclassificação do CAC (Custo de Aquisição de Clientes)</h3>
            <p>
              Mídia paga (redes sociais, Google Ads) opera por CPC/CPM. O CAC é volátil e sujeito a leilões. Já um programa de indicação pode ser contabilizado como alavanca de crescimento baseada em performance, onde o custo direto de aquisição é zero.
            </p>
            <h4>Análise Comparativa de CAC</h4>
            <p><strong>Cenário de Mídia Paga (Estimativa de Mercado):</strong></p>
            <ul>
              <li>CPC médio: US$3,50</li>
              <li>Click-to-Lead (formulário): 10% → CPL: US$35</li>
              <li>Lead-to-Patient (agendamento e comparecimento): 20%</li>
              <li>CAC via mídia paga (estimado): US$175 por novo paciente</li>
            </ul>
            <p><strong>Cenário com Programa de Indicação Zuzz:</strong></p>
            <ul>
              <li>Crédito ao advocate (ex.: US$50) como marketing de retenção (investimento em fidelidade)</li>
              <li>Desconto ao novo paciente (ex.: US$50) como desconto promocional (redução de receita)</li>
              <li><strong>CAC via indicações: US$0</strong></li>
            </ul>
            <p>
              Ao reclassificar custos como investimento em retenção e promoção, o gasto incerto em anúncios é realocado para resultados garantidos, enquanto se reforça a lealdade. Indicações tornam-se um resultado orgânico da satisfação do cliente, não uma linha de aquisição paga.
            </p>

            <h3>2) +20% de Novos Clientes em Seis Meses</h3>
            <p>
              Esse crescimento é mais eficiente e de maior qualidade. Indicados chegam com confiança prévia, acelerando o ciclo de vendas e aumentando conversões.
            </p>
            <h4>Projeção de Crescimento e Receita</h4>
            <ul>
              <li>Base: 25 novos pacientes/mês por canais tradicionais</li>
              <li>+20% via indicações: +5/mês → +30 novos pacientes em seis meses</li>
              <li>Valor Inicial de Transação (ITV): US$450</li>
              <li><strong>Receita adicional (6 meses):</strong> 30 × US$450 = US$13.500</li>
            </ul>
            <p>
              Essa receita foi obtida com modelo de aquisição de CAC zero, maximizando a margem bruta em cada novo paciente.
            </p>

            <h2>O Valor Superior do Cliente Indicado: Análise de LTV</h2>
            <p>
              Estudos de mercado (Wharton, Nielsen) mostram que indicados são intrinsecamente mais valiosos.
            </p>
            <ul>
              <li><strong>Taxa de Retenção:</strong> até 37% maior vs. outros canais</li>
              <li><strong>Lifetime Value (LTV):</strong> 16–25% maior em média</li>
            </ul>
            <h4>Projeção Financeira</h4>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="py-2 pr-4 border-b">Tipo de Cliente</th>
                  <th className="py-2 pr-4 border-b">CAC</th>
                  <th className="py-2 pr-4 border-b">LTV (3 anos)</th>
                  <th className="py-2 pr-4 border-b">ROI LTV/CAC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 pr-4 border-b">Adquirido via Anúncios</td>
                  <td className="py-2 pr-4 border-b">$175</td>
                  <td className="py-2 pr-4 border-b">$4,500</td>
                  <td className="py-2 pr-4 border-b">25.7x</td>
                </tr>
                <tr>
                  <td className="py-2 pr-4 border-b">Adquirido via Indicação Zuzz</td>
                  <td className="py-2 pr-4 border-b">$0</td>
                  <td className="py-2 pr-4 border-b">$5,220 (16% uplift)</td>
                  <td className="py-2 pr-4 border-b">Theoretically Infinite</td>
                </tr>
              </tbody>
            </table>
            <p>
              Com custo direto de aquisição igual a zero, o ROI de aquisição é ilimitado e o canal traz clientes de maior qualidade.
            </p>

            <h2>Conclusão: O Motor de Indicações como Ativo Estratégico</h2>
            <p>
              O caso da Rejuvenation Clinic ilustra uma verdade: os clientes mais satisfeitos são o ativo de marketing mais subutilizado. Ao oferecer uma plataforma estruturada e recompensadora para compartilhar experiências, a clínica transformou uma despesa variável e crescente em um sistema de crescimento previsível e autossustentável.
            </p>
            <p>
              Tecnologia como a Zuzz.org permite escalar o boca a boca. Com automação, rastreio transparente e recompensas imediatas, um motor de indicações opera continuamente, gerando um fluxo de novos pacientes de alta qualidade a custo marginal próximo de zero.
            </p>
            <p>
              Para clínicas que buscam otimizar marketing e construir uma base mais leal e valiosa, a diretriz é clara: reduza a dependência de anúncios pagos e ative clientes satisfeitos como principal motor de crescimento.
            </p>
          </article>

          <div className="mt-8 text-sm text-gray-700">
            Próximo: <Link href="/" className="text-blue-700 hover:underline">Solicitar uma análise</Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 px-4 sm:px-6 border-t border-gray-200">
        <div className="container mx-auto max-w-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <img src="/logo.png" alt="Logo" className="h-5 mb-4 sm:mb-0" />
            <p className="text-gray-500 text-sm">© 2025 Zuzz.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
