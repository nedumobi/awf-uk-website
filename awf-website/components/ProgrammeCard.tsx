import Link from "next/link";
import { Programme } from "@/data/programmes";
import ProgrammeIcon from "./ProgrammeIcon";

export default function ProgrammeCard({ programme }: { programme: Programme }) {
  return (
    <div className="group bg-white rounded-lg border border-charcoal-100 p-7 shadow-card hover:border-gold-300 transition-colors flex flex-col h-full">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-50 text-gold-600 mb-5">
        <ProgrammeIcon name={programme.icon} className="h-5 w-5" />
      </div>
      <h3 className="text-xl font-semibold text-charcoal mb-2.5">
        {programme.title}
      </h3>
      <p className="text-muted text-[15px] leading-relaxed mb-5 flex-1">
        {programme.shortDescription}
      </p>
      <Link
        href={`/our-work/${programme.slug}`}
        className="text-[15px] font-medium text-charcoal underline decoration-gold-400 decoration-2 underline-offset-4 group-hover:text-gold-600 w-fit"
      >
        Learn more
      </Link>
    </div>
  );
}
