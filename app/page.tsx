"use client"
import Item from '@/components/bento/Item';
import LaptopLayout from '@/components/bento/LaptopLayout';
import MobileLayout from '@/components/bento/MobileLayout';
import Section from '@/components/bento/Section';
import justdial from '@/components/covers/justdial.png';
import linkedin from '@/components/covers/linkedin.png';
import lybrate from '@/components/covers/lybrate.png';
import medicare from '@/components/covers/medicare.png';
import practo from '@/components/covers/practo.png';
import Faq from '@/components/faq/Faq';
import GoogleAnalyticsTag from '@/components/google_tracking/GoogleTag';
import Book1 from '@/components/icons/book1.jpg';
import Book2 from '@/components/icons/book2.jpg';
import { ExternalLinkWidget } from '@/components/widgets/ExternalLink';
import { PhoneWidget } from '@/components/widgets/Phone';
import { ReviewsCarousal } from '@/components/widgets/ReviewsCarousal';
import { TextWidget } from '@/components/widgets/Text';
import { WhatsappWidget } from '@/components/widgets/Whatsapp';
import useWindowSize from '@/lib/hooks/use-window-size';
import { isProd } from '@/lib/utils';
import { useEffect } from 'react';

export default function Home() {

  const { isDesktop, isMobile } = useWindowSize()

  const sectionWidth = isMobile ? 1 : 2

  const data = (<>
    <Item indicator height={1}><WhatsappWidget analyticsProps={{ eventName: "whatsapp_click" }} url={'https://wa.me/919820381015'} text='Appointment on WhatsApp' size={1} /></Item>
    <Section width={sectionWidth}><TextWidget tag='h2' text='Over 200+ ⭐️⭐️⭐️⭐️⭐️ Reviews on Google' size={1} /></Section>
    <Item interactionAnimation={false} height={4}><ReviewsCarousal /></Item>
    <Item height={1}><PhoneWidget analyticsProps={{ eventName: "phone_click" }} url={'tel:+919820381015'} text={"Appointment on Phone"} size={1} /></Item>
    <Item height={2}><ExternalLinkWidget analyticsProps={{ eventName: "location_click" }} cover={medicare} size={2} url={'https://goo.gl/maps/ruWqJkW9XzQSkHtcA'} text={'Lifeline Medicare Hospital'} brand={'googlebusiness'} /></Item>
    {/* <Item height={1}><ExternalLinkWidget analyticsProps={{ eventName: "botim_click" }} size={1} text={'+91 703,964,7409 Botim (UAE)'} brand={'botim'} url={''} cover={undefined} /></Item> */}
    <Item height={1}><WhatsappWidget analyticsProps={{ eventName: "whatsapp_catalog_click" }} url={'https://wa.me/c/919820381015'} text='Offered Services on WhatsApp' size={1} /></Item>
    <Section width={sectionWidth}><TextWidget tag='h2' text='Social' size={1} /></Section>
    <Item height={2}><ExternalLinkWidget analyticsProps={{ eventName: "practo_click" }} cover={practo} size={2} url={'https://www.practo.com/mumbai/clinic/dr-anuradha-kapoor-s-diabetes-care-clinic-malad-2'} text={'Dr Anuradha Kapoor, Practo'} brand={'practo'} /></Item>
    <Item height={2}><ExternalLinkWidget analyticsProps={{ eventName: "linkedin_click" }} cover={linkedin} size={2} url={'https://www.linkedin.com/in/drakapoor'} text={'Dr Anuradha Kapoor, LinkedIn 15k Followers'} brand={'linkedin'} /></Item>
    <Item height={2}><ExternalLinkWidget analyticsProps={{ eventName: "lybrate_click" }} cover={lybrate} size={2} url={'https://www.lybrate.com/mumbai/doctor/dr-anuradha-kapoor-diabetologist'} text={'Dr Anuradha Kapoor, Lybrate'} brand={'lybrate'} /></Item>
    <Item height={2}><ExternalLinkWidget analyticsProps={{ eventName: "justdial_click" }} cover={justdial} size={2} url={'https://www.justdial.com/Mumbai/Dr-A-Kapoors-Diabetes-Control-Clinic-Lifeline-Medicare-Hospital-Goregaon-West-MTNL-Goregaon-West-Goregaon-West/022PXX22-XX22-160811174833-F2M7_BZDET'} text={'Dr Anuradha Kapoor, JustDial'} brand={'justdial'} /></Item>
    <Section width={sectionWidth}><TextWidget tag='h2' text='Dr Anuradha Kapoor MD, books for MBBS 📚' size={1} /></Section>
    <Item height={2}><ExternalLinkWidget analyticsProps={{ eventName: "amazon_book1_click" }} cover={Book1} size={2} url={'https://www.amazon.in/Management-Diabetes-Mellitus-Vol-Complete-Practical-ebook/dp/B08951BB16'} text={'Diabetes Mellitus Book I'} brand={'amazon'} /></Item>
    <Item height={2}><ExternalLinkWidget analyticsProps={{ eventName: "amazon_book2_click" }} cover={Book2} size={2} url={'https://www.amazon.in/Management-Diabetes-Mellitus-Vol-Complete-Practical-ebook/dp/B089515SN3'} text={'Diabetes Mellitus Book II'} brand={'amazon'} /></Item>

    {/* <Item height={4}><ImageWidget image={googlerating1} description={'google rating 5'} /></Item>
    <Item height={4}><ImageWidget image={googlerating2} description={'google rating 5'} /></Item> */}
    {/* <Section width={sectionWidth}><TextWidget tag='h2' text='Short videos 🎬' size={1} /></Section>
    <Item height={2}><ExternalLinkWidget cover={youtube1} size={2} url={'https://www.youtube.com/watch?v=SeR_31iwrA8&t=6s'} text={'Meet Dr Anuradha Kapoor'} brand={'youtube'} /></Item>
    <Item height={2}><ExternalLinkWidget cover={youtube2} size={2} url={'https://www.youtube.com/watch?v=L0IzTiAa4oc'} text={'Dr. Anuradha Kapoor (Strong Bones)'} brand={'youtube'} /></Item>
    <Item height={2}><ExternalLinkWidget cover={youtube3} size={2} url={'https://www.youtube.com/watch?v=jKG2YxQKRhA&t=30s'} text={'What happens if your Sugar level is not under control?'} brand={'youtube'} /></Item>
    <Item height={2}><ExternalLinkWidget cover={youtube2} size={2} url={'https://www.youtube.com/watch?v=o4sp_BqsXks'} text={'Vitamin D3 for bones'} brand={'youtube'} /></Item> */}
    {/* <Section width={sectionWidth}><TextWidget tag='h2' text='Diabetes Resources' size={1} /></Section>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://www.facebook.com/diabetesdaily/'} text={'Diabetes Daily'} brand={'facebook'} /></Item>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://www.facebook.com/diabetesuk/'} text={'Diabetes UK'} brand={'facebook'} /></Item>
    <Section width={sectionWidth}><TextWidget tag='h2' text='Special thanks 🙏🏻' size={1} /></Section>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://www.divislabs.com/'} text={'Divis Pharma Industry'} brand={'divis'} /></Item>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://www.lupin.com/'} text={'Lupin'} brand={'lupin'} /></Item>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://www.cipla.com/home'} text={'Cipla'} brand={'cipla'} /></Item>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://www.drreddys.com/'} text={'Dr Reddys Labs'} brand={'reddy'} /></Item>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://www.torrentpharma.com/'} text={'Torrent Pharmaceuticals'} brand={'torrent'} /></Item>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://zyduslife.com/zyduslife/'} text={'Zydus'} brand={'zydus'} /></Item>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://apollosugar.com/'} text={'Apollo Sugar Clinic'} brand={'apollo'} /></Item>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://www.1mg.com/'} text={'Tata 1mg'} brand={'1mg'} /></Item>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://www.amazon.in/ref=ap_frn_logo'} text={'Amazon Diabetic Supplies'} brand={'amazon'} /></Item>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://pharmeasy.in/'} text={'PharmEasy Online Pharmacy'} brand={'pharmeasy'} /></Item>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://www.abbott.co.in/'} text={'Abott India Ltd'} brand={'abott'} /></Item>
    <Section width={sectionWidth}><TextWidget tag='h2' text='Medical insurance providers' size={1} /></Section>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://www.starhealth.in/'} text={'Star Health Insurance'} brand={'startinsurance'} /></Item>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://www.hdfcergo.com/'} text={'HDFC ERGO Insurance'} brand={'hdfcergo'} /></Item>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://www.nivabupa.com/'} text={'Niva Bupa Health Insurance'} brand={'bupa'} /></Item>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://www.icicilombard.com/health-insurance/health-advantedge-insurance-for-family?utm_source=google_search&utm_medium=CPC&utm_campaign=Health_Brand_Core_HI_Core_Exact_18.11.2022&utm_adgroup=Core&utm_keyword=icici%20health%20insurance&utm_device=c&utm_ad=657155057160&utm_placement=&utm_network=g&utm_matchtype=e&gad=1&gclid=Cj0KCQjwj_ajBhCqARIsAA37s0wxPjCD_fAY0OUZt_96XTMa2gG6aCBSaIQyZ3b17ZbOqyNULyf5aGgaApHcEALw_wcB'} text={'ICICI Lombard Health Insurance'} brand={'icici'} /></Item>
    <Section width={sectionWidth}><TextWidget tag='h2' text='Bankers' size={1} /></Section>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://www.icicibank.com/'} text={'ICICI Netbanking Services'} brand={'icici'} /></Item>
    <Item height={1}><ExternalLinkWidget cover={''} size={1} url={'https://www.onlinesbi.sbi/'} text={'State Bank of India'} brand={'sbi'} /></Item> */}
  </>)

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(function (registration) {
          // console.log('Registration successful, scope is:', registration.scope);
        })
        .catch(function (error) {
          console.log('Service worker registration failed, error:', error);
        });
    }
  }, [])

  return (
    <>
      {isProd() && <GoogleAnalyticsTag />}
      {isProd() && <Faq />}
      <div id="home" className='flex justify-center'>
        {isMobile && <MobileLayout>
          {data}
        </MobileLayout>}
        {isDesktop && <LaptopLayout>
          {data}
        </LaptopLayout>}
      </div>
    </>
  )
}