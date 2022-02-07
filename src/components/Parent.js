import React, { Component } from 'react';

import ChildData from "./ChildData";
import ChildRadio from "./ChildRadio";

class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data:[],
         };
    }
    componentDidMount(){
        this.getPost()
       
    }
    getPost(){
        fetch('http://localhost:3000/data.json',{
            header:{
                'Content-Type':'application/json',
                'Accept':'application/json'
            }
        })
        .then(res => {
            return res.json()
        })
        .then(res => {
            
            console.log(res);
            this.setState({data:res})
            
        })
        .catch(err => {
            console.log('Error ---- ', err)
        })
    }
    sortByName=()=>{
        let obj=[...this.state.data]
        console.log(obj)
        obj=obj.sort((a,b) =>{
            var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names must be equal
  return 0;
        } )
        console.log(obj)
       this.setState({data:obj})
    }
    sortByAge=()=>{
      let obj=[...this.state.data]
     // console.log(obj)
      obj=obj.sort((a,b)=> a.age-b.age)
      console.log(obj)
      this.setState({data:obj})
    }
    render() { 
        return ( 
            <div>
                <ChildRadio sortByName={this.sortByName}
                sortByAge={this.sortByAge}
                />
                <ChildData 
                data={this.state.data}
                />
                
            </div>
         );
    }
}
 
export default Parent;