import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { StudentRequest, ClassSchedule } from '../models/time-sheet.models';
import { ITimeSheetDataSource, TimeSheetMockApiService } from './time-sheet.scrvice.ts.service';

export interface HighlightedSchedule extends ClassSchedule {
  isCurrent: boolean;
  isNext: boolean;
}

@Injectable({ providedIn: 'root' })
export class TimeSheetFacadeService {
  private dataSource: ITimeSheetDataSource;
  private scheduleSubject = new BehaviorSubject<HighlightedSchedule[]>([]);
  schedule$ = this.scheduleSubject.asObservable();

  private studentNameSubject = new BehaviorSubject<string>('');
  studentName$ = this.studentNameSubject.asObservable();

  constructor(private mockApi: TimeSheetMockApiService) {
    this.dataSource = mockApi;
  }

  loadStudentSchedule(studentId: string): void {

    const request: StudentRequest = { studentId };
    this.dataSource.getStudentSchedule(request).pipe(
      map((response) => {

        this.studentNameSubject.next(response.studentName);
        return this.highlightSchedule(response.schedule);
      }),
      catchError(() => {
        this.studentNameSubject.next('Unknown');
        this.scheduleSubject.next([]);
        return [];
      })
    ).subscribe((highlighted) => {
      this.scheduleSubject.next(highlighted);
    });
  }

  private highlightSchedule(schedule: ClassSchedule[]): HighlightedSchedule[] {
    const now = new Date();
    const currentDay = now.toLocaleString('en-US', { weekday: 'long' });
    const currentTime = now.getHours() * 60 + now.getMinutes();
    let foundCurrent = false;
    let foundNext = false;
    return schedule.map((cls) => {
      let isCurrent = false;
      let isNext = false;
      if (cls.day === currentDay) {
        const start = this.timeToMinutes(cls.startTime);
        const end = this.timeToMinutes(cls.endTime);
        if (!foundCurrent && currentTime >= start && currentTime <= end) {
          isCurrent = true;
          foundCurrent = true;
        } else if (!foundCurrent && !foundNext && currentTime < start) {
          isNext = true;
          foundNext = true;
        }
      }
      return { ...cls, isCurrent, isNext };
    });
  }

  private timeToMinutes(time: string): number {
    const [h, m] = time.split(':').map(Number);
    return h * 60 + m;
  }
}
