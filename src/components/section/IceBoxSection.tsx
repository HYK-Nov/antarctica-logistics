import { forwardRef } from "react";

const IceBoxSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section className={"container flex h-screen flex-col py-20"} ref={ref}>
      <h1>ICE BOX</h1>
    </section>
  );
});

export default IceBoxSection;
