import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ITimeSheetDataSource, StudentRequest, StudentScheduleResponse } from '../models/time-sheet.models';


@Injectable({ providedIn: 'root' })
export class MockTimeSheetService implements ITimeSheetDataSource {
  constructor(private http: HttpClient) {}

  getStudentSchedule(request: StudentRequest): Observable<StudentScheduleResponse> {
    return this.http.get<StudentScheduleResponse>(
      '/time-sheet-data.json',
      { params: { studentId: request.studentId } }
    );
  }
}
