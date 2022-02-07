import React, { Component } from 'react';

class ChildData extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() { 
        return ( 

            <div style={{ textAlign: "center" }}>
                
                <table >
            <tbody>
        <tr >
          <th>Name</th>
          <th >Age</th>
        </tr>
        {this.props.data.map((post) => {
          return (
            <tr key={post.name+post.age}>
              <td>{post.age}</td>
              <td>{post.name}</td>
              
            </tr>
          )
        })}
        </tbody>
      </table>
            </div>
         );
    }
}
 
export default ChildData;