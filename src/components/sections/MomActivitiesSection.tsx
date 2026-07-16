import { momActivities } from "@/data/momActivities";
import { ActivityCard } from "@/components/ui/ActivityCard";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MomActivitiesSection() {
  return (
    <section
      id="mom-activities"
      aria-labelledby="mom-activities-heading"
      className="px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading
            id="mom-activities-heading"
            title="엄마를 위한 활동"
            subtitle="아이 돌봄 시간에 즐기는 네이피어·호크스베이 체험"
          />
        </FadeIn>

        <FadeIn delay={100}>
          <p className="mx-auto mb-12 max-w-3xl text-center text-deep-teal/80">
            평일 하루 개인 외출 시간에 다녀오기 좋은 곳입니다. 와이너리·카페
            투어 등 호스트가 기본 정보를 안내해 드립니다.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 lg:gap-6">
          {momActivities.map((activity, index) => (
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
