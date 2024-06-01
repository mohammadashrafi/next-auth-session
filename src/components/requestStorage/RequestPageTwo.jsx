"use client"
import { useState, useEffect } from 'react';

const StorageAccessExample = () => {
  const [cookieAccess, setCookieAccess] = useState(false);
  const [storageType, setStorageType] = useState('cookie');
  const [inIframe, setInIframe] = useState(false);

  useEffect(() => {
    // Check if the content is loaded in an iframe
    setInIframe(window.self !== window.top);

    // Check if we can access cookies or localStorage
    checkStorageAccess();
  }, []);

  const checkStorageAccess = () => {
    try {
      // Try to read a test cookie
      const cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)test_cookie\s*\=\s*([^;]*).*$)|^.*$/, "$1");
      setCookieAccess(cookieValue !== '');
      setStorageType('cookie');
    } catch (error) {
      // If we can't access cookies, try using localStorage
      try {
        // Try to access localStorage
        localStorage.setItem('test_key', 'test_value');
        localStorage.getItem('test_key');
        setCookieAccess(true);
        setStorageType('localStorage');
      } catch (error) {
        // If we can't access localStorage, set access to false
        setCookieAccess(false);
        setStorageType('none');
      }
    }
  };

  const requestAccess = () => {
    if (inIframe) {
      requestLocalStorageAccess();
    } else {
      requestCookieAccess();
    }
  };

  const requestCookieAccess = () => {
    try {
      // Try to set a test cookie
      document.cookie = 'test_cookie=test_value; path=/';
      checkStorageAccess();
      console.log('Cookie access granted!');
      console.log(document.cookie); // Access cookies
    } catch (error) {
      // If we can't set a cookie, log an error
      console.error('Error requesting cookie access:', error);
      setCookieAccess(false);
    }
  };

  const requestLocalStorageAccess = () => {
    try {
      // Try to access localStorage
      localStorage.setItem('test_key', 'test_value');
      localStorage.getItem('test_key');
      setCookieAccess(true);
      console.log('localStorage access granted!');
    } catch (error) {
      // If we can't access localStorage, log an error
      console.error('Error requesting localStorage access:', error);
      setCookieAccess(false);
    }
  };

  return (
    <div>
      <h1>Storage Access Example</h1>
      {cookieAccess ? (
        <p>Access granted using {storageType}!</p>
      ) : (
        <button className='bg-red-600 p-5 text-white' onClick={requestAccess}>Request Storage Access</button>
      )}
    </div>
  );
};

export default StorageAccessExample;