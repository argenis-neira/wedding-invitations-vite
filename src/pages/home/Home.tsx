import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import usePageMeta from "../../components/usePageMeta";

const Home: React.FC = () => {
  usePageMeta("Invitaciones Digitales Argenis", "/common/main-icon.png")
  const navigate = useNavigate();

  const templates = [
    {
      id: 1,
      title: "Boda Real",
      description:
        "Un diseño elegante con fondo de mar y arena, perfecto para celebraciones inolvidables.",
      path: "/aguilar-pacheco-01",
      image: "/previews/boda-preview.jpg", // Una captura de pantalla de tu template
    },
    {
      id: 2,
      title: "Mis XV Años",
      description:
        "Estilo minimalista y sofisticado para el día más especial de tu vida.",
      path: "/mis-quince",
      image: "/previews/xv-preview.jpg",
    },
  ];

  return (
    <div className={styles.mainWrapper}>
      <header className={styles.hero}>
        <Container>
          <h1 className="display-3 fw-bold">Invitaciones Digitales</h1>
          <p className="lead">
            Diseños modernos y mágicos para tus eventos más importantes.
          </p>
          <Button variant="light" size="lg" href="#templates">
            Ver Diseños
          </Button>
        </Container>
      </header>

      <Container id="templates" className="py-5">
        <h2 className="text-center mb-5" style={{ color: "black" }}>
          Nuestros Templates
        </h2>
        <Row className="g-4">
          {templates.map((temp) => (
            <Col key={temp.id} md={6} lg={4}>
              <Card className="h-100 shadow-sm border-0">
                <div style={{ minHeight: "550px" }}>
                  <Card.Img variant="top" src={temp.image} alt={temp.title} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="fw-bold">{temp.title}</Card.Title>
                    <Card.Text className="text-muted">
                      {temp.description}
                    </Card.Text>
                  </Card.Body>
                </div>
                <Card.Footer className="border-0">
                  <Button
                    variant="primary"
                    className="w-100"
                    onClick={() => navigate(temp.path)}
                  >
                    Ver Demo
                  </Button>
                </Card.Footer>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <footer className={styles.footerSection}>
        <Container>
          <Row className="py-4">
            <Col md={4} className="text-center text-md-start">
              <h5 className="fw-bold">Invitaciones Mágicas</h5>
              <p className="small text-muted">
                Hacemos que tu evento comience desde la invitación.
              </p>
            </Col>

            <Col md={4} className="text-center">
              <h5 className="fw-bold">Contacto Directo</h5>
              <p>
                <a
                  href="mailto:neira.carlos.argenis@gmail.com"
                  className={styles.contactLink}
                >
                  <i className="bi bi-envelope me-2"></i>neira.carlos.argenis@gmail.com
                </a>
              </p>
            </Col>
          </Row>
          <hr className="text-muted" />
          <div className="text-center py-2">
            <small className="text-muted">
              © 2024 invitacionesdigitalesan. Todos los derechos reservados.
            </small>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Home;
