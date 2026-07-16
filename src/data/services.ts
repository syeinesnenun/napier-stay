export type Service = {
  id: string;
  title: string;
  description: string;
};

export const services: Service[] = [
  {
    id: "school-pickup",
    title: "학교 등하교",
    description: "아이 학교 등하교를 매일 픽업·드랍해 드립니다.",
  },
  {
    id: "mom-outing",
    title: "엄마 개인 외출",
    description: "평일 하루 1회, 주말에는 엄마와 아이 동반 외출 1회.",
  },
  {
    id: "breakfast",
    title: "매일 조식",
    description: "양식과 한식을 번갈아 제공하는 따뜻한 아침 식사.",
  },
  {
    id: "korean",
    title: "한국어 소통",
    description: "한국어로 편하게 소통하며 생활을 도와드립니다.",
  },
];

export const priceIncludes: string[] = [
  "개인 침실 및 개인 화장실",
  "주방·거실 공용 공간",
  "매일 조식",
  "학교 등하교 픽업·드랍",
  "한국어 소통 지원",
];
