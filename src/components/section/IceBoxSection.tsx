import { forwardRef } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { iceboxData } from "@/data/iceboxData.ts";

const IceBoxSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      className={
        "flex min-h-screen flex-col items-center gap-20 py-20 break-keep"
      }
      ref={ref}
    >
      <h1 className={"Aggro text-5xl text-blue-600"}>아이스 박스</h1>
      <div
        className={"flex flex-col gap-5 pb-10 text-center text-xl md:text-2xl"}
      >
        <h2 className={"pb-10 text-center text-4xl font-black"}>
          언제 어디서나,&nbsp;
          <span className={"text-blue-600"}>아이스 박스</span>와&nbsp;함께하는
          스마트 냉각
        </h2>
        <p>
          <b className={"text-blue-600"}>아이스 박스</b>는 사용자 중심으로
          설계된&nbsp;
          <b>스마트 냉각 보관함</b>입니다.
        </p>
        <p>
          냉장 시설이 없는 환경에서도&nbsp;
          <b>48시간 이상</b> 정밀한 온도 유지를 제공하며,
          <br />
          가볍고 충격에 강한 구조로 극지, 야외 실험, 의약품 수송 등 다양한
          현장에서 사용됩니다.
        </p>
        <p>
          별도의 교육 없이도 누구나 쉽게 사용할 수 있는 UI와&nbsp;
          <b>직관적인 터치 인터페이스</b>를 제공합니다.
        </p>
      </div>
      <div className={"flex flex-col gap-3 text-center text-xl"}>
        <h2 className={"pb-10 text-center text-4xl font-black"}>
          <span className={"text-blue-600"}>아이스 박스</span>만의 차별점
        </h2>
        <div className={"flex flex-col"}>
          <div
            className={
              "grid grid-cols-1 gap-x-10 gap-y-15 break-keep sm:grid-cols-2 lg:grid-cols-4"
            }
          >
            {iceboxData.map((item, idx) => (
              <div
                key={idx}
                className={
                  "flex w-full flex-col items-center gap-5 text-center"
                }
              >
                <div
                  className={"aspect-4/5 w-full rounded bg-blue-600 bg-cover"}
                  style={{ backgroundImage: `url(${item.image})` }}
                ></div>
                <div className={"flex flex-col gap-3"}>
                  <h3 className={"text-3xl font-black"}>{item.title}</h3>
                  <p className={"text-xl whitespace-pre-wrap"}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className={
          "flex flex-col items-center gap-5 text-center text-xl md:text-2xl"
        }
      >
        <p>
          <b className={"text-blue-600"}>아이스 박스</b>는 단독 사용도
          가능하지만
        </p>
        <p>
          우리가 제공하는&nbsp;
          <b>IoT 기반 콜드체인 시스템</b>과 연동될 때 그 진가를 발휘합니다.
        </p>
        <MdKeyboardDoubleArrowDown
          className={"mt-20 size-10 animate-bounce text-blue-600"}
        />
      </div>
    </section>
  );
});

export default IceBoxSection;
