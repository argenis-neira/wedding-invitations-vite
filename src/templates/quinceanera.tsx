import { Col, Row, Container } from "react-bootstrap";
import styles from "./quinceanera.module.css";
import Reproductor from "../components/player";
import Parallax from "../components/parallax";
import usePageMeta from "../components/usePageMeta";
import MainText from "../components/main-text";
import Card from "../components/card";
import Timer from "../components/timer";
import DressCard from "../components/dress-card";

const TemplateXV: React.FC = () => {
  usePageMeta("Mis XV", "/common/xv-icon.png");

  const FlowerDivider = () => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      className={styles.flowerSvg}
    >
      <path
        d="M50 20C55 35 75 35 75 50C75 65 55 65 50 80C45 65 25 65 25 50C25 35 45 35 50 20Z"
        stroke="#D4AF37"
        strokeWidth="4"
      />
      <circle cx="50" cy="50" r="5" fill="#D4AF37" />
      <path
        d="M30 30L40 40M70 30L60 40M30 70L40 60M70 70L60 60"
        stroke="#D4AF37"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
  return (
    <>
      <Parallax
        leftImage="flower-purple-izq.png"
        rightImage="flower-purple-der.png"
      />
      <div className={styles.backgroundContainer} aria-hidden="true" />

      <main className={styles.content}>
        <Container>
          <Row style={{ paddingTop: "10px" }}>
            <Reproductor route="/james/cuan_lejos_moana.mp3" />
          </Row>
          <Row style={{ paddingTop: "50px" }}>
            <h1
              className="title"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "70px",
              }}
            >
              Mis XV años
            </h1>
          </Row>
          <Row style={{ paddingTop: "50px" }}>
            <h1
              className="title"
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "70px",
              }}
            >
              Jeanette Karina Malavé Tomalá
            </h1>
          </Row>
          <Row style={{ display: "flex", justifyContent: "center" }}>
            <Col
              className={styles.imgRect}
              lg={5}
              md={4}
              // sm={4}
              xs={8}
            >
              <img
                alt="img_1"
                src="/clients/james/main-image.jpeg"
                loading="lazy"
              />
            </Col>
          </Row>
        </Container>

        <section className={styles.sectionContainer}>
          <FlowerDivider />

          <div className={styles.contentGroup}>
            <h2 className={styles.mainTitle}>Padres</h2>
            <div className={styles.gridFamily}>
              <div className={styles.familyBlock}>
                Jaime Eduardo Malavé Carrera
              </div>
              <span className={styles.ampersand}>&</span>
              <div className={styles.familyBlock}>
                Maribell Aidee Tomalá Neira
              </div>
            </div>
          </div>

          <div className={styles.spacer}>
            <div className={styles.line}></div>
            <span className={styles.sparkle}>✦</span>
            <div className={styles.line}></div>
          </div>

          <div className={styles.contentGroup}>
            <h2 className={styles.mainTitle}>Nuestros Padrinos</h2>
            <div className={styles.familyBlock}>
              María del Carmen Yance Roca
              <br />
              Uriel Agustín Briones Bermello
            </div>
          </div>

          <div className={styles.spacer}>
            <div className={styles.line}></div>
            <span className={styles.sparkle}>✦</span>
            <div className={styles.line}></div>
          </div>

          <MainText>
            Hace quince años nació una pequeña estrella llena de sueños, amor y
            esperanza. Hoy, esa estrella comienza una nueva etapa, dejando atrás
            la infancia para brillar como princesa en la noche de sus quince
            años.
            <br />
            En este momento mágico, donde los sueños se hacen realidad,
            agradezco profundamente a mis padres por su amor y guía. Con el
            corazón lleno de gratitud, te invito a compartir conmigo la alegría
            y la magia de esta noche tan especial.
          </MainText>

          <FlowerDivider />
        </section>
      </main>

      <Container>
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
              href={"https://maps.app.goo.gl/Dsryta8N9eYTS5HF7"}
              isVisible={true}
            >
              31 de Enero 2026 <br />
              18:00 <br /> Santuario Católico Nuestra Señora de La Esperanza
              <br /> Parroquia San Antonio de Padua, La Libertad
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
              href={"https://maps.app.goo.gl/wrDA9zZLZjW38Hy89"}
              isVisible={true}
            >
              31 de Enero 2026 <br />
              20:00 <br /> Salón de eventos Isabela
              <br />
              Ciudadela Santa Paula, José Luis Tamayo
            </Card>
          </Col>
        </Row>
        <Timer dateStr="2026-01-31T18:00:00" />
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
            <DressCard
              title="Regalo"
              isVisible={true}
              iconFileName={"gift-icon.svg"}
            >
              En este cuento encantado, tu presencia será el regalo más valioso.
              Pero si deseas obsequiarme algo más, agradeceré de corazón tu
              detalle en un sobre cerrado.
            </DressCard>
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
              isVisible={true}
              iconFileName={"dress-code.svg"}
            >
              Formal
              <br />
            </DressCard>
          </Col>
        </Row>
        <div className={styles.spacer}>
          <div className={styles.line}></div>
          <span className={styles.sparkle}>✦</span>
          <div className={styles.line}></div>
        </div>
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

export default TemplateXV;
