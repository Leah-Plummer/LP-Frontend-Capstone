import { GuestViews } from "../views/GuestViews"
import { MemberViews } from "../views/MemberViews"

export const ApplicationViews = () => {
	


    const localUniUser = localStorage.getItem("uni_user")
    const UniUserObject = JSON.parse(localUniUser)

    if (UniUserObject?.member) {
        //return employee views 
        return <MemberViews /> 
    }
    else {
        //return customer views
        return <GuestViews /> 
    }
   
}

