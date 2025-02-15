import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';
import Sidebar from '../../Components/Sdiebar/Sidebar';
import './Video.css'
function Video() {
    return (
        <div className='play-container bg-[#f0f0f0] flex flex-wrap justify-between px-[2%] py-[1.2rem]'>
            <PlayVideo />
            <Recommended />
        </div>

    )
}

export default Video;