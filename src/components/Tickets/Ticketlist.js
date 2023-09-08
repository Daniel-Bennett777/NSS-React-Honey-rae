import {useEffect, useState } from "react"
import {getAllTickets} from "../../services/ticketService.js"

import "./Tickets.css"
import { Ticket } from "./Ticket.js"
import { TicketFilter } from "./TicketFilterBar.js"

export const TicketList = ({currentUser})  => {
    const [allTickets, setAllTickets] = useState([])
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false); /*useState: A crucial React Hook that empowers you to introduce state to a component. It takes an initial value as its argument and returns an array. This array contains the state value (index 0) and a function (index 1) to modify that state.*/
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("")
  useEffect(() => {

    getAllTickets().then((ticketsArray) => {
      setAllTickets(ticketsArray)
      
  
    })
    
  }, []) //only runs on initial render of component

  useEffect (() => {
    if (showEmergencyOnly) {
      const emergencyTickets = allTickets.filter(
        (ticket) => ticket.emergency === true
      )
      
      setFilteredTickets(emergencyTickets)
    } else {
       setFilteredTickets(allTickets)
    }
    
  }, [showEmergencyOnly, allTickets])

  useEffect(() => {
const foundTickets = allTickets.filter((ticket) => 
ticket.description.toLowerCase().includes(searchTerm.toLowerCase()))
setFilteredTickets(foundTickets)
  }, [searchTerm, allTickets])




  return <div className = "tickets-container">
    <h2>Tickets</h2>
    <TicketFilter setShowEmergencyOnly={setShowEmergencyOnly} setSearchTerm={setSearchTerm}/>
    <article className="tickets">
      {filteredTickets.map((ticketObj) => {
        return (
          <Ticket ticket={ticketObj} currentUser={currentUser} key={ticketObj.id}/>
        )
      })}
    </article>
  </div>
}