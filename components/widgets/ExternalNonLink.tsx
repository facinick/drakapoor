
import Image from 'next/image';
import { BRANDS, getBrandStuff } from '../utils/constants';

interface WidgetProps {
  size: 1 | 2 | 4
}

interface ExternalNonLinkProps {
  text: string
  brand: BRANDS
}

export const ExternalNonLinkWidget = ({ size, text, brand }: WidgetProps & ExternalNonLinkProps) => {

  let image: string = ""
  const { svg, bgColor, fgColor } = getBrandStuff(brand)

  return (
      <>
      <a style={{backgroundColor: bgColor}} rel="noreferrer" target='_blank' href='tel:+919820381015' className="w-full h-full flex justify-center items-center gap-3 transition-all">
        <div className='rounded-lg overflow-hidden w-8 h-8 flex justify-center items-center'>
            <Image src={svg} alt={text}></Image>
          </div>
        <p className="text-md">{ text}</p>
      </a>
    </>
  )

}

