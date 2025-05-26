import icebox_1 from "@/assets/image/icebox/i1.jpg";
import icebox_2 from "@/assets/image/icebox/i2.jpg";
import icebox_3 from "@/assets/image/icebox/i3.jpg";
import icebox_4 from "@/assets/image/icebox/i4.jpg";

type Icebox = {
  image: string;
  title: string;
  description: string;
};

export const iceboxData: Icebox[] = [
  {
    image: icebox_1,
    title: "🧊️ 이중 단열 설계",
    description: "외부 환경 변화에도\n내부 온도 안정적으로 유지",
  },
  {
    image: icebox_2,
    title: "🔋️ 장시간 배터리 지속",
    description: "1회 충전으로\n최대 48시간 지속 냉각 가능",
  },
  {
    image: icebox_3,
    title: "🎛️️ 터치 기반 UI",
    description: "온도 설정, 상태 확인을 간편하게",
  },
  {
    image: icebox_4,
    title: "🧳️️ 모빌리티 설계",
    description: "손잡이, 바퀴, 견고한 바디로\n이동성과 내구성 확보",
  },
];
