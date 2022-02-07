import React, { Component } from 'react';

class Demo extends Component {

    constructor(props){
        super(props)
        this.state = {
            name: 'Dimple Sharma'
        }
    }

    componentDidMount(){
        this.setState({
            age: 25
        })
    }

    componentWillUnmount(){

    }

    demoFun =  () => {
        console.log('Button clicked')
        this.setState({
            name: 'Abhishek'
        })
        
    }

    updateParent = ()=>{
        this.props.UpdateParent('argument')
    }

    render(){
        console.log('PROPS---------', this.props, this.state.age)
        return (
            <div>
                <p> Parent ----------- { this.props.temp } </p>
                <button onClick={this.updateParent}>Child Click</button>
                Hello this is demo { this.state.name }
                <p>
                    <button onClick={this.demoFun}>
                        Change Name
                    </button>
                </p>
                
            </div>
        )
    }

}

export default Demo