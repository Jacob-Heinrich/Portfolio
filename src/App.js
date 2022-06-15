import './App.css';
import Home from './pages/home';
import Summary from './pages/summary';
import NavBar from './components/navbar';

function App() {
  return (
    <>
    <NavBar/>
    <div className="intro">
    <Home />
    </div>
    <div className="summary">
    <Summary />
    </div>
    </>
  );
}

export default App;
