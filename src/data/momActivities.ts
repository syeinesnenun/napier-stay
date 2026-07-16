export type MomActivity = {
  id: string;
  title: string;
  description: string;
  alt: string;
  src?: string;
};

export const momActivities: MomActivity[] = [
  {
    id: "winery-tour",
    title: "와이너리 투어",
    description:
      "호크스베이 지역 와이너리 방문, 시음과 포도밭 산책. 차로 20~40분 거리.",
    alt: "호크스베이 와이너리 투어",
  },
  {
    id: "cafe-tour",
    title: "카페 투어",
    description:
      "네이피어 아트데코 거리의 로컬 카페와 베이커리를 둘러보는 여유로운 시간.",
    alt: "네이피어 카페 투어",
  },
  {
    id: "art-deco-walk",
    title: "아트데코 시내 산책",
    description:
      "1930년대 건축물과 해안 산책로를 따라 걷는 도시 탐방. 가이드 투어도 가능.",
    alt: "네이피어 아트데코 시내 산책",
  },
  {
    id: "farmers-market-mom",
    title: "파머스 마켓 (일요일)",
    description:
      "일요일 아침 로컬 식재료·공예품·음악이 있는 파머스 마켓. 여유롭게 구경하기 좋습니다.",
    alt: "네이피어 파머스 마켓",
  },
  {
    id: "ocean-spa-mom",
    title: "오션 스파",
    description:
      "바다 전망 온수 풀과 온천탕에서 쉬는 시간. 평일 낮 시간대가 한적합니다.",
    alt: "Ocean Spa 휴식",
  },
  {
    id: "marine-parade-walk",
    title: "마린 퍼레이드 산책",
    description:
      "해변 산책로를 따라 걷거나 벤치에 앉아 책을 읽기 좋은 조용한 오전·오후.",
    alt: "Marine Parade 해변 산책",
  },
];
