import { useEffect } from "react";

const GoogleAnalyticsTag = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-5SP2Q91069';
    script.async = true;

    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-5SP2Q91069');
    `;

    document.head.appendChild(script);
    document.head.appendChild(configScript);

    return () => {
      // Cleanup the added script when the component unmounts
      document.head.removeChild(script);
      document.head.removeChild(configScript);
    };
  }, []);

  return null;
};

export default GoogleAnalyticsTag;