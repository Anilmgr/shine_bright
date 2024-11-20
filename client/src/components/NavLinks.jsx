import { NavLink } from "react-router-dom";
import links from "../utils/links";
import { useDashboardContext } from "../pages/DashboardLayout";

export default function NavLinks({ isBigSidebar }) {
    const { toggleSidebar, user } = useDashboardContext();
    return (
        <div className="nav-links">
            {links.map((link) => {
                const { text, path, icon } = link;
                const { role } = user;
                if (path === "admin" && role !== "admin") return;
                return (
                    <NavLink
                        to={path}
                        key={text}
                        className="nav-link"
                        onClick={isBigSidebar ? null : toggleSidebar}
                        end
                    >
                        <span className="icon">{icon}</span>
                        {text}
                    </NavLink>
                );
            })}
        </div>
    );
}
