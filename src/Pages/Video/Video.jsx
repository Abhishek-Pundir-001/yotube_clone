import { useParams } from 'react-router-dom';
import PlayVideo from '../../Components/PlayVideo/PlayVideo';
import Recommended from '../../Components/Recommended/Recommended';

import './Video.css'
function Video() {
    const { categoryId, videoId } = useParams()
    return (
            <div className='play-container bg-[#f0f0f0] flex flex-col md:flex-row flex-wrap justify-between px-[2%] py-[1.2rem]'>
                <PlayVideo videoId={videoId} />
                <Recommended categoryId={categoryId}/>
            </div>
    )
}

export default Video;
