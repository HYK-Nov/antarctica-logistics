import { forwardRef } from "react";
import { employeeData } from "@/data/employeeData.ts";
import meeting from "@/assets/image/meeting.png";

const AboutUsSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      className={
        "flex min-h-screen flex-col items-center gap-20 py-20 break-keep"
      }
      ref={ref}
    >
      <h1 className={"Aggro text-5xl text-blue-600"}>ABOUT US</h1>
      <div
        className={
          "grid grid-cols-1 items-center gap-10 text-center lg:grid-cols-2 lg:text-start"
        }
      >
        <div className="h-80 overflow-hidden rounded">
          <img
            src={meeting}
            className="h-full w-full object-cover object-center blur-[0.5px] saturate-150"
            alt=""
          />
        </div>
        <div className={"flex flex-col gap-10 text-xl md:text-2xl"}>
          <div className={"flex flex-col gap-3"}>
            <p className="text-3xl font-extrabold text-blue-600">
              "온도 관리, 그 이상의 책임."
            </p>
            <b>
              정밀한 냉각 기술과 체계적인 물류로, 귀사의 비즈니스에 신뢰를
              더합니다.
            </b>
          </div>
          <div className={"md:lg flex flex-col gap-3 text-xl"}>
            <p>
              극한의 환경에서도 생존하며 협업하는 펭귄처럼
              <br />
              남극물류는&nbsp;
              <b>냉각 기술과 물류 시스템의 한계를 넘기 위해</b> 모였습니다.
            </p>
            <p>
              신뢰, 정밀함, 그리고 열정은 우리 팀의 DNA입니다.
              <br />
              고객의 소중한 물품이 <b>신선하게 목적지에 도달하는 순간까지</b>
              &nbsp; 펭귄 팀이 함께합니다.
            </p>
          </div>
        </div>
      </div>
      <div className={"Aggro grid grid-cols-2 gap-10 md:grid-cols-4"}>
        {employeeData.map((item, idx) => (
          <div key={idx} className={"flex flex-col items-center gap-10"}>
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
