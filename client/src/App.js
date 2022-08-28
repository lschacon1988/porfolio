
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './componet/Navbar';
import Banner from './componet/Banner';
import Skill from './componet/Skill';
import Projects from './componet/Projects';
import { Contact } from './componet/Contact';
import { Footer } from './componet/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skill/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
