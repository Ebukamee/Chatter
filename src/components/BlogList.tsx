import Summary from "./Summary";
import { ProfileSummary } from "./Summary";

 export default function List({posts}: any) {
    console.log(posts)
    return (
        <div className="blog_list">
            {posts && posts.map((post: any) => {
                return (
                    <Summary post = {post} key={post.id} />
                )
            })}
</div>
    )
}

export function PageList({posts}: any) {
    return(
        <div className="blog_list">
            {posts && posts.map((post: any) => {
                return (
                    <ProfileSummary post = {post} key={post.id} />
                )
            })}
</div>
    )
}

