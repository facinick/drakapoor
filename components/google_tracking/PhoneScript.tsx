import { useEffect } from "react";

const GooglePhoneScriptTag = () => {
  useEffect(() => {

    const script = document.createElement('script');
    script.innerHTML = `
      gtag('config', 'AW-11198108742/ltFcCMHy2qYYEMao1tsp', {
      'phone_conversion_number': '7039647409'
    });
    `;

    document.head.appendChild(script);

    return () => {
      // Cleanup the added script when the component unmounts
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

export default GooglePhoneScriptTag;