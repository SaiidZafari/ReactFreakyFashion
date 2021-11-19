import SpotsApp from "./SpotsApp";

function SpotsSection({products}) {

  const spotCollection = {
    spotsApp: [
      {
        id: 1,
        imageUrl: "hand.jpg",
        spotsTitle: "Beast and beauty",
        titlePosition: "50%",
        linkTo:"Hand",
      },
      {
        id: 2,
        imageUrl: "Mountain.jpg",
        spotsTitle: "Beautiful mountains",
        titlePosition: "25%",
        linkTo: "Mountain",
      },
      {
        id: 3,
        imageUrl: "Heart.jpg",
        spotsTitle: "Capture a moment",
        titlePosition: "5%",
        linkTo: "Heart",
      },
    ],
  };
  
    
  return (  
      <div className="SpotsSection-content m-1 d-flex justify-content-between align-items-center">
       
        {spotCollection.spotsApp.map((spot) => (
          <SpotsApp key={spot.id}
            imageUrl={spot.imageUrl}
            spotsTitle={spot.spotsTitle}
            titlePosition={spot.titlePosition}
            linkTo={spot.linkTo}
          />
        ))}

      </div>    
  );
}

export default SpotsSection;
