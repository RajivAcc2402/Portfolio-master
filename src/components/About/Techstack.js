import React from "react";
import { Col, Row } from "react-bootstrap";
import { TbBrandCSharp } from "react-icons/tb";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiGit,
  DiDotnet,
  DiMsqlServer
} from "react-icons/di";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        SSIS      </Col>
      <Col xs={4} md={2} className="tech-icons">
        SQL
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        .Net
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandCSharp /> 
      </Col>
          
      <Col xs={4} md={2} className="tech-icons">
        Git
      </Col>
      
    </Row>
  );
}

export default Techstack;
