import Image from "next/image";
import google from '../data/google.png';
import { reviews } from "../data/reviews";
import Carousal from "../ui/Carousal";
import { trackLinkClick } from "../utils/analytics";
const RatingComponent = ({ rating }: { rating: number }) => {

  const stars = [];

  for (let i = 0; i < Math.round(rating); i++) {
    stars.push(
      <svg key={i} aria-hidden="true" className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
    );
  }

  return (
    <div className="flex flex-row gap-1">
      {stars}
    </div>
  )
}

export const ReviewsCarousal = () => {

  const slides = reviews.map((review, index) => {

    const date = review.createdAt.toLocaleDateString('en-US', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    })

    const onClick = () => {
      trackLinkClick("review-click", {url: review.url})
    }

    return (
      <a onClick={onClick} key={index} href={review.url} rel="noreferrer" target='_blank' >
        <div  className="relative w-full h-full">
          <div className="absolute w-full h-full flex items-center flex-col">
            <div className="w-full h-full p-4 overflow-hidden flex flex-col gap-5">
              <div className="flex flex-row gap-4 items-center">

                <div className=" relative rounded-3xl overflow-hidden w-12 h-12 shrink-0">
                  <Image width={100} height={100} className="" src={google} alt={""} />
                  <div className="absolute top-0 bottom-0 left-0 right-0 m-auto rounded-3xl overflow-hidden w-10 h-10 shrink-0"><Image width={80} height={80} className="" src={review.imageSrc} alt={""}></Image></div>
                </div>

                <div className="flex gap-1 flex-col w-full">
                  <div className="text-lg">{review.name}</div>
                  <div><RatingComponent rating={review.rating} /></div>
                  <div className="text-sm text-date">{date}</div>
                </div>
              </div>
              <div className="text-bio text-base max-h-[170px] trunc7">{review.comment}</div>
            </div>
          </div>
        </div></a>)
  })

  return (<Carousal slides={slides} />)
}