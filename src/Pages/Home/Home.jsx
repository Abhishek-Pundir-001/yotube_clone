import Feed from '../../Components/Feed/Feed'
import Sidebar from '../../Components/Sdiebar/Sidebar'
import './Home.css'

function Home({ sideBar }) {
    return (
        <>
            <Sidebar sideBar={sideBar} />
            <div className={`container ${sideBar ? 'pl-[17%]' : 'pl-[4%]'} transition-all ease-in-out delay-500`}>
                <Feed />
            </div>

        </>
    )
}

export default Home