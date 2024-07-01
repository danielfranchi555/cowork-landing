import { Choose } from "@/components/Choose/Choose";
import { Chronicles } from "@/components/Chronicles/Chronicles";
import Clients from "@/components/Clients/Clients";
import Companies from "@/components/Companies/Companies";
import ExploreCowork from "@/components/ExploreCowork/ExploreCowork";
import { Footer } from "@/components/Footer/Footer";
import { Hero } from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import { Privacy } from "@/components/Privacy/Privacy";
import Roadmap from "@/components/Roadmap/Roadmap";
import Statistics from "@/components/Statistics/Statistics";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" overflow-hidden">
      <header>
        <Navbar />
        <Hero />
      </header>
      <main className="flex flex-col w-[95%]  mx-auto md:w-[95%] md:mx-auto ">
        <Companies />
        <Choose />
        <ExploreCowork />
        <Statistics />
        <Clients />
        <Roadmap />
        <Chronicles />
        <Footer />
        <Privacy />
      </main>
    </div>
  );
}
