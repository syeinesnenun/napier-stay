import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AreaSection() {
  return (
    <section
      id="area"
      aria-labelledby="area-heading"
      className="px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading
            id="area-heading"
            title="Napier"
            subtitle="1931년 지진 이후 아트데코 양식으로 재건된 도시. 온화한 기후와 해안 풍경이 매력적인 곳입니다."
          />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="space-y-4 text-center text-deep-teal/80">
            <p>
              네이피어는 호크스베이(Hawke&apos;s Bay) 지역의 해안 도시로, 1930년대
              아트데코 건축이 잘 보존된 곳입니다. 따뜻하고 건조한 기후 덕분에
              밖에서 보내는 시간이 많아, 아이와 함께 한 달을 머물기에
              알맞습니다.
            </p>
            <p className="text-sm text-deep-teal/60">
              주변에서 즐길 수 있는 활동은 메뉴의{" "}
              <a href="#things-to-do" className="text-burnt-orange underline-offset-2 hover:underline">
                할 거리
              </a>
              에서 확인하실 수 있습니다.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
