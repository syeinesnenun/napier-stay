import { activities } from "@/data/activities";
import { ActivityCard } from "@/components/ui/ActivityCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AreaSection() {
  return (
    <section
      id="area"
      aria-labelledby="area-heading"
      className="px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            id="area-heading"
            title="Napier"
            subtitle="1931년 지진 이후 아트데코 양식으로 재건된 도시. 온화한 기후와 해안 풍경이 매력적인 곳입니다."
          />
        </FadeIn>

        <FadeIn delay={100}>
          <p className="mx-auto mb-12 max-w-3xl text-center text-deep-teal/80">
            아이와 함께 즐길 수 있는 네이피어 주변 활동을 소개합니다.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {activities.map((activity, index) => (
            <FadeIn key={activity.id} delay={index * 60}>
              <ActivityCard
                title={activity.title}
                description={activity.description}
                alt={activity.alt}
                src={activity.src}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
