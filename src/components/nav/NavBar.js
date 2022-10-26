import { MemberNav } from "./MemberNav"
import { GuestNav } from "./GuestNav"
import "./NavBar.css"

export const NavBar = () => {

    const localUniUser = localStorage.getItem("uni_user")
    const uniUserObject = JSON.parse(localUniUser)

    if (uniUserObject?.member) {
        
        return <MemberNav /> 
    }
    else {
        //return customer views
        return <GuestNav /> 
    }
}

