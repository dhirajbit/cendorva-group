/**
 * Abstract architectural drawing: four isometric floor plates, columns
 * between them, and a fine construction grid. Thin steel-blue lines on navy.
 *
 * The drawing origin sits low enough that the top plate (z = 270, half-width
 * 60) and the ground shadow (z = -14) both fit inside the viewBox, and the
 * dimension rule on the left is kept clear of the ground plate's corner.
 */
const ORIGIN_X = 300;
const ORIGIN_Y = 340;

const levels = [
  { z: 0, s: 150 },
  { z: 90, s: 120 },
  { z: 180, s: 90 },
  { z: 270, s: 60 },
];

// Isometric projection: x axis goes right-down, y axis goes right-up.
const iso = (x: number, y: number, z: number): [number, number] => [
  ORIGIN_X + (x - y) * 0.866,
  ORIGIN_Y + (x + y) * 0.5 - z,
];
const pt = ([x, y]: [number, number]) => `${x.toFixed(1)},${y.toFixed(1)}`;
const plate = (z: number, s: number) =>
  [iso(-s, -s, z), iso(s, -s, z), iso(s, s, z), iso(-s, s, z)].map(pt).join(" ");

const RULE_X = 18;
const TICK_HALF = 6;

export function HeroGraphic({ className = "" }: { className?: string }) {
  const [apexX, apexY] = iso(0, 0, levels[levels.length - 1].z);
  const tickYs = levels.map((l) => ORIGIN_Y - l.z + 0.5);
  const ruleTop = Math.min(...tickYs);
  const ruleBottom = Math.max(...tickYs);

  return (
    <svg
      viewBox="0 0 600 560"
      className={className}
      aria-hidden="true"
      focusable="false"
      fill="none"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M40 0H0V40" stroke="#4D758E" strokeOpacity="0.14" strokeWidth="1" />
        </pattern>
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#192D42" stopOpacity="0" />
          <stop offset="1" stopColor="#192D42" stopOpacity="1" />
        </linearGradient>
      </defs>

      <rect width="600" height="560" fill="url(#grid)" />

      {/* Ground shadow plate */}
      <polygon points={plate(-14, 150)} stroke="#4D758E" strokeOpacity="0.25" strokeWidth="1" />

      {/* Columns between plates at the four corners */}
      {levels.slice(0, -1).map((lvl, i) => {
        const next = levels[i + 1];
        const corners: Array<[number, number]> = [
          [-1, -1],
          [1, -1],
          [1, 1],
          [-1, 1],
        ];
        return corners.map(([cx, cy], j) => {
          const [x1, y1] = iso(cx * next.s, cy * next.s, lvl.z);
          const [x2, y2] = iso(cx * next.s, cy * next.s, next.z);
          return (
            <line
              key={`${i}-${j}`}
              x1={x1.toFixed(1)}
              y1={y1.toFixed(1)}
              x2={x2.toFixed(1)}
              y2={y2.toFixed(1)}
              stroke="#8FB0C4"
              strokeOpacity={0.55}
              strokeWidth="1"
            />
          );
        });
      })}

      {/* Floor plates */}
      {levels.map((lvl, i) => {
        const top = i === levels.length - 1;
        return (
          <polygon
            key={i}
            points={plate(lvl.z, lvl.s)}
            stroke={top ? "#FFFFFF" : "#8FB0C4"}
            strokeOpacity={top ? 0.9 : 0.6}
            strokeWidth={top ? 1.5 : 1}
            fill={top ? "#4D758E" : "none"}
            fillOpacity={top ? 0.18 : 0}
          />
        );
      })}

      {/* Inner subdivision on the ground plate */}
      <polyline
        points={`${pt(iso(-150, 0, 0))} ${pt(iso(150, 0, 0))}`}
        stroke="#4D758E"
        strokeOpacity="0.45"
        strokeWidth="1"
      />
      <polyline
        points={`${pt(iso(0, -150, 0))} ${pt(iso(0, 150, 0))}`}
        stroke="#4D758E"
        strokeOpacity="0.45"
        strokeWidth="1"
      />

      {/* Dimension rule on the left: one tick per plate level, joined by a rule */}
      <g stroke="#8FB0C4" strokeOpacity="0.5" strokeWidth="1">
        <line x1={RULE_X} y1={ruleTop} x2={RULE_X} y2={ruleBottom} />
        {tickYs.map((y, i) => (
          <line key={`tick-${i}`} x1={RULE_X - TICK_HALF} y1={y} x2={RULE_X + TICK_HALF} y2={y} />
        ))}
      </g>

      {/* The one accent: a steel square marking the top plate */}
      <rect x={(apexX - 5).toFixed(1)} y={(apexY - 5).toFixed(1)} width="10" height="10" fill="#4D758E" />

      <rect x="0" y="470" width="600" height="90" fill="url(#fade)" />
    </svg>
  );
}
