
function Hero() {
  return (
    <div className="Hero d-flex">
      <div className="Hero-content col-5">
        <p  className="title fs-1 fw-bold mt-4 mb-5 col-sm-12"> Fashion festival </p>
        <p  className="text-md-start mb-5 ">
          Welcome to Fashion Freak. At, fashion freak, we bring to the industry
          best fashions in one store. Buy from our wide range of designer
          T-shirts, shirts, jeans, ... May 1, 2020 - Explore Roadkill Girl's
          board "Freaky Fashion", followed by 276 people on Pinterest. See more
          ideas about fashion, weird fashion, how to wear it.
        </p>
        <button
          type="submit"
          href="#"
          className="link-button col-md-7 btn btn-primary col-md-6 mt-4"
        >
          Submit
        </button>
      </div>
      <div className="" style={{ padding: "2% 0 2% 2%", width: "96%" }}>
        <img
          className="rounded-3 "
          style={{ width: "100%" }}
          src={`${process.env.PUBLIC_URL}/images/Woman.jpg`}
          alt="Woman"
        />
      </div>
    </div>
  );
}

export default Hero;
//
