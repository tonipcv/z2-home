export type Lang = 'en' | 'pt'

export const supportedLangs: Lang[] = ['en', 'pt']

export function normalizeLang(_input?: string | null): Lang {
  // Temporarily default to Portuguese site-wide.
  return 'pt'
}

const dict = {
  en: {
    nav: {
      blog: 'Blog',
      home: 'Home',
      request: 'Request Analysis',
    },
    home: {
      title: 'Loyalty & Referral Programs: Technical Analysis and Program Design (Zuzz Methodology)',
      intro: 'We design and validate loyalty and referral mechanisms for businesses of all sizes. The objective is to increase repeat purchases, improve product attach rate, and maximize Customer Lifetime Value (CLV) with measurable, data-driven interventions.',
      scope: 'Scope',
      items: [
        'Diagnostic: baseline cohort analysis (visit frequency, ATV, churn, attach rate)',
        'Mechanics: points issuance/redemption, tiers, accrual velocity, reward economics',
        'Governance: liability accounting, breakage assumptions, abuse prevention',
        'Experimentation: A/B of earn multipliers, thresholds, and redemption friction',
        'Attribution: CLV delta modeling and ROI tracking',
      ],
      seeArticle: 'See related article:',
      readBlog: 'Read the Blog',
      modalTitle: 'Request a Loyalty & Referral Program Analysis',
      modalDesc: 'Provide your details to receive a structured assessment and a Zuzz methodology proposal tailored to your business.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      industry: 'Industry',
      submit: 'Request Analysis',
      tos: 'By submitting, you agree to our Terms of Service and Privacy Policy.',
    },
    blogIndex: {
      header: 'Zuzz Technical Notes',
      sub: 'Applied analysis on loyalty economics, program design, and CLV modeling.',
    },
    articleMeta: {
      blog: 'Blog',
      technical: 'Technical Analysis',
      referral: 'Referral Analysis',
      read: 'min read',
      next: 'Next:',
      requestAnalysis: 'Request an analysis',
    },
  },
  pt: {
    nav: {
      blog: 'Blog',
      home: 'Início',
      request: 'Solicitar Análise',
    },
    home: {
      title: 'Programas de Fidelidade e Indicação: Análise Técnica e Desenho de Programa (Metodologia Zuzz)',
      intro:
        'Desenhamos e validamos mecanismos de fidelidade e indicação para negócios de todos os portes. O objetivo é aumentar a recorrência de compras, melhorar o attach rate de produtos e maximizar o LTV (CLV) com intervenções mensuráveis e orientadas por dados.',
      scope: 'Escopo',
      items: [
        'Diagnóstico: análise de coortes (frequência de visita, ticket médio, churn, attach rate)',
        'Mecânicas: emissão/resgate de pontos, tiers, velocidade de acúmulo, economia de recompensas',
        'Governança: contabilização de passivos, quebra (breakage), prevenção de abuso',
        'Experimentação: testes A/B de multiplicadores de ganho, thresholds e fricção de resgate',
        'Atribuição: modelagem de delta de CLV e acompanhamento de ROI',
      ],
      seeArticle: 'Veja o artigo relacionado:',
      readBlog: 'Ler o Blog',
      modalTitle: 'Solicite uma Análise de Programa de Fidelidade & Indicação',
      modalDesc:
        'Informe seus dados para receber uma avaliação estruturada e uma proposta baseada na metodologia Zuzz, adaptada ao seu negócio.',
      name: 'Nome',
      email: 'Email',
      phone: 'Telefone',
      industry: 'Setor',
      submit: 'Solicitar Análise',
      tos: 'Ao enviar, você concorda com nossos Termos de Uso e Política de Privacidade.',
    },
    blogIndex: {
      header: 'Notas Técnicas Zuzz',
      sub: 'Análises aplicadas sobre economia de fidelidade, desenho de programas e modelagem de CLV.',
    },
    articleMeta: {
      blog: 'Blog',
      technical: 'Análise Técnica',
      referral: 'Análise de Indicação',
      read: 'min de leitura',
      next: 'Próximo:',
      requestAnalysis: 'Solicitar uma análise',
    },
  },
} as const

export type Dict = (typeof dict)[Lang]

export function getDict(lang: Lang): Dict {
  return dict[lang]
}
