"use client";

import Link from 'next/link'
import { getDict } from '@/lib/i18n'

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
            De Visitas Transacionais a Receita Prevísivel: Uma Análise Técnica do ROI de Programas de Fidelidade na Indústria de Estética
          </h1>
          <div className="text-sm text-gray-600 mt-2">Análise Técnica · 9 min de leitura</div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-2xl">
          <article className="prose prose-neutral max-w-none">
            <p>
              No cenário competitivo da estética médica, o crescimento sustentável está ligado à maximização do Valor de Vida do Cliente (CLV). Historicamente, um desafio comum para clínicas como a Na Belle Ame Med Spa (Phoenix, Arizona) era um engajamento marcado por visitas transacionais de alto valor, porém baixa frequência. A implementação de um framework estruturado de fidelidade, com uma plataforma como a Zuzz, marcou uma virada estratégica e gerou dados que merecem uma análise técnica mais profunda.
            </p>

            <h2>Interpretando Mudanças de KPIs com a Metodologia Zuzz</h2>
            <p>
              Como especialistas da Zuzz.org, interpretamos esse sucesso não como um outlier, mas como confirmação das mecânicas de fidelidade orientadas por dados. O aumento de 25% nas visitas recorrentes e 15% nas vendas de produtos são KPIs que impactam diretamente a previsibilidade de receita e a lucratividade operacional.
            </p>

            <h2>Deconstruindo os Métricos Centrais</h2>
            <h3>1) +25% na Frequência de Visitas Recorrentes</h3>
            <p>
              Métrica crítica para elevar CLV. Custos de aquisição são 5–7× maiores do que reter. Clientes retidos tendem a aumentar o gasto ao longo do tempo.
            </p>
            <p><strong>Projeção Financeira:</strong></p>
            <ul>
              <li>Base: 3 visitas/ano, Ticket Médio (ATV) = US$500 → US$1.500/ano</li>
              <li>Com +25% frequência: 3,75 visitas/ano → US$1.875/ano</li>
              <li>Ganho por cliente: US$375/ano → Para 500 clientes ativos ≈ US$187.500/ano</li>
            </ul>
            <p>
              Motor técnico: efeito de progresso investido. Quem está a US$100 de uma recompensa de US$50 tende a agendar antes e adicionar um serviço menor para "fechar a meta".
            </p>

            <h3>2) +15% em Vendas de Produtos</h3>
            <p>
              Varejo é uma receita de alta margem muitas vezes subalavancada em negócios de serviços. Mecânicas de fidelidade são um empurrão efetivo para ativar essa vertical.
            </p>
            <p><strong>Projeção Financeira:</strong></p>
            <ul>
              <li>Suponha 500 clientes; 40% (200) compram produtos a US$200/ano → US$40.000</li>
              <li>+15% → +US$6.000 → US$46.000 total</li>
            </ul>
            <p>
              Motor técnico: pontos resgatáveis reduzem fricção para o primeiro teste. Um resgate de US$25 num sérum de US$120 torna a compra mais racional, semeando pedidos futuros a preço cheio.
            </p>

            <h2>Projetando CLV de Longo Prazo e Escalabilidade</h2>
            <p>O poder dessas métricas aparece no horizonte de múltiplos anos. Fidelidade não é um evento de um ano só.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="py-2 pr-4 border-b">Cenário</th>
                    <th className="py-2 pr-4 border-b">Ano 1</th>
                    <th className="py-2 pr-4 border-b">Ano 2</th>
                    <th className="py-2 pr-4 border-b">Ano 3</th>
                    <th className="py-2 pr-4 border-b">CLV (3 anos)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 border-b">Sem Programa de Fidelidade</td>
                    <td className="py-2 pr-4 border-b">$1,500</td>
                    <td className="py-2 pr-4 border-b">$1,500</td>
                    <td className="py-2 pr-4 border-b">$1,500</td>
                    <td className="py-2 pr-4 border-b">$4,500</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 border-b">Com Programa de Fidelidade Zuzz</td>
                    <td className="py-2 pr-4 border-b">$2,105</td>
                    <td className="py-2 pr-4 border-b">$2,210</td>
                    <td className="py-2 pr-4 border-b">$2,320</td>
                    <td className="py-2 pr-4 border-b">$6,635 (+47%)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Além de Pontos: O Futuro da Fidelidade em Estética</h2>
            <ul>
              <li><strong>Programas com Tiers:</strong> Segmentar em níveis VIP (Prata, Ouro, Platina) com benefícios para elevar ATV.</li>
              <li><strong>Analytics Preditivo:</strong> Usar histórico e padrões de resgate para recomendações no timing certo.</li>
              <li><strong>Integração Omnichannel:</strong> Unificar clínica, e-commerce e mobile para atribuição precisa.</li>
            </ul>

            <h2>Conclusão</h2>
            <p>
              A fidelidade orientada por dados é uma alavanca eficiente para aumentar frequência, impulsionar vendas de alta margem e gerar elevação previsível no CLV. Os dados da Na Belle Ame não são um caso isolado, mas um modelo financeiro que a metodologia Zuzz foi construída para entregar.
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
