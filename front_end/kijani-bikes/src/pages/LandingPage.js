import Footer from "../components/layout/Footer";
import Hero from "../components/layout/Hero";
import MainNavigation from "../components/layout/MainNavigation";
import Workings from "../components/layout/Workings";

function LandingPage() {
  return (
    <section>
      <MainNavigation />
      <Hero />
      <Workings />
      <Footer />
    </section>
  );
}

export default LandingPage;
