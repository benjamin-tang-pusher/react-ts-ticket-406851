import React from 'react';
import './App.css';
import MessageLine from './MessageLine';
import Pusher from 'pusher-js';

Pusher.logToConsole = true;
export let pusher: Pusher | undefined = undefined;

pusher = new Pusher('4c4b13db6875e3554207', {
  cluster: 'eu',
});

function App() {

  return (
    <div className="App">
      <h1>Pusher Channels Effect Hook</h1>
      <MessageLine hello="Welcome!" />
    </div >
  );
}

export default App;
