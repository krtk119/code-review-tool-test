interface Review {
  rating: number;
}

export function getAverageRating(reviews: Review[]): number {
  const total = reviews.reduce((sum, review) => sum + review.rating, 0);
  return total / reviews.length;
}

export function formatRatingLabel(reviews: Review[]): string {
  const avg = getAverageRating(reviews);
  return `${avg.toFixed(1)} out of 5`;
}
