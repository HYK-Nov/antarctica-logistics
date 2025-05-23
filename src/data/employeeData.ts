import penguin_1 from "@/assets/image/employee/p1.png";
import penguin_2 from "@/assets/image/employee/p2.png";
import penguin_3 from "@/assets/image/employee/p3.png";
import penguin_4 from "@/assets/image/employee/p4.png";

type Employee = {
  name: string;
  position: string;
  image: string;
};

export const employeeData: Employee[] = [
  {
    name: "엠페러",
    position: "CEO",
    image: penguin_1,
  },
  {
    name: "아델리",
    position: "물류 운영",
    image: penguin_2,
  },
  {
    name: "친스트랩",
    position: "품질 관리",
    image: penguin_3,
  },
  {
    name: "젠투",
    position: "기술 개발",
    image: penguin_4,
  },
];
