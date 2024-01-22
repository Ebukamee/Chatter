import { useNavigate } from "react-router-dom"
import profile from '../assets/images/profile.png'
export default function Summary({post}:any) {
    const navigate = useNavigate()
    const nav = () => {
        navigate(`/post/${post.id}`)
    }
    
    return(
        <div className="post_container" onClick={nav}>
            <div className="flex">
                <img src={profile} alt="" id="profile"/>
            <h4>{post.Author ? post.Author : 'Annonymous'}</h4>
            </div>
            <h3>{post.Title}</h3>
            <p>{`${post.Content.substr(0,300)}...`}</p>
            <img src={post.Url} alt="" className="post"/>
        </div>
    )
}