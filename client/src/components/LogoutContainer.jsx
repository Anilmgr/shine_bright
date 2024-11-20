import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { FaCaretDown, FaUserCircle } from "react-icons/fa";

export default function LogoutContainer() {
    const [showLogout, setShowLogout] = useState(false);
    const { user, logoutUser } = useDashboardContext();

    return (
        <Wrapper>
            <button
                type="button"
                className="btn logout-btn"
                onClick={() => setShowLogout(!showLogout)}
            >
                {user.avatar ? (
                    <img src={user.avatar} alt="avatar" className="img" />
                ) : (
                    <FaUserCircle />
                )}
                {user?.name}
                <FaCaretDown />
            </button>
            <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
                <button
                    type="button"
                    className="dropdown-btn"
                    onClick={logoutUser}
                >
                    logout
                </button>
            </div>
        </Wrapper>
    );
}
