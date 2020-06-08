import React from 'react';
import {Point} from './point.component'

export class Points extends React.Component {
    state = {
      points: this.props.points,
      transactionID: this.props.transactionID
    };
  
    componentWillReceiveProps(nextProps) {
      if (nextProps.points !== this.props.points) {
        this.setState({
            points: nextProps.points
        })
      }
      
    }
    render() 
    {
      return(
        <Point points = {this.state.points}/>
      )
    }
   
      
  

}