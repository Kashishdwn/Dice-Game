import React from 'react'
import './Rolldice.css'
import Die from './Die';
class Rolldice extends React.Component{
    constructor(props){
        super(props);
        this.state={die1:1,die2:6,rolling:false};
    }
    roll=()=>{
        const randomdie1=Math.floor(Math.random()*6)+1;
        const randomdie2=Math.floor(Math.random()*6)+1;
        this.setState({die1:randomdie1,die2:randomdie2,rolling:true});
        setTimeout(() => {
            this.setState({ rolling: false });
        }, 1000);
    }
    render(){
        return(
            <div className='Rolldice'>
            <div className='Rolldice-container'>
                <Die num={this.state.die1} rolling={this.state.rolling} />
                <Die num={this.state.die2} rolling={this.state.rolling} />
            </div>
            {this.state.die1===this.state.die2
            ?
            <h1 className="Rolldice-Win">You Win!</h1>
            :
            <button onClick={this.roll} disabled={this.state.rolling} >
                {this.state.rolling ? "Rolling..." : "Roll Dice!"}
            </button>}
        </div>
        )
    }
}
export default Rolldice;