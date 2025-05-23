import { forwardRef } from "react";

const FeatureSection = forwardRef<HTMLElement>((_props, ref) => {
  const process1 = [
    "수확",
    "예비 냉각",
    "냉장 보관",
    "포장",
    "냉장 창고",
    "소매점",
  ];
  const process2 = [
    "제약회사",
    "국제공항",
    "수입 제약회사",
    "의약 소·도매상",
    "병원 보건소",
    "소비자",
  ];

  return (
    <section
      className={"container flex h-screen flex-col items-center py-20"}
      ref={ref}
    >
      <h1 className={"Aggro pb-10 text-4xl text-blue-600"}>콜드체인</h1>

      <div className="grid grid-cols-6 gap-8 text-center">
        {process1.map((item, idx) => (
          <div
            key={idx}
            className={`relative flex size-20 items-center justify-center rounded-full bg-blue-400 font-bold text-white ${idx !== process1.length - 1 ? "after:absolute after:top-1/2 after:left-full after:h-[2px] after:w-8 after:-translate-y-1/2 after:bg-blue-800" : ""} `}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-6 gap-8 text-center break-keep">
        {process2.map((item, idx) => (
          <div
            key={idx}
            className={`relative flex size-20 items-center justify-center rounded-full bg-blue-400 font-bold text-white ${idx !== process2.length - 1 ? "after:absolute after:top-1/2 after:left-full after:h-[2px] after:w-8 after:-translate-y-1/2 after:bg-blue-800" : ""} `}
          >
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
});

export default FeatureSection;
