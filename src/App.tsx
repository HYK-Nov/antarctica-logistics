import "./App.css";
import FirstSection from "./components/section/FirstSection.tsx";
import SecondSection from "./components/section/SecondSection.tsx";
import Header from "./components/Header.tsx";

function App() {
  return (
    <>
      <Header />
      <main className={""}>
        <FirstSection />
        <SecondSection />
      </main>
    </>
  );
}

export default App;
