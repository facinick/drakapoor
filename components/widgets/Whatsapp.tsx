
import Image from 'next/image';
import { getBrandStuff } from '../utils/constants';

interface WidgetProps {
  size: 1 | 2 | 4
}

interface WhatsappProps {
  url: string
  text: string
}

export const WhatsappWidget = ({size, url, text}: WidgetProps & WhatsappProps) => {

  const { svg  } = getBrandStuff('whatsapp')

  return (
    <>
      <a target='_blank' href={url} className="w-full h-full flex justify-center items-center gap-3 transition-all">
          <div className='w-10 h-10 flex justify-center items-center'>
            <Image src={svg} alt={text}></Image>
          </div>
        <p className="text-md">{text}</p>
      </a>
    </>
  )



}

