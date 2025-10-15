import Image from "next/image";
import React from "react";
import founder from "../../../public/assets/about/SIR.png";
export default function AboutUs() {
  return (
    <section className="w-full xl:px-6 sl:py-12 max-w-7xl mx-auto mb-10">
      <div className="flex flex-col-reverse lg:flex-row items-start gap-10">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 space-y-6  px-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">
            About Us
          </h2>
          <div className="text-gray-700 leading-relaxed space-y-4 text-sm md:text-base">
            <p>
              When I founded SBH in 2003, I had a simple yet ambitious vision:
              to build a real estate company rooted in trust, integrity, and an
              unwavering commitment to clients. Starting alone with a firm
              belief in my capabilities, I have been fortunate to witness the
              journey of SBH grow into what it is today—a trusted name in real
              estate, supported by a dedicated team and loyal clients.
            </p>
            <p>
              I firmly believe that “The best investment on Earth is Earth,” and
              this philosophy has driven our success. I owe our growth to the
              hard work of our exceptional team, the support of my family, and
              the trust of our clients. With Mrs. Kalaiselvi Dhanasekar as
              Managing Director, SBH continues to innovate and expand, offering
              premium residential projects and lifestyle opportunities.
            </p>
            <p>
              Thank you for choosing Sri Balaji Homes. Together, let us build a
              future that stands on the solid foundation of trust and
              opportunity.
            </p>
            <div className="pt-4">
              <p>Warm regards,</p>
              <p className="font-medium">B. Dhanasekar</p>
              <p className="text-gray-600">Founder, Sri Balaji Homes (SBH)</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative aspect-[5/5] ">
          <Image
            src={founder}
            alt="Founder of Sri Balaji Homes"
            fill
            className="xl:rounded-lg object-cover "
            priority
          />
        </div>
      </div>
    </section>
  );
}
