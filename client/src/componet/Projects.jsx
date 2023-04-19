import React from "react";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import projects2 from "../assets/img/projects2.png";
import projects1 from "../assets/img/projects1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from "react-on-screen";
import "animate.css";

const Projects = () => {
  const projects = [
    {
      title:"Grow Up Books" ,
      description: "Es un prototipo de un E-commerce, con pasarela de pago, en la que se implementó mercado pago como proveedor del servicio, está desarrollado con, Node.js y Express.js en el backend, MongoDB en la base de datos, React, Redux y CSS puro en el frontend",
      imgUrl: projects1,
    },
    {
      title: "pokeApi",
      description: "Es un pequeño proyecto académico donde pongo en práctica los conocimientos en Node.js, PostgreSQL, react.js, CSS, Redux entre otras",
      imgUrl: projects2,
    },
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>projects</h2>
                  <p>
                    {" "}
                    Aquí pueden encontrar una breve descripción de algunos de mis proyectos y tecnologías utilizadas
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="frist">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="frist">
                        <Row>
                          {projects.map((project, i) => {
                            return <ProjectCard key={i} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          a
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                         b
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2} alt="image" /> */}
    </section>
  );
};

export default Projects;
