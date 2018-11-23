import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddEmployeeAction, addemployee, addemployees, removeEmployee } from "./empStore/action";
import { dispatch, select } from "@angular-redux/store";
import { EmployeeService } from '../shared/employee.service';
import { Employee } from '../shared/employee.model';
import { NgRedux } from '@angular-redux/store';
import { AppState } from "./../store/model";


declare var M: any;

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService,private ngRedux: NgRedux<AppState>) { }

  ngOnInit() {
    this.resetForm();
    //load data from API on page load.
    this.loadEmployeeListFromAPI();
    setTimeout(data=>{
      this.refreshEmployeeList()
    },1000)
   
    
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.employeeService.selectedEmployee = {
      _id: "",
      name: "",
      position: "",
      office: "",
      salary: null
    }
  }
  
  onSubmit(form: NgForm) {
    if (form.value._id == "") {
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        M.toast({ html: 'Saved successfully', classes: 'rounded' });
        this.ngRedux.dispatch(addemployee(form.value));
          this.refreshEmployeeList()
        this.resetForm(form);
      });
    }
    else {
      this.employeeService.putEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
        M.toast({ html: 'Updated successfully', classes: 'rounded' });
      });
    }
  }

  loadEmployeeListFromAPI(){
    this.employeeService.getEmployeeList().subscribe((res) => {
      let empData = res as Employee[]
      this.ngRedux.dispatch(addemployees(empData));
     });
    
  }

  refreshEmployeeList() {
     this.employeeService.employees = this.ngRedux.getState().emp.employees;
//     console.log(this.employeeService.employees);
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = emp;
  }

  onDelete(_id: string, form: NgForm) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.ngRedux.dispatch(removeEmployee(_id));
        this.refreshEmployeeList();
        this.resetForm(form);
        M.toast({ html: 'Deleted successfully', classes: 'rounded' });
      });
    }
  }

}
