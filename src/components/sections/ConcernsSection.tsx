import { concerns } from "@/data/concerns";
import { ConcernCard } from "@/components/ui/ConcernCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ConcernsSection() {
  return (
    <section
      id="concerns"
      aria-labelledby="concerns-heading"
      className="bg-olive-wash px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-[820px]">
        <FadeIn>
          <SectionHeading
            id="concerns-heading"
            title="이런 게 걱정되시죠?"
          />
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2">
          {concerns.map((item, index) => (
            <FadeIn key={item.id} delay={index * 80}>
              <ConcernCard
                title={item.title}
                concern={item.concern}
                answer={item.answer}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
