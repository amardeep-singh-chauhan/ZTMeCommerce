import React from 'react';
import './App.css';
import Routing from './Routing';
import { auth } from './Firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log('User changed', user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Routing currentUser={this.state.currentUser}/>
      </div>
    );
  }
}

export default App;
