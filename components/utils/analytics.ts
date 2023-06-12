interface AnalyticsProps {
    eventName: string
    data?: Record<string, string>
}

function trackLinkClick(eventName: string, data?: Record<string, string>) {
    
      if (data) {
        gtag('event', eventName, data);
      }

      else {
        gtag('event', eventName);
      }
  }

export { trackLinkClick, type AnalyticsProps };

