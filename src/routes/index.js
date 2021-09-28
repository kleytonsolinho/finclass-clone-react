import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Expert from '../pages/Expert';
import Error from '../pages/Error';
import Watch from '../pages/Watch';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/expert" component={Expert} />
      <Route path="/watch" component={Watch} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Redirect from="*" to="/404" component={Error} />
    </Switch>
  );
}
