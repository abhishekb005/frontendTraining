import React, { useState, useEffect } from 'react';
import Child from './Child';
import convertor from './Currencyconvertor';
import Demo from './Demo';


const Posts = (props) => {

    const [posts, setPosts] = useState([])
    const [temp, setTemp] = useState([10, 1, 5, 4, 6])
    const [name, setName] = useState('')
    const [toggle, setToggle] = useState(false)
    const [tempVar, setTempVar] = useState('Comming from parent')

    useEffect(()=>{
        // main api call
        // ComponentDidMount
        getPosts()
    }, [])

    const getPosts=()=>{
        // axios 
        // axios.get()
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => {
            return res.json()
        })
        .then(data => {
            //
            
            setPosts(data.slice(0,10))
            
        })
        .catch(err => {
            console.log('Error ---- ', err)
        })
    }

    const onSort = () => {
        let tempArray = [...posts]
        tempArray.sort()
        setPosts(tempArray)
        
    }

    const onToggle = () => {
        setToggle(!toggle)
        
    }

    const handleChange = (value) => {
        setName(value)
        
    }

    const UpdateParent  = () => {
        setTempVar('New Value')
    }

    
    return(
        <div>
            <h1>Post List</h1>
            <Demo
                temp={tempVar}
                UpdateParent={UpdateParent}
            />
            

            
            <button onClick={onToggle} style={{color: toggle? 'salmon' : 'brown'}} className="">
                Toggle
            </button>
            <button onClick={onSort} style={{color: toggle? 'salmon' : 'brown'}} className="">
                Sort
            </button>
            {
                name
            }
            {
                
                <Child
                    name = {name}
                    handleChange={handleChange}
                />
            }
            {
                toggle && 
                posts.map(post => (
                    <div key={post.id}>
                        <h5><b>Title : </b> {post.title}</h5>
                        <p>
                            {post.body}
                        </p>
                    </div>
                ))
            }
            
        </div>
        
    )
    

}

export default Posts;