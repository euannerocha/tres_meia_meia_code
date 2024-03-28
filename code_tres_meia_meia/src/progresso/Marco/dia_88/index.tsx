import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ButtonGoToHome() {
  return (
    <Link to={"/"}>
      <Button style={{ backgroundColor: "violet", color: "black" }}>
        Home
      </Button>
    </Link>
  );
}
