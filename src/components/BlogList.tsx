import Summary from "./Summary";

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

