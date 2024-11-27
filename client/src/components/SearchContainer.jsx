import { Form, Link, useSubmit } from "react-router-dom";
import FormRow from "./FormRow";
import FormRowSelect from "./FormRowSelect";
import { BOOKING_SORT_BY, BOOKING_STATUS, SERVICE_TYPE } from "../../../utils/constants";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import SubmitBtn from "./SubmitBtn";
import { useAllBookingsContext } from "../pages/AllBookings";

const SearchContainer = () => {
    const { searchValues } = useAllBookingsContext();
    const { search, bookingStatus, serviceType, sort, createdAt, preferredDate } = searchValues;
    const submit = useSubmit();
    const debounce = (onChange) => {
        let timeout;
        return (e) => {
            const form = e.currentTarget.form;
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                onChange(form);
            }, 2000);
        };
    };
    return (
        <Wrapper>
            <Form className="form">
                <h4 className="form-title">Search Booking</h4>
                <div className="form-center">
                    <FormRow
                        type="search"
                        name="search"
                        defaultValue={search}
                        onChange={debounce((form) => {
                            submit(form);
                        })}
                    />
                    <FormRowSelect
                        name="bookingStatus"
                        labelText="Booking Status"
                        list={["all", ...Object.values(BOOKING_STATUS)]}
                        defaultValue={bookingStatus}
                        onChange={(e) => {
                            submit(e.currentTarget.form);
                        }}
                    />
                    <FormRowSelect
                        name="serviceType"
                        labelText="Service Type"
                        list={["all", ...Object.values(SERVICE_TYPE)]}
                        defaultValue={serviceType}
                        onChange={(e) => {
                            submit(e.currentTarget.form);
                        }}
                    />
                    <FormRowSelect
                        name="sort"
                        labelText="Sort"
                        list={Object.values(BOOKING_SORT_BY)}
                        onChange={(e) => {
                            submit(e.currentTarget.form);
                        }}
                        defaultValue={sort}
                    />
                    <FormRow
                        type="date"
                        name="createdAt"
                        defaultValue={createdAt}
                        onChange={debounce((form) => {
                            submit(form);
                        })}
                    />
                    <FormRow
                        type="date"
                        name="preferredDate"
                        defaultValue={preferredDate}
                        onChange={debounce((form) => {
                            submit(form);
                        })}
                    />
                    <Link
                        to="/dashboard"
                        className="btn btn-primary-custom form-btn delete-btn"
                    >
                        Reset Search Values
                    </Link>
                    <SubmitBtn formBtn />
                </div>
            </Form>
        </Wrapper>
    );
};
export default SearchContainer;
