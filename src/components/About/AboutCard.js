import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone! I'm <span className="purple">Alexandros Drivas</span>, based in <span className="purple">San Francisco, CA</span>.
            <br />
            <br />
            I’m a medical device engineer with <span className="purple">3+ years</span> of experience designing and scaling FDA-compliant Class II in vitro diagnostic (IVD) devices, focused on improving healthcare outcomes through innovative technology.
          </p>

          <h3 className="about-section-header">Educational Background</h3>
          <p style={{ textAlign: "justify" }}>
            I hold a <span className="purple">Master of Science in Biomedical Engineering</span> from Columbia University, where I focused on design, innovation, and product development for healthcare solutions. Prior to that, I earned a <span className="purple">Bachelor of Science in Biochemistry & Molecular Biology</span> from Chapman University.
          </p>

          <h3 className="about-section-header">Professional Values & Approach</h3>
          <p style={{ textAlign: "justify" }}>
            My work emphasizes <span className="purple">transparency, regulatory compliance</span>, and <span className="purple">user-centered design</span>. I focus on ensuring devices are safe, effective, and accessible to enhance patient care.
          </p>

          <h3 className="about-section-header">Current Focus</h3>
          <p style={{ textAlign: "justify" }}>
            Currently, I’m focused on advancing remote patient monitoring and point-of-care solutions to address the evolving needs of healthcare.
          </p>

          <h3 className="about-section-header">Key Skills and Specialties</h3>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Embedded Systems and Firmware Development (Python, C/C++)
            </li>
            <li className="about-activity">
              <ImPointRight /> Patient Usability and Device Design
            </li>
            <li className="about-activity">
              <ImPointRight /> Regulatory Compliance (ISO 13485, FDA, MDSAP)
            </li>
            <li className="about-activity">
              <ImPointRight /> PCB Design and Prototyping (Fusion 360, AutoCAD)
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

