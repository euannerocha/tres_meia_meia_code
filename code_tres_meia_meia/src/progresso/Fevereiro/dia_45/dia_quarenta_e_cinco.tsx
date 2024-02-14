import { Link } from "react-router-dom";

function ButtonGoTo(){
    return (
        <div>
            <Link to={"/rota_um"}>
                IR PRA ROTA UM
            </Link>
        </div>
    )
}

export default ButtonGoTo