export function extractDomain(url: string): string {

  if (!url) {
    return ""
  }

  try {
    const urlObj = new URL(url);
    return urlObj.hostname;
  } catch (error) {
    console.error('Invalid URL:', error);
    return url;
  }
}