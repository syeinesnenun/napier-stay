import { priceIncludes } from "@/data/services";
import { siteConfig } from "@/data/site";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { formatApproxKrw } from "@/lib/currency";

export function PriceSection() {
  const { price } = siteConfig;

  return (
    <section
      id="price"
      aria-labelledby="price-heading"
      className="px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <FadeIn>
          <SectionHeading
            id="price-heading"
            title="요금"
            subtitle="4주 기준 요금 안내입니다."
          />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="rounded-2xl border border-olive/10 bg-cream p-8 text-center shadow-sm">
            <p className="font-headline text-3xl text-deep-teal md:text-4xl">
              {price.currency} ${price.weekly}
              <span className="text-lg text-deep-teal/70"> / week</span>
            </p>
            <p className="mt-1 text-base text-deep-teal/60">
              ({formatApproxKrw(price.weekly, price.nzdToKrwRate)})
            </p>
            <p className="mt-4 text-deep-teal/75">
              4주 기준 약 {price.currency} $
              {price.fourWeeks.toLocaleString()}{" "}
              <span className="text-deep-teal/60">
                ({formatApproxKrw(price.fourWeeks, price.nzdToKrwRate)})
              </span>
            </p>
            <p className="mt-4 text-sm text-deep-teal/50">
              한화 금액은 참고용이며, 실제 결제 시점의 환율에 따라 달라질 수
              있습니다. 정확한 원화 금액은 직접 환율을 계산해 확인해 주세요.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-10">
            <h3 className="font-headline text-base text-burnt-orange">
              포함 내역
            </h3>
            <ul className="mt-4 space-y-2 text-deep-teal/75">
              {priceIncludes.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-lavender" aria-hidden="true">
                    ·
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm text-deep-teal/60">
              범위를 초과하는 요청은 별도 협의 가능합니다.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
