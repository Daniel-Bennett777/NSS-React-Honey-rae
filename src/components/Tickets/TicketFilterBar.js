export const TicketFilter = ( {setShowEmergencyOnly, setSearchTerm}) => {
    return ( <div className="filter-bar">
    <button className="filter-btn btn-primary" onClick={() => {setShowEmergencyOnly(true)}}>emergency</button>
    <button
    className="fiter-btn btn-info"
    onClick={() => {setShowEmergencyOnly(false)}}
    >Show All
    </button>
    <input
    onChange ={(event) => {setSearchTerm(event.target.value)}}

     type="text"
     placeholder="Search Tickets"
     className="ticket-search"
     />
  </div>)
}