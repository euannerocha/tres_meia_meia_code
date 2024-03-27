import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function ButtonGoToRotaUm() {
  return (
    <Link to={"/rota_um"}>
      <Button style={{ backgroundColor: "violet", color: "black" }}>
        Rota Um
      </Button>
    </Link>
  );
}
