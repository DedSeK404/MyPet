import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Print from "../../../Assets/print.svg";

function KnowMore() {
  return (
    <>
      <h1 style={{ textAlign: "center", padding: "100px", color: "#DB8C6F" }}>
        Want to know more?
      </h1>
      <CardGroup style={{ margin: "0 5%", gap: "20px" }}>
        <Card
          style={{
            backgroundColor: "#4F2D27",
            border: "none",
            borderRadius: "8px",
          }}
        >
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title style={{ display: "flex", gap: "15px" }}>
              <img src={Print} alt="0" width="30px" />
              <span style={{ textAlign: "center", color: "#DB8C6F" }}>
                {" "}
                Pet owners
              </span>
            </Card.Title>
            <Card.Text style={{ color: "white" }}>
              More and more pet owners are using the services of professional
              pet sitters to take advantage of the benefits in-home pet care
              provides: Pets are happier and experience less stress at home.
              Diet and exercise routines are uninterrupted. Travel trauma for
              both owner and pet is eliminated.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            backgroundColor: "#4F2D27",
            border: "none",
            borderRadius: "8px",
          }}
        >
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title style={{ display: "flex", gap: "15px" }}>
              <img src={Print} alt="0" width="30px" />
              <span style={{ textAlign: "center", color: "#DB8C6F" }}>
                {" "}
                Pet sitters
              </span>
            </Card.Title>
            <Card.Text style={{ color: "white" }}>
              Pet sitters care for clients’ pets in the clients’ homes or in
              their own homes. Pet owners often use pet sitters when they go on
              a vacation, travel for business, work long hours or when they are
              too sick or injured to care for their pet(s). Pet sitters often
              offer more than one pet-sitting visit per day, and some pet
              sitters offer overnight stays as well, or taking the pet to their
              own house.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            backgroundColor: "#4F2D27",
            border: "none",
            borderRadius: "8px",
          }}
        >
          {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
          <Card.Body>
            <Card.Title style={{ display: "flex", gap: "15px" }}>
              <img src={Print} alt="0" width="30px" />
              <span style={{ textAlign: "center", color: "#DB8C6F" }}>
                {" "}
                Services
              </span>
            </Card.Title>
            <Card.Text style={{ color: "white" }}>
              <p>pet sitters perform a variety of tasks, including:</p>

              <p>• Feeding the pets and changing their water bowls</p>

              <p>
                • Providing exercise and play time (may include walking the dog)
              </p>

              <p>
                • Cleaning litter boxes and cleaning up any other pet messes
              </p>

              <p>• Administering pet medications, if needed</p>

              <p>• Providing lots of TLC!</p>
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
}

export default KnowMore;
