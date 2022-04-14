import './App.css';
import { EntryPage } from './pages/entryPage';
import {Layout} from '././layouts/Layout'
import { Dashboard } from './pages/dashboard';
import { AddTicket } from './pages/addTicket';
import { TicketLists } from './pages/TicketLists';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useEffect } from 'react';
import { useSelector } from 'react-redux'; // To access whole global state
import { Page } from './pages/ticket.page';
import { useDispatch } from 'react-redux';
import {loginSuccess} from './slices/loginSlice';
import {userUserProfile} from './pages/userAction';

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

          <PrivateRoute  exact path="/tickets/:tId">
            <Page/>
          </PrivateRoute >

        </Switch>
      </Router>
    </div>
  );
}

const PrivateRoute = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state.login)

  useEffect(() => {
    sessionStorage.getItem("accessJWT") && dispatch(loginSuccess()) && dispatch(userUserProfile());
  }, [dispatch]);

  return (
    <Route
      {...rest}
      render={() =>
        isAuth ? <Layout>{children}</Layout> : <Redirect to="/" />
      }
    />
    );
};