import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { StudentTimeSheetComponent } from './features/time-sheet/pages/student-time-sheet/student-time-sheet.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
       loadChildren:  () => import('../app/features/time-sheet/routs').then()
      },
    ],
  }
];
