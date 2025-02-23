// components
import Header from "./components/header/Header";
import TmSection from "./components/join/TmSection";
import IntroSection from "./components/introduction/IntroSection";
import Footer from "./components/footer/Footer";
// pages
import CommentSection from "./pages/comments/CommentSection";
import Location from "./pages/location/Location";
import TeamSection from "./pages/team/TeamSection";
import PricingSection from "./pages/pricing/PricingSection";
function App() {
  document.addEventListener("scroll", () => console.log(window.scrollY));
  return (
    <>
      <Header />
      <IntroSection />
      <TeamSection />
      <PricingSection />
      {/* <CommentSection /> */}
      <TmSection />
      <Location />
      <Footer />
    </>
  );
}

export default App;
