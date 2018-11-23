import { NgModule } from '@angular/core';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { createLogger } from 'redux-logger';
import { AppState } from './model';
import {rootReducer} from './reducer';

//Initial app state which is type of AppState(whole application state objject).
// initially we set some todo items in it . and set creadentials obj to null.
const initialState: AppState = {
   emp:{
    employees:[
    
     ]
   }
};

@NgModule({
  imports: [NgReduxModule]
})
//module for configuration of store in app.
//we use here configureStore() n pass rootreducer,initail state,logger (if req)
export class StoreModule {
  constructor(public store: NgRedux<AppState>, devTools: DevToolsExtension) {
    store.configureStore(
      rootReducer,
      initialState,
      [ createLogger()],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  }
}
