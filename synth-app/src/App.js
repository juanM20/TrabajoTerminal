import React, {useState} from 'react';

import './App.css';

import Refexample from './test/Refexample';
import Canvas from './test/Canvas';
import Keyboard from './Keyboard/Keyboard';
import Profile from './test/Profile';
import Login from './test/Login'

import {LoginContext} from './test/Context';

function App() {

  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <h1>Synth App</h1>

      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
        {showProfile ? <Profile /> : <Login/>  }
      </LoginContext.Provider>

      <Refexample></Refexample>
      <Canvas style={{border: "1px solid black"}} width="400" height="250"></Canvas>

  
      <Keyboard></Keyboard>
    </div>
  );
}

export default App;
