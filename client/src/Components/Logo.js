import Card from "react-bootstrap/Card";

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
      <Card.Img variant="top" src="https://svgshare.com/i/qrE.svg" />
    </Card>
  );
};

export default Logo;
