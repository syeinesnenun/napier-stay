export type Activity = {
  id: string;
  title: string;
  description: string;
};

export const activities: Activity[] = [
  {
    id: "aquarium",
    title: "National Aquarium",
    description: "뉴질랜드 해양 생물을 가까이에서 만날 수 있는 아쿠아리움.",
  },
  {
    id: "marine-parade",
    title: "Marine Parade",
    description: "해변 산책로와 놀이터가 있는 네이피어의 대표 해안 거리.",
  },
  {
    id: "parade-science",
    title: "Parade Science Centre",
    description: "아이와 함께 즐기는 체험형 과학관.",
  },
  {
    id: "ahuriri",
    title: "Ahuriri Estuary",
    description: "조용한 산책로와 자연을 즐길 수 있는 에스츄어리.",
  },
  {
    id: "splash-planet",
    title: "Splash Planet",
    description: "사계절 이용 가능한 실내·외 워터파크.",
  },
  {
    id: "farmers-market",
    title: "Farmers Market",
    description: "주말 로컬 식재료와 공예품을 만나는 파머스 마켓.",
  },
];
