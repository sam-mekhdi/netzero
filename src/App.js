import React from 'react';
import logo from './logo.svg';
import './App.css';
import {ServiceWorker} from './components/service-worker/service-worker.component'
import  {Points} from './components/points.component'

class App extends React.Component {
  constructor() {
    super()
    this.state={points:0}
    }
  
  handleUpdate = () => {
    this.setState(prevState => {
      return {points: prevState.points + 1}
   })
  }

  isReward() {
    if (this.state.points % 4 == 0) {
          return ("You have 4 points! Here's a coffee on us ☕") 
    } else {
          return (4 - (this.state.points % 4)) + " more coints to get a coffee on us ☕";
    }
  }

  render = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />       
          <Points points = {this.state.points} />
        </header>
        <ServiceWorker updateFunc={this.handleUpdate} notificationText = {this.isReward()} />
        {console.log(this.state.points)}
        
      </div>
    );
  }
}

export default App;
