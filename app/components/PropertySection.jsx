import Image from "next/image";
import katrambakkan from "../../public/assets/home/katrambakkam.png";
import thaiyur from "../../public/assets/home/thaiyur.png";
const PropertySection = () => {
  return (
    <section className="w-full px-10 py-10 lg:px-24 lg:py-20 ">
      {/* Top Section */}
      <div className="w-full">
        {/* Text Content */}
        <div className=" lg:flex lg:gap-15">
          <h4 className="text-gray-600 lg:w-1/2 lg:text:lg xl:text-xl">
            Find Verified Properties That Match Your Needs & Budget
          </h4>
          <h2 className="text-xl md:text-2xl xl:text-2xl font-semibold  leading-relaxed lg:w-1/2">
            Sri Balaji Homes Your Gateway to Property Ownership in
            <span className="text-gray-800">
              &nbsp; Katrambakkam & Thaiyur (OMR).
            </span>
          </h2>
        </div>

        {/* Images */}
        <div className="lg:flex py-10  lg:gap-15 ">
          <div className="flex-1 relative w-full h-50 md:h-72 lg:h-94 xl:h-104 mb-10">
            <Image
              src={thaiyur}
              alt="Thaiyur (OMR)"
              fill
              className="rounded-2xl object-cover"
              priority
            />
          </div>
          <div className="flex-1 relative w-full h-50  md:h-72 lg:h-94 xl:h-104">
            <Image
              src={katrambakkan}
              alt="Katrambakkam"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-10">
        <div>
          <h3 className="text-2xl font-bold text-gray-900">20+</h3>
          <p className="text-gray-600">Years Experience</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">30+</h3>
          <p className="text-gray-600">Professionals</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">900+</h3>
          <p className="text-gray-600">Projects</p>
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">13,543</h3>
          <p className="text-gray-600">Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
