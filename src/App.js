import React from 'react';
import './App.css';
import Routing from './Routing';
import { auth, createUserProfileDocument } from './Firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {
      createUserProfileDocument(user);
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
