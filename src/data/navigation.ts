export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: "홈", href: "#home" },
  { label: "호스트", href: "#host" },
  { label: "방", href: "#room" },
  { label: "네이피어", href: "#area" },
  { label: "할 거리", href: "#things-to-do" },
  { label: "엄마를 위한 활동", href: "#mom-activities" },
  { label: "서비스", href: "#services" },
  { label: "요금", href: "#price" },
  { label: "자주 묻는 질문", href: "#faq" },
  { label: "문의", href: "#contact" },
];

export const sectionIds = navigation.map((item) => item.href.slice(1));
