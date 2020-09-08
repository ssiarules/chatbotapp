import React from 'react';
import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'
//import logo from './logo.svg';
import './App.css';

class  App extends React.Component {
  render() {
    return (
      <div className="App">
        <RoomList />
        <MessageList />
        <SendMessageForm />
        <NewRoomForm />
        Johnson Joseph
      
      </div>
    );
  }
}


export App;
