
import Image from 'next/image';
import { BRANDS, getBrandStuff } from '../utils/constants';
import { extractDomain } from '../utils/string';

interface WidgetProps {
  size: 1 | 2 | 4
}

interface ExternalLinkProps {
  url: string
  text: string
  brand: BRANDS
  cover: any
}

export const ExternalLinkWidget = ({ cover, size, url, text, brand }: WidgetProps & ExternalLinkProps) => {

  let image: string = ""
  const { svg, bgColor, fgColor } = getBrandStuff(brand)
  let domain: string = extractDomain(url)

  return (
    <>
      <a style={{backgroundColor: bgColor}} rel="noreferrer" target='_blank' href={url} className={`p-4 w-full h-full flex justify-center items-center gap-3 transition-all bg-[${bgColor}]`}>
        <div className='w-[140px] h-full'>
          <div className='rounded-lg overflow-hidden w-10 h-10 flex justify-center items-center'>
            <Image src={svg} alt={text}></Image>
          </div>
          <div className='mt-3'>
            <div className='text-xs max-h-8 whitespace-pre-wrap' >{text}</div>
            <div className='mt-1 text-xs text-domain  whitespace-pre-wrap'>{domain}</div>
          </div>
        </div>
        <div className="h-full aspect-[1.3/1] flex justify-center items-center overflow-hidden">
          <Image
            objectFit='cover'
            src={cover}
              width={undefined}
              height={undefined}
            alt={text}
          />
        </div>
      </a>
    </>
  )



}

