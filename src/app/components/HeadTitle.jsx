import { Row, Col } from "react-bootstrap";

export default function HeadTitle({ title }) {
  return (
    <Row >
      <Col sm="1"></Col>
      <Col sm="auto">
        <br />
        <br />
        <br />
        <p className="display-6">{title}</p>
      </Col>
    </Row>
  );
}
