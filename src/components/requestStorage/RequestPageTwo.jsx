"use client"
import { useState, useEffect } from 'react';

const StorageAccessExample = () => {
  const [permissionStatus, setPermissionStatus] = useState(null);

  useEffect(() => {
    // Check the current permission status for storage access
    window.navigator.permissions.query({ name: 'storage-access' })
      .then((permissionStatus) => {
        setPermissionStatus(permissionStatus);
        console.log('Storage permission status:', permissionStatus.state);
      })
      .catch((error) => {
        console.error('Error checking storage permission:', error);
      });
  }, []);

  const requestStorageAccess = () => {
    // Request storage access
    
    window.navigator.permissions.requestPermission({ name: 'storage-access' })
      .then((permissionStatus) => {
        setPermissionStatus(permissionStatus);
        if (permissionStatus === 'granted') {
          // Permission granted, you can now access cookies and other storage
          console.log('Storage access granted!');
          console.log(document.cookie); // Access cookies
        } else {
          // Permission denied or revoked
          console.error('Storage access denied');
        }
      })
      .catch((error) => {
        console.error('Error requesting storage access:', error);
      });
  };

  return (
    <div>
      <h1>Storage Access Example</h1>
      {permissionStatus && (
        <p>Current storage permission status: {permissionStatus.state}</p>
      )}
      <button onClick={requestStorageAccess}>Request Storage Access</button>
    </div>
  );
};

export default StorageAccessExample;