import React, { Component } from 'react';

class PostDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
        id:props.match.params.id ,
        post:{
            userID: "",
            id: "",
            title: "",
            body: "",
          }};
        
    }

    componentDidMount(){
        this.getPost();
    }
    getPost(){
        fetch('https://jsonplaceholder.typicode.com/posts/'+this.state.id)
        .then(res => {
            return res.json()
        })
        .then(data => {
            //
            
            this.setState({post:{
                userID: data.userId,
                id: data.id,
                title: data.title,
                body: data.body,
            }})
            
        })
        .catch(err => {
            console.log('Error ---- ', err)
        })
    }
    render() { 
        return (  
        <div>
    <table>
        <tbody>
    <tr>
      <th>UserId</th>
      <th>id</th>
      <th>title</th>
      <th>body</th>
      <th>url</th>
    </tr>
      
        <tr key={this.state.post.id}>
          <td>{this.state.post.userID}</td>
          <td>{this.state.post.id}</td>
          <td>{this.state.post.title}</td>
          <td>{this.state.post.body}</td>
          
        </tr>
      
    
    </tbody>
  </table>

        </div>);
    }
}
 
export default PostDetail;