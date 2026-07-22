// FNV-1a: cheap, dependency-free, stable across reloads/environments for a
// given string -- unlike Math.random(), the same slug always yields the
// same tilt/offset.
function hashString(input: string): number {
  let hash = 0x811c9dc5;
  for (let i = 0; i < input.length; i++) {
    hash ^= input.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }
  return hash >>> 0;
}

export type FrameTransform = {
  rotateDeg: number;
  offsetX: number;
  offsetY: number;
};

// Derives a small, deterministic "off-center" tilt from a post's slug so the
// thumbnail styling reads as a considered design quirk rather than random
// jitter: rotation stays in 2-6deg (either direction, never near-zero) and
// offset stays within a few px.
export function seededFrameTransform(seed: string): FrameTransform {
  const hash = hashString(seed);
  const rotateMagnitude = 2 + (hash % 5);
  const rotateSign = hash & 0x10 ? 1 : -1;
  const offsetX = ((hash >>> 4) % 13) - 6;
  const offsetY = ((hash >>> 8) % 13) - 6;

  return {
    rotateDeg: rotateMagnitude * rotateSign,
    offsetX,
    offsetY,
  };
}
