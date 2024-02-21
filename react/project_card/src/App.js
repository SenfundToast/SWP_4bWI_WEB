import logo from './logo.svg';
import './App.css';
import Person from './components/Person';
import Card from './components/Card';

function App() {
  return (
    <div>
      <h1 className='text-4xl font-bold text-center mt-4 mb-8'>Person Card</h1>
      <Person/>
    </div>

  );
}

export default App;
