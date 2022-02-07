import { useRouter } from "next/router";
import React from "react";

const ReviewDetail = () => {
  const router = useRouter();
  const { reviewId, productId } = router.query;
  return (
    <>
      <h3>
        Review about detail {reviewId} for {productId}
      </h3>
    </>
  );
};

export default ReviewDetail;
