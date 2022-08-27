import { useEffect } from "react";
import { useState } from "react";
import {Container,Nav,Navbar }from "react-bootstrap";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import logo from '../assets/img/logo.crdownload'
import github from '../assets/img/github.svg'
import linkedin from '../assets/img/linkedin.svg'
import whatsapp from '../assets/img/whatsapp.svg'

function NavBar() {
  const [activeLink, seActiveLink] = useState("home");
  const [scrolled, setScroll] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return window.removeEventListener("scroll", onScroll);
  }, []);
  const updateActiviLink=(e)=>{
    seActiveLink(e)

  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <span className="navbar-toggelr-icon"></span>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "actvie navbar-link" : "navbar-link"
              }
              onClick={()=> updateActiviLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skill"
              className={
                activeLink === "skill" ? "actvie navbar-link" : "navbar-link"
              }
              onClick={()=> updateActiviLink("skill")}
            >
              Skill
            </Nav.Link>
            <Nav.Link
              href="#project"
              className={
                activeLink === "projects" ? "actvie navbar-link" : "navbar-link"
              }
              onClick={()=> updateActiviLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">

            <a href="https://github.com/lschacon1988">
              {" "}
              <img src={github} alt="" />{" "}
            </a>
            <a href="https://www.linkedin.com/in/luis-chacon-developer/">
              {" "}
              <img src={linkedin} alt="" />{" "}
            </a>
            <a href="https://wa.link/5em4hx">
              {" "}
              <img src={whatsapp} alt="" />{" "}
            </a>
            <button className="vvd" onClick={(e) => console.log("connect")}>
              <span>Connect</span>
            </button>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
