'use client'

import { useSearchParams } from 'next/navigation'
import Script from 'next/script'
import { useEffect } from 'react'

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const name = searchParams.get('name') || ''

  useEffect(() => {
    // Track lead conversion when page loads
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Lead')
    }
  }, [])

  const handleWhatsAppClick = () => {
    // Track WhatsApp click
    if ((window as any).fbq) {
      (window as any).fbq('track', 'Contact')
    }
    // Redirect to WhatsApp
    window.location.href = `https://wa.me/5511976638147?text=Olá! Me chamo ${name}. Gostaria de receber os prompts de IA para médicos.`
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 flex flex-col">
      <main className="flex-1 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl text-center">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 sm:p-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Parabéns! Você está a um passo de receber os prompts
            </h1>

            <div className="space-y-6 text-white/90 text-lg mb-8">
              <p>
                Você receberá acesso a 15 prompts poderosos que vão te ajudar a:
              </p>
              
              <ul className="space-y-4 text-left list-none">
                <li className="flex items-start gap-3">
                  <span className="text-blue-300 mt-1">→</span>
                  <span>Criar conteúdo médico persuasivo para redes sociais</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-300 mt-1">→</span>
                  <span>Otimizar sua agenda e aumentar o número de pacientes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-300 mt-1">→</span>
                  <span>Melhorar a experiência e fidelização dos seus pacientes</span>
                </li>
              </ul>

              <div className="bg-white/5 rounded-xl p-6 mt-8">
                <h2 className="text-xl font-bold mb-4">Próximos passos:</h2>
                <ol className="text-left space-y-3 list-decimal list-inside">
                  <li>Clique no botão do WhatsApp abaixo</li>
                  <li>Você receberá uma mensagem de boas-vindas</li>
                  <li>Em seguida, enviaremos o acesso aos 15 prompts</li>
                  <li>Bônus: Dicas exclusivas de como usar cada prompt</li>
                </ol>
              </div>
            </div>

            <button
              onClick={handleWhatsAppClick}
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg inline-flex items-center gap-2 transition-all transform hover:scale-105"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
              </svg>
              Acessar os Prompts no WhatsApp
            </button>
          </div>
        </div>
      </main>
    </div>
  )
} 