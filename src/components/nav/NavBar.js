import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavBar = (props) => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Safe Spot</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/locations">Locations</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item target={"_blank"} href="https://www.google.com/maps/place/Huntington,+WV/@38.4077842,-82.5119757,12z/data=!3m1!4b1!4m5!3m4!1s0x8845e3aa792430b5:0xd3713568ed4051d4!8m2!3d38.4192496!4d-82.445154">
              Map of Huntington
            </NavDropdown.Item>
            <NavDropdown.Item target={"_blank"} href="https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALeKk02NJRITNXwBtAXbXzcMdvP16dXo3g:1616768683821&q=huntington+wv+map+of+medical+services&rflfq=1&num=10&ved=2ahUKEwiMuNTYlM7vAhUgMlkFHW0mCvUQtgN6BAgGEAc#rlfi=hd:;si:;mv:[[38.4357,-82.3315551],[38.3732602,-82.5271688]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:2">
              Map of Medical Services
            </NavDropdown.Item>
            <NavDropdown.Item target={"_blank"} href="https://www.google.com/search?q=huntington+wv+map+of+legal+services&tbm=lcl&sxsrf=ALeKk03Z7VEefNfp7THocS7T_r55qzHcFA%3A1616768727183&ei=1-5dYLe_Cq2u5NoPgtmeCA&oq=huntington+wv+map+of+legal+services&gs_l=psy-ab.3...17036.18306.0.18656.6.6.0.0.0.0.114.534.5j1.6.0....0...1c.1.64.psy-ab..0.2.197...38j33i10k1.0.P9kaCFew_J4">
              Map of Legal Services
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item target={"_blank"} href="https://www.google.com/search?tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALeKk00VQNUJ5EQMjtjXMzWlDPuEbqg7LA:1616768812804&q=map+of+shelters+huntington+west+virginia&rflfq=1&num=10&sa=X&ved=2ahUKEwjngZWWlc7vAhVQFlkFHS8RDTsQjGp6BAgPEGw&biw=1280&bih=881#rlfi=hd:;si:;mv:[[38.4686595,-82.4198017],[38.3978277,-82.4963368]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!1m4!1u16!2m2!16m1!1e1!1m4!1u16!2m2!16m1!1e2!2m1!1e2!2m1!1e16!2m1!1e3!3sIAE,lf:1,lf_ui:2">
              Map of Shelters
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>

        {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
      </Navbar.Collapse>
    </Navbar>
  );
};
