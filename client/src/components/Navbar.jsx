import { Link } from "react-router-dom"
import Logo from "./Logo"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
            <Link className="navbar-brand" to="/">
                <Logo />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="about.html">About Us</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="services.html">Services</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="testimonials.html">Testimonials</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li className="nav-item">
                    <Link to='/booking' className="nav-link btn btn-primary-custom  text-white">Book Now</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
export default Navbar