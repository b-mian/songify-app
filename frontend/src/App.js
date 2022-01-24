import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import LandingPage from './components/LandingPage';
import Forms from './components/Forms';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const code = new URLSearchParams(window.location.search).get('code');

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path={`/?code=${code}`} element={<Forms code={code} />}></Route>
        </Routes>
    </Router>
  );
}

export default App;
