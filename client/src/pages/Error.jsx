import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPage";
import { NotFoundImg } from "../components";

const Error = () => {
    const error = useRouteError();
    if (error.status === 404) {
        return (
            <Wrapper>
                <div>
                    <NotFoundImg/>
                    <h3>Something went wrong</h3>
                    <p>We can't find the page you are looking for!</p>
                    <Link to='/dashboard'>back home</Link>
                </div>
            </Wrapper>
        );
    }
    
};
export default Error;
