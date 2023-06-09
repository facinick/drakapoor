
import Image from 'next/image';
import { trackLinkClick } from '../utils/analytics';
import { getBrandStuff } from '../utils/constants';
import { WidgetProps } from './interface';

interface GoogleBusinessProps {
  url: string
  text: string
}

export const GoogleBusinessWidget = ({size, url, text, analyticsProps}: WidgetProps & GoogleBusinessProps) => {

  const { image  } = getBrandStuff('googlebusiness')

  const onClick = () => {
    if(analyticsProps) {
      trackLinkClick(analyticsProps.eventName, analyticsProps.data)
    }
  }

  return (
    <>
      <a onClick={onClick} rel="noreferrer" target='_blank' href={url} className="w-full h-full flex justify-center items-center gap-3 transition-all">
          <div className='w-10 h-10 flex justify-center items-center'>
            <Image src={image} alt={text}></Image>
          </div>
        <p className="text-md">{text}</p>
      </a>
    </>
  )



}

