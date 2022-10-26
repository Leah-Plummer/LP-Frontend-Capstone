
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const GuestNav = () => {
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
            <Link className="navbar__link" to="/trophies">Trophies</Link>
        </li>
        <li className="navbar__item navbar__login">
            <Link className="navbar__link" to="/auth">Login</Link>
        </li>
    
         {/* {
            
                <li className="navbar__item navbar__login">
                    <Link className="navbar__link" to="" onClick={() => {
                        
                        navigate("/login")
                    }}>Login</Link>
                </li>
                
        }  */}
    </ul>
    )
}