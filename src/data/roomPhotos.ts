export type RoomPhoto = {
  id: string;
  label: string;
  alt: string;
  src?: string;
};

export const roomPhotos: RoomPhoto[] = [
  {
    id: "overview",
    label: "전체",
    alt: "숙소 전체 전경",
  },
  {
    id: "bedroom",
    label: "침대",
    alt: "개인 침실",
  },
  {
    id: "window",
    label: "창문",
    alt: "침실 창문과 자연광",
  },
  {
    id: "shared",
    label: "공용공간",
    alt: "공용 거실 공간",
  },
  {
    id: "kitchen",
    label: "주방",
    alt: "공용 주방",
  },
  {
    id: "exterior",
    label: "외부",
    alt: "숙소 외부",
  },
];
