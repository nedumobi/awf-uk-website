import { Testimonial as TestimonialType } from "@/data/impact";

export default function Testimonial({ testimonial }: { testimonial: TestimonialType }) {
  return (
    <figure className="bg-white rounded-lg border border-charcoal-100 p-7 shadow-card h-full flex flex-col">
      <blockquote className="text-charcoal text-[17px] leading-relaxed flex-1">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-5 text-[14px] text-muted">
        <span className="font-medium text-charcoal">{testimonial.name}</span>
        {" — "}
        {testimonial.context}
      </figcaption>
    </figure>
  );
}
