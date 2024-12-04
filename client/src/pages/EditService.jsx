import { Form, useLoaderData, useOutletContext } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FormRow, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";


export const loader = async ({ params }) => {
    try {
        const { data } = await customFetch.get(`/services/${params.id}`);
        return data;
    } catch (error) {
        toast.error(error.response.data.msg);
        return redirect("/dashboard/services");
    }
};    
export const action = async ({request}) => {
    const formData = await request.formData();
    const file = formData.get('featuredImage');
    if(file && file.size > 500000){
      toast.error('Image size too large!')
      return null
    }
    try {
        await customFetch.get("/api/v1/services", formData);
        toast.success("Saved service successfully!");
        return null;
    } catch (error) {
        toast.error(error?.response?.data?.message);
        return error;
    }
};

const EditService = () => {
    const service = useLoaderData();


    return (
        <Wrapper>
            <Form method="post" className="form" encType="multipart/form-data">
                <h4 className="form-title text-center">Edit Service</h4>
                <div className="col-md-8 mx-auto">
                    <div className="form-row mb-3">
                    <FormRow type="text" name="title"  defaultValue={service.title}/>
                    </div>
                    <div className="form-row mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                    <textarea className="form-control" name="description" id="description" rows="5">{service.description}</textarea>
                    </div>
                    <div className="form-row mb-4">
                        <label htmlFor="featuredImage" className="form-label">
                            Select an image file (max 500KB)
                        </label>
                        <input
                            type="file"
                            name="featuredImage"
                            id="featuredImage"
                            className="form-control"
                            accept="image/*"
                        />
                    </div>
                    <SubmitBtn formBtn/>
                </div>
            </Form>
        </Wrapper>
    );
};
export default EditService;
