import Image from "next/image";
import {
  UserIcon,
  DocumentCheckIcon,
  EyeIcon,
  MapPinIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";
import park from "../../../public/assets/home/park.jpg";
import sbhLgog from "../../../public/assets/home/sbh-logo.png";
const features = [
  {
    icon: <UserIcon className="h-6 w-6 text-gray-700" />,
    title: "Personalized Service",
    desc: "We don't sell we help you select the right property based on your goals: building a home, rental income, or long-term investment.",
  },
  {
    icon: <DocumentCheckIcon className="h-6 w-6 text-gray-700" />,
    title: "Verified Documentation",
    desc: "Every property listed is DTCP/CMDA approved, ensuring clear titles, legal safety, and peace of mind.",
  },
  {
    icon: <EyeIcon className="h-6 w-6 text-gray-700" />,
    title: "Free Site Visits",
    desc: "We'll arrange guided site visits at your convenience, so you can see and evaluate the property firsthand before making any decision.",
  },
  {
    icon: <MapPinIcon className="h-6 w-6 text-gray-700" />,
    title: "Featured Locations We Specialize In",
    desc: "Katrambakkam (near Kundrathur), Nandhambakkam and Thaiyur (OMR) are fast-growing Chennai suburbs with great connectivity and high appreciation.",
  },
  {
    icon: <LifebuoyIcon className="h-6 w-6 text-gray-700" />,
    title: "End-to-End Support",
    desc: "We assist with legal formalities, Patta/Chitta, bank loan process, and post-sale support.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="w-full px-6 py-12 max-w-7xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Left Side - Heading + Image */}
        <div className="w-full lg:w-1/2 space-y-6">
          <Image
            src={sbhLgog}
            alt="Logo"
            width={93}
            height={73}
            className="w-22 h-auto sm:w-[93px] lg:w-[150px]" // 48px on mobile, original on sm+
          />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
              Why Property Buyers Prefer Sri Balaji Homes
            </h2>
          </div>
          <div className="relative w-full h-64 md:h-80 lg:h-[400px]">
            <Image
              src={park}
              alt="Why Choose Sri Balaji Homes"
              fill
              className="rounded-xl object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Side - Features */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-7">
              <div className="flex-shrink-0">{feature.icon}</div>
              <div>
                <h4 className="font-bold text-xl text-gray-900">
                  {feature.title}
                </h4>
                <p className="text-gray-600 text-sm md:text-lg">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
