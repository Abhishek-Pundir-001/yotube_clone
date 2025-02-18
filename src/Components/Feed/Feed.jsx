import './Feed.css'
import { Link } from 'react-router-dom'
import {convertor}  from '../../data'
import { useEffect, useState } from 'react'
import moment from 'moment'
function Feed({ category }) {
    const [data, setData] = useState([])
    let API_KEY = import.meta.env.VITE_API_KEY
    const fetchData = async () => {
        const videourl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
        await fetch(videourl).then(res=>res.json()).then(data=>setData(data.items))
    } 

    useEffect(() => {
        fetchData()
    }, [category])
    return (
        <div className='Feed flex justify-evenly space-y-4 flex-wrap pt-[2%]'>
            {data && data.map((item, index) => {
                return( <Link to={`video/${item.snippet.categoryId}/${item.id}`} key={index} className="card">
                    <img src={item.snippet.thumbnails.medium.url} alt="" />
                    <h2>{item.snippet.title}</h2>
                    <h3>{item.snippet.channelTitle}</h3>
                    <p>{convertor(item.statistics.viewCount) + " views" } &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
                </Link>
                )
                
            })}

        </div>
    )
}

export default Feed