import React, { useState, createContext } from "react";

export const EmployeeContext = createContext();

// console.log(EmployeeContext);

export function EmployeeProvider(props) {
  const [employees, setEmployees] = useState([
    {
        id: 1,
        img: "./pic-two.jpg",
        name: "Jamse King",
        Occupation: "President and CEO",
        CallOffice: "781-000-0000",
        CallMobile: "617-000-0000",
        Sms: "617-000-000",
        email: "james@gmail.com",
   
      },
      {
        id: 2,
       img: "./pic-three.jpg",
       name: "Julie Taylor",
       Occupation: "VP of marketing",
       CallOffice: "781-000-0000",
        CallMobile: "617-000-0000",
        Sms: "617-000-000",
        email: "julie@gmail.com",
   
      },
      {
        id:3,
       img: "./pic-four.jpg",
       name: "Eugene Lee",
       Occupation: "CFO",
       CallOffice: "781-000-0000",
       CallMobile: "617-000-0000",
       Sms: "617-000-000",
       email: "Eugene@gmail.com",
   
      },
      {
        id:4,
       img: "./pic-five.jpg",
       name: "John Williams",
       Occupation: "VP of Engineering",
       CallOffice: "781-000-0000",
       CallMobile: "617-000-0000",
       Sms: "617-000-000",
       email: "john@gmail.com",
   
      },
      {
        id:5,
       img: "./pic-six.jpg",
       name: "Ray Moore",
       Occupation: "VP of sales",
       CallOffice: "781-000-0000",
       CallMobile: "617-000-0000",
       Sms: "617-000-000",
       email: "ray@gmail.com",
   
      },
      {
        id:6,
       img: "./pic-seven.jpg",
       name: "Paul Jones",
       Occupation: "QA manager",
       CallOffice: "781-000-0000",
       CallMobile: "617-000-0000",
       Sms: "617-000-000",
       email: "paul@gmail.com",
   
      }
    ]);
    // const [name, setName] = useState("");
   
    //  const getName = (newName) => {
    //    setName(newName);
     //};//define our state in react hooks

  return (
    <EmployeeContext.Provider value={{ employees }}>
      {props.children}
    </EmployeeContext.Provider>
  );
}

export default EmployeeContext;