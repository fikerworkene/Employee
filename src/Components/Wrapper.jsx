import React from "react";
import HomePage from "./HomePage";
import EmployeePage from"./EmployeePage";
import  "./Style.css";
import { NameProvider } from "../NameContext"

// function Wrapper({getName, employeeList, name}){
       
//     return(
//     <div className="wrapper">
//         <HomePage employeeList={employeeList} getName={getName}/>
//         <EmployeePage employeeList={employeeList} getName={getName} name={name}/>
//     </div>
//     )
// };
// export default Wrapper;
function Wrapper(){
       
  return(
  <div className="wrapper">
      
      <NameProvider>
          <HomePage />
          <EmployeePage/>
      </NameProvider>
  </div>
  )
};
export default Wrapper;
