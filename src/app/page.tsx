import Image from "next/image";
import HomeHeader from "./component/HomeHeader";
import HeroSection from "./component/HeroSection";
import Solidarity from "./component/Solidarity";
import Mentality from "./component/Mentality";
import HomePageHeader from "./component/HomePageheader";
import Decentralization from "./component/Decentralization";
import CombinedLevel from "./component/combinedlevel";
import Registration from "./component/registration";
import IndividualLevel from "./component/individuallevel";

export default function Home() {
  return (
    <main>
      {/* <HomePageHeader /> */}
      <HeroSection />
      <Solidarity />
      <Mentality />
      <Decentralization />
      {/* <CombinedLevel /> */}
      <IndividualLevel />
      {/* <Registration /> */}
    </main>
  );
}
