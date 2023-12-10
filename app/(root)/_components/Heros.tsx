import { Button } from "@/components/ui/button";
import Image from "next/image";

const Heros = () => {
  return (
    <div className="flex  flex-col md:flex-row items-center gap-10 animate-fadeUp">
      
      <div className=" space-y-4 flex-1">
        <div className="space-y-4">
          <div>
            <h2 className="text-5xl font-extrabold">
              Get your <br /> imagination going
            </h2>
          </div>
          <div className="">
            <p className="text-sm font-semibold opacity-80 ">
              The best audiobooks and Originals. The most entertainment. The
              podcasts you want to hear.
            </p>
          </div>
        </div>
        <button className="px-100% w-full btn btn-primary  ">
          Try for $0.00
        </button>
        <p className="text-sm font-semibold ">
          $14.95 a month after 30 days. Cancel anytime
        </p>
      </div>
      <div>
        <Image alt="s2k" src="/s2k.png" width={500} height={500} />
      </div>{" "}
    </div>
  );
};

export default Heros;
