import { useEffect, useState } from "react";
import { cn } from "../utils/cn.ts";

export default function Header() {
  const [position, setPosition] = useState(0);

  function onScroll() {
    setPosition(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 z-50 h-[70px] w-full bg-blue-600/40 text-xl font-bold text-white backdrop-blur-[3px] transition",
          { "bg-white text-blue-600": position > 0 },
        )}
      >
        <nav className={"container flex h-full items-center justify-between"}>
          <button className={"Aggro p-1 text-3xl font-black"}>남극물류</button>
          <div className={"flex items-center gap-10"}>
            <div className={"flex items-center gap-5"}>
              <button className={"p-1"}>아이스 박스</button>
              <button className={"p-1"}>콜드 체인</button>
            </div>
            <a href={"#contact"}>
              <button
                className={cn(
                  "rounded-full bg-white px-4 py-2 text-xl text-blue-600 hover:bg-neutral-50",
                  { "bg-blue-600 text-white hover:bg-blue-700": position > 0 },
                )}
              >
                문의하기
              </button>
            </a>
          </div>
        </nav>
      </header>
      <div className={"fixed right-2 bottom-2 z-50"}>
        {position > 50 && (
          <button
            className={
              "h-15 w-15 rounded-full border-5 border-blue-600 bg-white"
            }
          >
            위로
          </button>
        )}
      </div>
    </>
  );
}
