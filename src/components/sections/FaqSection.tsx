import { faqItems } from "@/data/faq";
import { FaqCard } from "@/components/ui/FaqCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading
            id="faq-heading"
            title="FAQ"
            subtitle="자주 묻는 질문입니다."
          />
        </FadeIn>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <FadeIn key={item.id} delay={index * 80}>
              <FaqCard question={item.question} answer={item.answer} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
