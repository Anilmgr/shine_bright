import { Form, useActionData, useLoaderData, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { BOOKING_STATUS, SERVICE_TYPE } from "../../../utils/constants";
import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import day from "dayjs";
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);


export const loader = async ({ params }) => {
  try {
      const { data } = await customFetch.get(`/api/v1/bookings/${params.id}`);
      return data;
  } catch (error) {
      toast.error(error.response.data.msg);
      return redirect("/dashboard");
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
      await customFetch.patch(`/api/v1/bookings/${params.id}`, data);
      toast.success("Updated job successfully!");
      return redirect('/dashboard');
  } catch (error) {
      toast.error(error?.response?.data?.message);
      return error;
  }
};

const EditBooking = () => {
  const booking = useLoaderData();
  const date = day(booking.preferredDate).format("YYYY-MM-DD");

  console.log(
    date
  );
  
    return (
        <Wrapper>
            <section className="booking-form pb-5">
                <h3 className="text-center pb-5">Edit Booking</h3>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <Form
                                id="booking-form"
                                method="post"
                                className="form"
                            >
                                <FormRow type="text" name="name" defaultValue={booking.name}/>
                                <FormRow type="email" name="email" defaultValue={booking.email} />
                                <FormRow type="tel" name="phone" defaultValue={booking.phone}/>
                                <FormRowSelect
                                    name="serviceType"
                                    list={Object.values(SERVICE_TYPE)}
                                    labelText="Service Type"
                                    defaultValue={booking.serviceType}
                                />
                                <FormRow
                                    type="date"
                                    name="preferredDate"
                                    labelText="Preferred Date"
                                    defaultValue={date}
                                />
                                <FormRow
                                    type="time"
                                    name="preferredTime"
                                    labelText="Preferred Time"
                                    defaultValue={booking.preferredTime}
                                />
                                <div className="mb-3">
                                    <label
                                        htmlFor="address"
                                        className="form-label"
                                    >
                                        Address
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="address"
                                        name="address"
                                        rows="3"
                                        required
                                        defaultValue={booking.address}
                                    ></textarea>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="notes"
                                        className="form-label"
                                    >
                                        Special Instructions (Optional)
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="notes"
                                        name="notes"
                                        rows="3"
                                        defaultValue={booking.specialInstructions}
                                    ></textarea>
                                </div>
                                <FormRowSelect
                                    name="bookingStatus"
                                    list={Object.values(BOOKING_STATUS)}
                                    labelText="Booking Status"
                                    defaultValue={booking.bookingStatus}
                                />
                                <SubmitBtn formBtn />
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </Wrapper>
    );
};
export default EditBooking;
