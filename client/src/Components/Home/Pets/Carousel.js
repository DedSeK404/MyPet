import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";
import PetProfile from "./PetProfile";
import PetBG from "../../../Assets/pet_bg.svg";

const CarouselTab = ({ data }) => {
  console.log(data._id);
  return (
    <MDBCarousel showControls showIndicators>
      <MDBCarouselItem
        className="w-100 d-block"
        itemId={data._id}
        src={PetBG}
        alt="..."
      >
        <PetProfile />
      </MDBCarouselItem>
    </MDBCarousel>
  );
};

export default CarouselTab;
