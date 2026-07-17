import { services } from "@/data/services";
import { Card } from "@/components/ui/Card";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="bg-olive-wash px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            id="services-heading"
            title="Services"
            subtitle="엄마와 아이의 하루를 돕는 맞춤 서비스입니다."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <FadeIn key={service.id} delay={index * 80}>
              <Card title={service.title} description={service.description} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
