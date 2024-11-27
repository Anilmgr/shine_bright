import { Form, useLoaderData} from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";
import { SERVICE_TYPE } from "../../../utils/constants";


export const loader = async ({ params }) => {
    try {
        const { data } = await customFetch.get(`/testimonials/${params.id}`);
        return data;
    } catch (error) {
        toast.error(error.response.data.msg);
        return redirect("/dashboard/testimonials");
    }
};

export const action = async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.patch(`/testimonials/${params.id}`, data);
        toast.success("Updated testimonial successfully!");
        return { success: true };
    } catch (error) {
        toast.error(error?.response?.data?.message);
        return { success: false, error };
    }
};

const AddTestimonial = () => {
    const testimonial = useLoaderData();
    return (
        <Wrapper>
            <Form method="post" className="form">
                <h4 className="form-title text-center mb-5">Edit Testimonial</h4>
                <div className="col-md-8 mx-auto">
                    <FormRow type="text" name="name" defaultValue={testimonial.name}/>
                    <div className="form-row my-3">
                        <div className="form-label">Feedback</div>
                        <textarea
                            name="feedback"
                            className="form-control"
                            rows="5"
                            id="feedback"
                        >{testimonial.feedback}</textarea>
                    </div>
                    <FormRowSelect
                        name="serviceType"
                        list={Object.values(SERVICE_TYPE)}
                        labelText="Service Type"
                        defaultValue={testimonial.serviceType}
                    />
                    <SubmitBtn formBtn />
                </div>
            </Form>
        </Wrapper>
    );
};
export default AddTestimonial;
