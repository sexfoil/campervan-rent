const ModalReviewItem = ({ review }) => {
  return (
    <div>
      <span>{review.reviewer_name}</span>
      <span>{review.reviewer_rating}</span>
      <p>{review.comment}</p>
    </div>
  );
};

export default ModalReviewItem;
