import logo from './logo.svg';
import './App.css';
import MLC from './Components/MLC/MLC';
import MAC from './Components/MAC/MAC';
console.log('Bootstrap added');
function App() {
  return (
    <div className="App">
      <MLC></MLC>
      <MAC></MAC>
    </div>
  );
}

export default App;
