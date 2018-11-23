import { Employee } from "./../shared/employee.model";
import { EmployeeState} from "./../employee/empStore/reducer";


export interface AppState {
    emp:EmployeeState
}
