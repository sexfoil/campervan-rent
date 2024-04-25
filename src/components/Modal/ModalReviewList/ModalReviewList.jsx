import ModalReviewItem from '../ModalReviewItem/ModalReviewItem';
import css from './ModalReviewList.module.css';

const ModalReviewList = ({ reviews }) => {
  return (
    <ul className={css.container}>
      {reviews.map(review => {
        return (
          <li key={review.reviewer_name}>
            <ModalReviewItem review={review} />
          </li>
        );
      })}
    </ul>
  );
};

export default ModalReviewList;
