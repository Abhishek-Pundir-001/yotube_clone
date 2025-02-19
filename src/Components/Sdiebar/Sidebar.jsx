import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import simon from '../../assets/simon.png'
import tom from '../../assets/tom.png'
import megan from '../../assets/megan.png'
import cameron from '../../assets/cameron.png'
function Sidebar({ children, sideBar, category, setCategory }) {
    return (
        <div
            className={`w-[4%] sidebar ${sideBar ? 'md:w-[15%]' : 'md:w-[4%]'} overflow-hidden md:transition-all md:ease-in-out md:delay-300 bg-white h-[100vh] fixed top-0 pl-[2%] pt-20`}>
            <div className="shortcut-links">
                <div className="side-link" onClick={() => setCategory(0)}>
                    <img className={`${category === 0 ? 'pb-1 border-b-2 ' : ""}`} src={home} alt="" /><p>Home</p>
                </div>
                <div className="side-link" onClick={() => setCategory(20)}>
                    <img className={`${category === 20 ? 'pb-1 border-b-2 ' : ""}`} src={game_icon} alt="" /><p>Gaming</p>
                </div>
                <div className="side-link" onClick={() => setCategory(2)}>
                    <img className={`${category === 2 ? 'pb-1 border-b-2 ' : ""}`} src={automobiles} alt="" /><p>Automobiles</p>
                </div>
                <div className="side-link" onClick={() => setCategory(17)}>
                    <img className={`${category === 17 ? 'pb-1 border-b-2 ' : ""}`} src={sports} alt="" /><p>Sports</p>
                </div>
                <div className="side-link" onClick={() => setCategory(24)}>
                    <img className={`${category === 24 ? 'pb-1 border-b-2 ' : ""}`} src={entertainment} alt="" /><p>Entertainment</p>
                </div>
                <div className="side-link" onClick={() => setCategory(28)}>
                    <img className={`${category === 28 ? 'pb-1 border-b-2 ' : ""}`} src={tech} alt="" /><p>Technology</p>
                </div>
                <div className="side-link" onClick={() => setCategory(10)}>
                    <img className={`${category === 10 ? 'pb-1 border-b-2 ' : ""}`} src={music} alt="" /><p>Music</p>
                </div>
                <div className="side-link" onClick={() => setCategory(22)}>
                    <img className={`${category === 22 ? 'pb-1 border-b-2 ' : ""}`} src={blogs} alt="" /><p>Blogs</p>
                </div>
                <div className="side-link" onClick={() => setCategory(25)}>
                    <img className={`${category === 25 ? 'pb-1 border-b-2 ' : ""}`} src={news} alt="" /><p>News</p>
                </div>
                <hr className='my-5 w-[80%]' />
            </div>
            <div className='subscribed-list'>
                <h3 className={`text-sm my-5 text-black ${sideBar ? 'block' : 'hidden'}`}>Subscribed</h3>
                <div className='side-link'>
                    <img src={jack} alt="" srcset="" />< p>PewDiPie</p>
                </div>
                <div className='side-link'>
                    <img src={simon} alt="" srcset="" />< p>MrBeast</p>
                </div>
                <div className='side-link'>
                    <img src={tom} alt="" srcset="" />< p>Justien Beiber</p>
                </div>
                <div className='side-link'>
                    <img src={megan} alt="" srcset="" />< p>Minute Craft</p>
                </div>
                <div className='side-link'>
                    <img src={cameron} alt="" srcset="" />< p>Nas Delly</p>
                </div>
            </div>

        </div>
    )
}
export default Sidebar