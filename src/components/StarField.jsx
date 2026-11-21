// One reusable star background instead of copy-pasting <circle>s into every page.
// Positions are fixed (not random) so the sky looks the same on every render.

const STARS = [
  [8, 10, 1.1, 0.6], [92, 15, 1, 0.5], [20, 8, 0.8, 0.4], [80, 6, 0.9, 0.45],
  [50, 5, 0.8, 0.4], [15, 82, 0.9, 0.4], [88, 76, 1, 0.45], [35, 14, 1, 0.55],
  [64, 8, 1.2, 0.65], [6, 38, 0.8, 0.4], [95, 42, 1, 0.5], [30, 88, 0.7, 0.35],
  [70, 90, 0.8, 0.4], [12, 62, 0.8, 0.4], [86, 60, 0.9, 0.45], [48, 94, 0.8, 0.4],
  [40, 35, 0.8, 0.35], [72, 45, 0.8, 0.35], [24, 45, 0.8, 0.35], [58, 70, 0.7, 0.3],
];

/**
 * @param {number} count   how many stars to draw (max 20)
 * @param {number} brightness multiplier for star opacity
 */
export default function StarField({ count = 8, brightness = 1 }) {
  return (
    <svg className="star-field" aria-hidden="true" focusable="false">
      {STARS.slice(0, count).map(([x, y, r, o]) => (
        <circle key={`${x}-${y}`} cx={`${x}%`} cy={`${y}%`} r={r} fill="#fff" opacity={Math.min(1, o * brightness)} />
      ))}
    </svg>
  );
}