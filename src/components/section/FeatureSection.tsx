import { forwardRef } from "react";

const FeatureSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section
      className={"container flex h-screen flex-col items-center py-20"}
      ref={ref}
    >
      <h1 className={"Aggro pb-10 text-4xl text-blue-600"}>기술력</h1>
    </section>
  );
});

export default FeatureSection;
