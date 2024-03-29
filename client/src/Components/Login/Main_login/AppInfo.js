import Carousel from "react-bootstrap/Carousel";
import Cat from "../../../Assets/cat.svg"
import Dog from "../../../Assets/dog.svg"
import Pets from "../../../Assets/pets.svg"

function AppInfo() {
  return (
    <Carousel variant="light">
      <Carousel.Item>
        <img
          style={{
            width: "40%",
            marginLeft: "30%",
            paddingBottom: "10%",
            pointerEvents: "none",
          }}
          src={Cat}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 style={{ color: "#DB8C6F" }}>TRAVEL WITH PEACE OF MIND</h3>
          <p style={{ color: "black" }}>
            Leave your pets safe at home with a sitter, and be welcomed back by
            healthy and happy pets.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            width: "40%",
            marginLeft: "30%",
            paddingBottom: "10%",
            pointerEvents: "none",
          }}
          src={Dog}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{ color: "#DB8C6F" }}>
            CONNECTING PET OWNERS WITH REVIEWED SITTERS
          </h3>
          <p style={{ color: "black" }}>
            connect with kind and caring sitters who will make sure to keep your
            pets safe and happy at home whenever you're away
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{
            width: "40%",
            marginLeft: "30%",
            paddingBottom: "10%",
            pointerEvents: "none",
          }}
          src={Pets}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3 style={{ color: "#DB8C6F" }}>THE LOVE OF PETS</h3>
          <p style={{ color: "black" }}>
            Know your pets are with an animal lover like you who is there to
            make memories, not money.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default AppInfo;
