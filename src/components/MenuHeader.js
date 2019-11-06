import React, { Fragment, useState } from "react";
import {
  Col,
  Row,
  Media,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import logo from "../images/logo.png";

export const MenuHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Fragment>
      <Row style={{ marginTop: "50px" }}>
        <Col xs={7} className="offset-1" style={{ color: "#FFF" }}>
          <Link to="/">
            <Media
              src={logo}
              className="img-responsive"
              width="250"
              alt="Logo"
            />
          </Link>
        </Col>
      </Row>
      <Navbar
        light
        expand="lg"
        style={{
          borderTop: "5px solid #fff",
          borderBottom: "5px solid #fff",
          marginTop: "10px"
        }}
        dark
        className="col-10 offset-1"
        color="dark"
      >
        <NavbarBrand tag={Link} to="/">
          HOME
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <Nav navbar>
              <NavItem>
                <NavLink tag={Link} to="/organization">
                  Empresa
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/services">
                  Serviços
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/contact/">
                  Contato
                </NavLink>
              </NavItem>
            </Nav>
          </Nav>
        </Collapse>
      </Navbar>
    </Fragment>
  );
};
