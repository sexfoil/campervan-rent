import ModalReviewItem from '../ModalReviewItem/ModalReviewItem';

const ModalReviewList = ({ reviews }) => {
  return (
    <ul>
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
