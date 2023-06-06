"use client"
import Item from '@/components/bento/Item';
import LaptopLayout from '@/components/bento/LaptopLayout';
import MobileLayout from '@/components/bento/MobileLayout';
import Section from '@/components/bento/Section';
import { useState, useEffect } from 'react';
import Book1 from '@/components/icons/book1.jpg'
import Book2 from '@/components/icons/book2.jpg'
import { ExternalLinkWidget } from '@/components/widgets/ExternalLink';
import { ExternalNonLinkWidget } from '@/components/widgets/ExternalNonLink';
import { PhoneWidget } from '@/components/widgets/Phone';
import { TextWidget } from '@/components/widgets/Text';
import { WhatsappWidget } from '@/components/widgets/Whatsapp';
import Head from 'next/head';

export const SEO = () => (<Head>
  {/* SEO meta tags */}
  <title>Dr A Kapoor's Diabetes Control Clinic</title>
  <meta name="description" content="Provide a concise and compelling description of the doctor and their services." />
  <meta name="revisit-after" content="1 days"></meta>
  <meta name="keywords" content="Diabetes, Diabetologist, Mumbai, Best Diabates Doctor"></meta>
  <meta name="robots" content="index, follow"></meta>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
  <meta name="author" content="Dr Anuradha Kapoor"></meta>
  <meta name="theme-color" content="#000" />
  <link rel="manifest" href="/manifest.json" />
  <link rel="shortcut icon" href="/favicon.ico" />
  <link rel="apple-touch-icon" href="/apple-icon.png"></link>
  {/* <!-- Contact/</meta> information --> */}
  <link rel="canonical" href="https://drakapoor.com"></link>
  <link rel="whatsapp" href="https://wa.me/+919820381015"></link>
  <link rel="whatsapp-catalogue" href="https://wa.me/c/919820381015"></link>
  <link rel="phone" href="tel:+919820381015"></link>
  <link rel="email" href="mailto:dranuradhakapoor123@gmail.com"></link>

  {/* <!-- Social profiles --> */}
  <link rel="me" href="https://www.linkedin.com/in/drakapoor"></link>
  <link rel="justdial" href="https://www.justdial.com/Mumbai/Dr-A-Kapoors-Diabetes-Control-Clinic-Lifeline-Medicare-Hospital-Goregaon-West-MTNL-Goregaon-West-Goregaon-West/022PXX22-XX22-160811174833-F2M7_BZDET" hrefLang="en"></link>
  <link rel="lybrate" href="https://www.lybrate.com/mumbai/doctor/dr-anuradha-kapoor-diabetologist" hrefLang="en"></link>
  <link rel="practo" href="https://www.practo.com/mumbai/clinic/dr-anuradha-kapoor-s-diabetes-care-clinic-malad-2" hrefLang="en"></link>  
  {/* Open Graph meta tags */}
  <meta property="og:title" content="Dr A Kapoor's Diabetes Control Clinic" />
  {/* TODO */}
  <meta property="og:description" content="Provide a concise and compelling description of the doctor and their services." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://drakapoor.com" />
  {/* TODO */}
  <meta property="og:image" content="https://yourwebsite.com/images/doctor-thumbnail.jpg" />

  {/* Schema.org structured data */}
  <script type="application/ld+json" dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalOrganization",
      "name": "Dr A Kapoor's Diabetes Control Clinic",
      "url": "https://drakapoor.com",
      /* TODO */
      "logo": "https://yourwebsite.com/logo.png",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lifeline Medicare Hospital, Dlh Park, Ground Floor, Swami Vivekananda Rd, near MTNL Signal, Sunder Nagar, Goregaon West",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400062",
        "addressCountry": "India"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+919820381015",
        "email": "dranuradhakapoor123@gmail.com",
        "contactType": "customer support"
      },
      "openingHours": "Mo-Fr 09:00-20:00",
      /* TODO */
      "image": "https://yourwebsite.com/images/doctor-thumbnail.jpg",
      "sameAs": [
        "https://www.justdial.com/Mumbai/Dr-A-Kapoors-Diabetes-Control-Clinic-Lifeline-Medicare-Hospital-Goregaon-West-MTNL-Goregaon-West-Goregaon-West/022PXX22-XX22-160811174833-F2M7_BZDET",
        "https://www.lybrate.com/mumbai/doctor/dr-anuradha-kapoor-diabetologist",
        "https://www.practo.com/mumbai/clinic/dr-anuradha-kapoor-s-diabetes-care-clinic-malad-2"
      ]
    })
  }} />

  /* TODO */
  {/* Favicon */}
  <link rel="icon" type="image/png" href="https://yourwebsite.com/favicon.png" />

  {/* Additional Open Graph tags */}
  <meta property="og:site_name" content="Your Clinic Name" />
  <meta property="og:locale" content="en_US" />
  {/* <meta property="og:see_also" content="https://yourwebsite.com/additional-link" /> */}

  {/* Additional Schema.org tags */}
  <meta itemProp="name" content="Dr A Kapoor's Diabetes Control Clinic" />
  <meta itemProp="description" content="Provide a concise and compelling description of the doctor and their services." />
  <meta itemProp="image" content="https://yourwebsite.com/images/doctor-thumbnail.jpg" />
  <meta itemProp="telephone" content="+919820381015" />
  <meta itemProp="email" content="dranuradhakapoor123@gmail.com" />
  <meta itemProp="address" content="Lifeline Medicare Hospital, Dlh Park, Ground Floor, Swami Vivekananda Rd, near MTNL Signal, Sunder Nagar, Goregaon West" />
  <meta itemProp="openingHours" content="Mo-Fr 09:00-20:00" />
  <meta itemProp="sameAs" content="https://www.justdial.com/Mumbai/Dr-A-Kapoors-Diabetes-Control-Clinic-Lifeline-Medicare-Hospital-Goregaon-West-MTNL-Goregaon-West-Goregaon-West/022PXX22-XX22-160811174833-F2M7_BZDET" />
  <meta itemProp="sameAs" content="https://www.lybrate.com/mumbai/doctor/dr-anuradha-kapoor-diabetologist" />
  <meta itemProp="sameAs" content="https://www.practo.com/mumbai/clinic/dr-anuradha-kapoor-s-diabetes-care-clinic-malad-2" />
