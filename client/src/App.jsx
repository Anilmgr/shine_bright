import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout"
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Testimonial from "./pages/Testimonial";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import BookingForm from "./pages/BookingForm";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element: <Home />,
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
            },
            {
                path: "booking",
                element: <BookingForm/>
            }
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
