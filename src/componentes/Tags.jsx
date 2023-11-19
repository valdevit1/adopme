import Badge from "react-bootstrap/Badge";

function Tags(props) {
  return (
    <Badge bg={props.color}>
      {props.tagsnombre}
      {props.nombre}
    </Badge>
  );
}

export default Tags;
