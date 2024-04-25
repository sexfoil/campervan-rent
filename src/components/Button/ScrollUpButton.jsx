import SvgIcon from 'components/SvgIcon/SvgIcon';
import css from './ScrollUpButton.module.css';

const ScrollUpButton = ({ onClickScrollUp }) => {
  return (
    <button
      className={css.scroll}
      type="button"
      onClick={() => onClickScrollUp()}
    >
      <SvgIcon icon={'scrollup'} />
    </button>
  );
};

export default ScrollUpButton;
