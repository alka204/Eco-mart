import "./NewArrival.css";

import SectionTitle from "../SectionTitle/SectionTitle";

import ps5 from "../../assets/images/ps5.png";
import women from "../../assets/images/women.png";
import speakers from "../../assets/images/speakers.png";
import perfume from "../../assets/images/perfume.png";

function NewArrival() {
  return (
    <section className="new-arrival">
      <div className="container">
        <SectionTitle label="Featured" title="New Arrival" />

        <div className="arrival-grid">
          <div className="arrival-card large">
            <img src={ps5} alt="PlayStation 5" />

            <div className="arrival-content">
              <h3>PlayStation 5</h3>
              <p>Black and White version of the PS5 coming out on sale.</p>
              <a href="#">Shop Now</a>
            </div>
          </div>

          <div className="arrival-right">
            <div className="arrival-card">
              <img src={women} alt="Women's Collection" />

              <div className="arrival-content">
                <h3>Women's Collections</h3>
                <p>Featured woman collections that give you another vibe.</p>
                <a href="#">Shop Now</a>
              </div>
            </div>

            <div className="bottom-grid">
              <div className="arrival-card">
                <img src={speakers} alt="Speakers" />

                <div className="arrival-content">
                  <h3>Speakers</h3>
                  <p>Amazon wireless speakers</p>
                  <a href="#">Shop Now</a>
                </div>
              </div>

              <div className="arrival-card">
                <img src={perfume} alt="Perfume" />

                <div className="arrival-content">
                  <h3>Perfume</h3>
                  <p>GUCCI INTENSE OUD EDP</p>
                  <a href="#">Shop Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewArrival;
