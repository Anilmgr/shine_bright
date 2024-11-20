import { Header } from "../components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Contact = () => {
  return (
    <>
      <Navbar/>
      <Header title="Contact Us" subTitle="Get in touch with our friendly team"/> 
      <main>
        <section className="contact-form py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h2>Send Us a Message</h2>
                        <form id="contact-form">
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name="name" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name="email" required/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phone" className="form-label">Phone</label>
                                <input type="tel" className="form-control" id="phone" name="phone"/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" name="message" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary-custom">Send Message</button>
                        </form>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h2 className="mb-3">Contact Information</h2>
                        <ul className="list-unstyled">
                            <li><i className="bi bi-geo-alt-fill me-2"></i>123 Clean Street, Sparkle City, SC 12345</li>
                            <li><i className="bi bi-telephone-fill me-2"></i>(555) 123-4567</li>
                            <li><i className="bi bi-envelope-fill me-2"></i>info@shinebrightcleaning.com</li>
                        </ul>
                        <h3 className="mt-5 mb-3">Business Hours</h3>
                        <ul className="list-unstyled">
                            <li>Monday - Friday: 8:00 AM - 6:00 PM</li>
                            <li>Saturday: 9:00 AM - 4:00 PM</li>
                            <li>Sunday: Closed</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
      <Footer/>
    </>
  )
}
export default Contact