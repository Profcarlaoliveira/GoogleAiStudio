export interface LessonPlanInput {
  subject: string;
  topic: string;
  gradeLevel: string;
  duration: string;
  pedagogicalApproach: string;
  extras: string;
}

export interface ActivityInput {
  topic: string;
  activityType: 'quiz' | 'roleplay' | 'debate' | 'escaperoom';
  studentCount: string;
  difficulty: 'fácil' | 'médio' | 'difícil';
}

export interface LessonPlanResult {
  title: string;
  objectives: string[];
  materials: string[];
  phases: {
    time: string;
    title: string;
    description: string;
  }[];
  evaluation: string;
}
