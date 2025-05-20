import { forwardRef } from "react";

const AboutUsSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section className={"container flex h-screen flex-col py-20"} ref={ref}>
      <h1>ABOUT US</h1>
    </section>
  );
});

export default AboutUsSection;
