import { combineReducers, Reducer } from 'redux';
import { AppState } from "./model";
import EmployeeReducer from "./../employee/empStore/reducer";

// Gets all reducers together into a given structure.
//combineReducers func to combine all app reducers.
export const rootReducer: Reducer<AppState> = combineReducers({
    emp:EmployeeReducer
});
