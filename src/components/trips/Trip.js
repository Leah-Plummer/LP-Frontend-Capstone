import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"

export const Trip = ({id, date, numberOfGuests, quarryId, serviceId, trophyId}) => {
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
    
    return <section className="trip">
        <div>Date: {date}</div>
        <div>Number of Guests: {numberOfGuests}</div>
        <div>Quarry: {quarry?.type}</div>
        <div>Service Package: {service?.type}</div>
        <div>Trophy: {trophy?.type}</div>
        <button onClick={() => navigate(`/trips/${id}`)}>Edit</button>
    </section>

}