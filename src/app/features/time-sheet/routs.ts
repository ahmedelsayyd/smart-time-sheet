import { Component } from "@angular/core";
import { StudentTimeSheetComponent } from "./pages/student-time-sheet/student-time-sheet.component";
import { Route, Routes } from "@angular/router";

export default <Routes>  [
  {
    path:'',
    component: StudentTimeSheetComponent
  }
]
