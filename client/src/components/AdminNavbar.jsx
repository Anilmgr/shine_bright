import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";
import LogoutContainer from "./LogoutContainer";
import { useDashboardContext } from "../pages/DashboardLayout";

const AdminNavbar = () => {
    const { toggleSidebar } = useDashboardContext();
    return (
        <Wrapper>
            <div className="nav-center">
                <button
                    type="button"
                    className="toggle-btn"
                    onClick={toggleSidebar}
                >
                    <FaAlignLeft />
                </button>
                <div>
                    <Logo />
                    <h4 className="logo-text">Dashboard</h4>
                </div>
                <div className="btn-container">
                    <LogoutContainer />
                </div>
            </div>
        </Wrapper>
    );
};
export default AdminNavbar;
