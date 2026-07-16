export type NavItem = {
  label: string;
  href: string;
};

export const navigation: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "Host", href: "#host" },
  { label: "Room", href: "#room" },
  { label: "Area", href: "#area" },
  { label: "할 거리", href: "#things-to-do" },
  { label: "Services", href: "#services" },
  { label: "Price", href: "#price" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const sectionIds = navigation.map((item) => item.href.slice(1));
