import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function HostSection() {
  return (
    <section
      id="host"
      aria-labelledby="host-heading"
      className="bg-orange-wash px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            id="host-heading"
            title="Host"
            subtitle="네이피어에서 함께할 호스트를 소개합니다."
          />
        </FadeIn>

        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
          <FadeIn delay={100}>
            <ImagePlaceholder
              alt="호스트 프로필 사진"
              label="Host"
              aspectRatio="3/4"
              className="mx-auto w-full max-w-sm"
            />
          </FadeIn>

          <FadeIn delay={200}>
            <div className="space-y-4 text-deep-teal/85">
              <p className="text-lg leading-relaxed">
                저널리즘을 전공했고, 해외 경험 26년 차입니다. 현재 뉴질랜드
                11년차에 거주 중이며 한국어로 편하게 소통할 수 있습니다.
              </p>
              <ul className="space-y-2 text-sm md:text-base">
                <li>· 저널리즘 전공</li>
                <li>· 해외 경험 26년</li>
                <li>· 뉴질랜드 11년 거주</li>
                <li>· 한국어 가능</li>
              </ul>
              <p className="text-sm text-deep-teal/60">
                호스트 이름과 상세 소개는 추후 업데이트 예정입니다.
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
