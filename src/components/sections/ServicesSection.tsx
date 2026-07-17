import { includedItemsNote, priceIncludes } from "@/data/services";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-olive-wash px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading
            id="services-heading"
            title="Services"
            subtitle="숙소 이용 시 포함되는 서비스입니다."
          />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="vintage-card rounded-xl border p-6 md:p-8">
            <h3 className="font-headline text-base text-burnt-orange">
              포함 내역
            </h3>
            <ul className="mt-4 space-y-3 text-deep-teal/75">
              {priceIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-lavender" aria-hidden="true">
                    ·
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-deep-teal/60">{includedItemsNote}</p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
