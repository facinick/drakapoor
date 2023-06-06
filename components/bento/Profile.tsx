import Image from 'next/image';
import ProfileImg from '../icons/profile.png'
export default function Profile({
  iconSize
}: {
    children?: React.ReactNode
  iconSize : 'large' | 'small'
  }) {
    
  return (
    <div>
      <div className={`w-28 h-28 xl:w-44 xl:h-44 rounded-full overflow-hidden`} id="profile-image">
        <figure>
        <Image
            src={ProfileImg}
              width={iconSize === 'large' ? 176 : 120}
              height={iconSize === 'large' ? 176 : 120}
            alt="Picture of the author"
          />
        </figure>
      </div>
      <div className='px-2 py-8'>
        <div className='text-3xl xl:text-4xl font-bold' id="profile-title">Dr Anuradha Kapoor</div>
        <div className='text-base xl:text-xl w-full h-auto mt-3 text-bio' id="profile-bio">
          <div className='w-full h-auto whitespace-pre-wrap'>
            <p className='mt-2'>👩‍⚕️ MD Diabetologist</p>
            <p className='mt-2'>🇮🇳 Goregaon, Mumbai, India.</p>
            <p className='mt-2'>Passonate about preventive diabetes care. MBBS, MD, PG Diploma in Clinical Endocrinology and Diabetes. Fellowship in Diabetes Apollo Hospital. Dedicated to leaste medicines, improved lifestyle and prevent organ complications.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
