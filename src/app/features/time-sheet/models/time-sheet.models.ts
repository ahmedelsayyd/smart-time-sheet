import { Observable } from "rxjs";

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

export interface ITimeSheetDataSource {
  getStudentSchedule(request: StudentRequest): Observable<StudentScheduleResponse>;
}
