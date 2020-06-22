import { createStore, combineReducers } from "redux";
import serviceListReducer from '../reducers/serviceList';
import serviceCrudReducer from '../reducers/serviceCrud';

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceCrud: serviceCrudReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
