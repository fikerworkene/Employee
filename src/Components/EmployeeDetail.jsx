import React,{useContext} from "react";
import EmployeeContext from "../EmployeeContext";
import NameContext from "../NameContext";
function EmployeeDetail()
{
    const { employees } = useContext(EmployeeContext);
    const {SearchedName } = useContext(NameContext);
    return(
        <div className="container">
            {employees
            .filter(item=> item.name===SearchedName)
            .map((list)=>{
                return(
                    <div key={list.name} className="empDetail-container">
                        <div className="employeeList">
                        <div className="img-container">
                            <img src={list.img} alt="pic"/>
                        </div>
                        <div className="nameList">
                            <p>{list.name}</p>
                            <p>{list.Occupation}</p>
                        </div>
                    </div>
                    
                        <div className="more-detail">
                            <div className="callOffice">
                                <p><span style={{fontWeight:"bold"}}>Call Office</span></p>
                                <p>{list.CallOffice}</p>
                            </div>
                             <div className="callMobile">
                                <p><span style={{fontWeight:"bold"}}>Mobile</span></p>
                                <p>{list.CallMobile}</p>
                            </div>
                            <div className="sms">
                                <p><span style={{fontWeight:"bold"}}>SMS</span></p>
                                <p>{list.Sms}</p>
                            </div>
                            <div className="email">
                                <p><span style={{fontWeight:"bold"}}>Email</span></p>
                                <p>{list.email}</p>
                            </div>
                        </div>
                    </div>
                )
                })}
        </div>
        )
}
export default EmployeeDetail;