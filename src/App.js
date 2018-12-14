import React, { Component } from 'react';
import './App.css';
import Nav from './components/nav/Nav'
import Routes from './routes'

// import Auth from './components/auth/Auth'
// import Dashboard from './components/dashboard/Dashboard'
// import Form from './components/form/Form'
// import Post from './components/post/Post'


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Nav />
          { Routes }
        </nav>
      </div>
    );
  }
}

export default App;
