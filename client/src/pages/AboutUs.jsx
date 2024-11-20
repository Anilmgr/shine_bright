import { Header } from "../components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import women from "../assets/images/women.jpg"
import men from "../assets/images/men.jpg"
import about from "../assets/images/about-us.jpg"

const AboutUs = () => {
  return (
    <>
      <Navbar/>
      <Header title="About Shine Bright Cleaning" subTitle="Learn about our story and commitment to excellence"/>
      <main>
        <section className="about-us py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <h2 className="mb-4">Our Story</h2>
                        <p>Shine Bright Cleaning was founded in 2010 with a mission to provide top-quality cleaning services to homes and businesses in our community. Over the years, we've grown from a small family-owned business to a trusted name in professional cleaning services.</p>
                        <p>Our commitment to excellence, attention to detail, and customer satisfaction has been the cornerstone of our success.</p>
                    </div>
                    <div className="col-md-6 mb-4">
                        <img src={about} alt="Shine Bright Cleaning Team" className="img-fluid rounded"/>
                    </div>
                </div>
            </div>
        </section>

        <section className="our-values bg-light py-5">
            <div className="container">
                <h2 className="text-center mb-5">Our Values</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <i className="bi bi-trophy text-primary fs-1 mb-3"></i>
                                <h3 className="card-title">Excellence</h3>
                                <p className="card-text">We strive for excellence in every cleaning job we undertake.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <i className="bi bi-people text-primary fs-1 mb-3"></i>
                                <h3 className="card-title">Customer Focus</h3>
                                <p className="card-text">Our customers' satisfaction is our top priority.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <div className="card-body text-center">
                                <i className="bi bi-tree text-primary fs-1 mb-3"></i>
                                <h3 className="card-title">Eco-Friendly</h3>
                                <p className="card-text">We use environmentally friendly cleaning products and methods.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="team py-5">
            <div className="container">
                <h2 className="text-center mb-5">Meet Our Team</h2>
                <div className="row">
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={men}className="card-img-top p-5 pb-0" alt="Team Member 1"/>
                            <div className="card-body text-center">
                                <h3 className="card-title">John Doe</h3>
                                <p className="card-text">Founder & CEO</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={women} className="card-img-top p-5 pb-0" alt="Team Member 2"/>
                            <div className="card-body text-center">
                                <h3 className="card-title">Jane Smith</h3>
                                <p className="card-text">Operations Manager</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 mb-4">
                        <div className="card h-100">
                            <img src={men} className="card-img-top p-5 pb-0" alt="Team Member 3"/>
                            <div className="card-body text-center">
                                <h3 className="card-title">Mike Johnson</h3>
                                <p className="card-text">Lead Cleaning Specialist</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
      <Footer/>
    </>
  )
}
export default AboutUs