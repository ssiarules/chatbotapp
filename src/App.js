import React from 'react';
import Dashboard from './Dashboard'
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
//import logo from './logo.svg';
import './App.css';

function App(){
  return (
    <div className="App">
    <Dashboard />
    </div>
  );
}

export default App;
