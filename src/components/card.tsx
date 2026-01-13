import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";

type CardProps = {
  iconFileName: string;
  title: string;
  buttonText: string;
  href: string;
  isVisible: boolean;
  box?: boolean;
  popUpCont?: any;
  xl?: number;
  children?: any;
};

const Card = ({
  iconFileName,
  title,
  buttonText,
  href,
  isVisible,
  box = false,
  popUpCont,
  xl = 4,
  children,
}: CardProps) => {
  // la clase "box" es para identificar todo aquello que necesita animación al hacer scroll
  const [openBox, setOpenBox] = useState<boolean>(false);

  const handleClick = (e: any) => {
    if (box) {
      e.preventDefault();
      setOpenBox(true);
    }
  };

  return (
    <>
      <div
        className={`card-slot box`}
        style={{
          display: "flex",
          flexDirection: "column",
          opacity: isVisible ? 1 : 0,
        }}
      >
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <img
            className="card-icon"
            alt={title}
            src={`/common/${iconFileName}.svg`}
            loading="lazy"
          />
        </Row>

        <br />

        <Row
          style={{ display: "flex", justifyContent: "center" }}
          className="card-title"
        >
          {title}
        </Row>

        <Row
          style={{ display: "flex", justifyContent: "center" }}
          className="card-info"
        >
          {children}
        </Row>

        <br />

        <Row
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "auto",
          }}
        >
          <a
            className="button"
            style={{ "--content": `'${buttonText}'` } as React.CSSProperties}
            href={href}
            target="_blank"
            rel="noreferrer"
            onClick={handleClick}
          >
            <div className="left"></div>
            {buttonText}
            <div className="right"></div>
          </a>
        </Row>
      </div>

      {openBox && (
        <Row className="popup">
          <Col />
          <Col xl={xl} lg={5} md={6} sm={8} xs={12}>
            <div className="popup-content">
              <span
                style={{ zIndex: 2, position: "relative" }}
                className="close"
                onClick={() => setOpenBox(false)}
              >
                &times;
              </span>
              {popUpCont}
            </div>
          </Col>
          <Col />
        </Row>
      )}
    </>
  );
};

export default Card;
