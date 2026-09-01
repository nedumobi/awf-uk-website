import Image from "next/image";
import { TeamMember } from "@/data/team";
import { placeholderImage } from "@/lib/placeholder";

export default function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <div className="text-center sm:text-left">
      <div className="relative h-56 w-full rounded-lg overflow-hidden mb-4">
        <Image
          src={placeholderImage(member.image, 500, 600)}
          alt={`Portrait of ${member.name}`}
          fill
          sizes="(min-width: 768px) 25vw, 50vw"
          className="object-cover"
        />
      </div>
      <h3 className="font-semibold text-charcoal">{member.name}</h3>
      <p className="text-gold-600 text-sm mb-2">{member.role}</p>
      <p className="text-muted text-[14px] leading-relaxed">{member.bio}</p>
    </div>
  );
}
