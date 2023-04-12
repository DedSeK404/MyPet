import { Row, Col, Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../Logo";
import "../Main_login/mainlogin.css";
import AppInfo from ".//AppInfo";
import KnowMore from "./KnowMore";
import Line from "../../../Assets/line.svg";

const MainLogin = () => {
  return (
    <div className="Main_container">
      <Logo />
      <Card
        style={{
          width: "34rem",
          margin: "auto",
          background: "transparent",
          border: "none",
        }}
      >
        <Card.Body>
          <h1
            style={{ textAlign: "center", padding: "20px", color: "#DB8C6F" }}
          >
            Connect with caring sitters
          </h1>
          <Card.Text>
            Find a verified and reviewed sitter who’ll keep your pets company
            and give them all the time, care and attention in the world.
          </Card.Text>
        </Card.Body>
      </Card>
      <AppInfo />
      <img width="100%" src={Line} alt="line" />
      <h1
        style={{
          textAlign: "center",
          padding: "0px 0px 100px 0px",
          color: "#DB8C6F",
        }}
      >
        Ready to get started?
      </h1>

      <Container>
        <Row>
          <Col sm={6}>
            <Link to="/login/Signup">
              <button className="Login_btn">Sign up</button>
            </Link>
          </Col>
          <Col sm={6}>
            <Link to="/login/Signin">
              <button className="Login_btn">Sign in</button>
            </Link>
          </Col>
        </Row>
      </Container>
      <KnowMore />
    </div>
  );
};

export default MainLogin;
