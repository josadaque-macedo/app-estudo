import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total }) => {
  const percentage = Math.round(((current + 1) / total) * 100);

  return (
    <div className="w-full bg-slate-200 rounded-full h-2.5 mb-6">
      <div 
        className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out" 
        style={{ width: `${percentage}%` }}
      ></div>
      <div className="flex justify-between text-xs text-slate-500 mt-1">
        <span>Questão {current + 1} de {total}</span>
        <span>{percentage}% Completo</span>
      </div>
    </div>
  );
};