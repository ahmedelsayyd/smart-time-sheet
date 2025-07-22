import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <div class="main-layout">
    <div class="main-layout__header">
      <h1>Student Time Sheet Report</h1>
    </div>
    <div class="main-layout__content">
      <router-outlet></router-outlet>
    </div>
  </div>
  `,
  styles: `
  .main-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  .main-layout__header {
    background-color: #f0f0f0;
    padding: 1rem;
   text-align:center;
  }
  .main-layout__content {
    flex: 1;
  }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainLayoutComponent { }
