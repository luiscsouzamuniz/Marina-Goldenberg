import React from "react";
import { Col, Row, Media, Jumbotron } from "reactstrap";
import styled from "styled-components";

import banner from "../images/banner.png";
// style=""

const StyledJumbotron = styled(Jumbotron)`
  padding: 0 !important;
  border-radius: 5px !important;
  width: 100% !important;
`;

const Home = () => (
  <Col xs={10} className="offset-1 mt-2">
    <Row>
      <StyledJumbotron class="text-center mb-2">
        <Media src={banner} class="img-responsive" width="100%" />
      </StyledJumbotron>
    </Row>
  </Col>
);

export default Home;
