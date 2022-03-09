import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-challenge1',
  templateUrl: './challenge1.component.html',
  styleUrls: ['./challenge1.component.scss'],
})
export class Challenge1Component implements OnInit {
  public displayedColumns: string[] = [
    'id',
    'firstName',
    'middleName',
    'surname',
    'secondSurname',
    'birthCity',
    'gender',
    'birthDay',
  ];
  public dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
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
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err) => {
        alert('Error while fetching employees!!');
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
