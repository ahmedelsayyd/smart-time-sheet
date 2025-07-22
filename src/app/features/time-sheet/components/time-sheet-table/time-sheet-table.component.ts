import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { HighlightedSchedule } from '../../data-access/time-sheet.facad';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-time-sheet-table',
  standalone: true,
  imports: [NgClass],
  templateUrl: './time-sheet-table.component.html',
  styleUrls: ['./time-sheet-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TimeSheetTableComponent {
  schedule = input.required<HighlightedSchedule[]>();
  studentName = input.required<string>();

  groupByDay(schedule: HighlightedSchedule[]) {
    const map = new Map<string, { day: string; date: string; classes: HighlightedSchedule[] }>();
    for (const cls of schedule) {
      const key = cls.day + cls.date;
      if (!map.has(key)) {
        map.set(key, { day: cls.day, date: cls.date, classes: [] });
      }
      map.get(key)!.classes.push(cls);
    }
    // Sort by weekday order
    const weekdayOrder = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];
    return Array.from(map.values()).sort((a, b) => {
      return weekdayOrder.indexOf(a.day) - weekdayOrder.indexOf(b.day);
    });
  }

}
