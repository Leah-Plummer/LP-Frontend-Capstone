import { MemberNav } from "./MemberNav"
import { GuestNav } from "./GuestNav"
import "./NavBar.css"
import { useEffect, useState } from "react"

export const NavBar = () => {

    // let [uniUserObject, setUniUserObject] = useState([])
    let localUniUser = localStorage.getItem("uni_user")
    let uniUserObject = JSON.parse(localUniUser)

    
           

    if (uniUserObject?.member) {
        return <MemberNav /> 
    }
    else {
        //return customer views
        return <GuestNav /> 
    }
    window.location.reload(false);

}

