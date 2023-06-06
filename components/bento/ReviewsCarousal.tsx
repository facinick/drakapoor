import Image from "next/image"

const getRatingComponent = (rating: number) => {

  return (
    <div className="rating gap-1">
  <input type="radio" name="rating-3" className="" />
  <input type="radio" name="rating-3" className=" " checked />
  <input type="radio" name="rating-3" className=" " />
  <input type="radio" name="rating-3" className=" " />
  <input type="radio" name="rating-3" className="" />
</div>
  )

}

interface ReviewsCarousalProps {
  reviews: Array<{ rating: number, comment: string, createdAt: Date, imageSrc: string }>
}

export const ReviewsCarousal = ({ reviews }: ReviewsCarousalProps) => (
  <div className="carousel w-full">
    {
      reviews.map((review, index) => {
        return (
          <div id={`slide${index}`} className="carousel-item relative w-[360px] rounded-box">
            <Image src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" alt={""} />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
        )
      })
    }
  </div>
)