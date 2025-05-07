export interface Routine {
  id: string;
  title: string;
  description?: string;
  frequency: 'daily' | 'weekly' | 'monthly';
  timeOfDay?: string;
  daysOfWeek?: number[];
  isCompleted: boolean;
  completedDates: Date[];
  createdAt: Date;
  updatedAt: Date;
}

export type RoutineFrequency = 'daily' | 'weekly' | 'monthly'; 