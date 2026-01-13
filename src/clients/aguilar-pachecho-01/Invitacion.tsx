import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Reproductor from "../../components/player";
import Timer from "../../components/timer";
import { useEffect, useState, useRef } from "react";
import Card from "../../components/card";
import DressCard from "../../components/dress-card";
import styles from "./Invitacion.module.css";
import Parallax from "../../components/parallax";
import usePageMeta from "../../components/usePageMeta";
import MainText from "../../components/main-text";

const Home = () => {
  usePageMeta("Aguilar Pacheco", "/common/love-letter.png");

  const [visibleBoxes, setVisibleBoxes] = useState<any[]>([]);
  const visibleBoxesRef: any = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      // Fading when scroll
      const windowHeight = window.innerHeight;
      const boxes = document.querySelectorAll(".box");

      boxes.forEach((box, index) => {
        const { top } = box.getBoundingClientRect();
        if (top < windowHeight && !visibleBoxesRef.current.includes(index)) {
          visibleBoxesRef.current = [...visibleBoxesRef.current, index];
          setVisibleBoxes([...visibleBoxesRef.current]);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Parallax leftImage="borde-izq.png" rightImage="borde-der.png" />
      <div style={{ overflowX: "hidden", width: "100%" }}>
        <img
          src="/common/sea-and-sand.jpg"
          alt="Sea"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            zIndex: -1,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            objectPosition: "center",
          }}
          loading="lazy"
        />
      </div>
      <Container>
        <Row style={{ paddingTop: "10px" }}>
          <Reproductor route="/aguilar-pacheco-01/main_audio.mp3" />
        </Row>
        <Row>
          <Col></Col>
          <Col
            style={{ display: "flex", justifyContent: "center" }}
            md={5}
            xs={10}
          >
            <img
              className={styles.mainGif}
              src="/clients/aguilar-pacheco-01/nombres-fecha.gif"
              alt="Christian y Mafer"
              loading="lazy"
            />
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col></Col>
          <Col
            md={6}
            xs={10}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <img
              className={styles.mainImage}
              src="/clients/aguilar-pacheco-01/main-image.jpg"
              alt="Wedding"
              loading="lazy"
            />
          </Col>
          <Col></Col>
        </Row>
        <br />
        <MainText>
          ¡Mi amado es para mí y yo para él! <br /> “Grábame como un sello sobre
          tu corazón, como un sello sobre tu brazo. Porque es fuerte el amor
          como la muerte; y la pasión, tenaz como el infierno. Sus flechas son
          dardos de fuego, como llama divina. No apagarán el amor ni lo ahogarán
          océanos ni ríos”.
          <br />
          Cant 8: 6-7
        </MainText>
        <br />
        <Row className="px-4">
          <h1
            className="title"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Con la bendición de Dios y de nuestros padres,
          </h1>
        </Row>
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col
            className={`order-1 order-md-1 ${styles.imgRect} box`}
            style={{
              display: "flex",
              justifyContent: "center",
              opacity: visibleBoxes.includes(0) ? 1 : 0,
              transform: visibleBoxes.includes(0) ? "scale(1)" : "scale(0.5)",
            }}
            lg={4}
            md={4}
            // sm={4}
            xs={8}
          >
            <img
              alt="Padres"
              src="/clients/aguilar-pacheco-01/padres-2.JPG"
              loading="lazy"
            />
          </Col>

          <Col
            className={`order-3 order-md-2 ${styles.imgRect} box`}
            style={{
              display: "flex",
              justifyContent: "center",
              opacity: visibleBoxes.includes(1) ? 1 : 0,
              transform: visibleBoxes.includes(1) ? "scale(1)" : "scale(0.5)",
            }}
            lg={4}
            md={4}
            // sm={4}
            xs={8}
          >
            <img
              alt="Padres 2"
              src="/clients/aguilar-pacheco-01/padres-1.JPG"
              loading="lazy"
            />
          </Col>

          <Col
            className={`order-2 order-md-3 box`}
            style={{
              display: "flex",
              justifyContent: "center",
              opacity: visibleBoxes.includes(2) ? 1 : 0,
              transform: visibleBoxes.includes(2) ? "scale(1)" : "scale(0.5)",
            }}
            lg={6}
            md={6}
            // sm={4}
            xs={12}
          >
            <div className={`${styles.boxInfo} ${styles.izq}`}>
              Carlos Carlos Apellido Apellido <br />&<br />
              Nombre Madre Apellido Apellido
            </div>
          </Col>
          <Col
            className={`order-4 order-md-4 box`}
            style={{
              display: "flex",
              justifyContent: "center",
              opacity: visibleBoxes.includes(3) ? 1 : 0,
              transform: visibleBoxes.includes(3) ? "scale(1)" : "scale(0.5)",
            }}
            lg={6}
            md={6}
            // sm={4}
            xs={12}
          >
            <div className={`${styles.boxInfo} ${styles.der}`}>
              Nombre Apellido Apellido
              <br />
              &<br />
              Nombre Nombre Apellido Apellido
            </div>
          </Col>
        </Row>
        <br />
        <Row className="px-4">
          <h1
            className="title"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            Tenemos el agrado de invitarte a nuestra boda.
          </h1>
        </Row>
        <Row>
          <Col></Col>
          <Col
            md={6}
            xs={10}
            style={{
              display: "flex",
              justifyContent: "center",
              paddingTop: "30px",
            }}
          >
            <img
              className={styles.mainImage}
              src="/clients/aguilar-pacheco-01/boda-familia.png"
              alt="Family Wedding"
              loading="lazy"
            />
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row className="px-5">
          <h1
            className="title"
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            ¡Cada vez falta menos para el gran “Sí, Acepto”!
          </h1>
        </Row>
        <Row>
          <Timer dateStr="2026-10-26T15:00:00" />
        </Row>
        <br />
        <Row
          className="gap-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Col
            lg={4}
            md={5}
            // sm={4}
            xs={8}
            style={{ padding: "0 0" }}
          >
            <Card
              iconFileName={"iglesia"}
              title={"Ceremonia"}
              buttonText={"CÓMO LLEGAR"}
              href={"https://maps.app.goo.gl/pmSspoRZph4RSjL77"}
              isVisible={visibleBoxes.includes(4)}
            >
              26 de Octubre 2024 <br />
              15:00 <br /> Iglesia Católica Sagrado Corazón de Jesús
              <br /> La Entrada, Santa Elena
            </Card>
          </Col>
          <Col
            lg={4}
            md={5}
            // sm={4}
            xs={8}
            style={{ padding: "0 0" }}
          >
            <Card
              iconFileName={"celebration"}
              title={"Recepción"}
              buttonText={"CÓMO LLEGAR"}
              href={"https://maps.app.goo.gl/WnysuqovptRbwgNRA"}
              isVisible={visibleBoxes.includes(5)}
            >
              26 de Octubre 2024 <br />
              18:30 <br /> VistaMar Centro de Eventos
              <br />
              Capaes, Ballenita
            </Card>
          </Col>
        </Row>
        <br />
        <Row
          className="gap-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Col
            lg={4}
            md={5}
            // sm={4}
            xs={8}
            style={{ padding: "0 0" }}
          >
            <Card
              iconFileName={"gift-icon"}
              title={"Obsequio"}
              buttonText={"VER DATOS"}
              href={""}
              isVisible={visibleBoxes.includes(6)}
              box={true}
              xl={6}
              popUpCont={
                <>
                  <img
                    src="/common/esquina1.png"
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "0",
                      width: "75%",
                      height: "auto",
                      zIndex: "1",
                    }}
                    alt="Flowers"
                  ></img>
                  <img
                    src="/common/esquina2.png"
                    style={{
                      position: "absolute",
                      bottom: "0",
                      right: "0",
                      width: "75%",
                      height: "auto",
                      zIndex: "1",
                    }}
                    alt="Flowers"
                  ></img>
                  <div className="p-box">
                    <div id="ne" className="corner"></div>
                    <div id="nw" className="corner"></div>
                    <div id="se" className="corner"></div>
                    <div id="sw" className="corner"></div>
                    <img
                      src="/common/stain.png"
                      style={{
                        position: "absolute",
                        top: "-0.5rem",
                        left: "-1rem",
                        width: "105%",
                        height: "100%",
                      }}
                      alt="Stain"
                    ></img>
                    <Container
                      style={{
                        zIndex: 2,
                        position: "relative",
                        paddingTop: "1rem",
                      }}
                    >
                      <Row className="dancing-script d-flex justify-content-center pb-4">
                        ¡Gracias por tu amor y apoyo!
                      </Row>
                      <Row className="fields amatic">
                        NOMBRE: GARCIA GARCIA ROBERTO ROBERTO
                      </Row>
                      <Row className="fields amatic">
                        <Col className="cuenta-ahorro text-xl-end">
                          #CUENTA AHORRO:
                        </Col>
                        <Col
                          xs={12}
                          // sm
                          md={12}
                          lg={12}
                          xl={6}
                          className="d-flex justify-content-center justify-content-xl-start"
                        >
                          <div style={{ paddingRight: "10px" }}>123456789</div>
                          <div className="d-flex justify-content-center align-items-center">
                            <img
                              src="/clients/aguilar-pacheco-01/banco-guayaquil.png"
                              alt="logo banco"
                              style={{ height: "25px", width: "auto" }}
                            ></img>
                          </div>
                        </Col>
                      </Row>
                      <Row className="fields amatic">
                        CORREO: username@gmail.com
                      </Row>
                      <Row className="fields amatic">C.I.: 09845365841</Row>
                      <Row className="d-flex justify-content-center amatic nota">
                        Agradecemos el envío de tu obsequio antes de:
                        <br />
                        26-Oct-2024
                        <br />
                        No olvides enviarnos tu comprobante
                        <br />a través del medio por el cual recibiste la
                        invitación.
                      </Row>
                    </Container>
                  </div>
                </>
              }
            >
              Tu presencia es nuestro mejor regalo. Si deseas hacernos un
              obsequio, agradeceríamos mucho tu contribución a nuestra vida
              juntos. Por favor, considera transferir tu regalo a la siguiente
              cuenta.
            </Card>
          </Col>
          <Col
            lg={4}
            md={5}
            // sm={4}
            xs={8}
            style={{ padding: "0 0" }}
          >
            <DressCard
              title="Código de Vestimenta"
              isVisible={visibleBoxes.includes(7)}
              iconFileName={"dress-code.svg"}
            >
              ELEGANTE
              <br />
              ¡Queridas invitadas!
              <br />
              Por favor, reserven el blanco para la novia. 👰🏻‍♀
              <br /> ¡Nos encantará verlas brillar en todos los demás colores
              del arcoíris! ✨
            </DressCard>
          </Col>
        </Row>
        <br />
        <Row
          className="gap-3"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <Col
            lg={4}
            md={5}
            // sm={4}
            xs={8}
            style={{ padding: "0 0" }}
          >
            <Card
              iconFileName={"checklist"}
              title={"Confirmación de asistencia"}
              buttonText={"CONFIRMA AQUÍ"}
              href={"https://www.google.com.ec"}
              isVisible={visibleBoxes.includes(8)}
            >
              Para nosotros es muy importante que confirmes esta invitación, o
              que nos cuentes si no nos puedes acompañar
            </Card>
          </Col>
          <Col
            lg={4}
            md={5}
            // sm={4}
            xs={8}
            style={{ padding: "0 0" }}
          >
            <Card
              iconFileName={"schedule-icon"}
              title={"¡No te pierdas nada!"}
              buttonText={"VER ITINERARIO"}
              href={""}
              isVisible={visibleBoxes.includes(9)}
              box={true}
              popUpCont={
                <>
                  <img
                    style={{ height: "100%", width: "100%" }}
                    alt="Itinerario"
                    src="/clients/aguilar-pacheco-01/itinerario.png"
                    loading="lazy"
                  />
                  <Row
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      marginTop: "0.5rem",
                      marginLeft: "3.5rem",
                      marginRight: "3.5rem",
                    }}
                  >
                    <a
                      className="button"
                      style={
                        { "--content": "'Descargar'" } as React.CSSProperties
                      }
                      href="https://invitacionesdigitalesan.netlify.app/clients/aguilar-pacheco-01/Itinerario-Boda.jpg"
                      download="Itinerario-Boda-Aguilar-Pacheco.jpg"
                    >
                      <div className="left"></div>
                      {"Descargar"}
                      <div className="right"></div>
                    </a>
                  </Row>
                </>
              }
            >
              Descubre el itinerario de momentos memorables que hemos preparado
              para ti durante nuestra celebración nupcial
            </Card>
          </Col>
        </Row>
        <br />
        <Row>
          <Col></Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
            className="title"
            lg={8}
            md={8}
            sm={10}
            xs={10}
          >
            Coincidir es un lujo pero conectar es un milagro
          </Col>
          <Col></Col>
        </Row>
        <br />
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col
            className={`order-1 order-md-1 ${styles.imgOval} box`}
            style={{
              display: "flex",
              justifyContent: "center",
              opacity: visibleBoxes.includes(10) ? 1 : 0,
              transform: visibleBoxes.includes(10) ? "scale(1)" : "scale(0.5)",
            }}
            lg={5}
            md={4}
            // sm={4}
            xs={8}
          >
            <img
              alt="img_1"
              src="/clients/aguilar-pacheco-01/1.jpg"
              loading="lazy"
            />
          </Col>
          <Col
            className={`order-2 order-md-2 ${styles.imgRect} box`}
            style={{
              display: "flex",
              justifyContent: "center",
              opacity: visibleBoxes.includes(11) ? 1 : 0,
              transform: visibleBoxes.includes(11) ? "scale(1)" : "scale(0.5)",
            }}
            lg={5}
            md={4}
            // sm={4}
            xs={8}
          >
            <img
              alt="img_2"
              src="/clients/aguilar-pacheco-01/2.jpg"
              loading="lazy"
            />
          </Col>
        </Row>
        <br />
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col
            className={`order-4 order-md-3 ${styles.imgOval} box`}
            style={{
              display: "flex",
              justifyContent: "center",
              opacity: visibleBoxes.includes(12) ? 1 : 0,
              transform: visibleBoxes.includes(12) ? "scale(1)" : "scale(0.5)",
            }}
            lg={5}
            md={4}
            // sm={4}
            xs={8}
          >
            <img
              alt="img_2"
              src="/clients/aguilar-pacheco-01/3.jpg"
              loading="lazy"
            />
          </Col>
          <Col
            className={`order-3 order-md-4 ${styles.imgRect} box`}
            style={{
              display: "flex",
              justifyContent: "center",
              opacity: visibleBoxes.includes(13) ? 1 : 0,
              transform: visibleBoxes.includes(13) ? "scale(1)" : "scale(0.5)",
            }}
            lg={5}
            md={4}
            // sm={4}
            xs={8}
          >
            <img
              alt="img_1"
              src="/clients/aguilar-pacheco-01/4.jpg"
              loading="lazy"
            />
          </Col>
        </Row>
        <br />
        <Row
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div id="container"></div>
        </Row>
      </Container>
      <div className="contact-section">
        <Row
          style={{ "--bs-gutter-x": 0, width: "100%" } as React.CSSProperties}
        >
          <Col></Col>
          <Col lg={8} md={8} sm={10} xs={10}>
            Invitación digital creada por Carlos Neira
          </Col>
          <Col></Col>
        </Row>
      </div>
      <br />
    </>
  );
};

export default Home;
