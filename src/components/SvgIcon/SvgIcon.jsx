import css from './SvgIcon.module.css';
import icons from 'svg/icons.svg';

const SvgIcon = ({ icon }) => {
  return (
    <svg className={css.container}>
      <use href={`${icons}#${icon}`} />
    </svg>
  );
};

export default SvgIcon;
