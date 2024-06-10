"use client"
import React from 'react'
const RequestStorage =() => {



  function doThingsWithCookies() {
    // document.cookie = "mammmmmmad=1234"; // set a cookie
    console.log("document.cookie",document.cookie)
  }
  
  function doThingsWithLocalStorage(handle) {
    handle.localStorage.setItem("foo", "bar"); // set a local storage key
  }
  
  async function handleCookieAccess() {
    if (!document.hasStorageAccess) {
      // This browser doesn't support the Storage Access API
      // so let's just hope we have access!
      doThingsWithCookies();
    } else {
      const hasAccess = await document.hasStorageAccess();
      if (hasAccess) {
        // We have access to third-party cookies, so let's go
        doThingsWithCookies();
        // If we want to modify unpartitioned state, we need to request a handle.
        const handle = await document.requestStorageAccess({
          localStorage: true,
        });
        doThingsWithLocalStorage(handle);
      } else {
        // Check whether third-party cookie access has been granted
        // to another same-site embed
        try {
          const permission = await navigator.permissions.query({
            name: "storage-access",
          });
  
          if (permission.state === "granted") {
            // If so, you can just call requestStorageAccess() without a user interaction,
            // and it will resolve automatically.
            const handle = await document.requestStorageAccess({
              cookies: true,
              localStorage: true,
            });
            doThingsWithLocalStorage(handle);
            doThingsWithCookies();
          } else if (permission.state === "prompt") {
            // Need to call requestStorageAccess() after a user interaction
           
              try {
                const handle = await document.requestStorageAccess({
                  cookies: true,
                  localStorage: true,
                });
                doThingsWithLocalStorage(handle);
                doThingsWithCookies();
              } catch (err) {
                // If there is an error obtaining storage access.
                console.error(`Error obtaining storage access: ${err}.
                              Please sign in.`);
              }
          
          } else if (permission.state === "denied") {
            // User has denied third-party cookie access, so we'll
            // need to do something else
          }
        } catch (error) {
          console.log(`Could not access permission state. Error: ${error}`);
          doThingsWithCookies(); // Again, we'll have to hope we have access!
        }
      }
    }
  }
  
    




//  const handelClick= async()=>{


//   document.hasStorageAccess().then(hasAccess => {
//     console.log('hasAccess: ' + hasAccess);
//     if (!hasAccess) {
//       return document.requestStorageAccess({
//         cookies: true,
//         localStorage: true
//       });
//     }
//   }).then(_ => {
//     console.log('Now we have first-party storage access!');
//     document.cookie = "foo=bar";
//     console.log(`document.cookie: ${document.cookie}`);
//   }).catch(_ => {
//     console.log('error');
//   });


// console.log("start")
// console.log("navigator.appCodeName",navigator.appCodeName)

// document.requestStorageAccess().then(hasAccess => {
//   console.log({hasAccess});
// });

// navigator.permissions.query({ name: "" }).then(async (result) => {
//   console.log({result});
//     if (result.state === "granted") {
//         try {
//             console.log("Cookie access allowed. Calling requestStorageAccess()");
//             await document.requestStorageAccess();
//             console.log("Cookie access granted");
//             return true;
//           } catch (error) {
//             console.log('error', error);
//             // This shouldn't really fail if access is granted
//             return false;
//           }
     
//     } else if (result.state === "prompt") {
//         console.log("Cookie access requires a prompt");
//         return false
   
//     }else if (result.state ==="denied"){
//         console.log("Cookie access denied");
//         return false;
//     }
//     // Don't do anything if the permission was denied.
//   });


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

//}

const handelaccessstorage=() => {
  
  // Get the parent window's document object
  const parentDoc = window.parent.document;
  
  console.log("parentDoc"+parentDoc)
// Access the parent window's cookies
const parentCookies = parentDoc.cookie;
console.log("parentCookies"+parentCookies)
// Do something with the parent cookies
console.log("parentCookies",parentCookies);


}


function rSAFor() {

  if ("requestStorageAccessFor" in document) {
    document.requestStorageAccessFor("https://storageaccess.netlify.app").then(
      (res) => {
        doThingsWithCookies();
      },
      (err) => {
        // Handle errors
      },
    );
  }
}




const secondaccess=()=>{
  navigator.permissions
  .query({
    name: "top-level-storage-access",
    requestedOrigin: "https://storageaccess.netlify.app/",
  })
  .then((permission) => {
    if (permission.state === "granted") {
      // Permission has already been granted
      // No need to call requestStorageAccessFor() again, just start using cookies
      doThingsWithCookies();
    } else if (permission.state === "prompt") {
      // Need to call requestStorageAccessFor() after a user interaction
    
        // Request storage access
        rSAFor();
   
    } else if (permission.state === "denied") {
      document.requestStorageAccess().then(
        () => {
            // Access is granted
            console.log('Storage access granted');
        },
        () => {
            // Access is denied
            console.log('Storage access denied');
        }
    );
      // User has denied third-party cookie access, so we'll
      // need to do something else
    }
  });
}


const costumCookie=()=>{
  navigator.permissions
  .query({
    name: "top-level-storage-access",
    requestedOrigin: "https://storageaccess.netlify.app/",
  }).then((permission) => {
    if (permission.state === "granted") {
      // Permission has already been granted
      // No need to call requestStorageAccessFor() again, just start using cookies
      doThingsWithCookies();
    } else if (permission.state === "prompt") {
      // Need to call requestStorageAccessFor() after a user interaction
    
        // Request storage access
        rSAFor();
   
    } else if (permission.state === "denied") {
      console.log("Permission denied custom func")
      document.requestStorageAccess().then(
        () => {
            // Access is granted
            console.log('Storage access granted');
        },
        () => {
            // Access is denied
            console.log('Storage access denied');
        }
    );
      // User has denied third-party cookie access, so we'll
      // need to do something else
    }
  });
}



  return (
    <div>
      <button className='m-auto bg-red-500 p-5' >storage</button>
<br />
      <button className='m-auto bg-red-500 p-5 my-5'  onClick={handelaccessstorage}>access localstorage</button>


      <button className='m-auto bg-red-500 p-5 my-5' onClick={handleCookieAccess}>access cookie 1</button>

      <button className='m-auto bg-red-500 p-5 my-5' onClick={secondaccess}>access cookie 2</button>

    <button className='m-auto bg-green-500 p-5 my-5' onClick={costumCookie}>costumCookie</button>

      
    </div>
  )
}

export default RequestStorage
