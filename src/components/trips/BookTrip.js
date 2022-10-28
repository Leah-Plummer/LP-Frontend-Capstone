import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//component responsible for a form for creating a new product
export const BookTrip = () => {
  

    const localUniUser = localStorage.getItem("uni_user")
    const uniUserObject = JSON.parse(localUniUser)

    //useState for user choices
    const [userChoices, setUserChoices] = useState(
        {
            userId: uniUserObject.id,
            date: "",
            numberOfGuests: 0,
            quarryId: 0,
            serviceId: 0, 
            trophyId: 0 
        }
    )


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

    //store useNavigate
    const navigate = useNavigate()


    //function to handle submit button
    const handleSubmit = (event) => {
        event.preventDefault()


        const fetchOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userChoices)
        }

        fetch("http://localhost:8088/trips", fetchOptions)
            .then(res => res.json())
            .then(() => {
               navigate("/trips") 
            })
    }

    //function to handle change in form fields
    const handleUserInput = (event) => {
        const copy = { ...userChoices }
        copy[event.target.name] = event.target.value
        setUserChoices(copy)
    }

    const handleUserInputGuests = (event) => {
        const copy = { ...userChoices }
        copy[event.target.name] = event.target.value
        setUserChoices(copy)
    }

    const handleUserInputSelect = (event) => {
        const copy = { ...userChoices }
        copy[event.target.name] = parseInt(event.target.value)
        setUserChoices(copy)
    }


    //return jsx form
    return <>
        <h1>Book a New Adventure</h1>

        <form>
            <fieldset>
                <label htmlFor="date"> Date of Adventure
                    <input required type="text" id="newTripDate" name="date" value={userChoices.date} onChange={handleUserInput} placeholder="MM/DD/YYYY" />
                </label>
            </fieldset>
            <fieldset>
            <label htmlFor="newNumberOfGuests">Number of Guests
                    <input type="number" required id="newNumberOfGuests" name="numberOfGuests" value={userChoices.numberOfGuests} onChange={handleUserInputGuests} />
                </label> 
            </fieldset>
            <fieldset>
                <label htmlFor="newProductType"> Quarry 
                    <select required id="newQuarry" name="quarryId" onChange={handleUserInputSelect}>
                        <option value={0}>Select a quarry option</option>
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
                    <select required id="newProductType" name="serviceTypeId" onChange={handleUserInputSelect}>
                        <option value={0}>Select a Service Package</option>
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
                    <select required id="newTrophyType" name="trophyTypeId" onChange={handleUserInputSelect}>
                        <option value={0}>Select Your Trophy</option>
                        {trophies.map(
                            (trophy) => {
                                return (<option key={trophy.id} value={trophy.id} >{trophy.type}</option>)
                            }
                        )
                        }
                    </select>
                </label>
            </fieldset>
            

            <button onClick={handleSubmit}>Submit</button>
        </form>
    </>
}