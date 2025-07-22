export interface StudentRequest {
  studentId: string;
}

export interface ClassSchedule {
  className: string;
  day: string;
  date: string;
  startTime: string;
  endTime: string;
}

export interface StudentScheduleResponse {
  studentId: string;
  studentName: string;
  schedule: ClassSchedule[];
}
