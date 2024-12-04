import { Form, useActionData, useNavigation } from "react-router-dom";
import { SERVICE_TYPE } from "../../../utils/constants";
import {Footer, FormRow, FormRowSelect, Header, Navbar, SubmitBtn} from "../components";
import { toast } from "react-toastify";
import { useEffect, useRef } from "react";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.post("/api/v1/bookings", data);
        toast.success("Booking made successfully!");
        return { success: true };
    } catch (error) {
        toast.error(error?.response?.data?.message);
        return { success: false, error };
    }
};

const BookingForm = () => {
    const actionData = useActionData();
    const navigation = useNavigation();
    const formRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    useEffect(() => {
      if (actionData?.success && navigation.state === 'idle') {
        formRef.current.reset();
        scrollToTop();
      }
    }, [actionData, navigation.state]);
  return (
    <>
        <Navbar/>
        <Header title="Book a Cleaning" subTitle="Schedule your cleaning service today"/>
        <main>
        <section className="booking-form py-5">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <Form id="booking-form" method="post" className="form" ref={formRef}>
                            <FormRow type="text" name="name"/>
                            <FormRow type="email" name="email"/>
                            <FormRow type="tel" name="phone"/>
                                <FormRowSelect name="serviceType" list={Object.values(SERVICE_TYPE)} labelText="Service Type"/>
                                <FormRow type="date" name="preferredDate" labelText="Preferred Date"/>
                                <FormRow type="time" name="preferredTime" labelText="Preferred Time"/>
                                <div className="mb-3">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <textarea className="form-control" id="address" name="address" rows="3" required></textarea>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="notes" className="form-label">Special Instructions (Optional)</label>
                                    <textarea className="form-control" id="notes" name="notes" rows="3"></textarea>
                                </div>
                                <SubmitBtn formBtn />
                            </Form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}
export default BookingForm