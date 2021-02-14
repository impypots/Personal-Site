import Header from './header';
import EntryText from './EntryText';
import Button from './Button';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <EntryText />
      <Button value="Past Projects" color="rgb(187, 59, 81)" />
      <Button value="Contact Me"  color="gray"/>
    </div>
  );
}

export default App;
