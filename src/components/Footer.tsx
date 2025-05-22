import logo_white from "@/assets/image/logo-white.svg";

export default function Footer() {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="container grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <img src={logo_white} alt="logo" className={"w-[150px]"} />
        </div>
        <div>z</div>
      </div>
    </footer>
  );
}
