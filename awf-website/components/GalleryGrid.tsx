import Image from "next/image";
import { placeholderImage } from "@/lib/placeholder";

export default function GalleryGrid({
  seeds,
  altPrefix,
}: {
  seeds: string[];
  altPrefix: string;
}) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {seeds.map((seed, i) => (
        <div
          key={seed}
          className={`relative rounded-lg overflow-hidden ${
            i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
          }`}
        >
          <Image
            src={placeholderImage(seed, 700, 700)}
            alt={`${altPrefix} — photo ${i + 1}`}
            fill
            sizes="(min-width: 768px) 25vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
