import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeMainSvg from "../../Assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillMediumCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a
              <i> <b className="purple"> PhD </b> </i>
              student at the
              <i> <b className="purple"> University of Glasgow</b> </i>
              Computer Science School .
              <br />
              <br />
              My research interests are
              <i> <b className="purple"> Artificial Intelligence </b> </i>
              and
              <i> <b className="purple"> Machine Learning </b> </i>
              applications
              <br />
              especially in
              <i> <b className="purple"> Robotics </b> </i>
              area and 
              <i> <b className="purple"> Computer Science Education </b> </i>
              .
              <br />
              <br />
              I also have some knowledge about
              <i> <b className="purple"> Medical Image Processing</b> </i>
              .
              <br />
              <br />
              I am fluent in programming languages such as
              <i> <b className="purple"> C++</b> </i>
              ,
              <i> <b className="purple"> C#</b> </i>
              ,
              <i> <b className="purple"> Python  </b> </i>
              and
              <i> <b className="purple"> Javascript.</b> </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={homeMainSvg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/claretb"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/talhayranci"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/talhayranci/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.musavver.com/author/talhayranci/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillMediumCircle />
                </a>
              </li>
            </ul>
            <p>
              Please do not hesitate to <span className="purple">contact </span> me!
              <br />
              I am always open to <span className="purple">discuss</span> something <span className="purple">together</span>. 😉
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
