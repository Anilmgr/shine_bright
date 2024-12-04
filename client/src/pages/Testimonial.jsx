import { Link, useLoaderData } from "react-router-dom"
import { Header } from "../components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import customFetch from "../utils/customFetch"

export const loader = async ({ request }) => {
    try {
        const { data } = await customFetch.get("/api/v1/testimonials");
        return { data };
    } catch (error) {
        toast.error(error?.response?.data?.message);
        return error;
    }
};

const Testimonial = () => {
    const {data} = useLoaderData();
    const {testimonials} = data;
    
  return (
    <>
      <Navbar/>
      <Header title="Customer Testimonials" subTitle="What our clients say about our services"/>
      <main>
        <section className="testimonials py-5">
            <div className="container">
                <div className="row">

                    {
                        testimonials.map((testimonial,idx)=>{
                            return <div className="col-md-4 mb-4" key={idx}>
                            <div className="card h-100">
                                <div className="card-body">
                                    <p className="card-text">"{testimonial.feedback}"</p>
                                    <div className="d-flex justify-content-between align-items-center mt-3">
                                        <h5 className="card-title mb-0">{testimonial.name}</h5>
                                        <small className="text-muted text-capitalize">{testimonial.serviceType} Cleaning Client</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        })
                    }
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