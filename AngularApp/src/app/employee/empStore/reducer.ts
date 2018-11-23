import {  empAction , AddEmployeeAction,AddEmployeesAction,RemoveEmployeeAction} from "./action";
import empConstant from "./constants"
import { Employee } from "../../shared/employee.model";

export interface EmployeeState {
    employees: Employee[];
}

export default function EmployeeReducer(oldState: EmployeeState = {} as any, action: empAction): EmployeeState {
   console.log(action)
    switch (action.type) {

        case empConstant.ADD_EMPLOYEE : {
            const addEmployee = action as AddEmployeeAction
            const newItem = addEmployee.employee
            const newState: EmployeeState = {
                ...oldState,
                employees: [...oldState.employees, newItem]
            };
            return newState;
        }
        case empConstant.ADD_EMPLOYEES : {
            const addEmployees = action as AddEmployeesAction
            const newItem = addEmployees.employee
            const newState: EmployeeState = {
                ...oldState,
                employees: [...oldState.employees = newItem]
            };
            return newState;
        }
        case empConstant.DELETE_EMPLOYEE : {
            const removeEmployees = action as RemoveEmployeeAction
            const newItem: Employee[] = oldState.employees.filter((item) => item._id !== removeEmployees._id);
            const newState: EmployeeState = {
                ...oldState,
                employees: [...oldState.employees = newItem]
            };
            return newState;
        }
         default: {
            return oldState;
        }
               
    }
   
}