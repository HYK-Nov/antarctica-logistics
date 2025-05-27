import penguin from "@/assets/image/main_penguin.png";
import bill from "@/assets/image/penguin-bill.svg";
import pattern from "@/assets/image/pattern.svg";
import iceberg1 from "@/assets/image/iceberg1.png";
import iceberg2 from "@/assets/image/iceberg2.png";
import { forwardRef } from "react";

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
          <div className="animate-scroll-up hidden w-[15vw] max-w-[200px] min-w-[80px] md:block">
            <img src={bill} className="h-auto w-full" alt="penguin" />
            <img src={bill} className="h-auto w-full" alt="penguin" />
            <img src={bill} className="h-auto w-full" alt="penguin" />
            <img src={bill} className="h-auto w-full" alt="penguin" />
            <img src={bill} className="h-auto w-full" alt="penguin" />
            <img src={bill} className="h-auto w-full" alt="penguin" />
            <img src={bill} className="h-auto w-full" alt="penguin" />
            <img src={bill} className="h-auto w-full" alt="penguin" />
            <img src={bill} className="h-auto w-full" alt="penguin" />
            <img src={bill} className="h-auto w-full" alt="penguin" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 z-10 flex w-full max-w-xl -translate-x-1/2 -translate-y-1/3 flex-col items-center justify-center gap-5 text-center text-white sm:text-2xl">
          <p className="Aggro animate-slide-in-up text-4xl font-bold transition duration-800 text-shadow-lg sm:text-6xl">
            🧊 아이스 박스 🧊
          </p>
          <p
            className={
              "animate-slide-in-up font-semibold duration-800 text-shadow-[0_0_0.5rem_rgb(0_0_0_/_0.5)]"
            }
          >
            영하 30도 환경에서도 신선도를 유지하는
            <br /> 극저온 맞춤 콜드체인 솔루션
          </p>
        </div>
      </div>
      <img
        src={iceberg1}
        className={"absolute bottom-0 left-0 -z-5 max-h-[45vh]"}
        alt={"iceberg"}
      />
      <img
        src={iceberg2}
        className={"absolute right-0 bottom-0 -z-10 max-h-[35vh]"}
        alt={"iceberg"}
      />
      <img
        src={penguin}
        className={
          "animate-slide-in-left absolute right-0 bottom-0 w-[50%] max-w-[450px] translate-x-[20%] translate-y-[15%] object-contain transition"
        }
        alt={"penguin"}
      />
    </section>
  );
});

export default HeroSection;
