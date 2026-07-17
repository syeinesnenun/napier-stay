import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-2xl">
        <FadeIn>
          <SectionHeading
            id="contact-heading"
            title="Contact"
            subtitle="희망 체류 기간과 인원을 알려주시면 답변드리겠습니다."
          />
        </FadeIn>

        <FadeIn delay={100}>
          <form
            action={`https://formsubmit.co/${siteConfig.contactEmail}`}
            method="POST"
            className="space-y-5"
          >
            <input type="hidden" name="_subject" value="네이피어 한달살기 문의" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <div>
              <label htmlFor="name" className="mb-1 block text-sm text-deep-teal">
                이름 <span className="text-coral">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-xl border border-olive/15 bg-cream px-4 py-3 text-deep-teal outline-none focus:border-burnt-orange/40"
              />
            </div>

            <div>
              <label htmlFor="stay-period" className="mb-1 block text-sm text-deep-teal">
                희망 체류 기간 <span className="text-coral">*</span>
              </label>
              <input
                id="stay-period"
                name="stay_period"
                type="text"
                required
                placeholder="예: 2026년 8월, 4주"
                className="w-full rounded-xl border border-olive/15 bg-cream px-4 py-3 text-deep-teal outline-none focus:border-burnt-orange/40"
              />
            </div>

            <div>
              <label htmlFor="guests" className="mb-1 block text-sm text-deep-teal">
                인원 <span className="text-coral">*</span>
              </label>
              <input
                id="guests"
                name="guests"
                type="text"
                required
                placeholder="예: 엄마 1, 아이 1"
                className="w-full rounded-xl border border-olive/15 bg-cream px-4 py-3 text-deep-teal outline-none focus:border-burnt-orange/40"
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm text-deep-teal">
                이메일 <span className="text-coral">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-olive/15 bg-cream px-4 py-3 text-deep-teal outline-none focus:border-burnt-orange/40"
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm text-deep-teal">
                메시지
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full resize-y rounded-xl border border-olive/15 bg-cream px-4 py-3 text-deep-teal outline-none focus:border-burnt-orange/40"
              />
            </div>

            <Button type="submit" variant="primary" className="w-full sm:w-auto">
              문의 보내기
            </Button>
          </form>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="mt-10 border-t border-olive/10 pt-10 text-center">
            <p className="mb-4 text-sm text-deep-teal/70">
              카카오톡으로도 문의하실 수 있습니다.
            </p>
            <Button
              href={siteConfig.kakaoOpenChatUrl}
              variant="secondary"
              className="bg-[#FEE500] text-[#3C1E1E] hover:bg-[#FEE500]/90"
            >
              카카오톡 오픈채팅
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
