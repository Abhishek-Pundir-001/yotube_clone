import { useState } from 'react'
import Feed from '../../Components/Feed/Feed'
import Sidebar from '../../Components/Sdiebar/Sidebar'
import './Home.css'

function Home({ sideBar }) {
    const [category,setCategory] = useState(0)
    return (
        <>
            <Sidebar sideBar={sideBar} category={category} setCategory={setCategory}/>
            <div className={`container ${sideBar ? 'md:pl-[15%]' : 'md:pl-[4%]'} px-[2rem] transition-all ease-in-out delay-500`}>
                <Feed  category={category}/>
            </div>

        </>
    )
}

export default Home;