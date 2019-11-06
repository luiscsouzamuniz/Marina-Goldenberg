import React from "react";
import { Col, Media } from "reactstrap";

import logo from "../images/logo.png";

export const Footer = () => (
  <Col xs={10} className="offset-1">
    <footer
      className="py-5 "
      style={{ marginTop: "10px", fontSize: "12pt", color: "#fff !important" }}
    >
      <p className="m-0 col-md-6 text-center" style={{ color: "#FFF" }}>
        <span style={{ fontWeight: "bolder", fontSize: "12pt" }}>
          Horário de atendimento:
        </span>
        <br />
        <span style={{ fontSize: "12pt" }}>
          Segunda a sexta das
          <br />
          08:00 as 18:00
        </span>
        <br />
        <span>
          Telefone: <a href="tel:+5513982068117">13 98206-8117</a>
          <br />
        </span>
        <span>
          <a
            href="https://www.google.com.br/maps/place/Marina+Golden+Berg/@-25.0252536,-47.9148249,17z/data=!4m5!3m4!1s0x0:0xe858a208e3952ae8!8m2!3d-25.025609!4d-47.9143654"
            target="blank"
          >
            Avenida E, 850 JD.América
          </a>
          <br />
          Ilha Comprida/SP
        </span>
        <br />

        <Media
          src="http://marinagoldenberg.com.br/assets/images/bandeira.png"
          style={{ width: "35%", margin: "0 auto" }}
        />
      </p>
      <p class="text-center" style={{ color: "#fff" }}>
        <img src={logo} width="150px" alt="" />
        <br />
        Desenvolvido por{" "}
        <a href="mailto:luisc.souzamuniz@gmail.com">Luis Carlos de Souza</a>,
        2019.
      </p>
    </footer>
  </Col>
);
