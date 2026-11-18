/**
 * The Ascent — AuditLinkTrail brand mark.
 *
 * Source: brand/logo/alt.svg
 * Geometry: A staircase of sealed masonry courses climbing the trail;
 * the newest entry sits on top in luminous gold.
 */
export type AscentMarkProps = {
  className?: string;
  /**
   * "default": uses currentColor, with the base courses at 45% opacity
   * "brand": uses design-token gold (deep gold base #8F6E31 + bright gold top #E9D096)
   * "light": light-surface contrast (ink base #14110C + brand gold top #C9A45C)
   * "mono": single-color solid mark
   */
  variant?: "default" | "brand" | "light" | "mono";
  baseColor?: string;
  topColor?: string;
};

export function AscentMark({
  className,
  variant = "default",
  baseColor,
  topColor,
}: AscentMarkProps) {
  let computedBase = baseColor;
  let computedTop = topColor;
  let baseOpacity: number | undefined = undefined;

  if (!computedBase && !computedTop) {
    if (variant === "brand") {
      computedBase = "#8F6E31";
      computedTop = "#E9D096";
    } else if (variant === "light") {
      computedBase = "#14110C";
      computedTop = "#C9A45C";
    } else if (variant === "mono") {
      computedBase = "currentColor";
      computedTop = "currentColor";
    } else {
      // "default": inherits textColor with subtle multi-course depth
      computedBase = "currentColor";
      computedTop = "currentColor";
      baseOpacity = 0.52;
    }
  }

  return (
    <svg
      viewBox="0 0 256 256"
      className={className}
      role="img"
      aria-label="AuditLinkTrail — The Ascent"
    >
      <g transform="translate(4, 2)">
        {/* Sealed masonry courses climbing the trail */}
        <path
          fill={computedBase ?? "currentColor"}
          fillOpacity={baseOpacity}
          d="M44 204v-24h32v-44h32V92h32V72h32V48h32v24h-32v20h-32v44h-32v44h-32v24Z"
        />
        {/* The newest entry / golden capstone sitting on top */}
        <path
          fill={computedTop ?? "currentColor"}
          d="M140 48h64v24h-64Z"
        />
      </g>
    </svg>
  );
}
