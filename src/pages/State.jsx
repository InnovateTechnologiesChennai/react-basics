import React, { useEffect, useState } from 'react'

const State = () => {

    const [state, setState] = useState(10)
    const [name, setname] = useState("MS DHONI")
    const [arr, setarr] = useState([25,10]) // [25,10,15,09]

    // const addAge =  () => { setState(state+1) }
    const decAge = () =>{
        if(state>0){
            setState(state-1)
        }
    }

    // useEffect(()=>{
    //     console.log("USE EFFECT CALLING - State Changing & RE-Render");
    // })


    // useEffect(()=>{
    //     console.log("USE EFFECT CALLING - State Changing & RE-Render");
    // },[])

    useEffect(()=>{
        console.log("USE EFFECT CALLING - State Changing & RE-Render");
    },[arr])

    console.log(" Re-render")

  return (
    <>
    <h2>My Age : {state} </h2>
    <button onClick={() => { setState(state+1)}}>INCREASE AGE</button>
    {/* <button onClick={()=>{
        if(state>0){
            setState(state-1)
        }
    }}>Decrease AGE</button> */}
    <button onClick={decAge}>Decrease AGE</button>
    {/* <button onClick={addAge}>Change My AGE</button> */}

    <hr />
    <h1>My name is  {name}</h1>
    <button onClick={()=>setname("VIRAT KOHLI")}>Change Name</button>

    <hr />
    <h1>ARRAY VALUE : {JSON.stringify(arr)} </h1>
    <button onClick={()=>setarr([...arr,(Math.round(Math.random()*100))])}>Change Array</button>
    </>
  )
}

export default State


