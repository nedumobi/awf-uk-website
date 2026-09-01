type UliMarkProps = {
  className?: string;
  variant?: "flow" | "seed" | "knot";
};

/**
 * A restrained, hand-drawn-style linework mark inspired by Uli body/wall art
 * motifs — the site's single recurring decorative signature. Used sparingly
 * as a section divider or accent, never as a repeating background pattern.
 */
export default function UliMark({ className = "", variant = "flow" }: UliMarkProps) {
  if (variant === "seed") {
    return (
      <svg
        viewBox="0 0 120 24"
        className={className}
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 12c8-9 16-9 20 0s12 9 20 0 16-9 20 0 12 9 20 0 12-9 20-9"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
        <circle cx="60" cy="12" r="2" fill="currentColor" />
        <circle cx="108" cy="12" r="2" fill="currentColor" />
      </svg>
    );
  }

  if (variant === "knot") {
    return (
      <svg viewBox="0 0 48 48" className={className} fill="none" aria-hidden="true">
        <path
          d="M24 4c8 0 14 6 14 13 0 6-4 9-9 9-4 0-6-3-6-6s2-5 5-5 5 2 5 5-2 5-5 6c-5 1-9-3-9-9 0-7 6-13 14-13"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 160 20" className={className} fill="none" aria-hidden="true">
      <path
        d="M0 10c6-8 12-8 18 0s12 8 18 0 12-8 18 0 12 8 18 0 12-8 18 0 12 8 18 0 12-8 18 0 12 8 18 0"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
