import React, { useState, useEffect } from "react";
import { getStaffUsers } from "../../services/userService";
import "./Employees.css"; // Make sure to import your CSS file
import { User } from "../../User/User";
import { Link } from "react-router-dom";

export const EmployeesList = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getStaffUsers().then((employeeArray) => {setEmployees(employeeArray);
});   
}, []);

return (
  <div className="employees">
    {employees.map((employeeObj) => {
      return (
        <Link to={`/employees/${employeeObj.id}`} key={employeeObj.id}>
          <User user={employeeObj} key={employeeObj.id} />
        </Link>
      )
    })}
    </div>
)
};