</Head>)

export default function Home() {

   const [isMobileLayout, setIsMobileLayout] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileLayout(document.body.clientWidth < 1210);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sectionWidth = isMobileLayout ? 1 : 2

  const data = (<>
    <Item height={1}><WhatsappWidget url={'https://wa.me/919820381015'} text='Appointment on WhatsApp!' size={1} /></Item>
    <Item height={1}><PhoneWidget size={1} /></Item>
    <Item height={2}>Location Widget 2</Item>
    <Item height={1}><ExternalNonLinkWidget size={1} text={'+917039647409 Botim (UAE)'} brand={'botim'} /></Item>
    <Item height={1}><WhatsappWidget url={'https://wa.me/c/919820381015'} text='Offered Services on WhatsApp!' size={1} /></Item>
    <Section width={sectionWidth}><TextWidget text='References' size={1} /></Section>
    <Item height={2}><ExternalLinkWidget cover={""} size={2} url={'https://www.justdial.com/Mumbai/Dr-A-Kapoors-Diabetes-Control-Clinic-Lifeline-Medicare-Hospital-Goregaon-West-MTNL-Goregaon-West-Goregaon-West/022PXX22-XX22-160811174833-F2M7_BZDET'} text={'Dr Anuradha Kapoor, JustDial'} brand={'justdial'} /></Item>
    <Item height={2}><ExternalLinkWidget cover={""} size={2} url={'https://www.practo.com/mumbai/clinic/dr-anuradha-kapoor-s-diabetes-care-clinic-malad-2'} text={'Dr Anuradha Kapoor, Practo'} brand={'practo'} /></Item>
    <Item height={2}><ExternalLinkWidget cover={""} size={2} url={'https://www.linkedin.com/in/drakapoor'} text={'Dr Anuradha Kapoor, LinkedIn'} brand={'linkedin'} /></Item>
    <Item height={2}><ExternalLinkWidget cover={""} size={2} url={'https://www.lybrate.com/mumbai/doctor/dr-anuradha-kapoor-diabetologist'} text={'Dr Anuradha Kapoor, Lybrate'} brand={'lybrate'} /></Item>
    <Section width={sectionWidth}><TextWidget text='Dr Anuradha Kapoor MD, books for MBBS 📚' size={1} /></Section>
    <Item height={2}><ExternalLinkWidget cover={Book1} size={2} url={'https://www.amazon.in/Management-Diabetes-Mellitus-Vol-Complete-Practical-ebook/dp/B08951BB16'} text={'Diabetes Mellitus Book I'} brand={'amazon'} /></Item>
    <Item height={2}><ExternalLinkWidget cover={Book2} size={2} url={'https://www.amazon.in/Management-Diabetes-Mellitus-Vol-Complete-Practical-ebook/dp/B089515SN3'} text={'Diabetes Mellitus Book II'} brand={'amazon'} /></Item>
    <Section width={sectionWidth}><TextWidget text='Reviews' size={1} /></Section>
    <Item height={4}>Review wiget</Item>
    <Item height={4}>Review wiget</Item>
  </>)

  return (
    <>
      <SEO />
    <div id="home" className='flex justify-center'>
      {isMobileLayout && <MobileLayout>
        {data}
      </MobileLayout>}
      {!isMobileLayout && <LaptopLayout>
        {data}
      </LaptopLayout>}
      </div>
      </>
  )
}