import penguin from "../../assets/image/penguin.svg";
import bill from "../../assets/image/penguin-bill.svg";

export default function FirstSection() {
  return (
    <div
      className={
        "relative flex h-screen overflow-hidden bg-blue-600 bg-size-[auto_80vh] bg-bottom-right bg-no-repeat"
      }
    >
      <div className={"container mx-auto flex gap-10"}>
        <div className="absolute justify-center overflow-hidden sm:relative">
          <div className="animate-scroll-up w-[15vw] max-w-[200px] min-w-[150px]">
            <img src={bill} className="h-auto w-full" alt="penguin" />
            <img src={bill} className="h-auto w-full" alt="penguin" />
            <img src={bill} className="h-auto w-full" alt="penguin" />
            <img src={bill} className="h-auto w-full" alt="penguin" />
          </div>
        </div>
        <div className="absolute top-1/2 left-1/2 z-10 flex w-full max-w-xl -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-5 text-center text-2xl text-white">
          <p className="Aggro text-5xl font-bold">아이스박스</p>
          <p>
            영하 30도 환경에서도 신선도를 유지하는
            <br /> 극저온 맞춤 콜드체인 솔루션
          </p>
          <button className="mt-5 w-fit rounded-full bg-white px-5 py-2 text-2xl font-bold text-blue-600 hover:bg-neutral-50">
            버튼
          </button>
        </div>
      </div>

      <img
        src={penguin}
        className={
          "animate-slide-in-left absolute right-0 bottom-0 max-h-[80vh] w-[80%] translate-x-[30%] place-self-end object-contain transition md:w-[60%]"
        }
        alt={"penguin"}
      />
    </div>
  );
}
