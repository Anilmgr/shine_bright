import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import residential from "../assets/images/residential-cleaning.jpg"
import commercial from "../assets/images/commercial-cleaning.jpg"
import deep from "../assets/images/deep-cleaning.jpg"
import { Header } from "../components"
import { Link } from "react-router-dom"

const Services = () => {
  return (
    <>
      <Navbar/>
      <Header title="Our Services" subTitle="Professional cleaning solutions for every need"/>
      <main>
        <section id="residential" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">Residential Cleaning</h2>
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4">
                        <img src={residential} alt="Residential Cleaning" className="img-fluid rounded"/>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h3>Keep Your Home Spotless</h3>
                        <p>Our residential cleaning services are designed to give you a spotless home without the hassle. We offer:</p>
                        <ul>
                            <li>Regular house cleaning</li>
                            <li>Deep cleaning</li>
                            <li>Move-in/move-out cleaning</li>
                            <li>Spring cleaning</li>
                        </ul>
                        <Link to="/booking" className="btn btn-primary-custom">Book Residential Cleaning</Link>
                    </div>
                </div>
            </div>
        </section>

        <section id="commercial" className="bg-light py-5">
            <div className="container">
                <h2 className="text-center mb-5">Commercial Cleaning</h2>
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4 order-md-2">
                        <img src={commercial} alt="Commercial Cleaning" className="img-fluid rounded"/>
                    </div>
                    <div className="col-md-6 mb-4 order-md-1">
                        <h3>Professional Cleaning for Businesses</h3>
                        <p>Keep your workplace clean and hygienic with our commercial cleaning services:</p>
                        <ul>
                            <li>Office cleaning</li>
                            <li>Retail store cleaning</li>
                            <li>Medical facility cleaning</li>
                            <li>Industrial cleaning</li>
                        </ul>
                        <Link to="/booking" className="btn btn-primary-custom">Book Commercial Cleaning</Link>
                    </div>
                </div>
            </div>
        </section>

        <section id="deep" className="py-5">
            <div className="container">
                <h2 className="text-center mb-5">Deep Cleaning</h2>
                <div className="row align-items-center">
                    <div className="col-md-6 mb-4">
                        <img src={deep} alt="Deep Cleaning" className="img-fluid rounded"/>
                    </div>
                    <div className="col-md-6 mb-4">
                        <h3>Thorough Cleaning for a Fresh Start</h3>
                        <p>Our deep cleaning service goes beyond regular cleaning to tackle those hard-to-reach areas:</p>
                        <ul>
                            <li>Detailed kitchen and bathroom cleaning</li>
                            <li>Baseboards and crown molding</li>
                            <li>Inside cabinets and drawers</li>
                            <li>Window cleaning (interior)</li>
                        </ul>
                        <Link to="/booking" className="btn btn-primary-custom">Book Deep Cleaning</Link>
                    </div>
                </div>
            </div>
        </section>
    </main>
      <Footer/>
    </>
  )
}
export default Services