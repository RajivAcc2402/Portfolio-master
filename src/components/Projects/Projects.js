import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import az900 from "..//..//Assets/az900.svg";
import az204 from "..//..//Assets/az204.svg";
import dp900 from "..//..//Assets/dp900.svg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Certifications </strong>
        </h1>
       
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={az900}
              isBlog={false}
              title="Azure Fundamentals Certificate &nbsp;&nbsp; AZ 900"
              ghLink="https://learn.microsoft.com/api/credentials/share/en-us/15261850/980E33340EFC605B?sharingId=694C656549D96F16"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={az204}
              isBlog={false}
              title="Azure Developer Associate  &nbsp; &nbsp;    AZ 204"
              ghLink="https://learn.microsoft.com/api/credentials/share/en-us/15261850/F3B0CFC8AF87F643?sharingId=694C656549D96F16"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dp900}
              isBlog={false}
              title="Azure Data Fundamentals &nbsp;&nbsp; &nbsp; DP 900"
              ghLink="https://learn.microsoft.com/api/credentials/share/en-us/15261850/B5F0841CCAC42B1A?sharingId=694C656549D96F16"
                         
            />
          </Col>

        

         

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
