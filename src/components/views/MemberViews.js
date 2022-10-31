import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "../home/Home.js"
import { BookTrip } from "../trips/BookTrip"
import { TrophiesList } from "../trophies/TrophiesList"
import { Experiences } from "../experiences/Experiences"
import { MyTrips } from "../trips/MyTrips"
import { EditTrip } from "../trips/EditTrip"


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
                <Route path="trips" element={<MyTrips />} />
                <Route path="trips/:tripId" element={<EditTrip />} />
                <Route path="trophies" element={<TrophiesList />} /> 
                {/* <Route path="trophies" element={<TrophiesList />} /> */}
                
              
            </Route>
        </Routes>
    )
}