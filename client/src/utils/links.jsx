import React from "react";
import { FaWpforms } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdQueryStats } from "react-icons/md";

const links = [
    { text: "add booking", path: ".", icon: <FaWpforms /> },
    { text: "all bookings", path: "all-bookings", icon: <MdQueryStats /> },
    { text: "stats", path: "stats", icon: <IoBarChartSharp /> },
    { text: "profile", path: "profile", icon: <ImProfile /> },
];

export default links;
