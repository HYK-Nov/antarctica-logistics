import { useEffect, useState } from "react";
import logo from "@/assets/image/logo.svg";
import logo_white from "@/assets/image/logo-white.svg";
import { cn } from "@/lib/utils.ts";

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
          "fixed top-0 z-50 hidden h-[70px] w-full bg-blue-600/40 text-xl font-black text-white backdrop-blur-[3px] transition md:block",
          { "bg-white text-blue-600": position > 0 },
        )}
        id={"top"}
      >
        <nav className={"container flex h-full items-center justify-between"}>
          <button
            className={"Aggro h-[45px] p-1 text-4xl font-black"}
            onClick={() => onMenuClick(0)}
          >
            <img
              src={position > 0 ? logo : logo_white}
              alt="logo"
              className={"h-full"}
            />
          </button>
          <div className={"flex items-center gap-5"}>
            <button className={"p-1"} onClick={() => onMenuClick(1)}>
              아이스 박스
            </button>
            <button className={"p-1"} onClick={() => onMenuClick(2)}>
              콜드체인
            </button>
            <button className={"p-1"} onClick={() => onMenuClick(3)}>
              ABOUT US
            </button>
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
