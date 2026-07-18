export type Activity = {
  id: string;
  title: string;
  description: string;
  alt: string;
  src?: string;
};

export const activities: Activity[] = [
  {
    id: "aquarium",
    title: "National Aquarium of New Zealand",
    description: "상어, 가오리가 있는 워크스루 수족관.",
    alt: "National Aquarium of New Zealand 워크스루 수족관",
    src: "/activities/aquarium.jpg",
  },
  {
    id: "mini-golf",
    title: "미니골프 (Marine Parade)",
    description: "Soundshell 옆 18홀 코스 2개.",
    alt: "Marine Parade 미니골프 코스",
    src: "/activities/mini-golf.jpg",
  },
  {
    id: "ocean-spa",
    title: "Ocean Spa",
    description: "온수 풀·온천탕·유아 풀, 바다 전망.",
    alt: "Ocean Spa 온수 풀과 바다 전망",
    src: "/activities/ocean-spa.jpg",
  },
  {
    id: "funky-farm",
    title: "Funky Farm (팜야드 주)",
    description:
      "알파카·염소·기니피그 등 만지고 먹이주기. 트램폴린·놀이터 있음.",
    alt: "Funky Farm 팜야드 동물 체험",
    src: "/activities/funky-farm.jpg",
  },
  {
    id: "bay-skate",
    title: "Bay Skate",
    description: "Marine Parade 스케이트파크, 장비 대여 가능.",
    alt: "Bay Skate Marine Parade 스케이트파크",
    src: "/activities/bay-skate.jpg",
  },
  {
    id: "faraday",
    title: "Faraday 과학관",
    description: "직접 만지고 체험하는 기술 박물관. 비 오는 날 추천.",
    alt: "Faraday 과학관 체험 전시",
    src: "/activities/faraday.jpg",
  },
  {
    id: "splash-planet",
    title: "Splash Planet",
    description: "워터파크. 여름 시즌 한정.",
    alt: "Splash Planet 워터파크",
    src: "/activities/splash-planet.jpg",
  },
  {
    id: "sunken-gardens",
    title: "Sunken Gardens & 주니어 자전거 트랙",
    description: "유모차 다니기 좋은 물놀이 공간, 무료 자전거길.",
    alt: "Sunken Gardens와 주니어 자전거 트랙",
    src: "/activities/sunken-gardens.jpg",
  },
  {
    id: "ahuriri-beach",
    title: "Ahuriri Beach & Spriggs Park",
    description: "잔잔한 해변, 놀이터, 간조 락풀 탐험.",
    alt: "Ahuriri Beach와 Spriggs Park 해변",
    src: "/activities/ahuriri-beach.jpg",
  },
  {
    id: "farmers-market",
    title: "Napier Urban Farmers' Market",
    description: "일요일 아침, 60개 이상 로컬 매장.",
    alt: "Napier Urban Farmers' Market",
    src: "/activities/farmers-market.jpg",
  },
  {
    id: "surfing-lesson",
    title: "서핑 레슨 (Waimarama 해변)",
    description:
      "Waimarama 해변에서 즐기는 서핑 레슨. Hawkes Bay Surf School. 여름 시즌 한정.",
    alt: "Waimarama 해변과 바다 전경",
    src: "/activities/surfing-lesson.jpg",
  },
  {
    id: "kayaking-rental",
    title: "카야킹 (Napier Pandora Pond)",
    description:
      "Pandora Pond에서 카야크를 대여해 직접 즐기기. The Shack. 여름 시즌 한정.",
    alt: "Napier Ahuriri Estuary와 Pandora Pond 전경",
    src: "/activities/kayaking-lesson.jpg",
  },
];
