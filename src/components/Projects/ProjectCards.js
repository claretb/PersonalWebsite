import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">

      {props.imgPath != "" ? 
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />: <br/>
      }

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {props.isLinkAvailable ? 
        <Button variant="primary" href={props.link} target="_blank">
          <BiLinkExternal style={{ marginBottom: "3px", fontSize: "150%" }}/> &nbsp;
          View Project
        </Button>
        : ""}
        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
