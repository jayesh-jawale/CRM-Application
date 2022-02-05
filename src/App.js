import './App.css';
import { EntryPage } from './pages/entryPage';
import {Layout} from '././layouts/Layout'
import { Dashboard } from './pages/dashboard';
import { AddTicket } from './pages/addTicket';

export default function App() {
  return (
    <div className="App">
      {/* <EntryPage /> */}
      <Layout>
      {/* <Dashboard/> */}
      <AddTicket/>
      </Layout>
    </div>
  );
}