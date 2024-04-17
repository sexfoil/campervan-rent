import css from './Home.module.css';
import background from 'img/banner.avif';

const Home = () => {
  return (
    <div className={css.container}>
      <div>
        <h1>CAMPERVAN RENT</h1>
        <p>
          Explore the country at your own pace and in complete comfort with an
          RV rental from Cruise America
        </p>
      </div>
      <img className={css.image} src={background} alt="bacground" />
    </div>
  );
};

export default Home;
