
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

  const { image, bgColor, fgColor } = getBrandStuff(brand)
  let href = url
  let domain = extractDomain(href)
  if (!url) {
    href = "#"
    domain = "drakapoor.com"
  }

  switch (size) {
    case 1:

      if (!url) {
        return (<>
          <span className="w-full h-full flex justify-center items-center gap-3 transition-all">
            <div className='w-8 h-8 flex justify-center items-center'>
              <Image src={image} alt={text}></Image>
            </div>
            <p className="text-md trunc1">{text}</p>
          </span>
        </>)
      }

      return (<>
        <a rel="noreferrer" target='_blank' href={href} className="w-full h-full flex justify-center items-center gap-3 transition-all">
          <div className='w-8 h-8 flex justify-center items-center'>
            <Image src={image} alt={text}></Image>
          </div>
          <p className="text-md trunc1">{text}</p>
        </a>
      </>)
    case 2:

      if (!url) {
        return (<>
          <span style={{ backgroundColor: bgColor }} className={`p-4 w-full h-full flex justify-center items-center gap-3 transition-all bg-[${bgColor}]`}>
            <div className='w-[140px] h-full'>
              <div className='rounded-lg overflow-hidden w-10 h-10 flex justify-center items-center'>
                <Image src={image} alt={text}></Image>
              </div>
              <div className='mt-3'>
                <div className='text-xs max-h-8 whitespace-pre-wrap trunc2' >{text}</div>
                <div className='mt-1 text-xs text-domain  whitespace-pre-wrap'>{domain}</div>
              </div>
            </div>
            <div className="rounded-2xl h-full aspect-[1.3/1] flex justify-center items-center overflow-hidden">
              <Image
                className='w-full h-full object-cover'
                src={cover}
                width={undefined}
                height={undefined}
                alt={text}
              />
            </div>
          </span>
        </>)
      }

      return (<>
        <a style={{ backgroundColor: bgColor }} rel="noreferrer" target='_blank' href={href} className={`p-4 w-full h-full flex justify-center items-center gap-3 transition-all bg-[${bgColor}]`}>
          <div className='w-[140px] h-full'>
            <div className='rounded-lg overflow-hidden w-10 h-10 flex justify-center items-center'>
              <Image src={image} alt={text}></Image>
            </div>
            <div className='mt-3'>
              <div className='text-xs max-h-8 whitespace-pre-wrap trunc2' >{text}</div>
              <div className='mt-1 text-xs text-domain  whitespace-pre-wrap'>{domain}</div>
            </div>
          </div>
          <div className="rounded-2xl h-full aspect-[1.3/1] flex justify-center items-center overflow-hidden">
            <Image
              className='w-full h-full object-cover'
              src={cover}
              width={undefined}
              height={undefined}
              alt={text}
            />
          </div>
        </a>
      </>)
    case 4:
      return <>WIP</>
    default:
      return <>WIP</>
  }
}

