import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { StudentRequest, StudentScheduleResponse } from '../models/time-sheet.models';

export interface ITimeSheetDataSource {
  getStudentSchedule(request: StudentRequest): Observable<StudentScheduleResponse>;
}

@Injectable({ providedIn: 'root' })
export class TimeSheetMockApiService implements ITimeSheetDataSource {
  constructor(private http: HttpClient) {}

  private readonly mockData: StudentScheduleResponse[] = [
    {
      studentId: '12345',
      studentName: 'Alice Smith',
      schedule: [
        // Monday
        { className: 'Math', day: 'Monday', date: '2024-06-03', startTime: '08:00', endTime: '08:50' },
        { className: 'Physics', day: 'Monday', date: '2024-06-03', startTime: '09:00', endTime: '09:50' },
        { className: 'Chemistry', day: 'Monday', date: '2024-06-03', startTime: '10:00', endTime: '10:50' },
        { className: 'English', day: 'Monday', date: '2024-06-03', startTime: '11:00', endTime: '11:50' },
        { className: 'History', day: 'Monday', date: '2024-06-03', startTime: '12:00', endTime: '12:50' },
        // Tuesday
        { className: 'Biology', day: 'Tuesday', date: '2024-06-04', startTime: '08:00', endTime: '08:50' },
        { className: 'Math', day: 'Tuesday', date: '2024-06-04', startTime: '09:00', endTime: '09:50' },
        { className: 'Geography', day: 'Tuesday', date: '2024-06-04', startTime: '10:00', endTime: '10:50' },
        { className: 'Art', day: 'Tuesday', date: '2024-06-04', startTime: '11:00', endTime: '11:50' },
        { className: 'PE', day: 'Tuesday', date: '2024-06-04', startTime: '12:00', endTime: '12:50' },
        // Wednesday
        { className: 'Math', day: 'Wednesday', date: '2024-06-05', startTime: '08:00', endTime: '08:50' },
        { className: 'Physics', day: 'Wednesday', date: '2024-06-05', startTime: '09:00', endTime: '09:50' },
        { className: 'Chemistry', day: 'Wednesday', date: '2024-06-05', startTime: '10:00', endTime: '10:50' },
        { className: 'English', day: 'Wednesday', date: '2024-06-05', startTime: '11:00', endTime: '11:50' },
        { className: 'History', day: 'Wednesday', date: '2024-06-05', startTime: '12:00', endTime: '12:50' },
        // Thursday
        { className: 'Biology', day: 'Thursday', date: '2024-06-06', startTime: '08:00', endTime: '08:50' },
        { className: 'Math', day: 'Thursday', date: '2024-06-06', startTime: '09:00', endTime: '09:50' },
        { className: 'Geography', day: 'Thursday', date: '2024-06-06', startTime: '10:00', endTime: '10:50' },
        { className: 'Art', day: 'Thursday', date: '2024-06-06', startTime: '11:00', endTime: '11:50' },
        { className: 'PE', day: 'Thursday', date: '2024-06-06', startTime: '12:00', endTime: '12:50' },
        // Friday
        { className: 'Math', day: 'Friday', date: '2024-06-07', startTime: '08:00', endTime: '08:50' },
        { className: 'Physics', day: 'Friday', date: '2024-06-07', startTime: '09:00', endTime: '09:50' },
        { className: 'Chemistry', day: 'Friday', date: '2024-06-07', startTime: '10:00', endTime: '10:50' },
        { className: 'English', day: 'Friday', date: '2024-06-07', startTime: '11:00', endTime: '11:50' },
        { className: 'History', day: 'Friday', date: '2024-06-07', startTime: '12:00', endTime: '12:50' },
      ],
    },
    {
      studentId: '67890',
      studentName: 'Bob Johnson',
      schedule: [
        // Monday
        { className: 'Biology', day: 'Monday', date: '2024-06-03', startTime: '08:00', endTime: '08:50' },
        { className: 'Math', day: 'Monday', date: '2024-06-03', startTime: '09:00', endTime: '09:50' },
        { className: 'Geography', day: 'Monday', date: '2024-06-03', startTime: '10:00', endTime: '10:50' },
        { className: 'Art', day: 'Monday', date: '2024-06-03', startTime: '11:00', endTime: '11:50' },
        { className: 'PE', day: 'Monday', date: '2024-06-03', startTime: '12:00', endTime: '12:50' },
        // Tuesday
        { className: 'Math', day: 'Tuesday', date: '2024-06-04', startTime: '08:00', endTime: '08:50' },
        { className: 'Physics', day: 'Tuesday', date: '2024-06-04', startTime: '09:00', endTime: '09:50' },
        { className: 'Chemistry', day: 'Tuesday', date: '2024-06-04', startTime: '10:00', endTime: '10:50' },
        { className: 'English', day: 'Tuesday', date: '2024-06-04', startTime: '11:00', endTime: '11:50' },
        { className: 'History', day: 'Tuesday', date: '2024-06-04', startTime: '12:00', endTime: '12:50' },
        // Wednesday
        { className: 'Biology', day: 'Wednesday', date: '2024-06-05', startTime: '08:00', endTime: '08:50' },
        { className: 'Math', day: 'Wednesday', date: '2024-06-05', startTime: '09:00', endTime: '09:50' },
        { className: 'Geography', day: 'Wednesday', date: '2024-06-05', startTime: '10:00', endTime: '10:50' },
        { className: 'Art', day: 'Wednesday', date: '2024-06-05', startTime: '11:00', endTime: '11:50' },
        { className: 'PE', day: 'Wednesday', date: '2024-06-05', startTime: '12:00', endTime: '12:50' },
        // Thursday
        { className: 'Math', day: 'Thursday', date: '2024-06-06', startTime: '08:00', endTime: '08:50' },
        { className: 'Physics', day: 'Thursday', date: '2024-06-06', startTime: '09:00', endTime: '09:50' },
        { className: 'Chemistry', day: 'Thursday', date: '2024-06-06', startTime: '10:00', endTime: '10:50' },
        { className: 'English', day: 'Thursday', date: '2024-06-06', startTime: '11:00', endTime: '11:50' },
        { className: 'History', day: 'Thursday', date: '2024-06-06', startTime: '12:00', endTime: '12:50' },
        // Friday
        { className: 'Biology', day: 'Friday', date: '2024-06-07', startTime: '08:00', endTime: '08:50' },
        { className: 'Math', day: 'Friday', date: '2024-06-07', startTime: '09:00', endTime: '09:50' },
        { className: 'Geography', day: 'Friday', date: '2024-06-07', startTime: '10:00', endTime: '10:50' },
        { className: 'Art', day: 'Friday', date: '2024-06-07', startTime: '11:00', endTime: '11:50' },
        { className: 'PE', day: 'Friday', date: '2024-06-07', startTime: '12:00', endTime: '12:50' },
      ],
    },
  ];

  getStudentSchedule(request: StudentRequest): Observable<StudentScheduleResponse> {
    return this.http.get<StudentScheduleResponse>(
      '/student-schedule',
      { params: { studentId: request.studentId } }
    );
  }
}
