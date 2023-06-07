import linkedin from '../icons/linkedin.svg'
import link from '../icons/link.svg'
import practo from '../icons/practo.png'
import amazon from '../icons/amazon.svg'
import botim from '../icons/botim.png'
import justdial from '../icons/justdial.svg'
import whatsapp from '../icons/whatsapp.svg'
import mg from '../icons/1mg.png'
import abott from '../icons/abott.png'
import apollo from '../icons/apollo.png'
import bupa from '../icons/bupa.png'
import cipla from '../icons/cipla.png'
import divis from '../icons/divis.png'
import googlebusiness from '../icons/googlebusiness.png'
import hdfcergo from '../icons/hdfcergo.png'
import icici from '../icons/icici.png'
import lupin from '../icons/lupin.svg'
import reddy from '../icons/reddy.png'
import pharmeasy from '../icons/pharmeasy.png'
import torrent from '../icons/torrent.png'
import sbi from '../icons/sbi.png'
import youtube from '../icons/youtube.png'
import startinsurance from '../icons/startinsurance.png'
import zydus from '../icons/zydus.png'
import facebook from '../icons/facebook.png'

export type BRANDS = 'facebook' | 'youtube' | '1mg' | 'abott' | 'apollo' | 'bupa' | 'cipla' | 'divis' | 'hdfcergo' | 'icici' | 'lupin' | 'pharmeasy' | 'reddy' | 'sbi' | 'startinsurance' | 'torrent' | 'zydus' | 'justdial' | 'googlebusiness' | 'amazon' | 'linkedin' | 'practo' | 'whatsapp' | 'botim' | 'lybrate'

export const getBrandStuff = (brand: BRANDS) => {

  switch (brand) {
    case 'linkedin': {
      return {
        bgColor: "#ECF4F8",
        fgColor: "#095187",
        image: linkedin,
        coverSrc: ""
      }
    }

    case 'youtube': {
      return {
        bgColor: "#FEE2E2",
        fgColor: "",
        image: youtube,
        coverSrc: ""
      }
    }
    case '1mg': {
      return {
        bgColor: "",
        fgColor: "",
        image: mg,
        coverSrc: ""
      }
    }
    case 'abott': {
      return {
        bgColor: "",
        fgColor: "",
        image: abott,
        coverSrc: ""
      }
    }
    case 'apollo': {
      return {
        bgColor: "",
        fgColor: "",
        image: apollo,
        coverSrc: ""
      }
    }
    case 'bupa': {
      return {
        bgColor: "",
        fgColor: "",
        image: bupa,
        coverSrc: ""
      }
    }
    case 'cipla': {
      return {
        bgColor: "",
        fgColor: "",
        image: cipla,
        coverSrc: ""
      }
    }
    case 'divis': {
      return {
        bgColor: "",
        fgColor: "",
        image: divis,
        coverSrc: ""
      }
    }
    case 'hdfcergo': {
      return {
        bgColor: "",
        fgColor: "",
        image: hdfcergo,
        coverSrc: ""
      }
    }
      
    case 'facebook': {
      return {
        bgColor: "",
        fgColor: "",
        image: facebook,
        coverSrc: ""
      }
    }
    case 'icici': {
      return {
        bgColor: "",
        fgColor: "",
        image: icici,
        coverSrc: ""
      }
    }
    case 'lupin': {
      return {
        bgColor: "",
        fgColor: "",
        image: lupin,
        coverSrc: ""
      }
    }
    case 'pharmeasy': {
      return {
        bgColor: "",
        fgColor: "",
        image: pharmeasy,
        coverSrc: ""
      }
    }
    case 'reddy': {
      return {
        bgColor: "",
        fgColor: "",
        image: reddy,
        coverSrc: ""
      }
    }
    case 'sbi': {
      return {
        bgColor: "",
        fgColor: "",
        image: sbi,
        coverSrc: ""
      }
    }
    case 'startinsurance': {
      return {
        bgColor: "",
        fgColor: "",
        image: startinsurance,
        coverSrc: ""
      }
    }
    case 'torrent': {
      return {
        bgColor: "",
        fgColor: "",
        image: torrent,
        coverSrc: ""
      }
    }
    case 'zydus': {
      return {
        bgColor: "",
        fgColor: "",
        image: zydus,
        coverSrc: ""
      }
    }
    case 'whatsapp': {
      return {
        bgColor: "#FBF2E6",
        fgColor: "#095187",
        image: whatsapp,
        coverSrc: ""
      }
    }
    case 'googlebusiness': {
      return {
        bgColor: "#ECF4F8",
        fgColor: "#095187",
        image: googlebusiness,
        coverSrc: ""
      }
    }
    case 'justdial': {
      return {
        bgColor: "#f2660017",
        fgColor: "#F26600",
        image: justdial,
        coverSrc: ""
      }
    }

    case 'botim': {
      return {
        bgColor: "rgba(220,238,255,1)",
        fgColor: "#41A0EF",
        image: botim,
        coverSrc: ""
      }
    }

    case 'lybrate': {
      return {
        bgColor: "",
        fgColor: "#A3000B",
        image: link,
        coverSrc: ""
      }
    }

    case 'amazon': {
      return {
        bgColor: "rgba(255, 209, 140, 0.63)",
        fgColor: "",
        image: amazon,
        coverSrc: ""
      }
    }

    case 'practo': {
      return {
        bgColor: "",
        fgColor: "#1D1E72",
        image: practo,
        coverSrc: ""
      }
    }

    default: {
      return {
        bgColor: "",
        fgColor: "",
        image: link,
        coverSrc: ""
      }
    }
  }

}