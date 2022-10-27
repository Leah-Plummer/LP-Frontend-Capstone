// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "./trips.css" 

 export const Mytrips= () => {
       
//        const [trips, settrips] = useState([])
       
//        const [filteredtrips, setFilteredtrips] = useState([])
      
//        const [mytrips, setMytrips] = useState(false)
//     const navigate = useNavigate()
      
   
   
//        useEffect(
//            () => {
//                fetch("http://localhost:8088/trips?_expand=user?&_expand=trophy")
//                    .then(res => res.json())
//                    .then(
//                        fetchedTrips => {
//                            setTrips(fetchedTrips)
//                        }
//                    )
//            },
//            []
//        )
   
//        useEffect(
//            () => {
//                setFilteredtrips(trips)
//            },
//            [trips]
//        )
   
     
//        useEffect(
//            () => {
//                if (mytrips) {
//                    const allMytrips = trips.filter(trophy => trophy.unitPrice > 2.00)
//                    setFilteredtrips(topPricedtrips)
//                } else {
//                    setFilteredtrips(trips)
//                }
//            },
//            [topPriced]
//        )
   
//        const localKandyUser = localStorage.getItem("kandy_user")
//        const kandyUserObject = JSON.parse(localKandyUser)
   
       
//        return <>
//            <h1>trips</h1>
//            {
//                kandyUserObject.staff ?
//                    <>
//                        <button onClick={() => { setTopPriced(true) }}>Top Priced</button>
//                        <button onClick={() => { setTopPriced(false) }}>All trips</button>
//                        <button onClick={() => { navigate("/trips/Addtrophy") }}>Add trophy</button>
//                    </>
//                    : ""
//            }
//            <div className="trips">
//                {
//                    filteredtrips.map(
//                        trips => {
//                            return <div className="trophy" key={trips.id}>
//                                <h3>{trips.name}</h3>
//                                <div>Price per unit: ${trips.unitPrice}</div>
//                                <div>trophy Type: {trips.trophyType.type}</div>
//                            </div>
//                        }
//                    )
//                }
//            </div>
//        </>
   }