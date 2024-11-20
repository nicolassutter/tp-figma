import "./App.css";
import { SolarHeartAngleLinear } from "./icons";

function App() {
  return (
    <>
      <h1>My page</h1>

      <div class="card">
        <div>
          <p class="card-category">Category</p>
          <h2 class="card-title">Super title</h2>
        </div>

        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.looper.com%2Fimg%2Fgallery%2Fthe-stunning-transformation-of-princess-zelda%2Fl-intro-1614026089.jpg&f=1&nofb=1&ipt=11a974e09dadb315055d7c3d366672e3cd66bb5dfbf532e554e1bfcc1ece0fc8&ipo=images"
          alt=""
          class="card-img"
        />
        <p class="card-description">
          Zelda is depicted as a kind and benevolent ruler with wisdom beyond
          her years and a deep love towards the people she watches over. 
        </p>

        <div class="card-buttons">
          <button class="button button-primary">See more</button>
          <button class="button button-secondary">
            Love <SolarHeartAngleLinear />
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
