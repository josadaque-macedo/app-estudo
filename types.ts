export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  topic: string;
  text: string;
  options: Option[];
  correctOptionId: string;
  explanation: string;
  difficulty: 'Fácil' | 'Média' | 'Média/Alta';
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  showResults: boolean;
  answers: Record<number, string>; // questionId -> selectedOptionId
}