import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SunburstPattern } from "@/components/ui/SunburstPattern";

export function HeroSection() {
  return (
    <section
      id="home"
      aria-labelledby="home-heading"
      className="relative overflow-hidden px-4 py-24 md:px-6 md:py-32"
    >
      <SunburstPattern />
      <FadeIn className="relative mx-auto max-w-4xl text-center">
        <p className="font-headline text-sm tracking-[0.3em] text-gold uppercase">
          Napier, New Zealand
        </p>
        <h1
          id="home-heading"
          className="mt-4 font-headline text-4xl leading-tight tracking-[0.1em] text-deep-teal uppercase md:text-6xl"
        >
          엄마와 아이의
          <br />
          네이피어 한달살기
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-deep-teal/80 md:text-lg">
          1931년 재건된 아트데코 도시 네이피어에서, 따뜻한 가정처럼 머무는
          한 달. 한국어로 편하게, 엄마와 아이 모두를 위한 숙소입니다.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
