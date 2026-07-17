export type Concern = {
  id: string;
  title: string;
  concern: string;
  answer: string;
};

export const concerns: Concern[] = [
  {
    id: "safety",
    title: "안전",
    concern: "낯선 나라, 혼자 다 챙겨야 할까 봐 막막해요",
    answer:
      "네이피어는 뉴질랜드에서 손꼽히게 조용하고 안전한 소도시예요. 4년째 이곳에 거주 중인 호스트가 공항 도착부터 등하교, 일상 이동까지 함께해드려서 혼자 헤매실 일이 없어요.",
  },
  {
    id: "english",
    title: "영어",
    concern: "아이 영어 노출이 걱정돼요",
    answer:
      "희망하시면 초등학교 단기 등록 관련 정보를 안내해드려요.",
  },
];
