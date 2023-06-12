import PhoneIcon from '@/components/icons/phone.svg';
import Image from 'next/image';
import { trackLinkClick } from '../utils/analytics';
interface WidgetProps {
  size: 1 | 2 | 4
}

interface PhoneProps {
  url: string
  text: string
}


export const PhoneWidget = ({size, url, text}: WidgetProps & PhoneProps) => {

  return (
    <>
      <a onClick={() => trackLinkClick("phone-call-button")} rel="noreferrer" target='_blank' href={url} className="w-full h-full flex justify-center items-center gap-3 transition-all">
        <div className='w-6 h-6 flex justify-center items-center'>
            <Image src={PhoneIcon} alt={text}></Image>
          </div>
        <p className="text-md">{ text}</p>
      </a>
    </>
  )



}

