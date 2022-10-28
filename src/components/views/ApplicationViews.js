import { GuestViews } from "./GuestViews"
import { MemberViews } from "./MemberViews"
//import { Authorized } from "./Authorized"
//import { useState, useEffect } from "react";


export const ApplicationViews = () => {
//      const [users, setUsers] = useState([])

//      const [uniUserObject, setUniUserObject] = useState([])
   
   
//     useEffect(
//         () => {
//             fetch("http://localhost:8088/users")
//                 .then(res => res.json())
//                 .then(
//                     fetchedUsers => {
//                         setUsers(fetchedUsers)
//                     }
//                 )
//         },
//         []
//     )

//         let localUniUser = "" 
//      useEffect(
//     () => {
//         localUniUser = users.filter(user => {

//             return user.email.toLowerCase().startsWith(searchTermState.toLowerCase())
//     })
//             setUniUserObject(localUniUser)
//     },
//     [searchTermState]
// )
    let localUniUser = localStorage.getItem("uni_user")
    let uniUserObject = JSON.parse(localUniUser) 

	const Refresh = () => {
        window.location.reload(uniUserObject)
        localUniUser = localStorage.getItem("uni_user")
         uniUserObject = JSON.parse(localUniUser)
        // uniUserObject = {
        //     id: 1,
        //     firstName: "Killian",
        //     lastName: "Huntington III",
        //     email: "River_Torp@hotmail.com",
        //     isMember: false
        // }
    return uniUserObject 
    }

     if (uniUserObject === "") {
        Refresh()
    }

    
    //window.location.reload(true)
  

    if (uniUserObject?.member) {
        //return employee views
       // window.location.reload(true) 
       
            return <MemberViews /> 

      
    }
    else {
        //return customer views
        return <GuestViews /> 
    }
   
}

