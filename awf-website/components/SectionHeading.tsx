import UliMark from "./UliMark";

export default function SectionHeading({
  heading,
  intro,
  align = "left",
  mark = false,
}: {
  heading: string;
  intro?: string;
  align?: "left" | "center";
  mark?: boolean;
}) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {mark && (
        <UliMark
          variant="seed"
          className={`w-16 h-3 text-gold-400 mb-5 ${align === "center" ? "mx-auto" : ""}`}
        />
      )}
      <h2 className="text-3xl md:text-[2.5rem] font-semibold leading-[1.15] tracking-tightish text-charcoal">
        {heading}
      </h2>
      {intro && (
        <p className="mt-4 text-muted text-[17px] leading-relaxed">{intro}</p>
      )}
    </div>
  );
}
