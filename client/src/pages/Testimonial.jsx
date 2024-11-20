import { Link } from "react-router-dom"
import { Header } from "../components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

const Testimonial = () => {
  return (
    <>
      <Navbar/>
      <Header title="Customer Testimonials" subTitle="What our clients say about our services"/>
      <main>
        <section className="testimonials py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">"Shine Bright Cleaning has transformed my home! Their attention to detail is impressive, and I always look forward to coming home after they've cleaned."</p>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <h5 className="card-title mb-0">Sarah J.</h5>
                                    <small className="text-muted">Residential Client</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">"I've been using their services for my office for over a year now. Always reliable, thorough, and professional. Highly recommended!"</p>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <h5 className="card-title mb-0">Mark T.</h5>
                                    <small className="text-muted">Commercial Client</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <p className="card-text">"The deep cleaning service was exactly what my home needed. They reached areas I didn't even know needed cleaning! Will definitely use again."</p>
                                <div className="d-flex justify-content-between align-items-center mt-3">
                                    <h5 className="card-title mb-0">Emily R.</h5>
                                    <small className="text-muted">Deep Cleaning Client</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="cta bg-light py-5">
            <div className="container text-center">
                <h2 className="mb-4">Ready to experience our top-notch cleaning services?</h2>
                <Link to="/booking" className="btn btn-primary btn-lg">Book Your Cleaning Today</Link>
            </div>
        </section>
    </main>
      <Footer/>
    </>
  )
}
export default Testimonial