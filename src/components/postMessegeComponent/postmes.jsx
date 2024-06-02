"use client"
import React, { useEffect, useState } from 'react'

const Postmes = () => {
const [getmessage,setMessage]=useState(undefined)
useEffect(()=>{
    window.addEventListener(
        "message",
        (event) => {
            console.log("main event: " + event)
          if (event.origin !== "http://localhost:3009") return;
      setMessage(event.data)
      console.log("event data", event.data)
          // …
        },
        false,
      );
},[])



  return (
    <div>
      <h1 className='text-center mt-5'>: message is  { getmessage && JSON.stringify(getmessage)}</h1>
    </div>
  )
}

export default Postmes
