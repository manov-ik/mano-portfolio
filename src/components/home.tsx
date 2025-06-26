import About from "./about";
import Connect from "./connect";
import HeroSection from "./hero";

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <section id="connect">
        <Connect />
      </section>
    </>
  );
}

export default Home;
