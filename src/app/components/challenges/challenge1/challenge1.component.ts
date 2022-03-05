import { Component, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@Component({
  selector: 'app-challenge1',
  templateUrl: './challenge1.component.html',
  styleUrls: ['./challenge1.component.scss'],
})
export class Challenge1Component implements OnInit {
  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(EmployeeFormComponent, {
      width: '50%',
    });
  }

  ngOnInit(): void {}
}
