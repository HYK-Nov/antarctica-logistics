import { forwardRef } from "react";
import { employeeData } from "../../data/employeeData.ts";

const AboutUsSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      className={"Aggro container flex h-screen flex-col items-center py-20"}
      ref={ref}
    >
      <h1 className={"pb-10 text-4xl text-blue-600"}>ABOUT US</h1>
      <div className={"grid grid-cols-2 gap-10 md:grid-cols-4"}>
        {employeeData.map((item) => (
          <div className={"flex flex-col items-center gap-10"}>
            <div
              className={
                "size-40 rounded bg-blue-300 bg-[length:auto_110%] bg-[center_80%] bg-no-repeat ring-0 ring-blue-600"
              }
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className={"text-center"}>
              <p className={"text-2xl text-blue-600"}>{item.position}</p>
              <p className={"text-3xl"}>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
});

export default AboutUsSection;
