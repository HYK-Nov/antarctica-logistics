import logo_white from "@/assets/image/logo-white.svg";

export default function Footer() {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="container grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <img src={logo_white} alt="logo" className={"w-[150px] pb-5"} />
          <div className={"flex items-center text-sm"}>
            <b>(주)남극물류</b>
            <span className="mx-3 h-[1em] w-px bg-neutral-300" />
            <span>대표 : 엠페러</span>
            <span className="mx-3 h-[1em] w-px bg-neutral-300" />
            <span>사업자등록번호 : 000-00-00000</span>
          </div>
          <div className={"flex items-center text-sm"}>
            <b>전화번호</b>
            <span className="mx-3 h-[1em] w-px bg-neutral-300" />
            <span>031-0000-0000</span>
          </div>
          <p className={"pt-3 text-sm"}>
            ©ANTARTICA LOGISTICS. ALL RIGHTS RESERVED
          </p>
        </div>
        <div>z</div>
      </div>
    </footer>
  );
}
