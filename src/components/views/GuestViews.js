import { Outlet, Route, Routes } from "react-router-dom"
import { Home } from "../home/Home.js"
import { Experiences } from "../experiences/Experiences.js"
import { TrophiesList } from "../trophies/TrophiesList.js"
import { Login } from "../auth/Login.js"
// import { ProductContainer } from "../products/ProductContainer"




export const GuestViews = () => {
	return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1>Unicorn Safari</h1>

                    <Outlet />
                </>
            }>

            {/* when the route is "products", both the ProductSearch and Products 
            components will be the Route's elements   */}

                <Route path="home" element={<Home />} /> 
                 <Route path="experiences" element={<Experiences />} />
                 <Route path="trophies" element={<TrophiesList />} /> 
                 <Route path="auth" element={<Login />} />         
            </Route>
        </Routes>
    )
}