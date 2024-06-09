"use client"
import React from 'react'
const RequestStorage =() => {

const handelClick= async()=>{


console.log("start")
console.log("navigator.appCodeName",navigator.appCodeName)

document.requestStorageAccess().then(hasAccess => {
  console.log({hasAccess});
});

navigator.permissions.query({ name: "storage-access" }).then(async (result) => {
  console.log({result});
    if (result.state === "granted") {
        try {
            console.log("Cookie access allowed. Calling requestStorageAccess()");
            await document.requestStorageAccess();
            console.log("Cookie access granted");
            return true;
          } catch (error) {
            console.log('error', error);
            // This shouldn't really fail if access is granted
            return false;
          }
     
    } else if (result.state === "prompt") {
        console.log("Cookie access requires a prompt");
        return false
   
    }else if (result.state ==="denied"){
        console.log("Cookie access denied");
        return false;
    }
    // Don't do anything if the permission was denied.
  });


  // API is available, proceed with the request





// navigator.permissions.query({ name: 'storage-access' })
//   .then((permissionStatus) => {
//     console.log('Storage permission status:', permissionStatus.state);

//     // If the permission is not granted, request access
//     if (permissionStatus.state !== 'granted') {
//       // Request storage access
//       navigator.permissions.request({ name: 'storage-access' })
//         .then((permissionStatus) => {
//           if (permissionStatus.state === 'granted') {
//             // Permission granted, you can now access cookies and other storage
//             console.log('Storage access granted!');
//             console.log(document.cookie); // Access cookies


//             promise.then(
//               function (hasAccess) {
//                 console.log("hasssss",hasAccess)
//                 // Boolean hasAccess says whether the document has access or not.
//                 if(hasAccess){
                  
//                   document.requestStorageAccess()
//                   .then(() => {
//                     // Access granted, you can now read/write cookies
//                     console.log("document.cookie",document.cookie);
//                   })
//                   .catch((error) => {
//                     // Access denied or an error occurred
//                     console.error('Error requesting storage access:', error);
//                   });
//                 }else{
//                   console.log("not access to has access")
//                 }
           
//               },
//               function (reason) {
//                 console.log("Promise was rejected for some reason" + reason)
//                 // Promise was rejected for some reason.
//               }
//             );





//           } else {
//             // Permission denied or revoked
//             console.error('Storage access denied');
//           }
//         })
//         .catch((error) => {
//           console.error('Error requesting storage access:', error);
//         });
//     } else {
//       // Permission already granted, you can access cookies and other storage
//       console.log('Storage access already granted');
//       console.log(document.cookie); // Access cookies
//     }
//   })
//   .catch((error) => {
//     console.error('Error checking storage permission:', error);
//   });

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
      <button className='m-auto bg-red-500 p-5' onClick={handelClick}>storage</button>
<br />
      <button className='m-auto bg-green-500 p-5' onClick={handelaccessstorage}>access localstorage</button>
    </div>
  )
}

export default RequestStorage
