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