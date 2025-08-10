import { Link } from 'react-router'

export const EditDreamLink = ({ dreamId }) => (
  <Link
    to={`/dreams/edit/${dreamId}`}
    className="btn btn--blue"
  >
    Редагувати
  </Link>
)
