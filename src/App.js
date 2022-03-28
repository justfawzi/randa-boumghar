import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
