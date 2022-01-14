import './App.css';

import Refexample from './test/Refexample';
import Canvas from './test/Canvas';

function App() {
  return (
    <div className="App">
      <h1>Synth App</h1>
      <Refexample></Refexample>
      <Canvas border={"1px solid black"}></Canvas>
    </div>
  );
}

export default App;
