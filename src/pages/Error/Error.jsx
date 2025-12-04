import NotFound from "../../assets/notFound.json";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Lottie from "lottie-react";

const Error = () => {
  return (
    <Container>
      <div
        className="d-flex flex-column align-items-center"
        style={{ margin: "15%" }}
      >
        <Lottie
          animationData={NotFound}
          style={{ width: "300px", height: "300px" }}
          loop
          autoplay
        />
        <h2>Oops! The page you're looking for doesn't exist.</h2>
        <Link to="/" replace={true}>
          How about going back to safety?
        </Link>
      </div>
    </Container>
  );
};

export default Error;
