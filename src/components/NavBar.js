import {Link} from 'react-router-dom'
const NavBar = () => {
    return ( 
        <div>
            <ul>
                <Link to='/'><li>Home</li></Link>
                <Link to='/about'><li>About</li></Link>
                <Link to='/posts'><li>Posts</li></Link>
            </ul>
        </div>
     );
}
 
export default NavBar;