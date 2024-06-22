import { Choose } from "@/components/Choose/Choose";
import Clients from "@/components/Clients/Clients";
import Companies from "@/components/Companies/Companies";
import ExploreCowork from "@/components/ExploreCowork/ExploreCowork";
import { Hero } from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";
import Statistics from "@/components/Statistics/Statistics";
import Image from "next/image";

export default function Home() {
  return (
    <>
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
      </main>
    </>
  );
}
