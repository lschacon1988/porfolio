
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './componet/Navbar';
import Banner from './componet/Banner';
import Skill from './componet/Skill';
import Projects from './componet/Projects';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Skill/>
      <Projects/>
    </div>
  );
}

export default App;
