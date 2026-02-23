export const PAL = {
  skyTop: "#e8f4ff",
  skyMid: "#b8dcf8",
  skyBottom: "#87ceeb",
  sun: "#f5c542",
  sunGlow: "#f5c54266",
  cloud: "#ffffff",
  cloudShadow: "#d0d8e0",
  mountainFar: "#8ba4c4",
  mountainMid: "#7b94b4",
  mountainNear: "#6b84a4",
  grassTop: "#4ecca3",
  grassMid: "#3dbb8f",
  grassDark: "#2d9a6f",
  dirt: "#8B6914",
  dirtDark: "#6b5010",
  stone: "#808080",
  stoneDark: "#606060",
  water: "#4a90d9",
  waterLight: "#6ab0f9",
  waterDark: "#3a70b0",
  treeTrunk: "#8B5A2B",
  treeLeaf: "#2d9a6f",
  treeLeafLight: "#4ecca3",
  accent: "#e94560",
  gold: "#f5c542",
  white: "#ffffff",
  black: "#000000",

  nightSkyTop: "#0a0a1a",
  nightSkyMid: "#0e0e28",
  nightSkyBottom: "#1a1a3e",
  star: "#ffffff",
  starDim: "#aaaacc",
  moonGlow: "#cceeff44",
};

export const BLOCK_COLORS = [
  "#e94560",
  "#4ecca3",
  "#f5c542",
  "#5b86e5",
  "#ff6b35",
  "#a855f7",
  "#06b6d4",
  "#84cc16",
];

export function lerpColor(a: string, b: string, t: number): string {
  const ah = parseInt(a.replace("#", ""), 16);
  const bh = parseInt(b.replace("#", ""), 16);
  const ar = (ah >> 16) & 0xff,
    ag = (ah >> 8) & 0xff,
    ab = ah & 0xff;
  const br = (bh >> 16) & 0xff,
    bg = (bh >> 8) & 0xff,
    bb = bh & 0xff;
  const rr = Math.round(ar + (br - ar) * t);
  const rg = Math.round(ag + (bg - ag) * t);
  const rb = Math.round(ab + (bb - ab) * t);
  return `#${((rr << 16) | (rg << 8) | rb).toString(16).padStart(6, "0")}`;
}
