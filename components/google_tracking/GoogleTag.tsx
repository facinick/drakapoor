import { useEffect } from "react";

const GoogleAnalyticsTag = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-11198108742';
    script.async = true;

    const configScript = document.createElement('script');
    configScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'AW-11198108742/ltFcCMHy2qYYEMao1tsp', {
        'phone_conversion_number': '7039647409'
      });
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