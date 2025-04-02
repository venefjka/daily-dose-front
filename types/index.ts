export interface User {
  id: string;
  name: string;
  email: string;
  photoUrl?: string;
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  instructions: string;
  totalQuantity: number;
  remainingQuantity: number;
  lowStockThreshold: number;
  iconName?: string;
  iconColor?: string;
  createdAt: number;
  updatedAt: number;
}

export type MealRelation =
  | "before_meal"
  | "after_meal"
  | "with_meal"
  | "no_relation";

export interface MedicationSchedule {
  id: string;
  medicationId: string;
  time: string; // HH:MM format
  frequency: "daily" | "every_other_day" | "specific_days" | "specific_dates";
  days: number[]; // 0-6 (Sunday-Saturday) or 1-7 (Monday-Sunday)
  dates: string[]; // YYYY-MM-DD format for specific dates
  mealRelation: MealRelation;
  startDate: string;
  endDate?: string;
  durationDays?: number;
  createdAt: number;
  updatedAt: number;
}

export interface MedicationIntake {
  id: string;
  scheduleId: string;
  medicationId: string;
  scheduledTime: string; // HH:MM format
  scheduledDate: string; // YYYY-MM-DD format
  status: "taken" | "missed" | "pending";
  takenAt?: number; // Timestamp when medication was taken
  createdAt: number;
}

export interface DailyMedicationWithStatus {
  id: string;
  scheduleId: string;
  medicationId: string;
  name: string;
  dosage: string;
  instructions: string;
  time: string;
  mealRelation: MealRelation;
  status: "taken" | "missed" | "pending";
  takenAt?: number;
  iconName?: string;
  iconColor?: string;
}

export interface DayMedications {
  [date: string]: DailyMedicationWithStatus[];
}

export interface MedicationStats {
  total: number;
  taken: number;
  missed: number;
  adherenceRate: number;
}

export interface NotificationSettings {
  medicationRemindersEnabled: boolean;
  reminderTime: number; // minutes before scheduled time
  lowStockRemindersEnabled: boolean;
}

export interface TimeRange {
  label: string;
  value: "7days" | "30days" | "3months" | "allTime";
}

export interface AdherenceData {
  date: string;
  adherenceRate: number;
}

export interface MedicationAdherenceData {
  medicationId: string;
  medicationName: string;
  adherenceRate: number;
}
