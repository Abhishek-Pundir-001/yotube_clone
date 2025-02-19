import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import { useEffect, useState } from 'react'
import { convertor } from '../../data'
import moment from 'moment'
import { useParams } from 'react-router-dom'

function PlayVideo() {
    const API_KEY = import.meta.env.VITE_API_KEY
    const [apiData, setApiData] = useState(null);
    const [channelData, setChannelData] = useState(null);
    const [commentData, setCommentData] = useState([])
    const {videoId} = useParams()



    const fetchDetails = async () => {
        const videoDetailsUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        await fetch(videoDetailsUrl).then(res => res.json()).then(data => setApiData(data.items[0]))
        //   console.log('apidat',apiData)
    }

    const fetchChannelDetail = async () => {
        // fetching channel details
        const channelDetailUrl = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData && apiData.snippet.channelId}&key=${API_KEY}`;

        await fetch(channelDetailUrl).then(res => res.json()).then(data => setChannelData(data.items && data.items[0])).catch(e => console.log(e))
        // console.log('ch',channelData)

        // // fetching comments details
        const commentUrl = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${videoId}&key=${API_KEY}`
        await fetch(commentUrl).then(res => res.json()).then(data => setCommentData(data.items && data.items.slice(0, 50)))
        // console.log('com', commentData)

    }

    useEffect(() => {
        fetchDetails()
    }, [videoId])

    useEffect(() => {
        fetchChannelDetail()
    }, [apiData])

    return (
        <div className='play-video md:w-[60%] w-[100%]'>
            {/* <video className='w-[100%] rounded-lg' src={video1} controls autoPlay muted></video> */}
            <iframe className='w-[100%] h-[15rem] rounded-lg' src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`} allow='autoplay' allowfullscreen="allowfullscreen"></iframe>
            <h3 className='mt-2.5 font-medium text-lg'>{apiData && apiData.snippet.title}</h3>
            <div className="video-info flex justify-between items-center mt-2.5 md:text-lg text-xs">
                <p className=''>{apiData && convertor(apiData.statistics.viewCount) + " views"} &bull; {moment(apiData && apiData.snippet.publishedAt).fromNow()}</p>
                <div className='flex'>
                    <span className='inline-flex items-center'><img className='' src={like} alt="" />{apiData && convertor(apiData.statistics.likeCount)}</span>
                    <span><img src={dislike} alt="" />30</span>
                    <span><img src={share} alt="" />Share</span>
                    <span><img src={save} alt="" />Save</span>
                </div>
            </div>
            <hr className=' border-0 h-[1px] bg-gray-700 my-2.5' />
            <div className="publisher flex items-center mt-5">
                <img src={channelData && channelData.snippet.thumbnails.default.url} className='w-10 rounded-full mr-3.5' alt="" />
                <div className='flex-1'>
                    <p className='text-black font-medium text-lg'>{apiData && apiData.snippet.channelTitle}</p>
                    <span className='text-sm'>{channelData && convertor(channelData.statistics.subscriberCount)}</span>
                </div>
                <button className='bg-[#212121] text-amber-50 px-8 py-2 text-lg rounded-3xl'>Subscribe</button>
            </div>
            <div className='vid-desc pl-14 my-4'>
                <p className='text-sm'>{apiData && apiData.snippet.description.slice(0, 250)}</p>
                <hr />
                <h4 className='text-sm text-[#5a5a5a] mt-4 mb-2'>{apiData && convertor(apiData.statistics.commentCount)}&nbsp; comments</h4>
                {commentData.map((item, index) => {
                    return (
                        <div key={index} className="comment flex items-start gap-2 mb-4">
                            <img className='w-10 rounded-full' src={item.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="" />
                            <div>
                                <h3 className='text-[.9rem] font-bold text-[#2c2929]'>{item.snippet.topLevelComment.snippet.authorDisplayName} <span>1 day ago</span></h3>
                                <p className='text-sm'>{item.snippet.topLevelComment.snippet.textDisplay.slice(0, 70)}</p>
                                <div className='comment-action flex items-center mt-2'>
                                    <img className='w-5 mr-2' src={like} alt="" />
                                    <span className='text-sm text-[#5a5a5a]'>{convertor(item.snippet.topLevelComment.snippet.likeCount)}</span>
                                    <img className='w-5 ml-4' src={dislike} alt="" />
                                </div>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}
export default PlayVideo
// https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=_VB39Jo8mAQ&key=[YOUR_API_KEY] HTTP/1.1
