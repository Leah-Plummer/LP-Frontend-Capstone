import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

export const EditTrip = () => {
    // TODO: Provide initial state for trip
    const {tripId} = useParams()
    let totalPrice = 0;
    const [editedTrip, updateEditedTrip] = useState()

    const [quarries, setQuarries] = useState([])
    const [chosenQuarry, setChosenQuarry] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/quarries")
                .then(res => res.json())
                .then(quarriesData => {
                    setQuarries(quarriesData)
                })
        },
        []
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/quarries?id=${editedTrip?.quarryId}`)
            .then(res => res.json())
            .then(quarryData => {
                const quarryObject = quarryData[0]
                setChosenQuarry(quarryObject)
            })
            
        },
        [editedTrip]
        )
        if (chosenQuarry) {
            totalPrice += parseInt(chosenQuarry?.price) 
            } else {
                totalPrice = totalPrice 
            }
   

    const [services, setServices] = useState([])
    const [chosenService, setChosenService] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/services")
                .then(res => res.json())
                .then(servicesData => {
                    setServices(servicesData)
                })
        },
        []
    )
    useEffect(
        () => {
            fetch(`http://localhost:8088/services?id=${editedTrip?.serviceId}`)
            .then(res => res.json())
            .then(serviceData => {
                const serviceObject = serviceData[0]
                setChosenService(serviceObject)
            })
            
        },
        [editedTrip]
        )

        if (chosenService) {
        totalPrice += parseInt(chosenService?.price) 
        } else {
            totalPrice = totalPrice 
        }

    const [trophies, setTrophies] = useState([])
    const [chosenTrophy, setChosenTrophy] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/trophies")
                .then(res => res.json())
                .then(trophiesData => {
                    setTrophies(trophiesData)
                })
        },
        []
    )
    useEffect(
        () => {
            fetch(`http://localhost:8088/trophies?id=${editedTrip?.trophyId}`)
            .then(res => res.json())
            .then(trophyData => {
                const trophyObject = trophyData[0]
                setChosenTrophy(trophyObject)
            })
            
        },
        [editedTrip]
        )
        if (chosenTrophy) {
            totalPrice += parseInt(chosenTrophy?.price) 
            } else {
                totalPrice = totalPrice 
            }

     totalPrice *= parseInt(editedTrip?.numberOfGuests)
    

    const navigate = useNavigate()


    // TODO: Get employee trip info from API and update state

    

    useEffect(() => {
        fetch(`http://localhost:8088/trips?_expand=quarry&_expand=trophy&_expand=service&id=${tripId}`)
        .then(res => res.json())
        .then((data) => {
                const tripObject = data[0]
                updateEditedTrip(tripObject)

        })

    }, [tripId])

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        /*
            TODO: Perform the PUT fetch() call here to update the trip.
            Navigate user to home page when done.
        */
        const fetchOptions = {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(editedTrip)
        }

       fetch(`http://localhost:8088/trips/${tripId}`, fetchOptions)
       .then(res => res.json())
       .then(() => {
        setFeedback("Updates successfully saved")
        navigate("/trips") 
       })
    }

    const handleUserInput = (event) => {
        const copy = { ...editedTrip }
        copy[event.target.name] = event.target.value
        updateEditedTrip(copy)
    }

    const handleUserInputGuests = (event) => {
        const copy = { ...editedTrip }
        copy[event.target.name] = event.target.value
        updateEditedTrip(copy)
    }

    const handleUserInputSelect = (event) => {
        const copy = { ...editedTrip }
        copy[event.target.name] = parseInt(event.target.value)
        updateEditedTrip(copy)
    }


    const [feedback, setFeedback] = useState("")

    useEffect(() => {
    if (feedback !== "") {
        // Clear feedback to make entire element disappear after 3 seconds
        setTimeout(() => setFeedback(""), 3000);
    }
}, [feedback])

    return (
        <>
        <div className={`${feedback.includes("Error") ? "error" : "feedback"} ${feedback === "" ? "invisible" : "visible"}`}>
        {feedback}
        </div>


        <form className="editTrip">
        <h2>Edit Your Adventure</h2>
            <fieldset>
                <label htmlFor="date"> Date of Adventure
                    <input type="text" id="newTripDate" name="date" value={editedTrip?.date}  onChange={handleUserInput} placeholder="MM/DD/YYYY" />
                </label>
            </fieldset>
            <fieldset>
            <label htmlFor="newNumberOfGuests">Number of Guests
                    <input type="number" required id="newNumberOfGuests" name="numberOfGuests" value={editedTrip?.numberOfGuests} onChange={handleUserInputGuests} />
                </label> 
            </fieldset>
            <fieldset>
                <label htmlFor="newQuarryType"> Quarry 
                    <select required id="newQuarry" name="quarryId" onChange={handleUserInputSelect}>
                        <option value={editedTrip?.quarryId}>{editedTrip?.quarry.type}</option>
                        {quarries.map(
                            (quarry) => {
                                return (<option key={quarry.id} value={quarry.id} >{quarry.type}</option>)
                            }
                        )
                        }
                    </select>
                </label>
            </fieldset>
            <fieldset>
                <label htmlFor="newProductType"> Service Package
                    <select required id="newService" name="serviceId" onChange={handleUserInputSelect}>
                        <option value={editedTrip?.serviceId}>{editedTrip?.service.type}</option>
                        {services.map(
                            (service) => {
                                return (<option key={service.id} value={service.id} >{service.type}</option>)
                            }
                        )
                        }
                    </select>
                </label>
            </fieldset>
            <fieldset>
                <label htmlFor="newTrophyType"> Trophy
                    <select required id="newTrophy" name="trophyId" onChange={handleUserInputSelect}>
                        <option value={editedTrip?.trophyId}>{editedTrip?.trophy.type}</option>
                        {trophies.map(
                            (trophy) => {
                                return (<option key={trophy.id} value={trophy.id} >{trophy.type}</option>)
                            }
                        )
                        }
                    </select>
                </label>
            </fieldset>
            
            <div className="price">${totalPrice}</div>
            <button onClick={handleSaveButtonClick} className="trip_save">Save Changes</button>
        </form>
        </>
    )
}