import SpotsApp from "./SpotsApp";

function SpotsSection({products}) {

  const position = "25%";

  const imageUrl2 = "Mountain.jpg";
  const spotsTitle2 = "Beautiful mountains";
  
  const imageUrl3 = "Heart.jpg";
  const title3 = "Capture a moment";  
    
  return (
    <div className="SpotsSection">
      <div className="SpotsSection-content m-1 d-flex justify-content-between align-items-center">
        <SpotsApp titlePosition={position} />
        <SpotsApp imageUrl={imageUrl2} spotsTitle={spotsTitle2} />
        <SpotsApp
          imageUrl={imageUrl3}
          spotsTitle={title3}
          titlePosition="-2%"
        />
        {/* <SpotsApp
          imageUrl="Dog.jpg"
          spotsTitle="Beast and beauty"
          titlePosition="-5%"
        /> */}
      </div>
    </div>
  );
}

export default SpotsSection;
