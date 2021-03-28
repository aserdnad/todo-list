import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="nav">
            <nav className="nav-bar">
                <h1 className="h1-nav">To-Do</h1>
                <ul className="ul-nav">
                    <li className="li-nav"> <Link to="/">Home</Link> </li>
                    <li className="li-nav"> <Link to="/newtodo">New To-do</Link> </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;