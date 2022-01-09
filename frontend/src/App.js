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
          <Route path="/" element={code ? <Forms code={code} /> : <LandingPage />}></Route>
          {/* <Route path="/create" element={<Forms code={code} />}></Route> */}
        </Routes>
    </Router>
  );
}

export default App;
