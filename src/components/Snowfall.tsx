import { useMemo } from "react";
import icebox from "@/assets/image/icebox.svg";

function Snowflake({
  left,
  duration,
  delay,
}: {
  left: number;
  duration: number;
  delay: number;
}) {
  return (
    <div
      className="text-opacity-80 pointer-events-none absolute top-[-50px] z-10 text-3xl text-white select-none"
      style={{
        left: `${left}%`,
        animation: `snowFall ${duration}s linear ${delay}s infinite`,
      }}
    >
      ❄️
    </div>
  );
}

export default function Snowfall() {
  const flakes = useMemo(() => {
    return [...Array(30)].map(() => ({
      left: Math.random() * 100,
      duration: 5 + Math.random() * 5,
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="relative h-[200px] w-full overflow-hidden">
      {/* 중앙 정렬용 flex 컨테이너 */}
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
        <style>{`
          @keyframes snowFall {
            0% {
              transform: translateY(0) translateX(0) scale(1);
              opacity: 1;
            }
            25% {
              transform: translateY(150px) translateX(-10px) scale(0.9);
              opacity: 0.8;
            }
            50% {
              transform: translateY(300px) translateX(10px) scale(0.8);
              opacity: 0.6;
            }
            75% {
              transform: translateY(450px) translateX(-5px) scale(0.7);
              opacity: 0.4;
            }
            100% {
              transform: translateY(600px) translateX(0) scale(0.5);
              opacity: 0.2;
            }
          }
        `}</style>
        {/* svg 이미지 */}
        <img
          src={icebox}
          alt=""
          className="h-[80%] w-full object-contain"
          draggable={false}
        />
        {/* 눈송이들 */}
        {flakes.map((flake, i) => (
          <Snowflake key={i} {...flake} />
        ))}
      </div>
    </div>
  );
}
