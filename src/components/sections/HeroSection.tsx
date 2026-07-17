import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SunburstPattern } from "@/components/ui/SunburstPattern";

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative overflow-hidden bg-orange-wash px-4 py-20 md:px-6 md:py-28"
    >
      <SunburstPattern opacity={0.45} />

      <FadeIn className="relative mx-auto max-w-3xl text-center">
        <p className="text-sm text-olive-light">Napier, New Zealand</p>
        <h1
          id="home-heading"
          className="mt-3 font-headline text-3xl leading-snug text-deep-teal md:text-5xl"
        >
          엄마와 아이의
          <br />
          네이피어 한달살기
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-deep-teal/75 md:text-lg">
          조용한 해변 도시 네이피어에서, 편안한 집처럼 머무는 한 달.
          <br />
          한국어로 편하게, 엄마와 아이 모두를 위한 아늑한 숙소입니다.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="#contact" variant="primary">
            문의하기
          </Button>
          <Button href="#room" variant="outline">
            방 둘러보기
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
