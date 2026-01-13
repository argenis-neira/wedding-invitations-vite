import { Row, Col } from "react-bootstrap";

type MainText = {
  children: any
}

const MainText = ({children} : MainText) => {
  return (
    <>
      <Row>
        <Col></Col>
        <Col lg={8} md={8} sm={10} xs={10}>
          <div className="main-text">
            {children}
          </div>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};

export default MainText;