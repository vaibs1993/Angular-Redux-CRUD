import { Action} from "redux";
import empConstant from "./constants";
import { Employee } from "../../shared/employee.model";
//action for add employee in store.

export interface AddEmployeesAction extends Action {
    employee: Employee[];
}

// action creator function which return action.
export function addemployees(employee: Employee[]): AddEmployeesAction {
    return {
        type: empConstant.ADD_EMPLOYEES, //type of acion
        employee //payload for action
    };
}

export interface AddEmployeeAction extends Action {
    employee: Employee;
}

// action creator function which return action.
export function addemployee(employee: Employee): AddEmployeeAction {
    return {
        type: empConstant.ADD_EMPLOYEE, //type of acion
        employee: employee //payload for action
    };
}


//action for removing item from store.
export interface RemoveEmployeeAction extends Action {
    _id: string;
}

export function removeEmployee(_id: string): RemoveEmployeeAction {
    return {
        type: empConstant.DELETE_EMPLOYEE,
        _id
    };
}


export type empAction = AddEmployeeAction | RemoveEmployeeAction | AddEmployeesAction

