import "./styles/App.css";
import HeroSection from "./components/section/HeroSection.tsx";
import ContactSection from "./components/section/ContactSection.tsx";
import Header from "./components/Header.tsx";
import { useEffect, useRef, useState } from "react";
import AboutUsSection from "./components/section/AboutUsSection.tsx";
import IceBoxSection from "./components/section/IceBoxSection.tsx";
import FeatureSection from "./components/section/FeatureSection.tsx";
import Footer from "./components/Footer.tsx";
import NavSection from "./components/section/NavSection.tsx";
import Snowfall from "./components/Snowfall.tsx";
import { Toaster } from "@/components/ui/sonner.tsx";

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

  const [activeSection, setActiveSection] = useState<number>(0);

  useEffect(() => {
    const sections = [
      HeroRef.current,
      IceboxRef.current,
      FeatureRef.current,
      AboutRef.current,
      ContactRef.current,
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sections.findIndex((s) => s === entry.target);
            if (index !== -1) setActiveSection(index);
          }
        });
      },
      { threshold: 0.25 },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <>
      <Header onMenuClick={handleMenuClick} />
      <main className={""}>
        <HeroSection ref={HeroRef} />
        <NavSection
          onMenuClick={handleMenuClick}
          activeSection={activeSection}
        />
        <div className={"container py-20"}>
          <Snowfall />
          <IceBoxSection ref={IceboxRef} />
          <FeatureSection ref={FeatureRef} />
          <AboutUsSection ref={AboutRef} />
          <ContactSection ref={ContactRef} />
        </div>
      </main>
      <Toaster />
      <Footer />
    </>
  );
}

export default App;
