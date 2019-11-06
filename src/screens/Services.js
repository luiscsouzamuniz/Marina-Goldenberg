import React from "react";
import { Col } from "reactstrap";
import styled from "styled-components";

const StyledCol = styled(Col)`
  color: #fff;
  font-size: 14pt;
  background-color: rgba(0, 0, 0, 0.7);
  text-align: justify;
  padding-top: 5px;
`;

const StyledColService = styled(Col)`
  font-size: 12pt;
  padding-top: 5px;
  padding-bottom: 5px;
`;

const Services = () => (
  <StyledCol xs={10} className="offset-1 mt-2">
    <h3 class="page-header">Serviços:</h3>
    <StyledColService>
      <ul>
        <li>Macaco Hidraulico</li>
        <li>Bomba de aguá dedicada para adoçar motor de embarcações&#8203;</li>
        <li>Serviço de subida e descida de embarcação na água</li>
        <li>Tomadas dedicadas para as embarcações</li>
        <li>
          Pier com Amplo espaço. Com o flutuante para embarque e desembarque.
        </li>
        <li>Recarga de Bateria</li>
      </ul>
    </StyledColService>
  </StyledCol>
);

export default Services;
