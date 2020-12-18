import { Router } from 'react-router-dom';
import './App.css';
import LandingPage from './page/LandingPage';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
<LandingPage />
    </Router>
   
  );
}

export default App;
