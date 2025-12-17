import React from 'react'
import { heroItems } from '../contstants/data'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Navigation } from 'swiper/modules'
import { ArrowLeft, ArrowRight } from 'lucide-react'


const HeroSection = () => {
  return (
    <section>
            <div>
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 z-20
        bg-white/95 text-black dark:bg-gray-800/95 dark:text-white p-3 rounded-full
        dark:hover:bg-gray-900 transition duration-300 prev-btn"
      >
        <ArrowLeft size={24} />
      </button>

      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 z-20
         bg-white/95 text-black dark:bg-gray-800/95 dark:text-white p-3 rounded-full           dark:hover:bg-gray-900 transition duration-300 next-btn"
      >
        <ArrowRight size={24} />
      </button>
      </div>
      <Swiper
        modules={[Navigation,Autoplay]} 
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
        className='relative transition-all duration-300'
      >
        {
          heroItems.map(item => (
            <SwiperSlide key={item.id} className='p-8'>
          <div 
            style={{
              backgroundImage:`url(${item.bg})`,
              backgroundPosition:'center',
              backgroundSize:'cover',
              backgroundRepeat:'no-repeat'
            }}
            className='relative w-full h-full flex items-center justify-center py-8 bg-gray-900 rounded-2xl border-2 border-gray-600 overflow-hidden'>
              <div className='absolute inset-0 bg-black/70'></div>
            <div className='relative z-10 max-w-3xl px-6 text-center flex flex-col items-center     justify-center space-y-5 text-white'>
              <h1 className='text-4xl md:text-6xl font-bold mb-4'>{item.h1}</h1>
              <p className='text-lg md:text-xl text-white/55'>{item.p}</p>
              <div className='flex flex-col md:flex-row gap-4 m-4'>
                <button className='bg px-4 py-2 text-lg rounded-md hover:opacity-90 transition-all duration-300'>{item.btn1}</button>
                <button className='border border-cyan-400 hover:bg-linear-to-r from-blue-700 via-cyan-600 to-cyan-400 px-4 py-2 text-lg rounded-md transition-all duration-500'>{item.btn2}</button>
              </div>
            </div>
          </div>
            </SwiperSlide>
          ))
        }
      </Swiper>

    </section>
  )
}

export default HeroSection

