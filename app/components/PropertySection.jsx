// import Image from "next/image";
// import katrambakkan from "../../public/assets/home/katrambakkam.webp";
// import nandhambakkam from "../../public/assets/home/nandhapakkam.webp";
// import thaiyur from "../../public/assets/home/thaiyur.webp";
// const PropertySection = () => {
//   return (
//     <section className="w-full px-10 py-10 lg:px-24 lg:py-20 ">
//       {/* Top Section */}
//       <div className="w-full">
//         {/* Text Content */}
//         <div className=" lg:flex lg:gap-15">
//           <h3 className="text-gray-600 lg:w-1/2 lg:text:lg xl:text-xl">
//             Find Verified Properties That Match Your Needs & Budget
//           </h3>
//           <h2 className="text-xl md:text-2xl xl:text-2xl font-semibold  leading-relaxed lg:w-1/2">
//             Sri Balaji Homes Your Gateway to Property Ownership in
//             <span className="text-gray-800">
//               &nbsp; Katrambakkam , Nandhambakkam & Thaiyur (OMR).
//             </span>
//           </h2>
//         </div>

//         {/* Images */}
//         <div className="lg:flex py-10  lg:gap-15 ">
//           <div className="flex-1 relative w-full h-44  md:h-72 lg:h-72 xl:h-80 mt-2">
//             <Image
//               src={katrambakkan}
//               alt="Katrambakkam"
//               fill
//               className="rounded-2xl "
//             />
//           </div>
//           <div className="flex-1 relative w-full h-44  md:h-72 lg:h-72 xl:h-80 mt-2">
//             <Image
//               src={nandhambakkam}
//               alt="Katrambakkam"
//               fill
//               className="rounded-2xl "
//             />
//           </div>
//           <div className="flex-1 relative w-full h-44 md:h-72 lg:h-72 xl:h-80 mb-10 mt-2">
//             <Image
//               src={thaiyur}
//               alt="Thaiyur (OMR)"
//               fill
//               className="rounded-2xl"
//               priority
//             />
//           </div>
//         </div>
//       </div>

//       {/* Stats Section */}
//       <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-10">
//         <div>
//           <h3 className="text-2xl font-bold text-gray-900">20+</h3>
//           <p className="text-gray-600">Years Experience</p>
//         </div>
//         <div>
//           <h3 className="text-2xl font-bold text-gray-900">30+</h3>
//           <p className="text-gray-600">Professionals</p>
//         </div>
//         <div>
//           <h3 className="text-2xl font-bold text-gray-900">900+</h3>
//           <p className="text-gray-600">Projects</p>
//         </div>
//         <div>
//           <h3 className="text-2xl font-bold text-gray-900">13,543</h3>
//           <p className="text-gray-600">Happy Clients</p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PropertySection;

import Image from "next/image";
import katrambakkan from "../../public/assets/home/resale-plots-katrambakkam.webp";
import nandhambakkam from "../../public/assets/home/resale-plots-nandhapakkam.webp";
import thaiyur from "../../public/assets/home/resale-plots-thaiyur.webp";

const PropertySection = () => {
  return (
    <section className="w-full px-6 py-10 lg:px-24 lg:py-16">
      {/* Top Section */}
      <div className="w-full">
        {/* Text Content */}
        <div className="lg:flex lg:gap-12 items-start">
          <div className="lg:w-1/2 mb-4 lg:mb-0">
            <h2 className="text-2xl md:text-3xl font-semibold leading-snug text-gray-900">
              Why Buyers Choose Approved Resale Plots Over New Layouts
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              A new, unapproved layout can look attractive on price, but it comes with hidden costs: delayed approvals, no bank loan eligibility, and the risk of the project stalling altogether. An approved resale plot, by contrast, already has its legal groundwork done. You know exactly what you're buying, the road and basic infrastructure typically already exist, and eligible plots qualify for bank financing from day one — three things that make resale plots the lower-risk, faster path to actually building or investing.
            </p>
          </div>
        </div>

        {/* Location Preview Images */}
        <div className="lg:flex py-10 lg:gap-8">
          <div className="flex-1 relative w-full h-44 md:h-72 lg:h-72 xl:h-80 mt-2">
            <Image
              src={katrambakkan}
              alt="Katrambakkam approved resale plots"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="flex-1 relative w-full h-44 md:h-72 lg:h-72 xl:h-80 mt-2">
            <Image
              src={nandhambakkam}
              alt="Nandhambakkam clear title plots"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="flex-1 relative w-full h-44 md:h-72 lg:h-72 xl:h-80 mb-10 md:mb-0 mt-2">
            <Image
              src={thaiyur}
              alt="Thaiyur OMR resale plots near Siruseri"
              fill
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center mt-6 pt-6 border-t border-gray-100">
        <div>
          <p className="text-2xl font-bold text-gray-900">20+</p>
          <p className="text-gray-600 text-sm">Years Experience</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">30+</p>
          <p className="text-gray-600 text-sm">Professionals</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">900+</p>
          <p className="text-gray-600 text-sm">Projects</p>
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">13,543</p>
          <p className="text-gray-600 text-sm">Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default PropertySection;
