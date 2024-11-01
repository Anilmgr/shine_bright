import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout"
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Testimonial from "./pages/Testimonial";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element: <Landing />,
            },
            {
                path: "about-us",
                element: <AboutUs/>
            },
            {
                path: "services",
                element: <Services/>
            },
            {
                path: "blogs",
                element: <Blog/>
            },
            {
                path: "testimonials",
                element: <Testimonial/>
            }
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
