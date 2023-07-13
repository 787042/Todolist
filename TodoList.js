import React, { useState } from 'react'

export default function TodoList() {
    const [activity, setActivity]= useState("");
    const [listData, setlistData]=useState([]);
    function addActivity(){
          //  setlistData([...listData, activity])
         //   console.log(listData)
         setlistData((listData)=>{
         const updatedList=[...listData, activity]
         console.log(updatedList)
         setActivity('');
         return updatedList
    })
    }
    function removeActivity(i){
        const updatedlistData=listData.filter((elem,id)=>
        {
            return i!=id;
        })
        setlistData(updatedlistData);
    }
  return (
   <>
   <div className='container'>
    <div className='header'>todolist</div>
    <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
    <button onClick={addActivity}>Add</button>
    <p className='list-heading'>here is your list:{')'}</p>
    {listData!=[] && listData.map((data,i)=>{

     return(
        <>
        <p key={i}>
            <div className='listData'>{data}</div>
            <div className='btn-position'><button onClick={()=>removeActivity(i)}>remove(-)</button></div>
        </p>
        </>
     )
    })}
    
   </div>
   </>
  )
}
