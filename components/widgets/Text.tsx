interface WidgetProps {
  size: 1 | 2 | 4
}

interface TextProps {
  text: string
  tag?: "h1" | 'h2' | 'h3' | 'p'
}

export const TextWidget = ({ text, tag = 'p' }: WidgetProps & TextProps) => {

  switch (tag) {
    case 'h1': {
      return (<h1 className='w-full h-full items-center'>{text}</h1>)

    }
    case 'h2': {
      return (<h2 className='w-full h-full items-center'>{text}</h2>)

    }
    case 'h3': {
      return (<h3 className='w-full h-full items-center'>{text}</h3>)

    }
    case 'p': {
      return (<p className='w-full h-full items-center'>{text}</p>)
    }
    default: {
      return (<p className='w-full h-full items-center'>{text}</p>)

    }
  }
}

