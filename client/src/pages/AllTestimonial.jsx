import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/BookingsContainer";
import { Link, redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";

export const loader = async ({ request }) => {
    try {
        const { data } = await customFetch.get("/testimonials");
        return { data };
    } catch (error) {
        toast.error(error?.response?.data?.message);
        return error;
    }
};

const AllTestimonial = () => {
    const { data } = useLoaderData();
    const [testimonials, setTestimonials] = useState(data.testimonials);

    if (testimonials.length == 0) {
        return (
            <Wrapper>
                <h2>No testimonials to display...</h2>
            </Wrapper>
        );
    }

    const deleteHandler = async (id) => {
        try {
            await customFetch.delete(`/testimonials/${id}`);
            toast.success("Deleted booking successfully!");
            setTestimonials((prev) =>
                prev.filter((testimonial) => testimonial._id !== id)
            );
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };
    return (
        <Wrapper>
            <h5>
                {testimonials.length} testimonial
                {testimonials.length > 1 && "s"}
            </h5>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Feedback</th>
                        <th scope="col">Service Type</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {testimonials.map((testimonial, idx) => {
                        return (
                            <tr key={idx}>
                                <th scope="row">{idx + 1}</th>
                                <td>{testimonial.name}</td>
                                <td>{testimonial.feedback.length > 60 ? `${testimonial.feedback.substring(0, 60)}...` : testimonial.feedback}</td>
                                <td>{testimonial.serviceType}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger me-2"
                                        onClick={() => {
                                            if (
                                                window.confirm(
                                                    "Are you sure to delete this record?"
                                                )
                                            ) {
                                                deleteHandler(testimonial._id);
                                            }
                                        }}
                                    >
                                        <FaTrashAlt/>
                                    </button>
                                    <Link to={'/dashboard/edit-testimonial/'+testimonial._id} className="m-0 btn btn-sm btn-secondary">
                                        <FaPenToSquare/>
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
export default AllTestimonial;
