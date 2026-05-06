type HomeLineIconProps = {
  type?:
    | "gear"
    | "building"
    | "target"
    | "shield"
    | "bulb"
    | "link"
    | "headset"
    | "medal";
  className?: string;
};

const paths: Record<NonNullable<HomeLineIconProps["type"]>, string> = {
  gear: "M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM12 2v3M12 19v3M4.93 4.93l2.12 2.12M16.95 16.95l2.12 2.12M2 12h3M19 12h3M4.93 19.07l2.12-2.12M16.95 7.05l2.12-2.12",
  building: "M4 21V8l8-5 8 5v13M8 21v-7h8v7M8 10h.01M12 10h.01M16 10h.01",
  target: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10ZM12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10ZM9 12l2 2 4-5",
  bulb: "M9 18h6M10 22h4M8 14c-1.2-1-2-2.5-2-4a6 6 0 1 1 12 0c0 1.5-.8 3-2 4-.8.7-1.2 1.4-1.4 2H10c-.2-.6-.6-1.3-1.4-2Z",
  link: "M10 13a5 5 0 0 0 7.07 0l2.12-2.12A5 5 0 0 0 12.12 3.8L10.7 5.2M14 11a5 5 0 0 0-7.07 0L4.8 13.12a5 5 0 1 0 7.08 7.07l1.41-1.41",
  headset: "M4 12a8 8 0 0 1 16 0v5a2 2 0 0 1-2 2h-2v-6h4M4 13h4v6H6a2 2 0 0 1-2-2v-5Z",
  medal: "M12 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM8.5 14.5 7 22l5-3 5 3-1.5-7.5",
};

export default function HomeLineIcon({
  type = "target",
  className = "h-9 w-9",
}: HomeLineIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={paths[type]} />
    </svg>
  );
}
