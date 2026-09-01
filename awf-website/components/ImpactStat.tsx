import { ImpactStatItem } from "@/data/impact";

export default function ImpactStat({ stat }: { stat: ImpactStatItem }) {
  return (
    <div className="text-center sm:text-left">
      <p className="font-display text-4xl md:text-5xl font-bold text-gold-500">
        {stat.value}
      </p>
      <p className="mt-2 text-cream/90 text-[15px]">{stat.label}</p>
    </div>
  );
}
