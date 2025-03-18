// Components
import Hero from "@/components/homeComponents/Hero";
import Features from "@/components/homeComponents/Features";
import TeamMembers from "@/components/homeComponents/TeamMembers";
import FAQ from "@/components/homeComponents/FAQ";
import Navigation from "@/components/homeComponents/Navigation";
import Footer from "@/components/homeComponents/Footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navigation />
      <Hero />
      <Features />
      <TeamMembers />
      <FAQ />
      <Footer />
    </main>
  );
}
