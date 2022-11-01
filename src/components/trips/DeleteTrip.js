// import { useNavigate } from "react-router-dom"
// import { useEffect, useState } from "react"
// import { useParams } from "react-router-dom"
// import { Trip } from "./Trip"


// export const DeleteTrip = () => {
//     const [trips, setTrips] = useState([])
//     const [filteredTrips, setFilteredTrips] = useState([])
//    // const navigate = useNavigate()

//     const localUniUser = localStorage.getItem("uni_user")
//     const uniUserObject = JSON.parse(localUniUser)

    

//     useEffect(
//         () => {
//             fetch("http://localhost:8088/trips")
//                 .then(res => res.json())
//                 .then((fethcedTrips) => {
//                     setTrips(fethcedTrips)
//                 })
//         },
//         [] 
//     )

//     useEffect(
//         () => {
            
//                 const userTrips = trips.filter(trip => trip.userId === uniUserObject.id)
//                 setFilteredTrips(userTrips)
//             },
//         [trips]
//     )

//     const {tripId} = useParams() 
//     const navigate = useNavigate()
//    // const [editedTrip, updateEditedTrip] = useState()
   
//     // useEffect(() => {
//     //     fetch(`http://localhost:8088/trips?id=${id}`)
//     //     .then(res => res.json())
//     //     .then((data) => {
//     //             const tripObject = data[0]
//     //             updateEditedTrip(tripObject)

//     //     })

//     // }, [])
    
//    // const deleteTripId = editedTrip?.id 

    
// const handleYesDelete = (event) => {
//     event.preventDefault() 
 
    
//         fetch(`http://localhost:8088/trips?id?=${tripId}`, {
//             method: "DELETE"})
//         .then(() => {
//                 navigate("/trips")

//         })

//     }  
  
//     return<>
    
//     <h2>Are you sure you want to delete this trip?</h2>
//     <article className="trips">
//     {
//         filteredTrips.map(trip => <Trip key={`trip--${trip.id}`}
//         id={trip.id} 
//         userId={trip.userId}
//         date={trip.date} 
//         numberOfGuests={trip.numberOfGuests}
//         quarryId={trip.quarryId}
//         serviceId={trip.serviceId}
//         trophyId={trip.trophyId} />)
        
//     }
//     </article>
    
//     {/* <section className="trip">
//         <div>Date: {date}</div>
//         <div>Number of Guests: {numberOfGuests}</div>
//         <div>Quarry: {quarry?.type}</div>
//         <div>Service Package: {service?.type}</div>
//         <div>Trophy: {trophy?.type}</div> */}
//         <button onClick={handleYesDelete} className="trip_delete">Yes</button>
//  {/* </section>   */}
    
    
// </>
// }




