import linkedin from '../icons/linkedin.svg'
import link from '../icons/link.svg'
import practo from '../icons/practo.png'
import amazon from '../icons/amazon.svg'
import botim from '../icons/botim.png'
import justdial from '../icons/justdial.svg'
import whatsapp from '../icons/whatsapp.svg'

export type BRANDS = 'justdial' | 'amazon' | 'linkedin' | 'practo' | 'whatsapp' | 'botim' | 'lybrate'

export const getBrandStuff = (brand: BRANDS) => {

  switch (brand) {
    case 'linkedin': {
      return {
        bgColor: "#ECF4F8",
        fgColor: "#095187",
        svg: linkedin,
        coverSrc: ""
      }
    }
    case 'whatsapp': {
      return {
        bgColor: "#ECF4F8",
        fgColor: "#095187",
        svg: whatsapp,
        coverSrc: ""
      }
    }
    case 'justdial': {
      return {
        bgColor: "#f2660017",
        fgColor: "#F26600",
        svg: justdial,
        coverSrc: ""
      }
    }
      
    case 'botim': {
      return {
        bgColor: "rgba(220,238,255,1)",
        fgColor: "#41A0EF",
        svg: botim,
        coverSrc: ""
      }
    }
      
    case 'lybrate': {
      return {
        bgColor: "",
        fgColor: "#A3000B",
        svg: link,
        coverSrc: ""
      }
    }
      
    case 'amazon': {
      return {
        bgColor: "rgba(255, 209, 140, 0.63)",
        fgColor: "",
        svg: amazon,
        coverSrc: ""
      }
    }

    case 'practo': {
      return {
        bgColor: "",
        fgColor: "#1D1E72",
        svg: practo,
        coverSrc: ""
      }
    }

    default: {
      return {
        bgColor: "",
        fgColor: "",
        svg: link,
        coverSrc: ""
      }
    }
  }

}