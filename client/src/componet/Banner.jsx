import React, { useEffect } from "react";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import miFoto from "../assets/img/miFoto.jpeg";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["web Developer", "Web designer", "Back-End Developer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };
  return (
    <section className=" banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <span className="tagline">Bienvenido a mi portafolio</span>
            <h1>
              {`Hola soy Luis Chacon `}
              <span className="wrap">{text}</span>{" "}
            </h1>
            <p>
              {" "}
              Desarrollador full stack con afinidad al Back-End, curioso y
              apasionado por la programacion, me concidero con la capacidad de
              ajustarme a cualquier area del sector ya que cuento con gran
              capacidad de adaptación y afrontar nuevos retos. Durante mi
              trayectoria laboral me destaque como cocinero por aproximadamente
              10 años; donde tuve la oportunidad de aprender a manejar la
              presion, dirigir y trabajar en equipo
            </p>
            <button onClick={() => console.log("conectado")}>
              Let's connet <ArrowRightCircle size={25} />{" "}
            </button>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <img src={miFoto} alt="'Headder Img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
