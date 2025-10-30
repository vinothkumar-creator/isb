// API Types
export interface Course {
  id: string;
  title: string;
  instructor: string;
  duration: string;
  level: string;
}

export interface ApiResponse<T> {
  data: T;
  status: number;
  message?: string;
}

