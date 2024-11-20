import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { BookingsContainer, SearchContainer } from "../components";
import { createContext, useContext } from "react";
import { useLoaderData } from "react-router-dom";

export const loader = async ({ request }) => {
    const params = Object.fromEntries([
        ...new URL(request.url).searchParams.entries() 
    ])    
    try {
        const { data } = await customFetch.get("/bookings",{params});
        return { data, searchValues:params };
    } catch (error) {
        toast.error(error?.response?.data?.message);
        return error;
    }
};

const AllBookingsContext = createContext();

const AllBookings = () => {
    const { data, searchValues } = useLoaderData();
    return (
        <>
            <AllBookingsContext.Provider value={{ data, searchValues }}>
                <SearchContainer />
                <BookingsContainer />
            </AllBookingsContext.Provider>
        </>
    );
};
export const useAllBookingsContext = () => useContext(AllBookingsContext);
export default AllBookings