type IconName = "hands" | "leaf" | "children" | "heart" | "book" | "bridge";

const paths: Record<IconName, React.ReactNode> = {
  hands: (
    <>
      <path d="M8 21v-6a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v6" />
      <path d="M4 21v-4a2 2 0 0 1 2-2h1" />
      <path d="M20 21v-4a2 2 0 0 0-2-2h-1" />
      <circle cx="12" cy="7" r="3" />
    </>
  ),
  leaf: (
    <>
      <path d="M6 20C4 12 8 4 19 4c0 11-8 15-16 16Z" />
      <path d="M6 20c2-4 5-7 9-9" />
    </>
  ),
  children: (
    <>
      <circle cx="8" cy="7" r="3" />
      <circle cx="16" cy="7" r="3" />
      <path d="M3 21v-2a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4" />
      <path d="M13 21v-1a4 4 0 0 1 4-4h1a4 4 0 0 1 4 4v1" />
    </>
  ),
  heart: (
    <path d="M12 20s-7-4.35-9.5-8.5C.7 8.1 2.6 4.5 6.2 4a5 5 0 0 1 5.8 3 5 5 0 0 1 5.8-3c3.6.5 5.5 4.1 3.7 7.5C19 15.65 12 20 12 20Z" />
  ),
  book: (
    <>
      <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H12v18H6.5A2.5 2.5 0 0 0 4 23.5v-18Z" />
      <path d="M20 5.5A2.5 2.5 0 0 0 17.5 3H12v18h5.5a2.5 2.5 0 0 1 2.5 2.5v-18Z" />
    </>
  ),
  bridge: (
    <>
      <path d="M2 17c2.5-4 6-6 10-6s7.5 2 10 6" />
      <path d="M4 17v4M20 17v4M9 13v8M15 13v8" />
    </>
  ),
};

export default function ProgrammeIcon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
