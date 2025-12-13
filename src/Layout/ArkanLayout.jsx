import { Row, Col, ListGroup } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const ArkanLayout = () => {
  return (
    <Row style={{ marginLeft: "0px", background: "#ffe69c74" }}>
      <Col md={2}>
        <ListGroup>
          <ListGroup.Item as={NavLink} to="" end variant="warning">
            {" "}
            أركان الإيمان
          </ListGroup.Item>
          <ListGroup.Item as={NavLink} to="islam" variant="warning">
            {" "}
            أركان الإسلام{" "}
          </ListGroup.Item>
          <ListGroup.Item as={NavLink} to="salah" variant="warning">
            {" "}
            الصلاة
          </ListGroup.Item>
          <ListGroup.Item as={NavLink} to="azkar" variant="warning">
            {" "}
            الأذكار
          </ListGroup.Item>
          <ListGroup.Item as={NavLink} to="tashiud" variant="warning">
            {" "}
            التشهد
          </ListGroup.Item>
        </ListGroup>
      </Col>
      <Col>
        <Outlet />
      </Col>
    </Row>
  );
}

export default ArkanLayout