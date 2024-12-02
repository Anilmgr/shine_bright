import Wrapper from "../assets/wrappers/BookingsContainer";
import { useAllBookingsContext } from "../pages/AllBookings";
import Booking from "./Booking";
import PageBtnContainer from "./PageBtnContainer";

const BookingsContainer = () => {
    const { data } = useAllBookingsContext();
    const { bookings, totalBookings, numOfPage, currentPage } = data;

    if (bookings.length == 0) {
        return (
            <Wrapper>
                <h2>No bookings to display...</h2>
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            <h5>
                {totalBookings} booking{bookings.length > 1 && "s"}
            </h5>
            <div className="bookings">
                <div className="row">
                    {bookings.map((booking, idx) => {
                        return (
                                <div className="col-lg-6 col-xl-4" key={idx}>
                                    <Booking key={booking._id} {...booking} />
                                </div>
                        );
                    })}
                </div>
            </div>
            {numOfPage > 1 && <PageBtnContainer />}
        </Wrapper>
    );
};
export default BookingsContainer;
