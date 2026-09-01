/**
 * Returns a stable placeholder photo URL for a given content key.
 * Replace with real AWF photography before launch — see README.
 */
export function placeholderImage(seed: string, width = 1200, height = 800) {
  return `https://picsum.photos/seed/awf-${seed}/${width}/${height}`;
}
