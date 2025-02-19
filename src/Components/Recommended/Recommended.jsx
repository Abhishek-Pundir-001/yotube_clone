import './Recommended.css'
import { useEffect, useState } from 'react'
import { convertor } from '../../data'
import moment from 'moment'
import { Link } from 'react-router-dom'
function Recommended({ categoryId }) {
    console.log(categoryId)

    const [recommendedVideo, setRecommendeVideo] = useState([])
    const recommendedVideoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${import.meta.env.VITE_API_KEY}`

    const fetchRecommendedVidoos = async () => {
        await fetch(recommendedVideoUrl).then(res => res.json()).then(data => setRecommendeVideo(data.items))
    }

    useEffect(() => {
        fetchRecommendedVidoos()
        console.log(recommendedVideo)
    }, [categoryId])

    return (
        <div className="recommended basis-[37%]">
            {recommendedVideo && recommendedVideo.map((item, index) => {
                return <Link to={`/video/${categoryId}/${item.id}`} key={index} className="sidebar-recommends flex gap-3 mb-3">
                    <img className='w-[50%] rounded-lg' src={item.snippet.thumbnails.medium.url} alt="" />
                    <div className="recommended-info">
                        <h4 className='text-sm font-medium mb-1'>{item.snippet.title}</h4>
                        <p className='text-[#5a5a5a] text-xs mb-0.5'>{item.snippet.channelTitle}</p>
                        <p className='text-xs text-[#5a5a5a]'>{convertor(item.statistics.viewCount)}&nbsp; &bull; &nbsp;<span>{moment(item.snippet.publishedAt).fromNow()}</span></p>
                    </div>
                </Link>
            })}


        </div>
    )
}

export default Recommended