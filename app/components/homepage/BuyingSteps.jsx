import React from "react";

const steps = [
  {
    num: "01",
    title: "Tell Us Your Requirement",
    desc: "Share your target location, budget, and plot size preferences.",
  },
  {
    num: "02",
    title: "Site Visit",
    desc: "We walk you through verified, available plots matching your exact criteria.",
  },
  {
    num: "03",
    title: "Document & Title Verification",
    desc: "We share the complete legal verification report before you commit.",
  },
  {
    num: "04",
    title: "Registration",
    desc: "A smooth, transparent registration process with zero last-minute surprises.",
  },
];

export default function BuyingSteps() {
  return (
    <section className="py-12 px-6 lg:px-24 max-w-7xl mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-3">
          How to Buy a Resale Plot With Us — Step by Step
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
          A clear, hassle-free process from selection to legal registration.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="bg-gray-50 p-6 rounded-2xl border border-gray-100 relative hover:shadow-md transition"
          >
            <span className="text-3xl font-extrabold text-green-800">
              {step.num}
            </span>
            <h3 className="text-lg font-bold text-gray-900 mt-2 mb-2">
              {step.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}