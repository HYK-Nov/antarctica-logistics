import feat_1 from "@/assets/image/feature/f1.jpg";
import feat_2 from "@/assets/image/feature/f2.jpg";
import feat_3 from "@/assets/image/feature/f3.png";
import feat_4 from "@/assets/image/feature/f4.jpg";

type Feature = {
  image: string;
  title: string;
  description: string;
};

export const featureData: Feature[] = [
  {
    image: feat_1,
    title: "🌡️ 정밀 온도 제어",
    description: "-30℃부터 +10℃까지\n1℃ 단위 조절",
  },
  {
    image: feat_2,
    title: "📍️ 실시간 위치 추적",
    description: "IoT GPS 기반\n배송 전 구간 추적",
  },
  {
    image: feat_3,
    title: "📶️ 상태 모니터링",
    description: "온도/충격/습도 등\n이상 즉시 알림",
  },
  {
    image: feat_4,
    title: "☁️️ 중앙 시스템 관리",
    description: "클라우드 관제",
  },
];
