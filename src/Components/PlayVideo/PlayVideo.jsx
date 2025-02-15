import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'
function PlayVideo() {
    return (
        <div className='play-video w-[60%]'>
            <video className='w-[100%] rounded-lg' src={video1} controls autoPlay muted></video>
            <h3 className='mt-2.5 font-medium text-lg'>complete information about web development</h3>
            <div className="video-info flex justify-between items-center mt-2.5 text-lg">
                <p className=''>1525 views &bull; 2 days ago</p>
                <div className='flex'>
                    <span className='inline-flex items-center'><img className='' src={like} alt="" />2201</span>
                    <span><img src={dislike} alt="" />30</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr className=' border-0 h-[1px] bg-gray-700 my-2.5'/>
            <div className="publisher flex items-center mt-5">
                <img src={jack} className='w-10 rounded-full mr-3.5' alt="" />
                <div className='flex-1'>
                    <p className='text-black font-medium text-lg'>Web development</p>
                    <span className='text-sm'>1M subscriber</span>
                </div>
                <button className='bg-[#212121] text-amber-50 px-8 py-2 text-lg rounded-md'>Subscribe</button>
            </div>
            <div className='vid-desc pl-14 my-4'>
                <p className='text-sm mb-1.5 text-[#5a5a5a]'>Make your learning joyful</p>
                <p className='text-sm mb-1.5 text-[#5a5a5a]'>Subscribe the channel to watch more tutorials on web development</p>
                <hr />
                <h4 className='text-sm text-[#5a5a5a] mt-4 mb-2'>130 Coments</h4>
                <div className="comment flex items-start gap-2 mb-4">
                    <img className='w-10 rounded-full' src={user_profile} alt="" />
                    <div>
                        <h3 className='text-sm text-[#5a5a5a]'>Jack Nicholsan <span>1 day ago</span></h3>
                        <p className='text-[1rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente nemo molestiae. Maxime natus quasi tenetur aperiam ipsum eaque fuga.</p>
                        <div className='comment-action flex items-center mt-2'>
                          <img className='w-5 mr-2' src={like} alt="" />
                          <span className='text-sm text-[#5a5a5a]'>244</span>
                          <img className='w-5 ml-4' src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment flex items-start gap-2 mb-4">
                    <img className='w-10 rounded-full' src={user_profile} alt="" />
                    <div>
                        <h3 className='text-sm text-[#5a5a5a]'>Jack Nicholsan <span>1 day ago</span></h3>
                        <p className='text-[1rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente nemo molestiae. Maxime natus quasi tenetur aperiam ipsum eaque fuga.</p>
                        <div className='comment-action flex items-center mt-2 mb-4'>
                          <img className='w-5 mr-2' src={like} alt="" />
                          <span className='text-sm text-[#5a5a5a]'>244</span>
                          <img className='w-5 ml-4' src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment flex items-start gap-2 mb-4">
                    <img className='w-10 rounded-full' src={user_profile} alt="" />
                    <div>
                        <h3 className='text-sm text-[#5a5a5a]'>Jack Nicholsan <span>1 day ago</span></h3>
                        <p className='text-[1rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente nemo molestiae. Maxime natus quasi tenetur aperiam ipsum eaque fuga.</p>
                        <div className='comment-action flex items-center mt-2'>
                          <img className='w-5 mr-2' src={like} alt="" />
                          <span className='text-sm text-[#5a5a5a]'>244</span>
                          <img className='w-5 ml-4' src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment flex items-start gap-2 mb-4">
                    <img className='w-10 rounded-full' src={user_profile} alt="" />
                    <div>
                        <h3 className='text-sm text-[#5a5a5a]'>Jack Nicholsan <span>1 day ago</span></h3>
                        <p className='text-[1rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente nemo molestiae. Maxime natus quasi tenetur aperiam ipsum eaque fuga.</p>
                        <div className='comment-action flex items-center mt-2'>
                          <img className='w-5 mr-2' src={like} alt="" />
                          <span className='text-sm text-[#5a5a5a]'>244</span>
                          <img className='w-5 ml-4' src={dislike} alt="" />
                        </div>
                    </div>
                </div>
                <div className="comment flex items-start gap-2 mb-4">
                    <img className='w-10 rounded-full' src={user_profile} alt="" />
                    <div>
                        <h3 className='text-sm text-[#5a5a5a]'>Jack Nicholsan <span>1 day ago</span></h3>
                        <p className='text-[1rem]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium sapiente nemo molestiae. Maxime natus quasi tenetur aperiam ipsum eaque fuga.</p>
                        <div className='comment-action flex items-center mt-2'>
                          <img className='w-5 mr-2' src={like} alt="" />
                          <span className='text-sm text-[#5a5a5a]'>244</span>
                          <img className='w-5 ml-4' src={dislike} alt="" />
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}
export default PlayVideo