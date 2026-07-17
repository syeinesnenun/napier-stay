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
];
