import { height } from "dom-helpers";

function Hero() {
  return (
    <div className="Hero d-flex">
      <div className="Hero-content col-5">
        <h2 className="title fw-bold mt-3 mb-4"> Fashion fastival </h2>
        <p className="fs-5  text-md-start mb-3 ">
          Welcome to Fashion Freak. At, fashion freak, we bring to the industry
          best fashions in one store. Buy from our wide range of designer
          T-shirts, shirts, jeans, ... May 1, 2020 - Explore Roadkill Girl's
          board "Freaky Fashion", followed by 276 people on Pinterest. See more
          ideas about fashion, weird fashion, how to wear it.
        </p>
        <button className="col-md-7 btn btn-primary col-md-6">Sunmit</button>
      </div>
      <div
        className=""
        style={{ padding: "2% 0 2% 2%", width: "96%" }}
      >
        <img
          className="rounded-3 "
          style={{ width: "100%" }}
          src={`${process.env.PUBLIC_URL}/images/Woman.jpg`}
          //   src="https://via.placeholder.com/220x200?text=Frontend-utvecklare"
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
//
