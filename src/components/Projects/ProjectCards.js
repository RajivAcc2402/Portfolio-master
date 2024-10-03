import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { TbCertificate } from "react-icons/tb";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        
        <Button variant="primary" href={props.ghLink} target="_blank">
          <TbCertificate /> &nbsp;
          {props.isBlog ? "Certificate" : "Verify"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

       
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
