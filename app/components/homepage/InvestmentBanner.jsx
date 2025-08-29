import Image from "next/image";
import Banner from "../../../public/assets/home/landscape.png";

export default function InvestmentBanner() {
  return (
    <section className="px-6 py-8 lg:px-24 lg:py-16">
      <div
        className="
          relative overflow-hidden
          h-[220px] lg:h-[330px]   /* mobile vs desktop height */
          rounded-xl lg:rounded-3xl  /* border radius for mobile vs desktop */
        "
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={Banner}
            alt="Investment Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
        </div>

        {/* Content */}
        <div className="relative flex flex-col md:flex-row items-center h-full md:justify-between text-white px-6 md:px-12 py-8 lg:py-12 gap-9 lg:gap-6">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-center md:text-left max-w-xl">
            The Best Investment on Earth is Earth
          </h2>
          <button className="bg-white text-gray-900 font-medium px-6 md:px-8 py-3 rounded-full shadow hover:bg-gray-100 transition text-base lg:text-lg">
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
