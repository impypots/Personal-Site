import Header from './header';
import EntryText from './EntryText';
import Button from './Button';
import Projects from './Projects';
import './App.css';
import {useState} from 'react';

function App() {
  const [display, setDisplay] = useState(true);

  function goProjects() {
    alert("Something happened...")
  }

  return (
    <div className="App">
      <Header />
      <EntryText />
      <Button value="Past Projects" color="rgb(187, 59, 81)" onClick={goProjects} />
      <Button value="Contact Me"  color="gray"/>
      <Projects />
    </div>
  );
}

export default App;
