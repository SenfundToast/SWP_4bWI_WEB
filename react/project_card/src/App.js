import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import Card from './components/Card';

function App() {
  return (
    <div className="border-solid border-2 border-black bg-blue">
      <h1>Person Card</h1>
      <Person/>
    </div>

  );
}

export default App;
