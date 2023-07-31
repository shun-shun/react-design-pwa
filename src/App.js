import React from 'react';
import './App.css';
import { Router } from './router/Router';
import { UserProviders } from './providers/UserProviders';

function App() {
  

  return (
    <UserProviders>
      <Router />
    </UserProviders>
  );
}

export default App;
