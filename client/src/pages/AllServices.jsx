import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/BookingsContainer";
import { Link, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { API_URI } from "../../../utils/constants";
import { FaTrashAlt } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

export const loader = async ({ request }) => {
    try {
        const { data } = await customFetch.get("/api/v1/services");
        return { data };
    } catch (error) {
        toast.error(error?.response?.data?.message);
        return error;
    }
};

const AllServices = () => {
    const { data } = useLoaderData();
    const [services, setServices] = useState(data.services);

    if (services.length == 0) {
        return (
            <Wrapper>
                <h2>No services to display...</h2>
            </Wrapper>
        );
    }

    const deleteHandler = async (id) => {
        try {
            await customFetch.delete(`/services/${id}`);
            toast.success("Deleted booking successfully!");
            setServices((prev) =>
                prev.filter((service) => service._id !== id)
            );
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };
    return (
        <Wrapper>
            <h5>
                {services.length} service
                {services.length > 1 && "s"}
            </h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Title</th>
                        <th scope="col">Description</th>
                        <th scope="col">Featured Image</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {services.map((service, idx) => {
                        return (
                            <tr key={idx}>
                                <th scope="row">{idx + 1}</th>
                                <td>{service.title}</td>
                                <td>{service.description.length > 60 ? `${service.description.substring(0, 60)}...` : service.description}</td>
                                <td>{service.featuredImage ? <img src={API_URI+service.featuredImage.split('/').slice(1).join('/')} height="50" /> : '- - -'}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger me-2"
                                        onClick={() => {
                                            if (
                                                window.confirm(
                                                    "Are you sure to delete this record?"
                                                )
                                            ) {
                                                deleteHandler(service._id);
                                            }
                                        }}
                                    >
                                        <FaTrashAlt />
                                    </button>
                                    <Link to={'/dashboard/edit-service/'+service._id} className="m-0 btn btn-sm btn-secondary">
                                    <FaPenToSquare />

                                    </Link>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Wrapper>
    );
};
export default AllServices;
