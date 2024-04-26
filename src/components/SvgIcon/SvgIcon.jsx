import icons from 'svg/icons.svg';
import css from './SvgIcon.module.css';

const SvgIcon = ({ icon }) => {
  return (
    <svg className={css.container}>
      <use href={`${icons}#${icon}`} />
    </svg>
  );
};

export default SvgIcon;
