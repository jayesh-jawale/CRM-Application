import './App.css';
import { EntryPage } from './pages/entryPage';
import {Layout} from '././layouts/Layout'
import { Dashboard } from './pages/dashboard';
import { AddTicket } from './pages/addTicket';
import { TicketLists } from './pages/TicketLists';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <EntryPage/>
          </Route>

          <PrivateRoute  exact path="/dashboard">
            <Dashboard/>
          </PrivateRoute >

          <PrivateRoute  exact path="/add-ticket">
            <AddTicket/>
          </PrivateRoute >

          <PrivateRoute  exact path="/tickets">
            <TicketLists/>
          </PrivateRoute >

        </Switch>
      </Router>
    </div>
  );
}

const isAuth = true;
const PrivateRoute = ({ children, ...rest }) => {
  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <Layout>{children}</Layout> : <Redirect to="/" />
      }
    />
    );
};