interface AnalyticsEventObject {
    event_category: 'Link';
    event_label: string;
    data?: Record<string, string>;
  }
  

function trackLinkClick(linkName: string, data?: Record<string, string>) {
    const eventObject: AnalyticsEventObject = {
        'event_category': 'Link',
        'event_label': linkName
      };
    
      if (data) {
        eventObject['data'] = data;
      }
    
      gtag('event', 'link_click', eventObject);
  }

export { trackLinkClick };
export type { AnalyticsEventObject };

