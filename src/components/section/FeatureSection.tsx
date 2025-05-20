import { forwardRef } from "react";

const FeatureSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section className={"container flex h-screen flex-col py-20"} ref={ref}>
      <h1>FEATURE</h1>
    </section>
  );
});

export default FeatureSection;
