import { Link } from "react-router";

function Home() {
	return (
    <div className="home">
      <div className="home__container">
        <div className="home__wrapper">
          <div className="home__title">Планувальник мрій</div>
          <Link to={"/dreams"} className="home__link">
            💫 Мої мрії...
          </Link>
        </div>
      </div>
      <div className="home__img">
        <img src="./home-bg2.png" alt="img" />
      </div>
    </div>
  );
}

export default Home;