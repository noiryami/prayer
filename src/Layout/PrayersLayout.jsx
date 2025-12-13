import { Row, Col, ListGroup } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const PrayersLayout = () => {
  return (
    <>
          <Row style={{background:"#ffe69c74", marginLeft:"0px"}}>
              <Col md={2} >
                  <ListGroup  > 
                      <ListGroup.Item as={NavLink} to="" end variant="warning"  >الصلوات</ListGroup.Item>
                      <ListGroup.Item as={NavLink} to="fajr" variant="warning" >الفجر</ListGroup.Item>
                      <ListGroup.Item as={NavLink} to="dauhur" variant="warning">الظهر</ListGroup.Item>
                      <ListGroup.Item as={NavLink} to="asr" variant="warning">العصر</ListGroup.Item>
                      <ListGroup.Item as={NavLink} to="maghrib" variant="warning">المغرب</ListGroup.Item>
                      <ListGroup.Item as={NavLink} to="isha" variant="warning">العشاء</ListGroup.Item>
                  </ListGroup>
              </Col>
              <Col  >
                  <Outlet />
              </Col>
          </Row>      
    </>
  )
}

export default PrayersLayout