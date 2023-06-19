import '../assets/styles/footer.css'

export default function Footer() {
    return(
        <div className="footer">
            <div className="logo">
                <h1 className="logo">CHATTER</h1>
            </div>
            <div className="explore">
                <h2>Explore</h2>
                <p>Community</p>
                <p>Trending blogs</p>
                <p>Chatter for teams</p>
            </div>
            <div className="support">
                <h2>Support</h2>
                <p>Support docs</p>
                <p>Join slack</p>
                <p>Contact</p>
            </div>
            <div className="blog">
                <h2>Official blog</h2>
                <p>Official blog</p>
                <p>Engineering blog</p>
            </div>
        </div>
    );
}