import background from 'img/banner.avif';
import css from './Home.module.css';

const Home = () => {
  return (
    <div className={css.container}>
      <div className={css.title}>
        <h1>CAMPERVAN RENT</h1>
        <p>
          Explore the country at your own pace and in complete comfort with an
          Campervan Rent from Cruise America
        </p>
      </div>
      <img className={css.image} src={background} alt="background" />
      <p className={css.author}>
        &copy; Test project GoIT course, developed by Viacheslav Poliakov
      </p>
    </div>
  );
};

export default Home;
