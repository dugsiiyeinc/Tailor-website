import { Outlet } from "react-router"
import Header from "./components/Header"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div>
      <Header/>
      <main className="pt-20 min-h-screen  dark:bg-gray-900/95 ">
        <Outlet/>
      </main>
      <Footer/>
    </div>

  )
}

export default App
