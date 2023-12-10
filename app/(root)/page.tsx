import { Button } from "@/components/ui/button";
import Image from "next/image";
import Heading from "../../components/Heading";
import Menu from "./_components/Menu";
import Heros from "./_components/Heros";
import RecentPod from "./_components/RecentPod";
import OnlyS2L from "./_components/OnlyS2L";
import FamousPod from "./_components/FamousPod";
import ProMembers from "./_components/ProMembers";
import { FAQ } from "./_components/FAQ";
import Footer from "../../components/Footer";
import DaisyUi from "./_components/DaisyUi";
import SwiperUi from "./_components/Swiper";

export default function Home() {
  return (
    <div className=" p-6 flex flex-col gap-y-20  md:max-w-[1140px] mx-auto z-0  ">
      <div className="space-y-5 h-[65dvh] max-md:mb-40 flex  ">
        <Heros />
      </div>
      <div className="space-y-52">
        <div>
          <RecentPod />
        </div>
        <div>
          <OnlyS2L />
        </div>
        <div>
          <FamousPod />
        </div>
      </div>
      <div className="py-32 pt-40">
        <ProMembers />
      </div>
      <FAQ />
    </div>
  );
}
