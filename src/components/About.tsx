import '../assets/styles/about.css'
import Image from '../assets/images/about.png'

export default function About() {
  return (
    <div className="about">
      <div>
        <h1>About Chatter</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet
          impedit perferendis odio a sed? Repellat explicabo porro laboriosam
          nobis quibusdam impedit cupiditate quos labore et, adipisci doloremque
          tempore, ea id.
        </p>
      </div>
      <div>
        <img src={Image} alt="about-img" className="about-img" />
      </div>
    </div>
  );
}
