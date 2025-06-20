export type ScoreValue = 'Poor' | 'Basic' | 'Professional' | 'Excellent';

export type Question = {
  id: number;
  category: string;
  question: string;
  answers: Record<ScoreValue, string>;
};

export type ContactInfo = {
  name: string;
  email: string;
  phone: string;
  clinicName: string;
  role: string;
  numberOfDoctors: string;
  city: string;
  state: string;
};

export type ScorecardSubmission = {
  firstImpression: ScoreValue;
  patientJourney: ScoreValue;
  followUp: ScoreValue;
  reviews: ScoreValue;
  branding: ScoreValue;
  totalScore: number;
} & ContactInfo; 