import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import TablePage from "./components/table/TablePage";

export default (
<Route path="/" component={App}>
        <IndexRoute component={TablePage} />
</Route>
);  
