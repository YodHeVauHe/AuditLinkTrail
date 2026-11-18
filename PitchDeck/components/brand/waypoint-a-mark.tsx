import { AscentMark, type AscentMarkProps } from "./ascent-mark";

/**
 * Replaced with The Ascent (brand/logo/round2/d3-ascent.svg)
 * Retained as an alias for backwards compatibility.
 */
export function WaypointAMark(props: AscentMarkProps) {
  return <AscentMark {...props} />;
}

export { AscentMark };
