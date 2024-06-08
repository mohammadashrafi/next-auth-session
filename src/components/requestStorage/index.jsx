"use client"
import React from 'react'

const RequestStorage =() => {

  function requestGeolocation() {
    if (navigator.permissions) {
      navigator.permissions.query({ name: 'geolocation' })
        .then(permissionStatus => {
          if (permissionStatus.state === 'granted') {
            // Permission granted, proceed with geolocation API
            navigator.geolocation.getCurrentPosition(
              (position) => {
                console.log('Latitude:', position.coords.latitude);
                console.log('Longitude:', position.coords.longitude);
                // Use the geolocation data here
              },
              (error) => {
                console.error('Error getting geolocation:', error);
              }
            );
          } else if (permissionStatus.state === 'denied') {
            console.log('Geolocation permission denied.');
          } else if (permissionStatus.state === 'prompt') {
            console.log('Geolocation permission prompt is pending.');
          }
        })
        .catch(error => {
          console.error('Error requesting geolocation permission:', error);
        });
    } else {
      console.error('navigator.permissions is not supported.');
    }
  }

const handelaccessstorage=() => {
  
// Get the parent window's document object
const parentDoc = window.parent.document;

// Access the parent window's cookies
const parentCookies = parentDoc.cookie;

// Do something with the parent cookies
console.log("parentCookies",parentCookies);


}


  return (
    <div>
      <button className='m-auto bg-red-500 p-5' onClick={requestGeolocation}>storage</button>
{/* <br />
      <button className='m-auto bg-green-500 p-5' onClick={handelaccessstorage}>access localstorage</button> */}
    </div>
  )
}

export default RequestStorage
