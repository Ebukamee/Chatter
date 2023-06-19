import analytics from "../assets/images/analytics.svg";
import Comm from '../assets/images/comm.svg'
import Vector from '../assets/images/Vector.svg'
import '../assets/styles/reason.css'

export default function Reason() {
  return (
    <div className="reason">
      <div className="bold">
        <h1>Why You should join chatter</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          necessitatibus et autem delectus ab, enim impedit pariatur sint
          dolorem ducimus a? Illo deleniti repellendus quam eligendi maxime
          praesentium alias incidunt.
        </p>
      </div>
      <div className="other">
        <div className="inner">
          <div>
            <img src={analytics} alt="" />
          </div>

          <h2>Analytics</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            porro doloribus repellat possimus vero debitis consequatur
            consectetur provident beatae minima sit, voluptate nam expedita
            quidem, quisquam atque saepe? Illum, dolore.
          </p>
        </div>
        <div className="inner">
          <div>
            <img src={Comm} alt="" />
          </div>

          <h2>Social Interaction</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            porro doloribus repellat possimus vero debitis consequatur
            consectetur provident beatae minima sit, voluptate nam expedita
            quidem, quisquam atque saepe? Illum, dolore.
          </p>
        </div>
        <div className="inner">
          <div>
            <img src={Vector} alt="" />
          </div>

          <h2>Content Creation</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
            porro doloribus repellat possimus vero debitis consequatur
            consectetur provident beatae minima sit, voluptate nam expedita
            quidem, quisquam atque saepe? Illum, dolore.
          </p>
        </div>
      </div>
    </div>
  );
}
