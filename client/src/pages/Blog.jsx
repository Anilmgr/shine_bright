import { Header } from "../components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import customFetch from "../utils/customFetch"
import { API_URI } from "../../../utils/constants"
import { useLoaderData } from "react-router-dom"

export const loader = async ({ request }) => {
    try {
        const { data } = await customFetch.get("/blogs");
        return { data };
    } catch (error) {
        toast.error(error?.response?.data?.message);
        return error;
    }
};

const Blog = () => {
    const {data} = useLoaderData();
    const {blogs} = data;  
    console.log(blogs)
  return (
    <>
      <Navbar/>
      <Header title="Blog" subTitle="Hear our latest stories."/>
      <main>
        <section className="testimonials py-5">
          <div className="container">
            <div class="row mb-2">
              {
                blogs.map((blog,idx)=>{
                  return  <div class="col-md-6" key={idx}>
                  <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                      <h5 class="mb-0">{blog.title}</h5>
                      <div class="mb-1 text-muted">Nov 12</div>
                      <p class="card-text mb-auto">{blog.description.length > 80 ? `${blog.description.substring(0, 80)}...` : blog.description}</p>
                      <a href="#" class="stretched-link">Continue reading</a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                    {blog.featuredImage ? <img src={API_URI+blog.featuredImage.split('/').slice(1).join('/')} className="object-fit-cover" height="250" width="200" /> : '- - -'}
                    </div>
                  </div>
                </div>
                })
              }
            </div>
          </div>
        </section>
      </main>
      <Footer/>
    </>
  )
}
export default Blog