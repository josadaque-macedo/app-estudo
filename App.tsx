import React, { useState } from 'react';
import { questions } from './data';
import { QuestionCard } from './components/QuestionCard';
import { ProgressBar } from './components/ProgressBar';
import { Shield, BookOpen, RefreshCw, Trophy, AlertTriangle, Share2 } from 'lucide-react';

const App: React.FC = () => {
  const [started, setStarted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [history, setHistory] = useState<boolean[]>([]);

  const handleStart = () => {
    setStarted(true);
    setCurrentIndex(0);
    setScore(0);
    setShowResults(false);
    setHistory([]);
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) setScore(prev => prev + 1);
    setHistory(prev => [...prev, isCorrect]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: 'Simulado Policial Penal ES',
      text: `Acabei de fazer o simulado de Direito Penal e acertei ${score} de ${questions.length} questões! 👮‍♂️📚 Tente superar minha pontuação!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing', err);
      }
    } else {
      // Fallback for browsers that don't support sharing
      navigator.clipboard.writeText(`${shareData.text} ${shareData.url}`);
      alert('Resultado copiado para a área de transferência!');
    }
  };

  // Welcome Screen
  if (!started) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl max-w-lg w-full text-center border-t-4 border-blue-900">
          <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-10 h-10 text-blue-900" />
          </div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Policial Penal ES</h1>
          <p className="text-slate-500 mb-8 font-medium">Simulado de Direito Penal</p>
          
          <div className="space-y-4 mb-8 text-left bg-slate-50 p-6 rounded-lg border border-slate-100">
            <div className="flex items-center gap-3 text-slate-700">
              <BookOpen className="w-5 h-5 text-blue-600" />
              <span>10 Questões Inéditas</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <Trophy className="w-5 h-5 text-yellow-600" />
              <span>Estilo Prova Objetiva</span>
            </div>
            <div className="flex items-center gap-3 text-slate-700">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              <span>Nível Médio/Difícil</span>
            </div>
          </div>

          <button
            onClick={handleStart}
            className="w-full bg-blue-900 hover:bg-blue-800 text-white text-lg font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Iniciar Simulado
          </button>
        </div>
        <p className="mt-8 text-slate-400 text-sm">Baseado no material da Banca IDCAP</p>
      </div>
    );
  }

  // Results Screen
  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    let message = "Continue estudando!";
    let color = "text-red-600";
    if (percentage >= 80) {
      message = "Excelente! Você está pronto.";
      color = "text-green-600";
    } else if (percentage >= 50) {
      message = "Bom trabalho, mas revise os erros.";
      color = "text-yellow-600";
    }

    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
        <div className="bg-white p-8 rounded-2xl shadow-xl max-w-lg w-full text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Resultado Final</h2>
          
          <div className="mb-8 relative inline-flex items-center justify-center">
             <svg className="w-40 h-40 transform -rotate-90">
                <circle
                  className="text-slate-200"
                  strokeWidth="12"
                  stroke="currentColor"
                  fill="transparent"
                  r="70"
                  cx="80"
                  cy="80"
                />
                <circle
                  className={percentage >= 80 ? "text-green-500" : percentage >= 50 ? "text-yellow-500" : "text-red-500"}
                  strokeWidth="12"
                  strokeDasharray={440}
                  strokeDashoffset={440 - (440 * percentage) / 100}
                  strokeLinecap="round"
                  stroke="currentColor"
                  fill="transparent"
                  r="70"
                  cx="80"
                  cy="80"
                />
             </svg>
             <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col">
               <span className="text-4xl font-bold text-slate-900">{score}</span>
               <span className="text-slate-500 text-sm">de {questions.length}</span>
             </div>
          </div>

          <h3 className={`text-xl font-bold mb-2 ${color}`}>{message}</h3>
          <p className="text-slate-600 mb-8">
            Você acertou {score} de {questions.length} questões.
          </p>

          <div className="grid grid-cols-5 gap-2 mb-8">
            {history.map((isCorrect, idx) => (
              <div 
                key={idx}
                className={`h-2 rounded-full ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}
                title={`Questão ${idx + 1}: ${isCorrect ? 'Correta' : 'Incorreta'}`}
              />
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <button
              onClick={handleShare}
              className="flex items-center justify-center gap-2 w-full bg-blue-100 hover:bg-blue-200 text-blue-900 font-semibold py-3 rounded-lg transition-colors"
            >
              <Share2 className="w-5 h-5" /> Compartilhar Resultado
            </button>
            <button
              onClick={handleStart}
              className="flex items-center justify-center gap-2 w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              <RefreshCw className="w-5 h-5" /> Refazer Simulado
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Quiz Screen
  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl mb-6 flex justify-between items-center">
        <div className="flex items-center gap-2 text-slate-700 font-bold">
          <Shield className="w-6 h-6 text-blue-900" />
          <span>Policial Penal ES</span>
        </div>
        <div className="bg-white px-4 py-1.5 rounded-full shadow-sm text-sm font-medium text-slate-600 border border-slate-200">
           Direito Penal
        </div>
      </div>

      <div className="w-full max-w-3xl">
        <ProgressBar current={currentIndex} total={questions.length} />
        <QuestionCard 
          question={questions[currentIndex]} 
          onAnswer={handleAnswer}
          onNext={handleNext}
          isLast={currentIndex === questions.length - 1}
        />
      </div>
    </div>
  );
};

export default App;