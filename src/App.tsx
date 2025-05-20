import "./App.css";
import HeroSection from "./components/section/HeroSection.tsx";
import ContactSection from "./components/section/ContactSection.tsx";
import Header from "./components/Header.tsx";
import { useRef } from "react";
import AboutUsSection from "./components/section/AboutUsSection.tsx";
import IceBoxSection from "./components/section/IceBoxSection.tsx";
import FeatureSection from "./components/section/FeatureSection.tsx";

function App() {
  const HeroRef = useRef<HTMLDivElement | null>(null);
  const IceboxRef = useRef<HTMLDivElement | null>(null);
  const FeatureRef = useRef<HTMLDivElement | null>(null);
  const AboutRef = useRef<HTMLDivElement | null>(null);
  const ContactRef = useRef<HTMLDivElement | null>(null);

  const handleMenuClick = (section: number) => {
    const refs = [HeroRef, IceboxRef, FeatureRef, AboutRef, ContactRef];
    refs[section]?.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header onMenuClick={handleMenuClick} />
      <main className={""}>
        <HeroSection ref={HeroRef} />
        <IceBoxSection ref={IceboxRef} />
        <FeatureSection ref={FeatureRef} />
        <AboutUsSection ref={AboutRef} />
        <ContactSection ref={ContactRef} />
      </main>
    </>
  );
}

export default App;
