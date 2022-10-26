import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const MemberNav = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/home">Home</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/experiences">Experiences</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/trips">Book a Trip</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/trips/mytrips">My Trips</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/trophies">Trophies</Link>
            </li>
            
            {
                localStorage.getItem("uni_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("uni_user")
                            navigate("/", {replace: false})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}