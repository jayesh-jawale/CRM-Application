import './App.css';
import { EntryPage } from './pages/entryPage';
import {Layout} from '././layouts/Layout'
import { Dashboard } from './pages/dashboard';

export default function App() {
  return (
    <div className="App">
      {/* <EntryPage /> */}
      <Layout>
      <Dashboard/>
      </Layout>
    </div>
  );
}