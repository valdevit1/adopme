import Card from "react-bootstrap/card";
import Tags from "./Tags";

function MyCard(props) {
  return (
    <>
      <Card style={{ width: "18rem", marginRight: "1rem" }}>
        <Card.Img variant="top" src={props.imagen} />
        <Card.Body>
          <Card.Title>{props.nombre}</Card.Title>
          <Card.Text style={{ fontSize: "12px" }}>
            {props.descripcion}
          </Card.Text>
          <Tags color={props.color} tagsnombre={props.nombre} />
        </Card.Body>
      </Card>
    </>
  );
}

export default MyCard;
