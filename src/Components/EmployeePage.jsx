// import React from "react";
// import HeaderRight from "./HeaderRight";
// import EmployeeDetail from "./EmployeeDetail";
// import { EmployeeContext } from "../EmployeeContext";
// function EmployeePage({employeeList,getName, name}){
//     return(
//         <div className="empDetail-container">
//             <div className="employeepage">
//                 <HeaderRight/>
//                 <EmployeeDetail empDetail={employeeList} getName={getName} name={name}/>
//             </div>
           
//         </div>
//     )
// }
// export default EmployeePage;
import React from "react";
import HeaderRight from "./HeaderRight";
import EmployeeDetail from "./EmployeeDetail";
//import { EmployeContext } from "../EmployeContext";
import "./Style.css";

function EmployeePage() {
  //console.log("hello", EmployeContext);
  //const { countries } = useContext(EmployeContext);


  return (
    <div className="employeeDetail-container">
            <div className="employeepage">
                <HeaderRight/>
                <EmployeeDetail/>
            </div>
           
        </div>
    )
}
export default EmployeePage;