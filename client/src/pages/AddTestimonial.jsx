import { Form, useActionData, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { SERVICE_TYPE } from "../../../utils/constants";
import { useRef } from "react";
import { useEffect } from "react";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.post("/api/v1/testimonials", data);
        toast.success("Saved testimonial successfully!");
        return { success: true };
    } catch (error) {
        toast.error(error?.response?.data?.message);
        return { success: false, error };
    }
};

const AddTestimonial = () => {
    const actionData = useActionData();
    const navigation = useNavigation();
    const formRef = useRef(null);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };
    useEffect(() => {
        if (actionData?.success && navigation.state === "idle") {
            formRef.current.reset();
            scrollToTop();
        }
    }, [actionData, navigation.state]);
    return (
        <Wrapper>
            <Form method="post" className="form" ref={formRef}>
                <h4 className="form-title text-center mb-5">Add Testimonial</h4>
                <div className="col-md-8 mx-auto">
                    <FormRow type="text" name="name" />
                    <div className="form-row my-3">
                        <div className="form-label">Feedback</div>
                        <textarea
                            name="feedback"
                            className="form-control"
                            rows="5"
                            id="feedback"
                        ></textarea>
                    </div>
                    <FormRowSelect
                        name="serviceType"
                        list={Object.values(SERVICE_TYPE)}
                        labelText="Service Type"
                    />
                    <SubmitBtn formBtn />
                </div>
            </Form>
        </Wrapper>
    );
};
export default AddTestimonial;
