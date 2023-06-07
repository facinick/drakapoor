import PhoneIcon from '@/components/icons/phone.svg'
import Image from 'next/image';
interface WidgetProps {
  image: any
  description: string
}

export const ImageWidget = ({image, description}: WidgetProps) => {
  return (
    <>
      <div className='w-full h-full flex justify-center items-center'>
        <Image src={image} alt={description}></Image>
      </div>
    </>
  )
}

