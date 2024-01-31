import React, { useState } from "react";


const Filter = ({add,search}) => {
  const [title,setTitle]=useState('')
  const [description,setDescription]=useState('')
  const [newrating,setnewRating]=useState()


 const handleclick =()=> {
  if(title&&description&&newrating){
    add(title,description,newrating)}}

    
  


  return (
    <div className="filter">
      <div className="add">
        <div className="xyz"> + Add a new movie </div>
        <label>Title</label>
        <input type="text" onChange={(e)=>setTitle(e.target.value)}/>
        
        <label>Description</label>
        <input type="text"onChange={(e)=>setDescription(e.target.value)}/>
        
        <label> Rating  </label>
        <input type="number"onChange={(e)=>setnewRating(e.target.value)}/>
        <button className="ABC"  onClick={()=>handleclick()}   >OK</button>
      </div>
      <div className="hij"> Filter</div>
      <label>Filter by Title:</label>
        <input type="text" onChange={(e)=>search(e.target.value)}/>
      
    </div>
  );
};

export default Filter;