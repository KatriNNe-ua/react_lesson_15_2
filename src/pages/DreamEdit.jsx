import { Link, useParams } from "react-router";
import { DreamEditFormWidget } from "../widgets/DreamEditFormWidget";

function DreamEdit() {
	const { id } = useParams();
	return (
    <div className="form">
      <div className="form__container">
        <Link to={"/dreams"} className="btn dream__btn">
          ◀ До списку мрій
        </Link>
        <DreamEditFormWidget dreamId={id} />
      </div>
    </div>
  );
}

export default DreamEdit;