import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Avatar.jpg"; // Make sure to update this path
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
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
                I'm a medical device engineer passionate about using technology to make healthcare more accessible, proactive, and patient-centered.
                <br />
                <br />
                My experience with <i><b className="purple">Commure</b></i> and <i><b className="purple">Athelas</b></i> has highlighted the transformative power of technology in patient care.
                This work has reinforced my commitment to <i><b className="purple">accessibility and regulatory compliance</b></i>, driving my passion to innovate and improve outcomes through medical technology.
                <br />
                <br />
                I'm fascinated by the intersection of &nbsp;
                <i>
                  <b className="purple">hardware design, firmware, and process automation</b>
                </i>
                . This drives my focus on developing and scaling medical devices that support <i><b className="purple">point-of-care and home care</b></i> solutions.
                <br />
                <br />
                Partnering with <i><b className="purple">clinicians and enterprise customers</b></i> has been essential for success, helping to ensure the product design meets real-world needs and standards in the healthcare industry.
                <br />
                <br />
                Beyond engineering, I value autonomy, continuous learning, and solving complex problems. I believe these principles are essential in building technologies that meet patients where they are and expand the potential of healthcare.
                <br />
                <br />
                I enjoy applying my skills in
                <i>
                  <b className="purple"> hardware prototyping, embedded systems, and firmware validation </b>
                </i>
                to create solutions that drive meaningful change in healthcare access and patient outcomes.
              </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <div className="profile-photo-wrapper">
                <img src={myImg} className="img-fluid profile-photo" alt="avatar" />
              </div>
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>CONNECT WITH ME</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/alexdrivas"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mattheos-drivas-803188276/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
