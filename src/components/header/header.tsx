'use client'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import styles from "./style/header.module.css";
import Image, { StaticImageData } from "next/image";

interface Props {
  logo: StaticImageData;
  sec1: string;
  sec2: string;
  sec3: string;
}


export default function Header(props: Props) {
  return (
    <Navbar expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <Image src={props.logo} 
            alt="lira's cv logo" 
            width={30}
            height={30}
            ></Image>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={styles.navSec}>
          <Nav className="me-auto">
            <Nav.Link href="#home">{props.sec1}</Nav.Link>
            <Nav.Link href="#link">{props.sec2}</Nav.Link>
            <Nav.Link href="#link">{props.sec3}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
