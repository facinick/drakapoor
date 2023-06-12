declare const gtag: UniversalAnalytics.ga;

declare namespace UniversalAnalytics {
  interface ga {
    (...args: any[]): void;
    q?: any[];
  }
}