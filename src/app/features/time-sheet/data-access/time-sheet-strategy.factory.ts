import { Injectable } from "@angular/core";
import { httpTimeSheetService } from "./http-time-sheet.service";
import { MockTimeSheetService } from "./mock-time-sheet.service";
import { ITimeSheetDataSource } from "../models/time-sheet.models";

@Injectable({
  providedIn: 'root'
})
export class TimeSheetStrategyFactory {
  constructor(
    private httpStrategy: httpTimeSheetService,
    private mockStrategy: MockTimeSheetService
  ) {}

  getStrategy(type: 'http' | 'mock'): ITimeSheetDataSource {
    switch (type) {
      case 'http':
        return this.httpStrategy;
      case 'mock':
        return this.mockStrategy;
      default:
        return this.httpStrategy;
    }
  }
}
