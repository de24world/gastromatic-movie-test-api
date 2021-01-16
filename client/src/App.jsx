import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Container } from 'semantic-ui-react';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Router>
      <Container>
        <MenuBar />
        <Route exact path="/" comonent={Home} />
        <Route exact path="/login" comonent={Login} />
        <Route exact path="/register" comonent={Register} />
      </Container>
    </Router>
  );
}

export default App;
