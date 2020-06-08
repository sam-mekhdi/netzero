import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ServiceWorker} from './components/service-worker/service-worker.component'

class App extends React.Component {
  constructor() {
    super()
    this.state={points: 0}
  }

  handleUpdate = () => {
    this.setState(prevState => {
      return {points: prevState.points + 1}
   })
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Coints: {this.state.points}
          </p>
        </header>
        <ServiceWorker updateFunc={this.handleUpdate} />
      </div>
    );
  }
}

export default App;
