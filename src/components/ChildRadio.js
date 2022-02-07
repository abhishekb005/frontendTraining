import React, { Component } from 'react';

class ChildRadio extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    
    render() { 
        return ( 
            <div>
                <br></br>
                <button onClick={this.props.sortByName}>Sort By Name</button>
                <button onClick={this.props.sortByAge}>Sort By Age</button>
                <br></br>
            </div>
         );
    }
}
 
export default ChildRadio;