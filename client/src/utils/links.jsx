import React from "react";
import { FaBook } from "react-icons/fa6";
import { LuBookPlus } from "react-icons/lu";
import { MdPostAdd } from "react-icons/md";
import { IoMdPaper } from "react-icons/io";
import { MdOutlineStarBorder } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa";


const links = [
    { text: "bookings", path: ".", icon: <FaBook /> },
    { text: "add booking", path: "add-booking", icon: <LuBookPlus /> },
    { text: "blogs", path: "blogs", icon: <IoMdPaper /> },
    { text: "add blog", path: "add-blog", icon:<MdPostAdd/> },
    { text: "services", path: "services", icon: <MdOutlineStarBorder /> },
    { text: "add service", path: "add-service", icon: <FaPlus /> },
    { text: "Testimonials", path: "testimonials", icon: <FaUser /> },
    { text: "add testimonial", path: "add-testimonial", icon: <FaUserPlus /> },
];

export default links;
