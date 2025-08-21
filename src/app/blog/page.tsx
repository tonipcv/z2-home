'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { getDict } from '@/lib/i18n'

const blogPosts = [
  {
    title:
      'De Anúncios Caros a um Ecossistema de Crescimento: Uma Análise Técnica de ROI de Programas de Indicação na Indústria de Estética',
    description:
      'Como um programa de indicação com incentivo duplo reclassifica o CAC para R$0 ao tratar recompensas como investimento em fidelidade e desconto promocional, gerando crescimento de maior qualidade.',
    category: 'Análise de Indicação',
    readTime: '8 min de leitura',
    slug: 'referral-program-roi-aesthetics',
    date: '21 de ago de 2025',
  },
  {
    title:
      'De Visitas Transacionais a Receita Prevísivel: Uma Análise Técnica do ROI de Programas de Fidelidade na Indústria de Estética',
    description:
      'Uma decomposição orientada por dados de como um programa de fidelidade projetado pela Zuzz aumenta a frequência de visitas, o attach rate de produtos e o CLV para clínicas de estética médica.',
    category: 'Análise Técnica',
    readTime: '9 min de leitura',
    slug: 'loyalty-program-roi-aesthetics',
    date: '21 de ago de 2025',
  },
]
// Added: precision loyalty ROI post
blogPosts.unshift({
  title:
    'De Visitas Pontuais à Dominância de Mercado: Uma Análise Técnica de ROI de Programas de Fidelidade de Precisão',
  description:
    'Uma metodologia de fidelidade de precisão que elevou a receita de injetáveis em 40% e clientes recorrentes em 18%, com um modelo de ROI replicável.',
  category: 'Análise de Fidelidade',
  readTime: '9 min de leitura',
  slug: 'technical-roi-precision-loyalty-programs',
  date: '21 de ago de 2025',
})

export default function BlogIndex() {
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
              <Link href={{ pathname: '/' }} className="hover:underline">{t.nav.home}</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-10 pb-6 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          <motion.div initial={{opacity:1,y:0}} animate={{opacity:1,y:0}}>
            <h1 className="text-3xl sm:text-4xl font-light tracking-[-0.02em]">{t.blogIndex.header}</h1>
            <p className="mt-2 text-gray-700 max-w-2xl">{t.blogIndex.sub}</p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <section className="pb-12 px-4 sm:px-6">
        <div className="container mx-auto max-w-3xl">
          <ul className="divide-y divide-gray-200">
            {blogPosts.map((post) => (
              <li key={post.slug} className="py-6">
                <div className="text-sm text-gray-600 mb-1">
                  <span>{post.category}</span>
                  <span className="mx-2">·</span>
                  <span>{post.readTime}</span>
                  <span className="mx-2">·</span>
                  <span>{post.date}</span>
                </div>
                <h2 className="text-xl font-medium">
                  <Link href={{ pathname: `/blog/${post.slug}` as const }} className="text-blue-700 hover:underline">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-700 mt-1">{post.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-8 px-4 sm:px-6 border-t border-gray-200 bg-white">
        <div className="container mx-auto max-w-2xl">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <img src="/logo.png" alt="Logo" className="h-5 mb-4 sm:mb-0" />
            <p className="text-gray-500 text-sm">© 2025 Zuzz.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
 