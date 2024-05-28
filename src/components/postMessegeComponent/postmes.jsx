"use client"
import React, { useEffect, useState } from 'react'

const Postmes = () => {
const [getmessage,setMessage]=useState()
useEffect(()=>{
    window.addEventListener(
        "message",
        (event) => {
          if (event.origin !== "http://localhost:5173") return;
      setMessage(event.data)
      console.log("event data", event.data)
          // …
        },
        false,
      );
},[])



  return (
    <div>
      <h3>{JSON.stringify(getmessage)}</h3>
    </div>
  )
}

export default Postmes
