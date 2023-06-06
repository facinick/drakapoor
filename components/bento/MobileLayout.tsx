import Profile from "./Profile"

export default function MobileLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <div className='flex justify-between items-center w-full max-w-sm flex-col'>
        <div className='w-[360px]'>
          <header className="pt-12 pr-6 pl-6">
              <Profile iconSize="small" />
          </header>
        </div>
        <div className='w-[360px]'>
          <main className='grid grid-cols-1 place-items-center pr-6 pl-6 pb-12'>
              {children}
          </main>
        </div>
      </div>
    </>
  )
}
