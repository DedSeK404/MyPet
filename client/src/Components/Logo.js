import Card from "react-bootstrap/Card";
import LogoPic from "../Assets/Logo.svg"
const Logo = () => {
  return (
    <Card
      style={{
        width: "42rem",
        margin: "auto",
        background: "transparent",
        border: "none",
        pointerEvents: "none"
      }}
    >
      <Card.Img variant="top" src={LogoPic} />
     
    </Card>
  );
};

export default Logo;
