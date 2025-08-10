
import { Link } from 'react-router' // Використовуйте react-router-dom для Link

export const AddDreamButton = () => {
  return (
    <Link
      to="/dreams/add"
      className="btn"
    >
      + Додати мрію
    </Link>
  )
}
