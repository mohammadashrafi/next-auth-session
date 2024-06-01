"use client"
import { useState, useEffect } from 'react';

const IFrameCookieExample = () => {
  const [parentCookies, setParentCookies] = useState('');

  useEffect(() => {
    // Check if the content is loaded in an iframe
    if (window.self !== window.top) {
      // Get the parent document URL
      const parentUrl = document.referrer;

      // Extract the cookies from the parent document
      const parentCookies = getParentCookies(parentUrl);
      setParentCookies(parentCookies);
    }
  }, []);

  const getParentCookies = (url) => {
    try {
      // Create a temporary anchor element to extract the domain from the URL
      const a = document.createElement('a');
      a.href = url;
      const domain = a.hostname;

      // Get the cookies from the parent document
      const cookies = document.cookie
        .split(';')
        .filter((cookie) => cookie.trim().startsWith(`${domain}`))
        .join(';');

      return cookies;
    } catch (error) {
      console.error('Error getting parent cookies:', error);
      return '';
    }
  };

  return (
    <div>
      <h1>IFrame Cookie Example</h1>
      {parentCookies ? (
        <p>Parent cookies: {parentCookies}</p>
      ) : (
        <p>Loading parent cookies...</p>
      )}
    </div>
  );
};

export default IFrameCookieExample;