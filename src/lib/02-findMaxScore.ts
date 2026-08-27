export function findMaxScore(scores: number[]): number {
  let max = scores[0];

  for (let i = 0; i <= scores.length; i++) {
    if (scores[i] > max) {
      max = scores[i];
    }
  }

  return max;
}
