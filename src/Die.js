import React from 'react'
import './Die.css'
class Die extends React.Component{
    numToString=(a)=>{
        let str="";
        switch(a){
            case 1:
                str="one";
                break;
            case 2:
                str="two";
                break;
            case 3:
                str="three";
                break;
            case 4:
                str="four";
                break;
            case 5:
                str="five";
                break;
            case 6:
                str="six";
                break;
            default:
                break;
        }
        return str;
    }
    render(){
        let str=this.numToString(this.props.num);
        str=`Die fas fa-dice-${str} ${this.props.rolling &&
            "shaking"}`;
        return(
                <i className={str}></i>
        )
    }
}
export default Die;