import Row from "react-bootstrap/Row";

type DressCardProps = {
  iconFileName: string;
  title: string;
  isVisible: boolean;
  children?: any;
};

const DressCard = ({
  iconFileName,
  title,
  isVisible,
  children,
}: DressCardProps) => {
  // la clase "box" es para identificar todo aquello que necesita animación al hacer scroll
  return (
    <div
      className={`card-slot box`}
      style={{
        display: "flex",
        flexDirection: "column",
        opacity: isVisible ? 1 : 0,
      }}
    >
      <Row
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          className="card-icon"
          alt={title}
          src={`/common/${iconFileName}`}
          loading="lazy"
        />
      </Row>

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
    </div>
  );
};

export default DressCard;
