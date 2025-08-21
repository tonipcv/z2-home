export type Lang = 'en'

export const supportedLangs: Lang[] = ['en']

export function normalizeLang(_input?: string | null): Lang {
  return 'en'
}

const dict = {
  en: {
    nav: {
      blog: 'Blog',
      home: 'Home',
      request: 'Request Analysis',
    },
    home: {
      title: 'Loyalty Programs: Technical Analysis and Program Design (Zuzz Methodology)',
      intro: 'We design and validate loyalty mechanisms for medical aesthetics and premium clinics. The objective is to increase repeat visit frequency, improve product attach rate, and maximize Customer Lifetime Value (CLV) with measurable, data-driven interventions.',
      scope: 'Scope',
      items: [
        'Diagnostic: baseline cohort analysis (visit frequency, ATV, churn, attach rate)',
        'Mechanics: points issuance/redemption, tiers, accrual velocity, reward economics',
        'Governance: liability accounting, breakage assumptions, abuse prevention',
        'Experimentation: A/B of earn multipliers, thresholds, and redemption friction',
        'Attribution: CLV delta modeling and ROI tracking',
      ],
      seeArticle: 'See the analysis article:',
      readBlog: 'Read the Blog',
      modalTitle: 'Request a Loyalty Program Analysis',
      modalDesc: 'Provide your details to receive a structured assessment and a Zuzz methodology proposal.',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      specialty: 'Clinic Specialty',
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
} as const

export type Dict = (typeof dict)[Lang]

export function getDict(lang: Lang): Dict {
  return dict[lang]
}
