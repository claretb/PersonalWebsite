import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import noImage from "../../Assets/Projects/noImage.png";
import robotFootball from "../../Assets/Projects/robotFootball.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={robotFootball}
              isLinkAvailable={true}
              title="Robot Football Simulation"
              description="Within the scope of this project, which is a team project in my MSc education, 
              we created a robot football simulation consisting of two teams 4 vs 4 in the Webots 
              robotics simulation environment together with agroup of 6 people from different backgrounds. 
              Each team has different algorithms to play football. 
              The project is written in Python programming language."
              link="https://github.com/claretb/RoboCupSoccer"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noImage}
              isLinkAvailable={false}
              title="HMI System"
              description="It is a project that aims to boot the Beaglebone Black device in a short time 
              by using a personalized RT Linux kernel based operating system and an interface created with QT. 
              Buildroot was used to create the embedded system. 
              It is intended to design an interface using QT and use it in the device with cross compilation."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noImage}
              isLinkAvailable={false}
              title="Data Mining Applications"
              description="Development of a small version of the programs such as Weka and Orange with Python 
              programming language. Algorithms such as Naive Bayes, Decision Tree and KNN have been added 
              selectively to make Preprocessing and Classification within the application."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={noImage}
              isLinkAvailable={false}
              title="Sale Control System for Small Businesses"
              description="The aim of the project is to control and record the warehouses, purchases and sales of 
              small and mediumsized enterprises. In this way, profit loss controls and inventory controls can be 
              done dynamically. It is also compatible with mobile use. Technologies such as PHP, Javascript and 
              HTML were used in the project which works as a web application. MySQL was used as database."
              link=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
