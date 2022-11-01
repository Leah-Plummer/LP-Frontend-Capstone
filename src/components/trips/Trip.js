import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { MyTrips } from "./MyTrips"

//import { DeleteTrip } from "./DeleteTrip"


export const Trip = ({id, date, numberOfGuests, quarryId, serviceId, trophyId, getAllTrips}) => {
    const navigate = useNavigate()
 
    const [quarry, setQuarry] = useState([])
    
   

    
    useEffect(
        () => {
            fetch(`http://localhost:8088/quarries?id=${quarryId}`)
                .then(res => res.json())
                .then(data => {
                    const quarryObject = data[0]
                    setQuarry(quarryObject)
                })
        },
        [quarryId]
    )

    const [service, setService] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/services?id=${serviceId}`)
                .then(res => res.json())
                .then(data => {
                    const serviceObject = data[0]
                    setService(serviceObject)
                })
        },
        [serviceId]
    )

    const [trophy, setTrophy] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/trophies?id=${trophyId}`)
                .then(res => res.json())
                .then(data => {
                    const trophyObject = data[0]
                    setTrophy(trophyObject)
                })
        },
        [trophyId]
    )
    const deleteTrip = (event) => {
        event.preventDefault()
        fetch(`http://localhost:8088/trips/${id}`, {
          method: 'DELETE',
        }).then(getAllTrips())
       navigate("/trips")
      }
       
      

   
       

    
    
    return <section className="trip">
        <div>Date: {date}</div>
        <div>Number of Guests: {numberOfGuests}</div>
        <div>Quarry: {quarry?.type}</div>
        <div>Service Package: {service?.type}</div>
        <div>Trophy: {trophy?.type}</div>
        <button onClick={() => navigate(`/trips/${id}`)}>Edit</button>
        <button onClick={deleteTrip} className="trip_delete">Delete</button>
       
    </section>

}