import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { CITIES_NAMES } from './cities';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss'],
})
export class EmployeeFormComponent implements OnInit {
  public employeeForm!: FormGroup;
  public cities = CITIES_NAMES;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private dialogRef: MatDialogRef<EmployeeFormComponent>
  ) {
    this.employeeForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      middleName: ['', Validators.nullValidator],
      surname: ['', Validators.required],
      secondSurname: ['', Validators.nullValidator],
      birthCity: ['', Validators.required],
      gender: ['', Validators.required],
      birthDay: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  addEmployee() {
    if (this.employeeForm.valid) {
      this.api.postEmployee(this.employeeForm.value).subscribe({
        next: (res) => {
          alert('Employee added successfully');
          this.employeeForm.reset();
          this.dialogRef.close('save');
        },
        error: () => {
          alert('Error while adding the employee');
        },
      });
    }
  }
}
