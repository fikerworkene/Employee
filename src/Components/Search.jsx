import React,{useState} from "react";
function Search(){
    const [searchItem, setSearchItem]= useState("");
    const handleSearch=((e)=>{
        setSearchItem(e.target.value);
    })
    return(
        <div className="search">
            <input className="search" type="text"onChange={handleSearch}></input>
        </div>
    )
}
export default Search;