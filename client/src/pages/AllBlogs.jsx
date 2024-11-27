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
        const { data } = await customFetch.get("/blogs");
        return { data };
    } catch (error) {
        toast.error(error?.response?.data?.message);
        return error;
    }
};

const AllBlogs = () => {
    const { data } = useLoaderData();
    const [blogs, setBlogs] = useState(data.blogs);

    const deleteHandler = async (id) => {
        try {
            await customFetch.delete(`/blogs/${id}`);
            toast.success("Deleted booking successfully!");
            setBlogs((prev) =>
                prev.filter((blog) => blog._id !== id)
            );
        } catch (error) {
            toast.error(error?.response?.data?.message);
        }
    };

    if (blogs.length == 0) {
        return (
            <Wrapper>
                <h2>No blogs to display...</h2>
            </Wrapper>
        );
    }
    return (
        <Wrapper>
            <h5>
                {blogs.length} blog
                {blogs.length > 1 && "s"}
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
                    {blogs.map((blog, idx) => {
                        return (
                            <tr key={idx}>
                                <th scope="row">{idx + 1}</th>
                                <td>{blog.title}</td>
                                <td>{blog.description.length > 40 ? `${blog.description.substring(0, 40)}...` : blog.description}</td>
                                <td>{blog.featuredImage ? <img src={API_URI+blog.featuredImage.split('/').slice(1).join('/')} height="50" /> : '- - -'}</td>
                                <td>
                                    <button
                                        className="btn btn-sm btn-danger me-2"
                                        onClick={() => {
                                            if (
                                                window.confirm(
                                                    "Are you sure to delete this record?"
                                                )
                                            ) {
                                                deleteHandler(blog._id);
                                            }
                                        }}
                                    >
                                        <FaTrashAlt />
                                    </button>
                                    <Link to={'/dashboard/edit-blog/'+blog._id} className="m-0 btn btn-sm btn-secondary">
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
export default AllBlogs;
