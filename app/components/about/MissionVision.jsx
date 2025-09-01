import {
  FlagIcon,  // Changed from BullseyeIcon
  EyeIcon,
  TrophyIcon,
  BuildingOffice2Icon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import building from "../../../public/assets/about/aboutBuilding.png"
const features = [
  {
    icon: <FlagIcon className="h-6 w-6 text-gray-700" />,  // Changed from BullseyeIcon
    title: "Our Mission",
    desc: "To be the most trusted real estate advisor by focusing on client satisfaction and ethical practices in every market we serve.",
  },
  {
    icon: <EyeIcon className="h-6 w-6 text-gray-700" />,
    title: "Our Vision",
    desc: "To set a benchmark in real estate through transparency, reliability, and long-term value for our clients.",
  },
  {
    icon: <TrophyIcon className="h-6 w-6 text-gray-700" />,
    title: "Our Achievements",
    desc: "With over 900 projects completed, we've brought joy to 2,617+ clients through trusted and timely property solutions.",
  },
  {
    icon: <BuildingOffice2Icon className="h-6 w-6 text-gray-700" />,
    title: "Exclusive Resale of Plots",
    desc: "We focus only on the resale of plots, offering end-to-end services at fair market prices for both buyers and sellers.",
  },
  {
    icon: <ArrowPathIcon className="h-6 w-6 text-gray-700" />,
    title: "Why Resale Only?",
    desc: "We are committed to protecting agricultural lands by avoiding new layout developments and supporting sustainable growth.",
  },
];

const MissionVision = () => {
  return (
    <section className="w-full  py-12  mx-auto bg-[#00000008]">
      <div className="flex flex-col lg:flex-row items-start gap-10">
        {/* Left Image */}
        <div className="w-full lg:w-3/5 relative h-72 md:h-96 lg:h-[700px]">
          <Image
            src={building}
            alt="House Sketch"
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Right Features */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6 pr-10 pt-20 pl-10 xl:pr-40 xl:pl-0">
          {features.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">{item.icon}</div>
              <div>
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="text-gray-600 text-sm md:text-base">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MissionVision;