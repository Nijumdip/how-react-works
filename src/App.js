import './App.css';
import Device from './Components/Device/Device';
import Watch from './Components/Watch/Watch';

function App() {
  return (
    <div className="App" style={{border:'5px solid blue', margin:'20px'}}>
      <Device name='uPhone' price='13000'></Device>
      <Watch></Watch>
    </div>
  );
}

export default App;
