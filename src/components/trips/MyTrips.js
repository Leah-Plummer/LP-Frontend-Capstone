import { useEffect, useState } from "react"
import { Trip } from "./Trip"
import "./Trips.css"
import '@fwrlines/swatch/dist/main.min.css'

export const MyTrips = () => {
    const [trips, setTrips] = useState([])
    const [filteredTrips, setFilteredTrips] = useState([])

    const localUniUser = localStorage.getItem("uni_user")
    const uniUserObject = JSON.parse(localUniUser)

    const getAllTrips = () => {
        fetch("http://localhost:8088/trips")
                .then(res => res.json())
                .then((fethcedTrips) => {
                    setTrips(fethcedTrips)
                })
    } 

    useEffect(
        () => {
            getAllTrips()
        },
        [] 
    )

    useEffect(
        () => {
            
                const userTrips = trips.filter(trip => trip.userId === uniUserObject.id)
                setFilteredTrips(userTrips)
            },
        [trips]
    )

    return <>
    <h2>{uniUserObject.firstName} {uniUserObject.lastName}'s Adventures</h2>
    <article className="trips">
    {
        filteredTrips.map(trip => <Trip key={`trip--${trip.id}`}
            id={trip.id} 
            userId={trip.userId}
            date={trip.date} 
            numberOfGuests={trip.numberOfGuests}
            quarryId={trip.quarryId}
            serviceId={trip.serviceId}
            trophyId={trip.trophyId} 
            getAllTrips={getAllTrips} />)
    }
</article>
</>
}


