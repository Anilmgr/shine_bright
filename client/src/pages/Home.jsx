import Footer from "../components/Footer"
import Header from "../components/Header"
import Navbar from "../components/Navbar"
import { FaHeart, FaStar, FaUserCheck } from "react-icons/fa";
import residential from "../assets/images/residential-cleaning.jpg"
import commercial from "../assets/images/commercial-cleaning.jpg"
import deep from "../assets/images/deep-cleaning.jpg"
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header title="Professional Cleaning Services" subTitle="Let us make your space shine bright!" btn={true}/>
      <main>
        <section className="features py-5">
            <div className="container">
                <h2 className="text-center mb-5">Why Choose Shine Bright Cleaning?</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <FaStar className="text-primary-custom fs-1 mb-3" />
                                <h3 className="card-title">Quality Service</h3>
                                <p className="card-text">Our experienced team ensures top-notch cleaning every time.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body text-center">
                            <FaUserCheck className="text-primary-custom fs-1 mb-3"/>
                                <h3 className="card-title">Reliable & Trustworthy</h3>
                                <p className="card-text">Fully insured and background-checked professionals.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body text-center">
                            <FaHeart className="text-primary-custom fs-1 mb-3"/>
                                <h3 className="card-title">Customer Satisfaction</h3>
                                <p className="card-text">We're not happy unless you're 100% satisfied with our work.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="services bg-light py-5">
            <div className="container">
                <h2 className="text-center mb-5">Our Services</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={residential} className="card-img-top" alt="Residential Cleaning" />
                            <div className="card-body">
                                <h3 className="card-title">Residential Cleaning</h3>
                                <p className="card-text">Keep your home spotless with our comprehensive cleaning services.</p>
                                <a href="services.html#residential" className="btn btn-outline-primary-custom">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={commercial} className="card-img-top" alt="Commercial Cleaning" />
                            <div className="card-body">
                                <h3 className="card-title">Commercial Cleaning</h3>
                                <p className="card-text">Maintain a clean and professional environment for your business.</p>
                                <a href="services.html#commercial" className="btn btn-outline-primary-custom">Learn More</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={deep} className="card-img-top" alt="Deep Cleaning" />
                            <div className="card-body">
                                <h3 className="card-title">Deep Cleaning</h3>
                                <p className="card-text">Thorough cleaning for those areas that need extra attention.</p>
                                <a href="services.html#deep" className="btn btn-outline-primary-custom">Learn More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="cta py-5">
            <div className="container text-center">
                <h2 className="mb-4">Ready to experience the Shine Bright difference?</h2>
                <Link to='/booking' className="btn btn-primary-custom  btn-lg">Book Your Cleaning Today</Link>
            </div>
        </section>
    </main>

      <Footer />
    </div>
  )
}
export default Home