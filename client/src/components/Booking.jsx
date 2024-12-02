import Wrapper from "../assets/wrappers/Booking";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
import BookingInfo from "./BookingInfo";
import { FaBriefcase, FaCalendarAlt, FaClock, FaLocationArrow, FaQuestion } from "react-icons/fa";
import { Form, Link } from "react-router-dom";
day.extend(advancedFormat);

const Booking = ({
    _id,
    name,
    phone,
    serviceType,
    preferredDate,
    preferredTime,
    address,
    specialInstructions,
    bookingStatus,
    statusUpdatedAt,
    createdAt
}) => {
    const date = day(preferredDate).format("MMM Do, YYYY");
    return (
        <Wrapper className="mb-4">
            <header>
                <div className="main-icon">{name.charAt(0)}</div>
                <div className="info">
                    <h5>{name}</h5>
                    <p>{phone}</p>
                </div>
            </header>
            <div className="content">
                <div className="content-center">
                    <BookingInfo icon={<FaLocationArrow />} text={address} />
                    <BookingInfo icon={<FaCalendarAlt />} text={date} />
                    <BookingInfo icon={<FaClock />} text={preferredTime} />
                    <BookingInfo icon={<FaQuestion />} text={specialInstructions || "--"} />
                    <BookingInfo icon={<FaBriefcase />} text={serviceType} />
                    <div className={`status ${bookingStatus}`}>{bookingStatus}</div>
                </div>

                <footer className="actions p-3">
                    <Link className="btn edit-btn btn-secondary mt-0" to={`./edit-booking/${_id}`}>Edit</Link>
                    <Form method="post" action={`delete-booking/${_id}`} onSubmit={(e) => {
                                            if (
                                                window.confirm(
                                                    "Are you sure to delete this record?"
                                                )
                                            ) {
                                                return true
                                            } else {e.preventDefault()}
                                        }}>
                        <button type="submit" className="btn btn-danger delete-btn">
                            Delete
                        </button>
                    </Form>
                </footer>
            </div>
        </Wrapper>
    );
};
export default Booking;
