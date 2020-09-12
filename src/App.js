import React from 'react';
import Dashboard from './Dashboard'
import './App.css';
import Store from './Store'

//import MessageList from './components/MessageList'
//import SendMessageForm from './components/SendMessageForm'
//import RoomList from './components/RoomList'
//import NewRoomForm from './components/NewRoomForm'
//import logo from './logo.svg';

function App(){
  return (
    <div className="App">
    <Store>
      <Dashboard />
    </Store>
    </div>
  );
}

export default App;
