export const handlePending = ({ campervans }) => {
  campervans.loading = true;
  campervans.error = null;
};

export const handleRejected = ({ campervans }, { payload }) => {
  campervans.loading = false;
  campervans.error = payload;
};
