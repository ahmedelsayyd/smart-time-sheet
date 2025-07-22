import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITimeSheetDataSource, StudentRequest, StudentScheduleResponse } from '../models/time-sheet.models';


@Injectable({ providedIn: 'root' })
export class httpTimeSheetService implements ITimeSheetDataSource {
  constructor(private http: HttpClient) {}

  getStudentSchedule(request: StudentRequest): Observable<StudentScheduleResponse> {
    return this.http.get<StudentScheduleResponse>(
      '/student-schedule',
      { params: { studentId: request.studentId } }
    );
  }
}
