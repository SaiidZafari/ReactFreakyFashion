import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
import { useSelector } from 'react-redux';

function Hero({titleHero, descriptionHero, buttonTextHero, imageUrlHero, altHero}) {
 

 // const { title, description, imageUrl, alt, buttonText } = heros;

  return (
    <div className="Hero d-flex flex-wrap">
      <div className="Hero-content col-lg-5">
        <p className="title fs-1 fw-bold mt-4 mb-5 col-sm-12"> {titleHero} </p>
        <p className="text-md-start mb-5 ">{descriptionHero}</p>
        <Link to="/products">
          <input
            type="submit"
            className="link-button col-sm-auto btn btn-primary col-md-6 mt-4"
            value={buttonTextHero}
          />
        </Link>
      </div>
      <div className="" style={{ padding: "2% 0 2% 2%", width: "755px" }}>
        <img
          className="rounded-3 "
          style={{ width: "100%" }}
          src={`${process.env.PUBLIC_URL}/images/${imageUrlHero}`}
          alt={altHero}
        />
      </div>
    </div>
  );
}

export default Hero;
//
