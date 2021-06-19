import React,{Component} from'react';
import './timer.css';


export default class Timer extends Component{
    
    constructor(){
        super();
            this.state = {
                    cl:0
                }
            
        this.timefun = this.timefun.bind(this);
    }

    componentDidMount(){
        setInterval(this.timefun,1000)
    }

    timefun(){
        this.setState(
            {
            cl: this.state.cl + 1 
            }      
        )
            
        
    }
    render(){
        return(
            <div className='timers'>
                <h3 id='h3'>{this.state.cl}</h3>
            </div>
        );
    }
}