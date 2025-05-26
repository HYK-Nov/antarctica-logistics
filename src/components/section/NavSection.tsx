import { cn } from "../../utils/cn.ts";

type Props = {
  onMenuClick: (section: number) => void;
  activeSection: number;
};

export default function NavSection({ onMenuClick, activeSection }: Props) {
  const menuList = ["아이스 박스", "콜드체인", "ABOUT US", "문의하기"];
  return (
    <div
      className={
        "sticky top-0 z-10 mt-20 h-[80px] bg-white text-center md:hidden"
      }
    >
      <div
        className={
          "container grid h-full grid-cols-4 place-items-center items-center gap-3 text-lg font-bold break-keep"
        }
      >
        {menuList.map((label, idx) => (
          <button
            key={label}
            className={cn(
              "h-[65%] w-full rounded-full text-white",
              activeSection === idx + 1 ? "bg-blue-600" : "bg-neutral-400",
            )}
            onClick={() => onMenuClick(idx + 1)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
