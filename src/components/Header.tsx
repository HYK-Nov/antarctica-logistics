import { useEffect, useState } from "react";
import { cn } from "../utils/cn.ts";

type Props = {
  onMenuClick: (section: number) => void;
};

export default function Header({ onMenuClick }: Props) {
  const [position, setPosition] = useState(0);

  const onScroll = () => {
    setPosition(window.scrollY);
  };

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
        id={"top"}
      >
        <nav className={"container flex h-full items-center justify-between"}>
          <button
            className={"Aggro p-1 text-3xl font-black"}
            onClick={() => onMenuClick(0)}
          >
            남극물류
          </button>
          <div className={"flex items-center gap-10"}>
            <div className={"flex items-center gap-5"}>
              <button className={"p-1"} onClick={() => onMenuClick(1)}>
                아이스 박스
              </button>
              <button className={"p-1"} onClick={() => onMenuClick(2)}>
                기술력
              </button>
              <button className={"p-1"} onClick={() => onMenuClick(3)}>
                ABOUT US
              </button>
            </div>
            <button
              className={cn(
                "rounded-full bg-white px-4 py-2 text-xl text-blue-600 hover:bg-neutral-50",
                { "bg-blue-600 text-white hover:bg-blue-700": position > 0 },
              )}
              onClick={() => onMenuClick(4)}
            >
              문의하기
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}
