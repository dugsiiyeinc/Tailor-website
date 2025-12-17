
import { Link } from 'react-router'
import { contactInfo, footerLists, socialIcons } from '../contstants/data'


const Footer = () => {
  return (
    <footer className='pt-14 border-t-2 border-gray-200 dark:border-white/10 dark:text-white/95 mt-10'>
        <div 
        className='p-8 md:p-10'
        >
            <div className="grid gap-10 text-center sm:text-left sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr]">
                <div className='flex flex-col justify-center items-center md:items-start'>
                    <div>
                        <Link to={'/'} className="text-2xl font-semibold">Tailor<span className="text-cyan-600">Shop</span></Link>
                    </div>
                    <div className="mt-8 space-y-4 ">
                        {
                            contactInfo.map(item => (
                                <Link  
                                   key={item.id}
                                   className='flex items-center gap-1.5 hover:underline transition-colors'
                                > 
                                   <item.icon className='w-5 h-5'/>
                                   {item.label}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                {
                    footerLists.map(item => (
                        <div  
                           key={item.id} 
                           className="space-y-3"
                        >
                            <p className="text-lg font-semibold">{item.title}</p>
                            <ul className="space-y-2.5">
                                {
                                    item.links.map((link,index)=>(
                                        <li key={index}>
                                           <Link 
                                              to={'/'}
                                              className='hover:text-cyan-600 transition-colors'
                                            >{link.label}</Link> 
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
                <div >
                    <p className='text-lg font-semibold'>Social Profiles</p>
                    <div className='flex mt-5 items-center justify-center md:justify-normal gap-3'>
                        {
                            socialIcons.map( icon => (
                                <button key={icon.id} className='secondary-btn p-3.5 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md transition-all duration-300'>
                                    <Link to={''}>
                                       <icon.icon className='w-5 h-5'/>
                                    </Link>
                                </button>
                            ))
                        }
                    </div>
                </div>
            </div>

            <p  className='mt-6 text-center text-sm text-gray-600 font-medium lg:mt-10 '>&copy; {new Date().getFullYear()} Tailor<span className="text-cyan-600">Shop</span>. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer
