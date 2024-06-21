import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import { Choose } from "./components/Choose/Choose";
import ExploreCowork from "./components/ExploreCowork/ExploreCowork";

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
        <Hero />
      </header>
      <main className="flex flex-col  w-[95%] mx-auto md:w-[95%] md:mx-auto ">
        <Companies />
        <Choose />
        <ExploreCowork />
      </main>
    </>
  );
}
