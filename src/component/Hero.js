import { Link } from 'react-router-dom';

function Hero({
  titleHero,
  descriptionHero = "Coming Soon",
  imgUrlHero = "",
  altHero = "A picture will be here.",
  buttonText = "Submit",
}) {
  return (
    <div className="Hero d-flex">
      <div className="Hero-content col-5">
        <p className="title fs-1 fw-bold mt-4 mb-5 col-sm-12"> {titleHero} </p>
        <p className="text-md-start mb-5 ">{descriptionHero}</p>
        <Link to="/products">
        <input
            type ="submit"
            className="link-button col-md-7 btn btn-primary col-md-6 mt-4"
            value={buttonText}
        />
           </Link>
      </div>
      <div className="" style={{ padding: "2% 0 2% 2%", width: "96%" }}>
        <img
          className="rounded-3 "
          style={{ width: "100%" }}
          src={`${process.env.PUBLIC_URL}/images/${imgUrlHero}`}
          alt={altHero}
        />
      </div>
    </div>
  );
}

export default Hero;
//
