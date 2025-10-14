import Image from "next/image";
import Link from "next/link";

const properties = [
  {
    id: 1,
    title: "Katrambakkam Plots",
    // size: "1400 Sq. Feet",
    image: "/assets/home/katrambakkamvilla1.png", // replace with actual image path
    link: "/properties/katrambakkam",
  },
  {
    id: 2,
    title: "Nandhambakkam Plots",
    // size: "1400 Sq. Feet",
    image: "/assets/home/katrambakkamvilla2.jpg",
    link: "/properties/nandhambakkam",
  },
  {
    id: 3,
    title: "Thaiyur(OMR) Plots",
    // size: "1400 Sq. Feet",
    image: "/assets/home/katrambakkamvilla3.png",
    link: "/properties/thaiyur",
  },
  // {
  //   id: 4,
  //   title: "Katrambakkam Villa Plot",
  //   size: "1400 Sq. Feet",
  //   image: "/assets/home/katrambakkamvilla4.png",
  // },
];

export default function Properties() {
  return (
    <section className="px-10 py-10 lg:px-24 lg:py-20  bg-gray-50">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl  mb-3">Explore Our Properties</h2>
        <p className=" max-w-4xl mx-auto">
          Discover DTCP and CMDA-approved residential plots in Peaceful
          locations. Ideal for building your dream home or making a smart
          investment with high appreciation potential.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white shadow rounded-2xl overflow-hidden hover:shadow-lg transition"
          >
            <div className="relative h-45 lg:h-60 w-full ">
              <span className="">
                {" "}
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover p-3  rounded-3xl"
                />
              </span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-medium">{property.title}</h3>
              <p className="text-gray-500 text-sm mt-1">{property.size}</p>
              <Link href={property.link}>
                <button className="mt-3 px-4 py-2 bg-green-800 text-white text-sm rounded-lg hover:bg-green-700 cursor-pointer">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* View More */}
      <div className="flex justify-center mt-8">
        <Link href="/properties/katrambakkam">
          <button className="text-gray-700 border-b border-gray-400 hover:text-black cursor-pointer">
            View More
          </button>
        </Link>
      </div>
    </section>
  );
}
