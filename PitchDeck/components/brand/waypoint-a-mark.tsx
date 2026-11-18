import { AscentMark, type AscentMarkProps } from "./ascent-mark";

/**
 * Replaced with The Ascent (brand/logo/alt.svg)
 * Retained as an alias for backwards compatibility.
 */
export function WaypointAMark(props: AscentMarkProps) {
  return <AscentMark {...props} />;
}

export { AscentMark };
