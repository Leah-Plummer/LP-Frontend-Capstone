
import { Route, Routes } from "react-router-dom"
//import { Authorized } from "./views/Authorized"
//import { Login } from "./auth/Login"
import { Register } from "./auth/Register"
import "./UnicornSafari.css"
//import { GuestNav } from "./nav/GuestNav"
//import { GuestViews } from "./views/GuestViews"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./nav/NavBar"

export const UnicornSafari = () => {
	return <Routes>
		
		<Route path="/register" element={<Register />} />

		<Route path="*" element={
			// <Authorized>
			 	<>
			 		<NavBar />
					<ApplicationViews />
				</>
			//</Authorized>

		} />
	</Routes>
}

