import { Outlet } from "react-router"
import Header from "./components/Header"


const App = () => {
  return (
    <div>
      <Header/>
      <main className="pt-20 min-h-screen  dark:bg-gray-900/95 ">
        <Outlet/>
      </main>
    </div>

  )
}

export default App
