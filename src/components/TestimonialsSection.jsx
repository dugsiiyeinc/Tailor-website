import { ArrowLeft, ArrowRight } from "lucide-react"
import { testimonialsSection } from "../contstants/data"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Autoplay, Navigation } from "swiper/modules"

const Testimonials = () => {
  return (
    <section className="">
      <div className="px-10 md:px-30">
        <h1 className="text-4xl text-center py-15 dark:text-white-95 ">Our Testimonials</h1>
        <Swiper
          modules={[Navigation,Autoplay]}
          spaceBetween={30}
          breakpoints={{
            640:{
                slidesPerView:1
            },
            768:{
               slidesPerView:1.5
            },
            1280:{
                slidesPerView:2
            }
           }}
           loop={true}
            navigation={
                {
                    prevEl:'.prev-btn',
                    nextEl:'.next-btn'
                }
            }
            autoplay={
               {
                   delay:3000,
                    pauseOnMouseEnter:true,
                    disableOnInteraction:false
                }
            }
               
        >
          {testimonialsSection.map(item => (
            <SwiperSlide
              key={item.id}
              className="relative border-2 border-gray-200 dark:border-white/10 shadow-md p-8 pt-16 lg:p-10 rounded-xl space-y-4 text-center min-h-60"
            >
              <p className="italic dark:text-white/95 max-w-80">
                “{item.text}”
              </p>
              <div className="absolute right-8 bottom-6 flex items-center gap-2">
              <div className="">
                <img
                  src={item.image}
                  alt={item.author}
                  className="w-8 h-8 object-cover rounded-full border-2 border-gray-700"
                />
              </div>
              <span className="font-semibold dark:text-white/80">
                {item.author}
              </span>

              </div>

            </SwiperSlide>
          ))}
        </Swiper>
        <div className="flex items-center justify-center  mt-8 gap-5">
          <button className="hover:bg-gray-200 dark:hover:bg-white/10 w-12 h-12 flex items-center justify-center rounded-xl dark:text-white-95 transition prev-btn">
            <ArrowLeft />
          </button>
          <button className="w-12 h-12 flex items-center justify-center rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 dark:text-white-95 transition next-btn">
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
