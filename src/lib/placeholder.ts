// Deterministic gradient SVG generator — used as placeholder imagery.
// Replace individual entries with real <img> imports as assets are added.

function svg(a: string, b: string, label: string, accent = "#73ffb8"): string {
  const s = `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="${a}"/>
      <stop offset="100%" stop-color="${b}"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${accent}" stroke-opacity="0.08" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="800" height="600" fill="url(#g)"/>
  <rect width="800" height="600" fill="url(#grid)"/>
  <circle cx="640" cy="120" r="180" fill="${accent}" fill-opacity="0.18"/>
  <circle cx="120" cy="500" r="120" fill="${accent}" fill-opacity="0.12"/>
  <text x="48" y="540" font-family="ui-monospace, monospace" font-size="22" fill="${accent}" fill-opacity="0.85">${label}</text>
</svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(s)}`;
}

export const placeholder = {
  project: (label: string, seed = 0) =>
    svg(["#0d1b2a", "#142a3d", "#0b2536", "#16213e"][seed % 4], ["#1b4332", "#143d2b", "#0f3b32", "#1a4d3a"][seed % 4], label),
  blog: (label: string, seed = 0) =>
    svg(["#0d1b2a", "#16213e", "#0e2d33"][seed % 3], ["#2dd4a8", "#1b4332", "#1a5c4d"][seed % 3], label, "#73ffb8"),
  team: (initials: string, seed = 0) =>
    svg(["#1b4332", "#0d1b2a", "#16213e", "#142a3d", "#0f3b32", "#1a4d3a"][seed % 6], ["#2dd4a8", "#73ffb8", "#4ade80", "#34d399", "#10b981", "#6ee7b7"][seed % 6], initials, "#0d1b2a"),
  hero: () => svg("#0d1b2a", "#1b4332", "MEGATRON / / /", "#73ffb8"),
};
