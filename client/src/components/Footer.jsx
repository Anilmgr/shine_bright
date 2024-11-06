const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-3">
                    <h5>Shine Bright Cleaning</h5>
                    <p>Professional cleaning services for homes and businesses.</p>
                </div>
                <div className="col-md-4 mb-3">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="index.html" className="text-white">Home</a></li>
                        <li><a href="about.html" className="text-white">About Us</a></li>
                        <li><a href="services.html" className="text-white">Services</a></li>
                        <li><a href="contact.html" className="text-white">Contact</a></li>
                    </ul>
                </div>
                <div className="col-md-4 mb-3">
                    <h5>Contact Us</h5>
                    <address>
                        123 Clean Street<br/>
                        Sparkle City, SC 12345<br/>
                        Phone: (555) 123-4567<br/>
                        Email: info@shinebrightcleaning.com
                    </address>
                </div>
            </div>
            <hr/>
            <div className="text-center">
                <p>&copy; 2024 Shine Bright Cleaning. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}
export default Footer