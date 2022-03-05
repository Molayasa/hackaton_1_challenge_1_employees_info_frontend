import { Component, OnInit } from '@angular/core';
import { CITIES_NAMES } from './cities';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  public cities = CITIES_NAMES;

  constructor() {}

  ngOnInit(): void {}
}
