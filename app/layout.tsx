import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import { isDev, isProd } from "@/lib/utils";

export const metadata = {
  title: "Dr A Kapoor's Diabetes Control Clinic",
  description: "Diabetes remission, Diabetic complications, Blood sugar management, Weight loss management , Thyroid health management",
  manifest: '/manifest.json',
  viewport: {
      width: 'device-width',
      initialScale: 1,
  },
  openGraph: {
    title: "Dr A Kapoor's Diabetes Control Clinic",
    description: "Diabetes remission, Diabetic complications, Blood sugar management, Weight loss management , Thyroid health management",
    url: 'https://drakapoor.com',
    siteName: 'Dr A Kapoor Diabetes',
    images: [
      {
        url: 'https://drakapoor.com/logo.png',
        width: 512,
        height: 512,
      },
      {
        url: 'https://drakapoor.com/og_image.png',
        width: 1200,
        height: 800,
      },
      {
        url: 'https://drakapoor.com/icons/icon-192x192.png',
        width: 192,
        height: 192,
      },
      {
        url: 'https://drakapoor.com/icons/icon-256x256.png',
        width: 256,
        height: 256,
      },
      {
        url: 'https://drakapoor.com/icons/icon-384x384.png',
        width: 384,
        height: 384,
      },
      {
        url: 'https://drakapoor.com/icons/icon-512x512.png',
        width: 512,
        height: 512,
      },
    ],
    authors: ['Dr Anuradha Kapoor'],
    locale: 'en_US',
    type: 'website',
    icons: {
      icon: [{ url: '/logo.png' }],
      shortcut: ['/logo.png'],

      apple: [
        { url: '/apple-icon.png' },
        { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
        { url: '/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
        { url: '/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
        { url: '/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
        { url: '/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
        { url: '/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
        { url: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
        { url: '/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      ],
      android: [
        { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        { url: '/android-icon-192x192.png', sizes: '192x192', type: 'image/png' },
        { url: '/android-icon-144x144.png', sizes: '144x144', type: 'image/png' },
        { url: '/android-icon-96x96.png', sizes: '96x96', type: 'image/png' },
        { url: '/android-icon-72x72.png', sizes: '72x72', type: 'image/png' },
        { url: '/android-icon-48x48.png', sizes: '48x48', type: 'image/png' },
        { url: '/android-icon-36x36.png', sizes: '36x36', type: 'image/png' },
      ],
      other: {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-icon-precomposed.png',
      },
    },

     appleWebApp: {
      title: 'Dr Anuradha Kapoor Diabetes',
      statusBarStyle: 'white-translucent',
    },
     category: 'Health and Fitness',
  },

  metadataBase: new URL('https://drakapoor.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  creator: 'Shriyans Kapoor<facinick@gmail.com>',
  keywords: ["Diabetes", "Diabetologist", "Mumbai", "Best Diabates Doctor", "Diabetes reversal", "Weight loss management", "Thyroid management", "Blood sugar management", "Diabetes Care Physician and Thyroid specialist","Diabetes Mellitus Type 2","Type 2 Diabetes","Diabetes Type II","Thyroid Care","Type 1 diabetes","Juvenile diabetes","Insulin dependent diabetes","Insulin therapy","Diabetes Diet","Pre Diabetes","Insulin resistance","Blood glucose levels","Sugar levels","High blood pressure","Hypertension","Thyroid hormone resistance","Thyroid stimulating hormone","TSH","Hypothyroidism","Diabetes care","Thyroid care","Diabetes diet Management","Weight loss", "Preventive diabetes care","Reversal of diabetes","Diet and exercise packages","Lab services","Imaging services","Diabetes foot care"],
  authors: [{ name: 'Dr Anuradha Kapoor', url: 'https://drakapoor.com' }],
  referrer: 'origin-when-cross-origin',
  colorScheme: 'light',
  themeColor: 'white',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {
  
  console.log(`env: ${isProd()? "prod" : isDev() ? "dev" : "unknown"}`)
  
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        {children}
        {isProd() && <Analytics />}
      </body>
    </html>
  );
}
