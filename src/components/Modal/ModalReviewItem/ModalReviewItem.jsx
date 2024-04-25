import RatingBar from 'components/RatingBar/RatingBar';
import css from './ModalReviewItem.module.css';

const ModalReviewItem = ({ review }) => {
  return (
    <div className={css.container}>
      <div className={css.header}>
        <span className={css.avatar}>{review.reviewer_name[0]}</span>
        <div className={css.infoBox}>
          <div className={css.name}>{review.reviewer_name}</div>
          <RatingBar rating={review.reviewer_rating} />
        </div>
      </div>
      <p>{review.comment}</p>
    </div>
  );
};

export default ModalReviewItem;
