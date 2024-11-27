import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { Header } from "../components"
import { Link, useLoaderData } from "react-router-dom"
import customFetch from "../utils/customFetch"
import { API_URI } from "../../../utils/constants"

export const loader = async ({ request }) => {
    try {
        const { data } = await customFetch.get("/services");
        return { data };
    } catch (error) {
        toast.error(error?.response?.data?.message);
        return error;
    }
};

const Services = () => {
    const {data} = useLoaderData();
    const {services} = data;    
  return (
    <>
      <Navbar/>
      <Header title="Our Services" subTitle="Professional cleaning solutions for every need"/>
      <main>
        {
            services.map((service,idx)=>{
                return <section id="residential" className="py-5" key={idx}>
                <div className="container">
                    <h2 className="text-center mb-5">{service.title}</h2>
                    <div className="row align-items-center">
                        <div className={"col-md-6 mb-4 "+ (idx%2==0?"order-md-1" : "order-md-2")}>
                        {service.featuredImage ? <img src={API_URI+service.featuredImage.split('/').slice(1).join('/')} className="img-fluid rounded" /> : '- - -'}

                        </div>
                        <div className={"col-md-6 mb-4 " + (idx%2==0?"order-md-2" : "order-md-1")}>
                            <p>{service.description}</p>
                            <Link to="/booking" className="btn btn-primary-custom">Book {service.title}</Link>
                        </div>
                    </div>
                </div>
            </section>
            })
        }
    </main>
      <Footer/>
    </>
  )
}
export default Services