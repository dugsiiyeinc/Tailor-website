import React from 'react'
import { servicesItems } from '../contstants/data'

const ServicesSection = () => {

    const colorClasses={
        primary:"from-primary-500 to-primary-600",
        secondary:"from-secondary-500 to-secondary-600",
        accent:"from-accent-500 to-accent-600"
    }

  return (
    <section>
      <div className=''>
        <h1 className='text-4xl text-center py-10 dark:text-white-95'>Our Services</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 md:px-20 '>
            {
                servicesItems.map(item => {
                    const Icon=item.icon;
                    return (
                        <div
                          key={item.id} 
                          className={`group p-6 rounded-xl border border-gray-200  dark:border-gray-700 transition-all duration-500 shadow-md hover:-translate-y-1 backdrop-blur-sm dark:text-white`}
                        >
                            <div className={`w-12 h-12 rounded-xl bg-linear-to-r ${colorClasses[item.color]} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                                <Icon size={24} className='text-white'/>
                            </div>
                            <div className='pt-4'>
                                <h1 className='text-lg font-black mb-2 text-gray-900 dark:text-gray-100'>{item.title}</h1>
                                <p className='text-gray-600 dark:text-gray-300 leading-relaxed'>{item.description}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
