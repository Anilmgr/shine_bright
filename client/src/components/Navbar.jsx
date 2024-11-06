import Logo from "./Logo"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <div className="container">
            <a className="navbar-brand" href="index.html">
                <Logo />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" href="index.html">Home</a>
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
                        <a className="nav-link btn btn-primary-custom  text-white" href="booking.html">Book Now</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
export default Navbar