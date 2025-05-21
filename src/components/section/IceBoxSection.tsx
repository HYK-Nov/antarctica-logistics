import { forwardRef } from "react";

const IceBoxSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      className={"container flex h-screen flex-col items-center py-20"}
      ref={ref}
    >
      <h1 className={"Aggro text-4xl text-blue-600"}>아이스 박스란?</h1>
    </section>
  );
});

export default IceBoxSection;
