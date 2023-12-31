import { Routes, Route, Outlet } from "react-router-dom"
import { NavBar } from "../components/Nav/NavBar"
import { TicketList } from "../components/Tickets/Ticketlist"
import { CustomerList } from "../components/customers/CustomersList"
import { EmployeesList } from "../components/employees/EmployeesList"
import { Welcome } from "../components/welcome/welcome"
import { CustomerDetails } from "../components/customers/CustomerDetails"
import { EmployeeDetails } from "../components/employees/EmployeeDetails"
import { useEffect, useState } from "react"


export const ApplicationViews = () => {
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    const localHoneyUser = localStorage.getItem("honey_user")
    const honeyUserObject = JSON.parse(localHoneyUser)

    setCurrentUser(honeyUserObject)
  }, [])

  return ( 
  <Routes>
    <Route 
    path="/" 
    element={
    <>
      <NavBar /> 
      <Outlet />
    </> 
   }
 >
  <Route index element={<Welcome />} />
  <Route path="/tickets" element={<TicketList currentUser= {currentUser} />} />
  <Route path="employees">
    <Route index element={<EmployeesList />} />
    <Route path=":employeeId" element={<EmployeeDetails />} />
  </Route>
  <Route path="customers">
      <Route index element={<CustomerList />} />
      <Route path=":customerId" element={<CustomerDetails/>} />
  
    </Route>
  </Route>
</Routes>
  )
}
