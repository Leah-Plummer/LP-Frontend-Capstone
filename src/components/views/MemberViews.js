import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "../home/Home.js"
import { BookTrip } from "../trips/BookTrip"
//import { MyTrips } from "../trips/MyTrips"
import { TrophiesList } from "../trophies/TrophiesList"
import { Experiences } from "../experiences/Experiences"
import { TripsList } from "../trips/TripsList"

export const MemberViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Kandy Korner</h1>

                    <Outlet />
                </>
            }>

            {/* when the route is "products", both the ProductSearch and Products 
            components will be the Route's elements   */}
                <Route path="home" element={<Home />} />
                <Route path="experiences" element={<Experiences />} /> 
                {/* <Route path="trips/bookTrip" element={<BookTrip />} /> */}
                {/* <Route path="trips/:id" element={<TripsList />} />  */}
                <Route path="trophies" element={<TrophiesList />} /> 
                {/* <Route path="trophies/:id" element={<TrophiesList />} /> */}
                
              
            </Route>
        </Routes>
    )
}