import { Link } from 'react-router-dom'
import '..//styles/NavBar.css'
const NavBar = () => {
  return (
<nav className="">
    <div className="col col-6">
    <Link to="/" className="navbar-brand">
        <img className='logo' src="./navLogo.png" alt="" />
    </Link>
    </div>
    <div className="col-6 d-flex justify-content-evenly ">
    <Link to="/about" className="nav-link">
        About
    </Link>
    <Link to="/projects" className="nav-link">
        Projects
    </Link>
    <Link to="/contact" className="nav-link">
        Contact
    </Link>
    </div>




</nav>
  )
}

export default NavBar