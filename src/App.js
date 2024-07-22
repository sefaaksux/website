
import './App.css';
import Navbar from './Components/Navbar';
import Header from './Components/Header';
import Hero from './Components/Hero';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import Contact from './Components/Contact';


function App() {
  
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <Hero/>
        <Projects/>
        {/* <Contact/> */}
        <Footer/>
    </div>

     

  );
}

export default App;
