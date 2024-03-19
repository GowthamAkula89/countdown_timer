import './App.css';
import Countdown from './Components/CountdownLayout';
function App() {
  return (
    <div className="App">
      <h1 style={{color: 'white'}}>Countdown <span style={{color:"#b54aff"}}>Timer</span></h1>
      <Countdown/>
    </div>
  );
}
export default App;