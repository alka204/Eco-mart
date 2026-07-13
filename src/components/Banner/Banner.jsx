import "./Banner.css";
import speaker from "../../assets/images/speaker.png";

function Banner() {
  return (
    <section className="banner">
      <div className="container banner-content">
        <div className="banner-left">
          <span className="banner-tag">Categories</span>

          <h2>Enhance Your Music Experience</h2>

          <div className="banner-timer">
            <div className="time-box">
              <span>23</span>
              <small>Hours</small>
            </div>

            <div className="time-box">
              <span>05</span>
              <small>Days</small>
            </div>

            <div className="time-box">
              <span>59</span>
              <small>Minutes</small>
            </div>

            <div className="time-box">
              <span>35</span>
              <small>Seconds</small>
            </div>
          </div>

          <button className="buy-btn">Buy Now!</button>
        </div>

        <div className="banner-right">
          <img src={speaker} alt="Speaker" />
        </div>
      </div>
    </section>
  );
}

export default Banner;
