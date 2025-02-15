import './Navbar.css'
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search.png'
import upload_icon from '../../assets/upload.png'
import more_icon from '../../assets/more.png'
import notification_icon from '../../assets/notification.png'
import profile_icon from '../../assets/jack.png'
import { Link } from 'react-router-dom';

function Navbar({setSideBar}) {
    return (
        <nav
            className='flex justify-between items-center  py-2.5 px-[2%] shadow-[0_0_5px_black] sticky top-0 z-10 bg-white'>
            <div className='nav-left flex gap-5 items-center'>
                <img className='h-5' src={menu_icon} alt="" srcset="" onClick={()=>setSideBar(prev=>prev == false ? true : false)}/>
                <Link to={'/'}><img className='w-32' src={logo} alt="" srcset="" /></Link>
            </div>
            <div className='flex nav-middle'>
                <div className='w-96 py-2 px-4 border rounded-3xl flex items-center'>
                    <input type="text" placeholder='search' className='w-[90%] outline-none bg-transparent'/>
                    <img className='h-6' src={search_icon} alt="" />
                </div>
            </div>
            <div className='flex items-center nav-right gap-8'>
                <img className='h-8' src={upload_icon} alt="" />
                <img className='h-8' src={more_icon} alt="" />
                <img className='h-8' src={notification_icon} alt="" />
                <img className='rounded-full h-10' src={profile_icon} alt="" />
            </div>
        </nav>
    )
}

export default Navbar