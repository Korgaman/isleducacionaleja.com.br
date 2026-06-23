export interface Testimonial {
  id: string;
  name: string;
  age: number;
  city: string;
  role: string;
  quote: string;
  avatarUrl?: string;
  completedIn: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface SimulatorState {
  stage: 'fundamental' | 'medio' | 'fundamental_medio';
  lastGrade: string;
  studyMode: 'online' | 'hybrid';
  age: number;
}
