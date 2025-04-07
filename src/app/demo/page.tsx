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
            className="bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl mt-6 px-8 py-6 text-lg rounded-lg"
            variant="default"
            onClick={() => router.push('/')}
          >
            <span className="mr-2">Voltar para o início</span>
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