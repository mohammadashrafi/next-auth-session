"use client"
import React, { useEffect } from 'react'

const Redirect = () => {

useEffect(()=>{

window.location.href = 'http://localhost:3009'

},[])


  return (
    <div>
      Redirect page
    </div>
  )
}

export default Redirect
