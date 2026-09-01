import { Partner } from "@/data/partners";

export default function PartnerLogo({ partner }: { partner: Partner }) {
  return (
    <div className="flex items-center justify-center h-16 px-6 rounded border border-dashed border-charcoal-200 text-charcoal-300 text-xs text-center leading-snug">
      {partner.name}
    </div>
  );
}
