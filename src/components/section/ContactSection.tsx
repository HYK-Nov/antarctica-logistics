import { forwardRef } from "react";

const ContactSection = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section className={"container flex h-screen flex-col py-20"} ref={ref}>
      <h1>CONTACT</h1>
    </section>
  );
});

export default ContactSection;
