const Navbar = () => {
    return ( 
        <div className="nav">
            <nav className="nav-bar">
                <h1 className="h1-nav">To-Do</h1>
                <ul className="ul-nav">
                    <li className="li-nav"> <a href="/">Home</a> </li>
                    <li className="li-nav"> <a href="/create">New To-do</a> </li>
                </ul>
            </nav>
        </div>
     );
}
 
export default Navbar;