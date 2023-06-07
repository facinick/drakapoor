export default function Item({
  children,
  height,
}: {
  children?: React.ReactNode
    height: 1 | 2 | 4
  }) {


  switch (height) {
  case 1: return (<div className={`transition-transform h-full-calc  p-4 overflow-hidden w-[360px] aspect-[4/1] col-span-1 row-span-1 flex items-center justify-center`}>
      <div className={`active:scale-95 hover:outline outline-2 outline-button-dim transition-all border overflow-hidden rounded-3xl w-full h-full flex items-center justify-center`} >
       {children}
      </div>
    </div>);
    case 2: return (<div className={`transition-transform h-full-calc p-4 overflow-hidden w-[360px] aspect-[2/1] col-span-1 row-span-2`}>
      <div className={`active:scale-95 hover:outline outline-2 outline-button-dim transition-all border overflow-hidden rounded-3xl w-full h-full flex items-center justify-center`} >
       {children}
      </div>
    </div>);
    case 4: return (<div className={`transition-transform h-full-calc p-4 overflow-hidden w-[360px] aspect-[1/1] col-span-1 row-span-4`}>
      <div className={` active:scale-95 hover:outline outline-2 outline-button-dim transition-all border overflow-hidden rounded-3xl w-full h-full flex items-center justify-center`} >
       {children}
      </div>
    </div>);
  }
}
