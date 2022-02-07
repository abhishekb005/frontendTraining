import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PostTable extends Component {
    constructor(props) {
        super(props);

        this.state = { posts:[] };
        
    }
    componentDidMount(){
        this.getPost();
    }
    getPost(){
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            return res.json()
        })
        .then(data => {
            //
            
            this.setState({posts:data})
            
        })
        .catch(err => {
            console.log('Error ---- ', err)
        })
    }
    render() { 
        return ( 
            <div>
            Table display Here
        <table>
            <tbody>
        <tr>
          <th>UserId</th>
          <th>id</th>
          <th>title</th>
          <th>body</th>
          <th>url</th>
        </tr>
        {this.state.posts.map((post) => {
          return (
            <tr key={post.id}>
              <td>{post.userID}</td>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td><Link to={`/posts/${post.id}`}>
                  <button>Detail</button>
                  </Link></td>
            </tr>
          )
        })}
        </tbody>
      </table>
            </div>
         );
    }
}
 
export default PostTable;