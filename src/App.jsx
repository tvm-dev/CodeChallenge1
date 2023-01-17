import Navbar from './components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

import './App.css'
import Footer from './components/Footer/Footer';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}

export default App;
