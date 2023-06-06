import Profile from "./Profile"

export default function LaptopLayout({
  children,
}: {
  children?: React.ReactNode
}) {
  return (
    <>
      <div className='flex justify-between w-full max-w-7xl'>
        <div className='w-[360px]'>
          <header className="sticky top-0 pt-16 pr-0 pb-16 pl-16">
            <Profile iconSize="large"/> 
          </header>
        </div>
        <div className='w-[720px] mt-16 mr-16 mb-16 ml-0'>
            <main className='grid grid-cols-2 '>
              {children}
            </main>
        </div>
      </div>
    </>
  )
}
