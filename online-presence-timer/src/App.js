import React,{Component} from 'react';
import Timer from './timer';
import './timer.css'
export default class App extends Component{
  

  render(){
    return(
      <div id='container'>
        <p>You are active for|| </p>
        <Timer />
        <p id='span'>Seconds</p>
      </div>
    );
  }
}