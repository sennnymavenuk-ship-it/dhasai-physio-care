export type PageTab = 'home' | 'treatments' | 'exercises' | 'booking' | 'doctor' | 'support' | 'tips';

export interface TreatmentItem {
  id: string;
  title: string;
  category: string;
  description: string;
  iconName: string;
  exercisesCount: number;
  badge?: string;
}

export interface ExerciseItem {
  id: string;
  name: string;
  category: 'RA Management' | 'Nerve Rehab' | 'Mobility' | 'Post-Surgery' | 'Back & Neck';
  repsSets: string;
  duration: string;
  difficulty: 'Beginner' | 'Intermediate' | 'High Caution';
  targetMuscle: string;
  instructions: string[];
  safetyNotes?: string;
  focusArea?: string;
}

export interface WellnessTip {
  id: string;
  title: string;
  category: 'Posture' | 'Hydration' | 'Stretching' | 'Sleep' | 'Ergonomics';
  shortDesc: string;
  fullGuide: string;
  iconName: string;
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  preferredDate: string;
  preferredTime: string;
  treatmentType: string;
  notes: string;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

export interface BookingConfirmation {
  appointmentId: string;
  patientName: string;
  date: string;
  time: string;
  treatmentType: string;
  doctorName: string;
  clinicAddress: string;
}
