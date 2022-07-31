import './App.css';
import Home from './pages/home';
import Resume from './pages/resume';
import Models from './pages/models';
import Photography from './pages/photography';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/models" element={<Models />} />
        <Route path="/photos" element={<Photography />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
