import PhoneIcon from '@/components/icons/phone.svg'
import Image from 'next/image';
interface WidgetProps {
  size: 1 | 2 | 4
}

export const PhoneWidget = ({size}: WidgetProps) => {

  return (
    <>
      <a rel="noreferrer" target='_blank' href='tel:+917039647409' className="w-full h-full flex justify-center items-center gap-3 transition-all">
        <div className='w-6 h-6 flex justify-center items-center'>
            <Image src={PhoneIcon} alt={'Appointment on Phone'}></Image>
          </div>
        <p className="text-md">Appointment on Phone</p>
      </a>
    </>
  )



}

