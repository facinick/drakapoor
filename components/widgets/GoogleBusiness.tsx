
import Image from 'next/image';
import { getBrandStuff } from '../utils/constants';

interface WidgetProps {
  size: 1 | 2 | 4
}

interface GoogleBusinessProps {
  url: string
  text: string
}

export const GoogleBusinessWidget = ({size, url, text}: WidgetProps & GoogleBusinessProps) => {

  const { image  } = getBrandStuff('googlebusiness')

  return (
    <>
      <a rel="noreferrer" target='_blank' href={url} className="w-full h-full flex justify-center items-center gap-3 transition-all">
          <div className='w-10 h-10 flex justify-center items-center'>
            <Image src={image} alt={text}></Image>
          </div>
        <p className="text-md">{text}</p>
      </a>
    </>
  )



}

