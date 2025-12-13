
import { NavLink } from "react-router-dom";
import { Nav, Navbar, Container } from "react-bootstrap";
import styles from './styles.module.css';
const {headerContainar } = styles;


const Header = () => {
    return (
        <>
                    <Navbar expand="lg" className="  ms-auto"  style={{background:"#a54f3a",d4irection:"rtl"}} >
                        <Container className={headerContainar}>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                <Nav >
                                        <Nav.Link as={NavLink} to="/">الرئسية</Nav.Link>
                                        <Nav.Link as={NavLink} to="prayers">الصلوات</Nav.Link>
                                        <Nav.Link as={NavLink} to="arkan">الاركان والاذكار</Nav.Link>
                                        <Nav.Link as={NavLink} to="aboutme">عني</Nav.Link>
                                </Nav>
                    </Navbar.Collapse>
                    
                </Container>
                    </Navbar>
        </>
  )
}

export default Header
