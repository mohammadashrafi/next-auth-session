"use client"
import React, { useEffect, useState } from 'react'

const Postmes = () => {
const [getmessage,setMessage]=useState(undefined)
useEffect(()=>{
    window.addEventListener(
        "message",
        (event) => {
            console.log("main event: " + event)
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
      <h1 className='text-center mt-5'>{ getmessage && JSON.stringify(getmessage)}</h1>
    </div>
  )
}

export default Postmes
