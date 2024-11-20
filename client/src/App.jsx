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
    AllBookings,
    Blog,
    Contact,

    DashboardLayout,
    EditBooking,
    Error,
    Home,
    Login,
    Services,
    Stats,
    Testimonial,
} from "./pages";
import { action as loginAction } from "./pages/Login";

import { action as addBookingAction } from "./pages/AddBooking";
import { action as deleteBookingAction } from "./pages/DeleteBooking";
import { loader as dashboardLoader } from "./pages/DashboardLayout";
import { loader as bookingsLoader } from "./pages/AllBookings";
import { loader as editBookingLoader } from "./pages/EditBooking";
import { action as editBookingAction } from "./pages/EditBooking";
import AddBooking from "./pages/AddBooking";


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
            },
            {
                path: "blogs",
                element: <Blog />,
            },
            {
                path: "testimonials",
                element: <Testimonial />,
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
                        element: <AddBooking />,
                        action: addBookingAction,
                    },
                    // {
                    //     path: "stats",
                    //     element: <Stats />,
                    //     loader: statsLoader,
                    // },
                    {
                        path: "all-bookings",
                        element: <AllBookings />,
                        loader: bookingsLoader,
                    },
                    {
                        path: "edit-booking/:id",
                        element: <EditBooking />,
                        loader: editBookingLoader,
                        action: editBookingAction,
                    },
                    {
                        path: "delete-booking/:id",
                        element: <EditBooking />,
                        action: deleteBookingAction,
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
