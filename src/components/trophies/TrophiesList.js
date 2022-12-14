import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Trophies.css" 

export const TrophiesList= () => {
       //useState for trophies
       const [trophies, setTrophies] = useState([])
       //useState for filtered trophies
       //
       //useState for top priced
      // const [myTrophies, setMyTrophies] = useState(false)
    const navigate = useNavigate()
      
   
   
      
       useEffect(
           () => {
               fetch("http://localhost:8088/trophies")
                   .then(res => res.json())
                   .then(
                       fetchedTrophies => {
                           setTrophies(fetchedTrophies)
                       }
                   )
           },
           []
       )
   
      
   
       
       return <>
           <h2>Trophies</h2>
           
           <div className="trophies">
               {
                   trophies.map(
                       trophies => {
                           return <div className="trophy" key={trophies.id}>
                               <h3>{trophies.type}</h3>
                               <img className="trophy--image" src={`./Images/${trophies.image}`}/>
                               <div className="price">Price: ${trophies.price}</div>
                           </div>
                       }
                   )
               }
           </div>
       </>
   }