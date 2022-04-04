// import React,{useState} from "react";
// function EmployeeListItem({getName, employeeList})
// {

//     const [searchItem, setSearchItem]= useState("");

//     const handleSearch=((e)=>{
//         setSearchItem(e.target.value);
//     })

//     const nameToShow=employeeList.filter((e)=>{
//         return e.name.toUpperCase().includes(searchItem.toUpperCase())
//     })



//     return(
//         <div>
//         <div className="search">
//             <input className="search" type="text" placeholder="search.." onChange={handleSearch}></input>
//         </div>
//         <div className="container">
//             {nameToShow.map((list)=>{

//                 return(
//                     <div className="employeeList" onClick={() => getName(list.name)}>
//                         <div className="img-container">
//                             <img src={list.img} alt="pic"/>
//                         </div>
//                         <div className="nameList">
//                             <p>{list.name}</p>
//                             <p>{list.Occupation}</p>
//                         </div>
//                     </div>
//                 )
//             })}
//         </div>
//         </div>
//         )
// }
// export default EmployeeListItem;
import React,{useState,useContext} from "react";
import EmployeeContext from "../EmployeeContext";
import NameContext from "../NameContext";



function EmployeeListItem()
{
    const {employees} = useContext(EmployeeContext);
    const {getName}= useContext(NameContext);
    const [searchItem, setSearchItem]= useState("");
    const handleSearch=((e)=>{
        setSearchItem(e.target.value);
    })

    const nameToShow=employees.filter((e)=>{
        return e.name.toUpperCase().includes(searchItem.toUpperCase())
    })
    return(
        <div>
        <div className="search">
            <input className="search" type="text" placeholder="search" onChange={handleSearch}></input>
        </div>
        <div className="container" >
            {nameToShow.map((list)=>{

                return(
                    <div key={list.id} className="employeeList" onClick={() => getName(list.name)}>
                        <div className="img-container">
                            <img src={list.img} alt="pic"/>
                        </div>
                        <div className="nameList">
                            <p>{list.name}</p>
                            <p>{list.Occupation}</p>
                        </div>
                    </div>
                )
            })}
        </div>
        </div>
        )
}
export default EmployeeListItem;
