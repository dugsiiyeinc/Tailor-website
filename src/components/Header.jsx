import { Bell, ChevronDown, LogOut, Menu, Moon, Package, ShoppingCart, Sun, User, X } from "lucide-react"
import { Link } from "react-router"
import {  navItems } from "../contstants/data"
import { useState } from "react"
import { useTheme } from "../contexts/ThemeContext"
import { useAuth } from "../contexts/AuthContext"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const { isLoggedIn,profile, logout } = useAuth()
  const { theme, setTheme } = useTheme()


  const isDark = theme === 'dark';
  const Icon = isDark ? Sun : Moon;

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark')
  }

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="fixed right-0 bg-white dark:bg-gray-900 dark:text-white transition-all duration-300 w-full py-5 shadow-md z-50">
      <div >
        <div className="container flex items-center justify-between">
          {/* logo */}
          <Link to={'/'} className="text-2xl font-semibold">Tailor<span className="text-cyan-600">Shop</span></Link>

          {/* nav items */}
          <nav className="hidden md:flex items-center space-x-6">
            {
              navItems.map(item => (
                <Link
                  key={item.id}
                  to={item.to}
                  className="md:text-sm lg:text-md font-medium capitalize hover:text-cyan-400"
                >{item.label}</Link>
              ))
            }
          </nav>
          <div className="flex items-center space-x-4 md:space-x-8 ">
            <button
              onClick={toggleTheme}
              className="flex items-center justify-center bg rounded-full p-2 text-white"
            >
              <Icon size={18} />
            </button>
            {
              isLoggedIn ? (
                <>
                  <div className="relative">
                    <button onClick={()=> setIsDropdownOpen(!isDropdownOpen)} className='hidden md:flex relative'>
                    <div className='h-8 w-8 bg rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300'>
                      {
                        profile?.avatar_url ? (
                          <img src={profile?.avatar_url} className="w-full h-full object-cover rounded-full"/>
                        ):(
                          <span className='text-white font-bold text-sm'>{profile?.username[0].toUpperCase()}</span>
                        )
                      }
                    </div>
                    <div className='absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white animate-pulse'></div>
                    </button>
                    {
                      isDropdownOpen && (
                        <>

                          <div className="fiex inset-0 z-50" onClick={()=> setIsDropdownOpen(false)}>
                            <div className="absolute top-full mt-2 right-0 w-64 bg-white dark:bg-gray-800/90 backdrop-blur-xl border border-gray-700 rounded-xl z-50 overflow-hidden">
                               <div className="p-2">
                                  <Link
                                    to={'/profile'}
                                    onClick={()=> setIsDropdownOpen(false)}
                                    className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-200 dark:hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer"
                                  >
                                    <div className="p-2 rounded-lg bg shadow-md ">
                                      <User size={18} className="text-white"/>
                                   </div>
                                   <div className="flex-1">
                                     <div className="font-medium text-gray-800 dark:text-gray-200">Profile</div>
                                      </div>
                                  </Link>
                                  <Link
                                    to={'/view-orders'}
                                    onClick={()=> setIsDropdownOpen(false)}
                                    className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-200 dark:hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer"
                                  >
                                    <div className="p-2 rounded-lg bg shadow-md ">
                                      <Package size={18} className="text-white"/>
                                   </div>
                                   <div className="flex-1">
                                     <div className="font-medium text-gray-800 dark:text-gray-200">View Orders</div>
                                      </div>
                                  </Link>
                                  <button
                                    onClick={()=> (setIsDropdownOpen(false), logout())}
                                    className="w-full flex items-center gap-3 p-3 text-left hover:bg-gray-200 dark:hover:bg-white/10 rounded-lg transition-all duration-300"
                                  >
                                    <div className="p-2 rounded-lg bg shadow-md ">
                                      <LogOut size={18} className="text-white"/>
                                   </div>
                                   <div className="flex-1">
                                     <div className="font-medium text-gray-800 dark:text-gray-200">Sign out</div>
                                      </div>
                                  </button>
                               </div>
                            </div>
                          </div>
                        </>
                      )
                    }

                  </div>
                </>
              ) : (
                <Link to={'/sign-in'} className="hidden md:flex bg rounded-lg text-white px-6 py-2 text-sm ">Sign in</Link>
              )
            }
          </div>
          <button onClick={handleClick} className="md:hidden ">
            <Menu />
          </button>

          {/* mobile menu */}
          <div className={`navbar ${isMenuOpen ? "active" : ""}`}>
            <button onClick={handleClick} className="absolute top-8 right-8">
              <X />
            </button>

            <div className="flex flex-col text-center space-y-5">
              {
                navItems.map(item => (
                  <Link
                    key={item.id}
                    to={item.to}
                    onClick={handleClick}
                    className="w-full flex items-center p-3 justify-center hover:bg-gray-200 dark:hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer"
                  >{item.label}</Link>
                ))
              }
              {
                isLoggedIn ? (
                  <>

                   <Link
                        to={'/profile'}
                        onClick={handleClick}
                          className="w-full flex items-center p-3 justify-center hover:bg-gray-200 dark:hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer"
                    >
                      Profile
                   </Link>
                   <Link
                     to={'/view-orders'}
                      onClick={handleClick}
                      className="w-full flex items-center p-3 justify-center hover:bg-gray-200 dark:hover:bg-white/10 rounded-lg transition-all duration-300 cursor-pointer"
                    >
                      View Orders
                    </Link>
                    <button
                      onClick={()=> (handleClick(), logout())}
                      className="bg hover:opacity-90 transition-all duration-300 rounded-lg text-center text-white max-w-40 w-full text-lg  py-2"
                    >
                      Sign out
                   </button>
                  </>
                ):(

                  <Link onClick={handleClick} to={'/sign-in'} className="bg hover:opacity-90 transition-all duration-300 rounded-lg text-center text-white mt-4 max-w-40 w-full text-lg  py-2 ">Sign in</Link>
                )
              }
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

