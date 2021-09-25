import React, { useState, useEffect } from 'react';
import { Router, Link } from "@reach/router"
import WelcomePage from './pages/welcome';
import SelectRoomPage from './pages/selectRoom';
import RoomPage from './pages/room';
import './App.css';


function App() {
  return (
    <Router>
      <WelcomePage path="/" />
      <SelectRoomPage path="/select-room" />
      <RoomPage path="/room/:roomId" />
    </Router>
  );
}

export default App;
