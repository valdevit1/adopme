import Badge from "react-bootstrap/Badge";

function Tags(props) {
  return (
    <Badge backgroundColor={props.color}>
      {props.tagsnombre}
      {props.nombre}
    </Badge>
  );
}

export default Tags;
