import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "../home/Home.js"
import { BookTrip } from "../trips/BookTrip"
//import { MyTrips } from "../trips/MyTrips"
import { TrophiesList } from "../trophies/TrophiesList"
import { Experiences } from "../experiences/Experiences"
import { MyTrips } from "../trips/MyTrips"



export const MemberViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Unicorn Safari</h1>

                    <Outlet />
                </>
            }>

                <Route path="home" element={<Home />} />
                <Route path="experiences" element={<Experiences />} /> 
                <Route path="bookATrip" element={<BookTrip />} /> 
                <Route path="myTrips" element={<MyTrips />} />
                <Route path="trophies" element={<TrophiesList />} /> 
                {/* <Route path="trophies" element={<TrophiesList />} /> */}
                
              
            </Route>
        </Routes>
    )
}