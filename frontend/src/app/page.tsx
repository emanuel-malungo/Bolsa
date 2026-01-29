import Header from "@/components/ui/Header"
import Hero from "@/components/ui/Hero"
import Institutions from "@/components/ui/Institutions"
import About from "@/components/ui/About"
import HowItWorks from "@/components/ui/HowItWorks"
import ExploreScholarships from "@/components/ui/ExploreScholarships"
import Footer from "@/components/ui/Footer"

export default function Home() {
  return (
    <div className="">
      <Header />
      <Hero />
      <Institutions />
      <About />
      <HowItWorks />
      <ExploreScholarships />
      <Footer />
    </div>
  );
}
