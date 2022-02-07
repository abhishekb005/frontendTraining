import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TableChild from './PostTable';

class PostButton extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return ( 
            <div>
                Display Button Here
                
                <Link to={{
                    pathname:"/posts",
            
                }}>Get Posts</Link>
            </div>
         );
    }
}
 
export default PostButton;