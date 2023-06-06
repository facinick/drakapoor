export default function Section({
  children,
  width
}: {
    children?: React.ReactNode
  width: 1 | 2
  }) {
  
  switch (width) {
    case 1: return (<div className={`h-full-calc p-4 overflow-hidden w-[360px] aspect-[4/1] col-span-1 row-span-1`}>
      <div className={`p-4 rounded-3xl w-full h-full flex items-center justify-center`} >
       {children}
      </div>
    </div>);
    case 2: return (<div className={`h-full-calc p-4 overflow-hidden w-[720px] aspect-[8/1] col-span-2 row-span-1`}>
      <div className={`p-4 rounded-3xl w-full h-full flex items-center justify-center`} >
       {children}
      </div>
    </div>);
  }
  }


