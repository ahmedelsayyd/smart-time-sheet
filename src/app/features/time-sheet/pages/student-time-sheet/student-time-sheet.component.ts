import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TimeSheetTableComponent } from '../../components/time-sheet-table/time-sheet-table.component';
import { TimeSheetFacadeService } from '../../data-access/time-sheet.facad.ts.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-student-time-sheet',
  standalone: true,
  imports: [TimeSheetTableComponent, ReactiveFormsModule, AsyncPipe,NgIf],
  templateUrl: './student-time-sheet.component.html',
  styleUrl: './student-time-sheet.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentTimeSheetComponent {
  studentIdControl = new FormControl('67890');
  schedule$;
  studentName$;

  constructor(private facade: TimeSheetFacadeService) {
    this.schedule$ = this.facade.schedule$;
    this.studentName$ = this.facade.studentName$;
  }

  onSearch() {
    const id = this.studentIdControl.value;
    if (id) {
      this.facade.loadStudentSchedule(id);
    }
  }
}
