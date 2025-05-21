import { forwardRef } from "react";
import employee_1 from "@/assets/image/employee-1.svg";
import employee_2 from "@/assets/image/employee-2.svg";
import employee_3 from "@/assets/image/employee-3.svg";

const AboutUsSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      className={"container flex h-screen flex-col items-center py-20"}
      ref={ref}
    >
      <h1 className={"Aggro pb-10 text-4xl text-blue-600"}>ABOUT US</h1>
      <div className={"flex gap-10"}>
        <div className={"flex flex-col items-center gap-10"}>
          <div
            className={
              "size-45 rounded-full bg-[length:auto_80%] bg-[center_80%] bg-no-repeat ring-8 ring-blue-600"
            }
            style={{ backgroundImage: `url(${employee_1})` }}
          />
          <div className={"text-center"}>
            <p className={"Aggro text-2xl text-blue-600"}>사원2</p>
            <p className={"Aggro text-4xl text-blue-600"}>아델리</p>
          </div>
        </div>
        <div className={"flex flex-col items-center gap-10"}>
          <div
            className={
              "size-45 rounded-full bg-[length:auto_80%] bg-[-10%_100%] bg-no-repeat ring-8 ring-blue-600"
            }
            style={{ backgroundImage: `url(${employee_2})` }}
          />
          <div className={"text-center"}>
            <p className={"Aggro text-2xl text-blue-600"}>사원3</p>
            <p className={"Aggro text-4xl text-blue-600"}>친스트랩</p>
          </div>
        </div>
        <div className={"flex flex-col items-center gap-10"}>
          <div
            className={
              "size-45 rounded-full bg-[length:auto_80%] bg-[-40%_100%] bg-no-repeat ring-8 ring-blue-600"
            }
            style={{ backgroundImage: `url(${employee_3})` }}
          />
          <div className={"text-center"}>
            <p className={"Aggro text-2xl text-blue-600"}>사원4</p>
            <p className={"Aggro text-4xl text-blue-600"}>젠투</p>
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutUsSection;
