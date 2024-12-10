import React, { useEffect } from 'react';

const Tawk = () => {
  useEffect(() => {
    // Create script element
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    var s1 = document.createElement("script");
    var s0 = document.getElementsByTagName("script")[0];

    // Set script attributes
    s1.async = true;
    s1.src = 'https://embed.tawk.to/66e2761450c10f7a00a85c6f/1i7i9qgb7';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');

    // Insert script into DOM
    s0.parentNode.insertBefore(s1, s0);

    // Cleanup script when component unmounts
    return () => {
      // Optionally handle cleanup if necessary
      const tawkScript = document.querySelector('script[src="https://embed.tawk.to/66e2761450c10f7a00a85c6f/1i7i9qgb7"]');
      if (tawkScript) {
        tawkScript.remove();
      }
    };
  }, []);

  return null; // No UI element is rendered
};

export default Tawk;
