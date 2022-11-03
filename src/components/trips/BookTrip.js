import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//component responsible for a form for creating a new product
export const BookTrip = () => {


  
    let totalPrice = 0;
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
            trophyId: 0, 
         
        }
    )


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
            fetch(`http://localhost:8088/quarries?id=${userChoices?.quarryId}`)
            .then(res => res.json())
            .then(quarryData => {
                const quarryObject = quarryData[0]
                setChosenQuarry(quarryObject)
            })
            
        },
        [userChoices]
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
            fetch(`http://localhost:8088/services?id=${userChoices?.serviceId}`)
            .then(res => res.json())
            .then(serviceData => {
                const serviceObject = serviceData[0]
                setChosenService(serviceObject)
            })
            
        },
        [userChoices]
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
            fetch(`http://localhost:8088/trophies?id=${userChoices?.trophyId}`)
            .then(res => res.json())
            .then(trophyData => {
                const trophyObject = trophyData[0]
                setChosenTrophy(trophyObject)
            })
            
        },
        [userChoices]
        )
        if (chosenTrophy) {
            totalPrice += parseInt(chosenTrophy?.price) 
            } else {
                totalPrice = totalPrice 
            }

     totalPrice *= parseInt(userChoices?.numberOfGuests)

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


    <main className="container--bookTrip">
        <section>

            <h2>Book a New Adventure</h2>
            <form className="bookTrip">
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
                <label htmlFor="newQuarryType"> Quarry 
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
                    <select required id="newProductType" name="serviceId"  onChange={handleUserInputSelect}>
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
                    <select required id="newTrophyType" name="trophyId" cost="totalPrice" onChange={handleUserInputSelect}>
                        <option value={0}
                                subprice={0}>Select Your Trophy</option>
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
            <button onClick={handleSubmit} className="trip_submit">Submit</button>
            </form>
        </section>
    </main>
    
    </>
}