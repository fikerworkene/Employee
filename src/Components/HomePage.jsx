import React from "react";
import HeaderLeft from"./HeaderLeft";
//import Search from "./Search";
import EmployeeListItem from "./EmployeeListItem";
// function HomePage({getName, employeeList}){
   
//     return(
//         <div className="homepage">
//             <HeaderLeft/>
//             <EmployeeListItem employeeList={employeeList} getName={getName} />
//         </div>
//     )
// }
// export default HomePage;
function HomePage(){
   
    return(
        <div className="homepage">
            <HeaderLeft/>
            <EmployeeListItem/>
        </div>
    )
}
export default HomePage;