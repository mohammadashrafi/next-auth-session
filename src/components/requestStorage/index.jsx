"use client"
import React from 'react'

const RequestStorage = () => {

const handelClick=()=>{
document.hasStorageAccess().then((hasaccess)=>{
    if(!hasaccess){
        return document.requestStorageAccess()
    }

}).then(()=>{
    console.log("now we have access to the cookie")
    console.log(`cookie :${document.cookie}`)
}).catch((error)=>{
    console.log(error)
})


}




  return (
    <div>
      <button className='m-auto bg-red-500 p-5' onClick={handelClick}>click access storage</button>
    </div>
  )
}

export default RequestStorage
