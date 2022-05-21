import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWebassembly,
  SiCplusplus,
  SiCsharp,
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiGit,
  SiRos,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus />
        <p style={{ fontSize: "24px" }}>C++</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCsharp />
        <p style={{ fontSize: "24px" }}>C#</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPython /> 
        <p style={{ fontSize: "24px" }}>Python</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <span class="iconify" data-icon="file-icons:matlab"></span>
        <p style={{ fontSize: "24px" }}>MATLAB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRos />
        <p style={{ fontSize: "24px" }}>ROS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJavascript />
        <p style={{ fontSize: "24px" }}>Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiWebassembly />
        <p style={{ fontSize: "24px" }}>WebAssembly</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiReact />
        <p style={{ fontSize: "24px" }}>React</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs />
        <p style={{ fontSize: "24px" }}>NodeJS</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
        <p style={{ fontSize: "24px" }}>Git</p>
      </Col>
    </Row>
  );
}

export default Techstack;
