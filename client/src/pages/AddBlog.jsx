import { Form, useOutletContext } from "react-router-dom";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { FormRow, SubmitBtn } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get("featuredImage");
    if (file && file.size > 500000) {
        toast.error("Image size too large!");
        return null;
    }
    try {
        await customFetch.post("/blogs", formData);
        toast.success("Saved blog successfully!");
        return null;
    } catch (error) {
        toast.error(error?.response?.data?.message);
        return error;
    }
};

const AddBlog = () => {
    const { user } = useOutletContext();
    const { name, lastName, email, location } = user;

    return (
        <Wrapper>
            <Form method="post" className="form" encType="multipart/form-data">
                <h4 className="form-title text-center">Add Blog</h4>
                <div className="col-md-8 mx-auto">
                    <div className="form-row mb-4">
                        <FormRow type="text" name="title" />
                    </div>
                    <div className="form-row mb-4">
                        <label className="form-label" htmlFor="description">
                            Description
                        </label>
                        <textarea
                            name="description"
                            className="form-control"
                            rows="8"
                        ></textarea>
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
                    <SubmitBtn formBtn />
                </div>
            </Form>
        </Wrapper>
    );
};
export default AddBlog;
