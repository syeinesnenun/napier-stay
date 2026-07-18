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
    alt: "호크스베이 포도밭과 와이너리 풍경",
    src: "/mom-activities/winery-tour.jpg",
  },
  {
    id: "cafe-tour",
    title: "카페 투어",
    description:
      "네이피어 아트데코 거리의 로컬 카페와 베이커리를 둘러보는 여유로운 시간.",
    alt: "네이피어 아트데코 거리 카페 풍경",
    src: "/mom-activities/cafe-tour.jpg",
  },
  {
    id: "massage",
    title: "마사지",
    description:
      "네이피어·호크스베이 지역 스파와 마사지 샵. 몸을 풀며 쉬어 가기 좋습니다.",
    alt: "스파·마사지 웰니스 공간",
    src: "/mom-activities/massage.jpg",
  },
  {
    id: "yoga-class",
    title: "요가 클래스",
    description:
      "지역 스튜디오의 요가 수업. 초보자도 참여하기 쉬운 클래스가 있습니다.",
    alt: "요가 매트와 소품이 놓인 스튜디오",
    src: "/mom-activities/yoga-class.jpg",
  },
  {
    id: "pilates-class",
    title: "필라테스 클래스",
    description:
      "필라테스 스튜디오 수업. 코어·자세 교정에 좋은 운동을 즐길 수 있습니다.",
    alt: "필라테스 리포머 기구가 있는 스튜디오",
    src: "/mom-activities/pilates-class.jpg",
  },
];
