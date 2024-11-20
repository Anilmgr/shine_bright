import Wrapper from "../assets/wrappers/BookingInfo";

const BookingInfo = ({ icon, text }) => {
    return (
        <Wrapper>
            <span className="job-icon">{icon}</span>
            <span className="job-text">{text}</span>
        </Wrapper>
    );
};
export default BookingInfo;
