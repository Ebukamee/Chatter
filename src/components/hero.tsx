import '../assets/styles/hero.css'
import { Link } from 'react-router-dom';

export default function Hero() {
    return(
        <div className="hero">
            <h1 className="hero-heading">
                Welcome to Chatter: A Haven for text-based content
            </h1>
            <p>Unleash the power of words. connect with like minded readers and writers</p>
            <Link to='/signup'><button>Get Started</button></Link>
        </div>
    );
}