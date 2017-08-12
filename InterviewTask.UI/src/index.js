import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import ConfigureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory} from 'react-router';
import Routes from './routes';
import { loadEmployees } from './actions/employeeActions';

require("./styles/styles.css");
require("font-awesome/css/font-awesome.css");
require('../node_modules/toastr/build/toastr.min.css');

const store = ConfigureStore();
store.dispatch(loadEmployees());

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory} routes={Routes} />
    </Provider>,
  document.getElementById('app')
);




/*
ReactDOM.render(
    <EmployeeGridTable dataUrl="http://localhost:58327/api/Employees"/>,
    document.getElementById('app')
); */

