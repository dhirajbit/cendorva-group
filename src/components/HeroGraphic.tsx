/**
 * Abstract architectural drawing: three isometric floor plates, columns
 * between them, and a fine construction grid. Thin steel-blue lines on navy.
 */
export function HeroGraphic({ className = "" }: { className?: string }) {
  // Isometric helpers: x axis goes right-down, y axis goes right-up.
  const iso = (x: number, y: number, z: number) => {
    const px = 300 + (x - y) * 0.866 * 1;
    const py = 300 + (x + y) * 0.5 - z;
    return `${px.toFixed(1)},${py.toFixed(1)}`;
  };
  const plate = (z: number, s: number, ox = 0, oy = 0) =>
    [
      iso(ox - s, oy - s, z),
      iso(ox + s, oy - s, z),
      iso(ox + s, oy + s, z),
      iso(ox - s, oy + s, z),
    ].join(" ");

  const levels = [
    { z: 0, s: 150 },
    { z: 90, s: 120 },
    { z: 180, s: 90 },
    { z: 270, s: 60 },
  ];

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
        return corners.map(([cx, cy], j) => (
          <line
            key={`${i}-${j}`}
            x1={iso(cx * next.s, cy * next.s, lvl.z).split(",")[0]}
            y1={iso(cx * next.s, cy * next.s, lvl.z).split(",")[1]}
            x2={iso(cx * next.s, cy * next.s, next.z).split(",")[0]}
            y2={iso(cx * next.s, cy * next.s, next.z).split(",")[1]}
            stroke="#8FB0C4"
            strokeOpacity={0.55}
            strokeWidth="1"
          />
        ));
      })}

      {/* Floor plates */}
      {levels.map((lvl, i) => (
        <polygon
          key={i}
          points={plate(lvl.z, lvl.s)}
          stroke={i === levels.length - 1 ? "#FFFFFF" : "#8FB0C4"}
          strokeOpacity={i === levels.length - 1 ? 0.9 : 0.6}
          strokeWidth={i === levels.length - 1 ? 1.5 : 1}
          fill={i === levels.length - 1 ? "#4D758E" : "none"}
          fillOpacity={i === levels.length - 1 ? 0.18 : 0}
        />
      ))}

      {/* Inner subdivision on the ground plate */}
      <polyline
        points={`${iso(-150, 0, 0)} ${iso(150, 0, 0)}`}
        stroke="#4D758E"
        strokeOpacity="0.45"
        strokeWidth="1"
      />
      <polyline
        points={`${iso(0, -150, 0)} ${iso(0, 150, 0)}`}
        stroke="#4D758E"
        strokeOpacity="0.45"
        strokeWidth="1"
      />

      {/* Dimension ticks on the left edge */}
      {levels.map((lvl, i) => (
        <g key={`tick-${i}`} stroke="#8FB0C4" strokeOpacity="0.5" strokeWidth="1">
          <line x1="40" y1={300 - lvl.z + 150 * 0.5 * 2 - 150 + 0.5} x2="52" y2={300 - lvl.z + 150 * 0.5 * 2 - 150 + 0.5} />
        </g>
      ))}
      <line x1="46" y1="150" x2="46" y2="450" stroke="#8FB0C4" strokeOpacity="0.5" strokeWidth="1" />

      {/* The one accent: a steel square marking the top plate */}
      <rect
        x={Number(iso(0, 0, 270).split(",")[0]) - 5}
        y={Number(iso(0, 0, 270).split(",")[1]) - 5}
        width="10"
        height="10"
        fill="#4D758E"
      />

      <rect x="0" y="470" width="600" height="90" fill="url(#fade)" />
    </svg>
  );
}
