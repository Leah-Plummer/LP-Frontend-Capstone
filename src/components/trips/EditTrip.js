import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useParams } from "react-router-dom"

export const EditTrip = () => {
    // TODO: Provide initial state for trip
    const {tripId} = useParams()
    const [editedTrip, updateEditedTrip] = useState()

    const [quarries, setQuarries] = useState([])

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
   

    const [services, setServices] = useState([])

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

    const [trophies, setTrophies] = useState([])

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

        <h1>Edit Your Adventure</h1>

        <form>
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
            

            <button onClick={handleSaveButtonClick}>Save Changes</button>
        </form>
        </>
    )
}