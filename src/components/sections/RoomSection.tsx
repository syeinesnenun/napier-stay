import { roomPhotos } from "@/data/roomPhotos";
import { FadeIn } from "@/components/ui/FadeIn";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function RoomSection() {
  return (
    <section
      id="room"
      aria-labelledby="room-heading"
      className="px-4 py-16 md:px-6 md:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <SectionHeading
            id="room-heading"
            title="Room"
            subtitle="개인 침실과 화장실, 공용 주방·거실이 있는 아늑한 공간입니다."
          />
        </FadeIn>

        <FadeIn delay={100}>
          <div className="mb-10 space-y-3 text-center text-deep-teal/80">
            <p>개인 침실, 화장실, 샤워실 (본인 전용)</p>
            <p>주방 · 거실 공용 (윗층)</p>
            <p className="font-headline text-sm tracking-wide text-gold uppercase">
              최소 · 최대 체류 4주
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {roomPhotos.map((photo, index) => (
            <FadeIn key={photo.id} delay={index * 80}>
              <ImagePlaceholder
                src={photo.src}
                alt={photo.alt}
                label={photo.label}
                aspectRatio="4/3"
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
