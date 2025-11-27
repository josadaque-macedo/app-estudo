import React, { useState, useEffect } from 'react';
import { Question, Option } from '../types';
import { CheckCircle, XCircle, AlertCircle, ArrowRight, HelpCircle } from 'lucide-react';

interface QuestionCardProps {
  question: Question;
  onAnswer: (isCorrect: boolean) => void;
  onNext: () => void;
  isLast: boolean;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer, onNext, isLast }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedId(null);
    setIsSubmitted(false);
  }, [question.id]);

  const handleOptionClick = (optionId: string) => {
    if (isSubmitted) return;
    setSelectedId(optionId);
  };

  const handleSubmit = () => {
    if (!selectedId || isSubmitted) return;
    setIsSubmitted(true);
    const correct = selectedId === question.correctOptionId;
    onAnswer(correct);
  };

  const getOptionStyle = (option: Option) => {
    const baseStyle = "w-full p-4 text-left border rounded-lg transition-all duration-200 text-sm md:text-base mb-3 flex items-start group";
    
    if (!isSubmitted) {
      if (selectedId === option.id) {
        return `${baseStyle} border-blue-500 bg-blue-50 text-blue-900 ring-1 ring-blue-500`;
      }
      return `${baseStyle} border-slate-200 hover:border-blue-300 hover:bg-slate-50`;
    }

    // Submitted state
    if (option.id === question.correctOptionId) {
      return `${baseStyle} border-green-500 bg-green-50 text-green-900 ring-1 ring-green-500`;
    }
    if (selectedId === option.id && selectedId !== question.correctOptionId) {
      return `${baseStyle} border-red-500 bg-red-50 text-red-900`;
    }
    
    return `${baseStyle} border-slate-200 opacity-50`;
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 max-w-3xl w-full mx-auto relative overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="inline-block px-2 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded uppercase tracking-wide mb-2">
            {question.topic}
          </span>
          <div className="flex items-center gap-2">
            <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${
              question.difficulty === 'Fácil' ? 'bg-green-100 text-green-700 border-green-200' :
              question.difficulty.includes('Alta') ? 'bg-red-100 text-red-700 border-red-200' :
              'bg-yellow-100 text-yellow-700 border-yellow-200'
            }`}>
              {question.difficulty}
            </span>
          </div>
        </div>
        <div className="text-slate-400">
           <HelpCircle className="w-5 h-5" />
        </div>
      </div>

      {/* Question Text */}
      <h2 className="text-lg md:text-xl font-medium text-slate-900 mb-8 leading-relaxed">
        {question.text}
      </h2>

      {/* Options */}
      <div className="space-y-1">
        {question.options.map((option) => (
          <button
            key={option.id}
            onClick={() => handleOptionClick(option.id)}
            disabled={isSubmitted}
            className={getOptionStyle(option)}
          >
            <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold mr-3 flex-shrink-0 transition-colors ${
              selectedId === option.id && !isSubmitted ? 'bg-blue-600 text-white' : 
              isSubmitted && option.id === question.correctOptionId ? 'bg-green-600 text-white' :
              isSubmitted && selectedId === option.id && selectedId !== question.correctOptionId ? 'bg-red-600 text-white' :
              'bg-slate-200 text-slate-600 group-hover:bg-slate-300'
            }`}>
              {option.id}
            </span>
            <span className="mt-0.5">{option.text}</span>
            
            {isSubmitted && option.id === question.correctOptionId && (
              <CheckCircle className="w-5 h-5 text-green-600 ml-auto flex-shrink-0" />
            )}
            {isSubmitted && selectedId === option.id && selectedId !== question.correctOptionId && (
              <XCircle className="w-5 h-5 text-red-600 ml-auto flex-shrink-0" />
            )}
          </button>
        ))}
      </div>

      {/* Footer Actions */}
      <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedId}
            className="w-full md:w-auto ml-auto px-6 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2"
          >
            Responder
          </button>
        ) : (
          <div className="w-full animate-fade-in-up">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 text-sm mb-1">Comentário do Professor</h4>
                  <p className="text-blue-800 text-sm leading-relaxed">
                    {question.explanation}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end">
              <button
                onClick={onNext}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium rounded-lg transition-colors shadow-sm flex items-center gap-2"
              >
                {isLast ? 'Ver Resultados' : 'Próxima Questão'} <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};