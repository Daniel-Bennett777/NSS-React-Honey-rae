import { useState, useEffect } from "react"
import { getNonStaffUsers } from "../../services/userService"
import "./Customers.css"
import { User } from "../../User/User"
import { Link } from "react-router-dom"

export const CustomerList =() => {
    const [customers, setCustomers] = useState([])

    useEffect(() => {
        getNonStaffUsers().then((customerArray) => {
            setCustomers(customerArray)
        })
    }, [])


    return <div className="customers">
        {customers.map((customerObj) => {
            return( 
            <Link to={`/customers/${customerObj.id}`}>
                <User user={customerObj}  />
            </Link>
                
            
)
})}
    </div>
}