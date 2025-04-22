'use client';

import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Logo } from '../../components/ui/logo';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRightIcon, CheckIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';

export default function DemonstracaoGratisPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    speciality: '',
    bestTime: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const router = useRouter();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string, field: string) => {
    setFormData((prev) => {
      const updatedData = {
        ...prev,
        [field]: value
      };
      
      // Avançar para o próximo passo após selecionar
      setTimeout(() => {
        if (field === 'speciality') {
          setStep(5); // Avançar para o próximo passo (horário)
        } else if (field === 'bestTime') {
          submitFormData(); // Enviar o formulário após selecionar o horário
        }
      }, 500);
      
      return updatedData;
    });
  };

  const handleNext = () => {
    if (step === 0) {
      setStep(1);
    } else if (step === 1 && formData.name.trim() !== '') {
      setStep(2);
    } else if (step === 2 && formData.email.trim() !== '') {
      setStep(3);
    } else if (step === 3 && formData.whatsapp.trim() !== '') {
      setStep(4);
    } else if (step === 4 && formData.speciality !== '') {
      setStep(5);
    } else if (step === 5 && formData.bestTime !== '') {
      submitFormData();
    }
  };

  const submitFormData = async () => {
    try {
      setIsSubmitting(true);
      setSubmitError('');
      
      console.log('Enviando dados do formulário:', formData);
      
      // Enviar dados para a API
      const response = await fetch('/api/demo-requests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Erro ao enviar dados');
      }
      
      console.log('Dados enviados com sucesso:', result);
      
      // Avançar para a página de confirmação
      setStep(6);
      
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      setSubmitError(error instanceof Error ? error.message : 'Erro ao enviar dados');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && step < 4) {
      handleNext();
    }
  };

  const steps = [
    // Step 0: Headline e botão inicial
    <motion.div 
      key="intro" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="text-center max-w-3xl mx-auto"
    >
      <h1 className="text-3xl md:text-4xl font-light text-white mb-6 leading-tight">
        Agende uma demonstração gratuita da Med1
      </h1>
      <p className="text-xl text-white/80 mb-8 leading-relaxed">
        Veja como nossa plataforma pode transformar seu consultório
      </p>
      <Button 
        className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl px-8 py-6 text-lg rounded-lg"
        variant="default"
        onClick={handleNext}
      >
        <span className="mr-2">Continuar</span>
        <span className="bg-white/20 rounded-full p-1.5">
          <ChevronRightIcon className="h-4 w-4 text-white" />
        </span>
      </Button>
    </motion.div>,

    // Step 1: Qual seu nome
    <motion.div 
      key="name" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-light text-white mb-12">
        Qual é o seu nome?
      </h2>
      <div className="mb-10 px-4">
        <Input 
          type="text" 
          name="name"
          value={formData.name} 
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-3xl py-8 px-6 placeholder:text-white/60 placeholder:text-3xl w-full focus:ring-2 focus:ring-white/50 focus:border-transparent"
          placeholder="Digite seu nome"
          autoFocus
          style={{ fontSize: '1.875rem' }}
        />
      </div>
      <Button 
        className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl mt-6 px-8 py-6 text-lg rounded-lg"
        variant="default"
        onClick={handleNext}
        disabled={formData.name.trim() === ''}
      >
        <span className="mr-2">Continuar</span>
        <span className="bg-white/20 rounded-full p-1.5">
          <ChevronRightIcon className="h-4 w-4 text-white" />
        </span>
      </Button>
    </motion.div>,

    // Step 2: Qual seu e-mail
    <motion.div 
      key="email" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-light text-white mb-12">
        Qual seu e-mail?
      </h2>
      <div className="mb-10 px-4">
        <Input 
          type="email" 
          name="email"
          value={formData.email} 
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-3xl py-8 px-6 placeholder:text-white/60 placeholder:text-3xl w-full focus:ring-2 focus:ring-white/50 focus:border-transparent"
          placeholder="Digite seu e-mail"
          autoFocus
          style={{ fontSize: '1.875rem' }}
        />
      </div>
      <Button 
        className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl mt-6 px-8 py-6 text-lg rounded-lg"
        variant="default"
        onClick={handleNext}
        disabled={formData.email.trim() === ''}
      >
        <span className="mr-2">Continuar</span>
        <span className="bg-white/20 rounded-full p-1.5">
          <ChevronRightIcon className="h-4 w-4 text-white" />
        </span>
      </Button>
    </motion.div>,

    // Step 3: Qual seu WhatsApp
    <motion.div 
      key="whatsapp" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-light text-white mb-12">
        Qual seu WhatsApp?
      </h2>
      <div className="mb-10 px-4">
        <Input 
          type="tel" 
          name="whatsapp"
          value={formData.whatsapp} 
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white text-3xl py-8 px-6 placeholder:text-white/60 placeholder:text-3xl w-full focus:ring-2 focus:ring-white/50 focus:border-transparent"
          placeholder="(00) 00000-0000"
          autoFocus
          style={{ fontSize: '1.875rem' }}
        />
      </div>
      <Button 
        className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl mt-6 px-8 py-6 text-lg rounded-lg"
        variant="default"
        onClick={handleNext}
        disabled={formData.whatsapp.trim() === ''}
      >
        <span className="mr-2">Continuar</span>
        <span className="bg-white/20 rounded-full p-1.5">
          <ChevronRightIcon className="h-4 w-4 text-white" />
        </span>
      </Button>
    </motion.div>,

    // Step 4: Qual sua especialidade
    <motion.div 
      key="speciality" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-light text-white mb-12">
        Qual sua especialidade?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mb-10">
        {['Odontologia', 'Medicina', 'Psicologia', 'Outra'].map((option) => (
          <button
            key={option}
            onClick={() => handleSelectChange(option, 'speciality')}
            className={`text-left text-2xl py-6 px-6 rounded-lg backdrop-blur-sm border-2 transition-all ${
              formData.speciality === option
                ? 'bg-white/30 border-white text-white'
                : 'bg-white/10 border-white/30 text-white'
            }`}
          >
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                formData.speciality === option ? 'bg-white text-blue-700' : 'border-2 border-white/60'
              }`}>
                {formData.speciality === option && <CheckIcon className="h-4 w-4" />}
              </div>
              {option}
            </div>
          </button>
        ))}
      </div>
    </motion.div>,

    // Step 5: Melhor horário para contato
    <motion.div 
      key="bestTime" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <h2 className="text-3xl font-light text-white mb-12">
        Melhor horário para contato?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 mb-10">
        {['Manhã', 'Tarde', 'Noite', 'Qualquer horário'].map((option) => (
          <button
            key={option}
            onClick={() => handleSelectChange(option, 'bestTime')}
            className={`text-left text-2xl py-6 px-6 rounded-lg backdrop-blur-sm border-2 transition-all ${
              formData.bestTime === option
                ? 'bg-white/30 border-white text-white'
                : 'bg-white/10 border-white/30 text-white'
            }`}
          >
            <div className="flex items-center">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 ${
                formData.bestTime === option ? 'bg-white text-blue-700' : 'border-2 border-white/60'
              }`}>
                {formData.bestTime === option && <CheckIcon className="h-4 w-4" />}
              </div>
              {option}
            </div>
          </button>
        ))}
      </div>
      <Button 
        className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl mt-6 px-8 py-6 text-lg rounded-lg"
        variant="default"
        onClick={handleNext}
        disabled={formData.bestTime === ''}
      >
        <span className="mr-2">Agendar demonstração</span>
        <span className="bg-white/20 rounded-full p-1.5">
          <ChevronRightIcon className="h-4 w-4 text-white" />
        </span>
      </Button>
    </motion.div>,

    // Step 6: Confirmação
    <motion.div 
      key="confirmation" 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: -20 }}
      className="text-center w-full max-w-2xl mx-auto"
    >
      <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 rounded-xl p-8 mb-10">
        <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-6">
          <CheckIcon className="h-12 w-12 text-white" />
        </div>
        <h2 className="text-3xl font-light text-white mb-4">
          Demonstração agendada!
        </h2>
        <p className="text-xl text-white/80 mb-8">
          {isSubmitting ? (
            "Processando seu agendamento..."
          ) : submitError ? (
            <>Erro ao agendar: {submitError}</>
          ) : (
            "Nossa equipe entrará em contato em breve para confirmar sua demonstração gratuita."
          )}
        </p>
        {!isSubmitting && !submitError && (
          <Button 
            className="bg-green-600 text-white hover:bg-green-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl mt-6 px-8 py-6 text-lg rounded-lg inline-flex items-center"
            variant="default"
            onClick={() => {
              const message = encodeURIComponent(`Olá me chamo ${formData.name} e quero acesso a minha demonstração do Med1!`);
              window.location.href = `https://wa.me/5511937064833?text=${message}`;
            }}
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Acessar WhatsApp</span>
          </Button>
        )}
        {submitError && (
          <Button 
            className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl mt-6 px-8 py-6 text-lg rounded-lg"
            variant="default"
            onClick={submitFormData}
            disabled={isSubmitting}
          >
            <span className="mr-2">Tentar novamente</span>
            <span className="bg-white/20 rounded-full p-1.5">
              <ChevronRightIcon className="h-4 w-4 text-white" />
            </span>
          </Button>
        )}
      </div>
    </motion.div>
  ];

  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 flex flex-col relative">
      {/* Botão de sair */}
      <button 
        onClick={() => router.push('/')}
        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors flex items-center text-xs"
      >
        <span className="mr-1">Sair</span>
        <XMarkIcon className="h-4 w-4" />
      </button>

      <div className="container mx-auto px-4 py-8 flex-1 flex flex-col">
        <div className="flex justify-center mb-16 pt-8">
          <Logo className="scale-150" variant="light" />
        </div>

        <div className="flex-1 flex items-center justify-center px-4 py-12">
          <AnimatePresence mode="wait">
            {steps[step]}
          </AnimatePresence>
        </div>

        <div className="mt-auto pb-12 flex justify-center">
          <div className="flex space-x-3">
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div 
                key={i} 
                className={`h-3 w-3 rounded-full transition-all duration-300 ${
                  i === step ? 'bg-white w-8' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 