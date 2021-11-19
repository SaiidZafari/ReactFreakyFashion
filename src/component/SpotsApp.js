import { Link } from "react-router-dom";

function SpotsApp({
  imageUrl = "Hand.jpg",
  spotsTitle = "Fashion of art",
  titlePosition = "50%",
  linkTo=""
}) {
  return (
    <div className="card border-white ">
      <Link
        to={`/Products/${linkTo}`}
        className="card text-white spotsContent border-white"
      >
        <div class="card-img-overlay">
          <p
            style={{
              marginTop: titlePosition,
              position: "relative",
              fontSize: "2vw",
            }}
            className="bg-dark bg-opacity-50 "
          >
            {spotsTitle}
          </p>
        </div>
        <img
          style={{}}
          className="spotsText m-1 rounded-3 "
          src={process.env.PUBLIC_URL + `/images/${imageUrl}`}
          alt="Hand"
        />
      </Link>
    </div>
  );
}

export default SpotsApp;
