import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import BookingForm, { action as bookingAction } from "./pages/BookingForm";
import {
    AboutUs,
    AddBlog,
    AllBlogs,
    AllBookings,
    AllServices,
    Blog,
    Contact,

    DashboardLayout,
    EditBooking,
    EditTestimonial,
    Error,
    Home,
    Login,
    Services,
    Testimonial,
    EditBlog,
    EditService
} from "./pages";
import { action as loginAction } from "./pages/Login";

import AddBooking, { action as addBookingAction } from "./pages/AddBooking";
import AddService, { action as addServiceAction } from "./pages/AddService";
import AddTestimonial, { action as addTestimonialAction } from "./pages/AddTestimonial";
import { action as editTestimonialAction, loader as editTestimonialLoader } from "./pages/EditTestimonial";
import { action as editServiceAction, loader as editServiceLoader } from "./pages/EditService";
import DeleteBooking, { action as deleteBookingAction } from "./pages/DeleteBooking";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as bookingsLoader } from "./pages/AllBookings";
import AllTestimonial, { loader as testimonialsLoader } from "./pages/AllTestimonial";
import { loader as editBookingLoader, action as editBookingAction } from "./pages/EditBooking";
import { loader as editBlogLoader, action as editBlogAction } from "./pages/EditBlog";
import { loader as servicesLoader } from "./pages/AllServices";
import { action as addBlogAction} from "./pages/AddBlog";
import { loader as blogsLoader } from "./pages/AllBlogs";
import { loader as  homeTestimonialsLoader } from "./pages/Testimonial";
import { loader as  homeServicesLoader } from "./pages/Services";
import { loader as  homeBlogsLoader } from "./pages/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "about-us",
                element: <AboutUs />,
            },
            {
                path: "services",
                element: <Services />,
                loader:homeServicesLoader
            },
            {
                path: "blogs",
                element: <Blog />,
                loader:homeBlogsLoader
            },
            {
                path: "testimonials",
                element: <Testimonial />,
                loader: homeTestimonialsLoader
            },
            {
                path: "booking",
                element: <BookingForm />,
                action: bookingAction,
            },
            {
                path: "contact-us",
                element: <Contact />,
            },
            {
                path: "login",
                element: <Login />,
                action: loginAction,
            },
            {
                path: "dashboard",
                element: <DashboardLayout />,
                loader: dashboardLoader,
                children: [
                    {
                        index: true,
                        element: <AllBookings />,
                        loader: bookingsLoader,
                    },
                    {
                        path: "add-booking",
                        element: <AddBooking />,
                        action: addBookingAction,
                    },
                   
                    {
                        path: "edit-booking/:id",
                        element: <EditBooking />,
                        loader: editBookingLoader,
                        action: editBookingAction,
                    },
                    {
                        path: "delete-booking/:id",
                        element: <DeleteBooking />,
                        action: deleteBookingAction,
                    },

                    {
                        path: "testimonials",
                        element: <AllTestimonial />,
                        loader: testimonialsLoader,
                    },

                    {
                        path: "add-testimonial",
                        element: <AddTestimonial />,
                        action: addTestimonialAction,
                    },
                    {
                        path: "edit-testimonial/:id",
                        element: <EditTestimonial />,
                        loader: editTestimonialLoader,
                        action: editTestimonialAction,
                    },
                    {
                        path: "services",
                        element: <AllServices />,
                        loader: servicesLoader,
                    },
                    {
                        path: "add-service",
                        element: <AddService />,
                        action: addServiceAction,
                    },
                    {
                        path: "edit-service/:id",
                        element: <EditService />,
                        loader: editServiceLoader,
                        action: editServiceAction,
                    },
                    {
                        path: "blogs",
                        element: <AllBlogs />,
                        loader: blogsLoader,
                    },
                    {
                        path: "add-blog",
                        element: <AddBlog />,
                        action: addBlogAction,
                    },
                    {
                        path: "edit-blog/:id",
                        element: <EditBlog />,
                        loader: editBlogLoader,
                        action: editBlogAction,
                    },
                ],
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
