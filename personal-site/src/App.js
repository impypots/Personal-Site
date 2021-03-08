import Header from './header';
import Projects from './Projects';
import Home from './Home';
import Contact from './Contact'
import './App.css';
import {useState} from 'react';
import { Transition } from 'react-transition-group';

function App() {
  const [display, setDisplay] = useState('home');
  const [inProp, setInProp] = useState(false);

  //Goes to home page!
  function goHome() {
    setDisplay('home');
  }

  //Goes to projects page!
  function goProjects() {
    setDisplay('work');
  }

  //Goes to contact page!
  function goContact() {
    setDisplay('contact');
  }

  return (
    <div className="App">
      <Header display={display} goProjects={goProjects} goHome={goHome} goContact={goContact} />
      <Home display={display === 'home' ? 'block' : 'none'} goProjects={goProjects} goHome={goHome} goContact={goContact} />
      <Projects display={display === 'work' ? 'flex' : 'none'} />
      <Contact display={display === 'contact' ? 'block' : 'none'} />
    </div>
  );
}

export default App;
