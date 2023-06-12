
import Image from 'next/image';
import { trackLinkClick } from '../utils/analytics';
import { getBrandStuff } from '../utils/constants';
import { WidgetProps } from './interface';

interface WhatsappProps {
  url: string
  text: string
}

export const WhatsappWidget = ({size, url, text}: WidgetProps & WhatsappProps) => {

  const { image, bgColor  } = getBrandStuff('whatsapp')

  return (
    <>
      <a onClick={() => trackLinkClick("whatsapp-button", {url})} style={{backgroundColor: bgColor}} rel="noreferrer" target='_blank' href={url} className="w-full h-full flex justify-center items-center gap-3 transition-all">
          <div className='w-10 h-10 flex justify-center items-center'>
            <Image src={image} alt={text}></Image>
          </div>
        <p className="text-md">{text}</p>
      </a>
    </>
  )



}

