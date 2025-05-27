import { forwardRef } from "react";
import { featureData } from "../../data/featureData.ts";

const FeatureSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      className={
        "flex min-h-screen flex-col items-center gap-20 py-20 break-keep"
      }
      ref={ref}
    >
      <h1 className={"Aggro text-5xl text-blue-600"}>콜드체인</h1>
      <div
        className={"flex flex-col gap-5 pb-10 text-center text-xl md:text-2xl"}
      >
        <h2 className={"pb-10 text-center text-4xl font-black"}>
          정확함과 신뢰로 연결된&nbsp;
          <span className={"text-blue-600"}>아이스 박스</span> 콜드체인
        </h2>
        <p>
          우리는 <span className={"font-bold"}>콜드체인의 모든 구간</span>에서
          정밀한 온도 제어와 실시간 모니터링을 통해
          <br />
          <span className={"font-bold"}>약품, 식품, 시료 등 민감한 물품</span>의
          신선함과 안전을 보장합니다.
        </p>
        <p>
          물류 현장에서 발생하는&nbsp;
          <span className={"font-bold"}>온도 이탈, 충격, 지연</span>을
          실시간으로 감지하고
          <br />
          클라우드 기반의 관제 시스템으로 즉각 대응합니다.
        </p>
      </div>

      <div className={"flex flex-col"}>
        <div
          className={
            "grid grid-cols-1 gap-x-10 gap-y-15 sm:grid-cols-2 lg:grid-cols-4"
          }
        >
          {featureData.map((item, idx) => (
            <div
              key={idx}
              className={"flex w-full flex-col items-center gap-5 text-center"}
            >
              <div
                className={"aspect-4/5 w-full rounded bg-blue-600 bg-cover"}
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className={"h-full w-full rounded"} />
              </div>
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
    </section>
  );
});

export default FeatureSection;
