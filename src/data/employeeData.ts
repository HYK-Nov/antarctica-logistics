import employer from "@/assets/image/employee-1.svg";
import employee_1 from "@/assets/image/employee-2.svg";
import employee_2 from "@/assets/image/employee-3.svg";
import employee_3 from "@/assets/image/employee-4.svg";

type Employee = {
  name: string;
  position: string;
  image: string;
};

export const employeeData: Employee[] = [
  {
    name: "엠페러",
    position: "CEO",
    image: employer,
  },
  {
    name: "아델리",
    position: "물류 운영",
    image: employee_1,
  },
  {
    name: "친스트랩",
    position: "품질 관리",
    image: employee_2,
  },
  {
    name: "젠투",
    position: "기술 개발",
    image: employee_3,
  },
];
