import { Form, Link, redirect, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo, SubmitBtn } from "../components";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const action = async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
        await customFetch.post("/api/v1/auth/login", data);
        toast.success("Login successful!");
        return redirect("/dashboard");
    } catch (error) {
        toast.error(error?.response?.data?.message);
        return error;
    }
};


const Login = () => {
  return (
    <Wrapper>
        <Form className="form" method="post">
            <Logo />
            <h4>Login</h4>
            <FormRow name="email" type="email" />
            <FormRow name="password" type="password" />
            <div className="text-center"><SubmitBtn formBtn labelText="Login" /></div>
        </Form>
    </Wrapper>
);
}
export default Login