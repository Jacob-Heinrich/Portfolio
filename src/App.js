import './App.css';
import Home from './pages/home';
import Resume from './pages/resume';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
