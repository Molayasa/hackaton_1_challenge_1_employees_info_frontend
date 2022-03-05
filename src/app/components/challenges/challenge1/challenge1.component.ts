import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

@Component({
  selector: 'app-challenge1',
  templateUrl: './challenge1.component.html',
  styleUrls: ['./challenge1.component.scss'],
})
export class Challenge1Component implements OnInit {
  public employees!: string[];
  constructor(private dialog: MatDialog, private api: ApiService) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  openDialog() {
    this.dialog.open(EmployeeFormComponent, {
      width: '50%',
    });
  }

  getEmployees() {
    this.api.getEmployee().subscribe({
      next: (res) => {
        console.log(res);
        this.employees = res;
      },
      error: (err) => {
        alert('Error while fetching the Records!!');
      },
    });
  }
}
