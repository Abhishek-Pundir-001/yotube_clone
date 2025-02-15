import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar/Navbar"
import Home from "./Pages/Home/Home"
import Video from "./Pages/Video/Video"
import { useState } from "react"

function App() {
const [sideBar,setSideBar] = useState(true)
  return (
    <div>
      <Navbar setSideBar={setSideBar}/>
      <Routes>
        <Route path="/" element={<Home sideBar={sideBar}/>} />
        <Route path="/video/:catgoryId/:videoId" element={<Video />} />
      </Routes>
    </div>
  )
}

export default App
