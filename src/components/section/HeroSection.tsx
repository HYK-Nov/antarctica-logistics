import penguin from "@/assets/image/penguin.svg";
import bill from "@/assets/image/penguin-bill.svg";
import pattern from "@/assets/image/pattern.svg";
import { forwardRef } from "react";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const HeroSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      className={
        "relative -z-50 flex h-screen overflow-hidden bg-blue-600 bg-size-[auto_80vh] bg-bottom-right bg-no-repeat"
      }
      style={{
        backgroundImage: `url(${pattern})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      ref={ref}
    >
      <div className={"container mx-auto flex gap-10"}>
        <div className="absolute justify-center overflow-hidden sm:relative">
          <div className="animate-scroll-up hidden w-[15vw] max-w-[200px] min-w-[80px] sm:block">
            <img src={bill} className="h-auto w-full" alt="penguin" />
            <img src={bill} className="h-auto w-full" alt="penguin" />
            <img src={bill} className="h-auto w-full" alt="penguin" />
            <img src={bill} className="h-auto w-full" alt="penguin" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 z-10 flex w-full max-w-xl -translate-x-1/2 -translate-y-1/3 flex-col items-center justify-center gap-5 text-center text-white sm:text-2xl">
          <p className="Aggro text-4xl font-bold text-shadow-lg sm:text-6xl">
            🧊 아이스 박스 🧊
          </p>
          <p
            className={
              "font-semibold text-shadow-[0_0_0.5rem_rgb(0_0_0_/_0.5)]"
            }
          >
            영하 30도 환경에서도 신선도를 유지하는
            <br /> 극저온 맞춤 콜드체인 솔루션
          </p>
          <MdKeyboardDoubleArrowDown
            className={"z-10 size-10 animate-bounce text-white"}
          />
        </div>
      </div>
      <img
        src={"src/assets/image/iceberg1.png"}
        className={"absolute bottom-0 left-0 -z-5 max-h-[45vh]"}
        alt={"iceberg"}
      />
      <img
        src={"src/assets/image/iceberg2.png"}
        className={"absolute right-0 bottom-0 -z-10 max-h-[35vh]"}
        alt={"iceberg"}
      />
      <img
        src={penguin}
        className={
          "animate-slide-in-left absolute right-0 bottom-0 max-h-[75vh] w-[60%] max-w-[600px] translate-x-[30%] place-self-end object-contain transition"
        }
        alt={"penguin"}
      />
    </section>
  );
});

export default HeroSection;
