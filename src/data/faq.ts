export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    id: "bank-account",
    question: "한 달 살기 기간에도 뉴질랜드 은행 계좌를 개설해야 하나요?",
    answer:
      "아니요, 개설하지 않으셔도 됩니다. 뉴질랜드는 카드 결제가 보편화되어 있어 Visa·Mastercard 등 해외 카드로 대부분의 결제가 가능합니다. 환전 수수료가 걱정되신다면 Wise, 트래블월렛 같은 해외결제 전용 카드를 미리 발급받아 오시는 것을 추천드립니다. 소액 현금(파머스 마켓, 팁 등)만 조금 준비하시면 충분합니다. (은행 계좌는 뉴질랜드에서 급여를 받거나 학생비자로 장기 유학하는 경우에만 필요합니다.)",
  },
];
