import SpotsApp from "./SpotsApp";
import { useSelector } from 'react-redux';

function SpotsSection() {

  const spotsRedux = useSelector((state) => state.spots.products);
   
    
  return (
    <div className="SpotsSection-content m-1 d-flex justify-content-between align-items-center">
      {spotsRedux.map((spot) => (
        <SpotsApp
          key={spot.id}
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
