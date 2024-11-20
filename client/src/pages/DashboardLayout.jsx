import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import Wrapper from "../assets/wrappers/Dashboard";
import { AdminNavbar, BigSidebar, SmallSidebar } from "../components";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const loader = async () => {
    try {
        const { data } = await customFetch.get("/users/current-user");
        return data;
    } catch (error) {
        return redirect("/");
    }
};

const DashboardContext = createContext();

const DashboardLayout = () => {
    const { user } = useLoaderData();
    const navigate = useNavigate();
    const [showSidebar, setShowSidebar] = useState(false);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    const logoutUser = async() => {
        navigate('/');
        await customFetch.get("/auth/logout");
        toast.success("Logged out successfully!")
    };

    return (
        <DashboardContext.Provider
            value={{
                user,
                showSidebar,
                toggleSidebar,
                logoutUser,
            }}
        >
            <Wrapper>
                <main className="dashboard">
                    <SmallSidebar />
                    <BigSidebar />
                    <div>
                        <AdminNavbar />
                        <div className="dashboard-page">
                            <Outlet context={{ user }} />
                        </div>
                    </div>
                </main>
            </Wrapper>
        </DashboardContext.Provider>
    );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
