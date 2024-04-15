import css from './CamperImage.module.css';

const CamperImage = ({ url, alt }) => {
  return <img className={css.image} src={url} alt={alt} />;
};

export default CamperImage;
