import { Award, CheckCircle } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const WhyCooseUs = () => {
  return (
    <section>
        <div className='p-8 flex flex-col gap-10'>
            <h1 className='py-10 dark:text-white-95 text-center text-4xl '>Why Choose Us</h1>
            <div className='mb-8 group grid grid-cols-1 md:grid-cols-2 rounded-xl border-2 border-gray-200  dark:border-gray-700 transition-all duration-500 overflow-hidden'>
                <div className='relative'>
                    <img src="/images/bg-4.png" alt=""  className='w-full h-78 object-cover'/>
                    <div className='absolute inset-0 bg-black/60'></div>
                </div>
                <div className='flex flex-col space-y-8 p-8 dark:text-white-95'>
                    <span className='w-12 h-12 rounded-xl bg-linear-to-r from-primary-500 to-primary-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 text-white-95'>
                        <Award/>
                    </span>
                    <h1 className='text-4xl font-black mb-2'>Expert Craftsmanship</h1>
                    <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>Our experienced tailors deliver exceptional quality with attention to every detail.</p>
                    <Link className='bg px-4 py-2 max-w-40 text-center rounded-md hover:opacity-90 transition-all duration-300 text-white-95'>Order Now</Link>
                </div>
            </div>

            <div className='group grid grid-cols-1 md:grid-cols-2 rounded-xl border border-gray-200  dark:border-gray-700 transition-all duration-500 overflow-hidden'>

                <div className='flex flex-col space-y-8 p-8 dark:text-white-95'>
                    <span className='w-12 h-12 rounded-xl bg-linear-to-r from-secondary-500 to-secondary-600 flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 text-white-95'>
                        <CheckCircle/>
                    </span>
                    <h1 className='text-4xl font-black mb-2'>Perfect Fit Guarantee</h1>
                    <p className='text-gray-600 dark:text-gray-300 leading-relaxed max-w-80'>Every garment is measured, fitted, and finished for a flawless fit.</p>
                    <Link className='bg px-4 py-2 max-w-40 text-center rounded-md hover:opacity-90 transition-all duration-300 text-white-95'>Explore Now</Link>
                </div>
                <div className='relative'>
                    <img src="/images/bg-5.png" alt="" className=' w-full h-78 object-cover'/>
                    <div className='absolute inset-0 bg-black/60'></div>
                </div>
            </div>

        </div>
      
    </section>
  )
}

export default WhyCooseUs
