import React, { Component } from 'react';

class Currencyconvertor extends Component {
    constructor(props) {
        super(props);
    
    this.state = { 
        currency:[{id:1,name:"INR",Rate:74.5},{id:3,name:"Dollar",Rate:1},{id:2,name:"Euro",Rate:0.879}],
        fromAmt:0,
        toAmt:0,
        fromCurrency:{id:1,name:"INR",Rate:74.5},
        toCurrency:{id:1,name:"INR",Rate:74.5}
     };
    }
     onSelectHandle1=(event)=>{
        
        const target=event.target;
        const value=target.value;
        const name=target.name;
if (target.type!=="text") {
    this.setState({
        [name]:this.state.currency.find(curr => curr.name===value)
        
    });
}else{
    this.setState({
        [name]:value,
        toAmt:(this.state.fromAmt/this.state.fromCurrency.Rate)*this.state.toCurrency.Rate
    });
}
     }
     onSelectHandle2=(event)=>{
        console.log(event.target.value);
        this.setState({
            toAmt:50
            
        });
             }
    render() { 
        return ( 
            <div>
                <p>Convertor ...</p>
                {this.state.currency.map(ele => console.log(ele.Rate))}
                <select onChange={this.onSelectHandle1} value={this.state.fromCurrency.name} key="currencySelector1" name="fromCurrency">
                    {this.state.currency.map((currency)=> {return <option key={currency.id} >{currency.name}</option>;})}
                </select>
                <input name="fromAmt" type="text" value={this.state.fromAmt} onChange={this.onSelectHandle1}/>
                 <br></br>
                 <select onChange={this.onSelectHandle1} key="currencySelector2" name="toCurrency">
                    {this.state.currency.map((currency)=> {return <option key={currency.id}>{currency.name}</option>;})}
                </select>
                <p>{this.state.toAmt}</p>
            </div>
         );
    }
}
 
export default Currencyconvertor;