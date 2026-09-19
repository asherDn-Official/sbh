"use client";

import { useState } from "react";

export default function PropertySearch() {
  const [location, setLocation] = useState("");
  const [budget, setBudget] = useState("");
  const [size, setSize] = useState("");
  const [approval, setApproval] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    // 1. Find the #contact section on the page
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      // 2. Smoothly scroll to the section
      contactSection.scrollIntoView({ behavior: "smooth" });
    } else {
      // Fallback anchor routing if element isn't found immediately
      window.location.hash = "#contact";
    }
  };

  return (
    <section className="w-full bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Find Your Ideal Plot in Chennai
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Search available properties based on location, budget, plot size, and approval status.
          </p>
        </div>

        <form
          onSubmit={handleSearch}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {/* Location Filter */}
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="search-location" className="text-xs font-semibold uppercase tracking-wider text-slate-700">
              Location
            </label>
            <select
              id="search-location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#024b12] focus:bg-white transition"
            >
              <option value="">All Locations</option>
              <option value="katrambakkam">Katrambakkam</option>
              <option value="nandhambakkam">Nandhambakkam</option>
              <option value="thaiyur-omr">Thaiyur OMR</option>
              <option value="other">Other Available Locations</option>
            </select>
          </div>

          {/* Budget Filter */}
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="search-budget" className="text-xs font-semibold uppercase tracking-wider text-slate-700">
              Budget Range
            </label>
            <select
              id="search-budget"
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#024b12] focus:bg-white transition"
            >
              <option value="">Any Budget</option>
              <option value="under-30-lakhs">Under ₹30 Lakhs</option>
              <option value="30-50-lakhs">₹30–50 Lakhs</option>
              <option value="50-75-lakhs">₹50–75 Lakhs</option>
              <option value="above-75-lakhs">₹75 Lakhs+</option>
            </select>
          </div>

          {/* Plot Size Filter */}
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="search-size" className="text-xs font-semibold uppercase tracking-wider text-slate-700">
              Plot Size
            </label>
            <select
              id="search-size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#024b12] focus:bg-white transition"
            >
              <option value="">Any Size</option>
              <option value="below-1000">Below 1,000 sq.ft</option>
              <option value="1000-1500">1,000–1,500 sq.ft</option>
              <option value="1500-2400">1,500–2,400 sq.ft</option>
              <option value="above-2400">2,400+ sq.ft</option>
            </select>
          </div>

          {/* Approval Filter */}
          <div className="flex flex-col space-y-1.5">
            <label htmlFor="search-approval" className="text-xs font-semibold uppercase tracking-wider text-slate-700">
              Approval Type
            </label>
            <select
              id="search-approval"
              value={approval}
              onChange={(e) => setApproval(e.target.value)}
              className="w-full px-3 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-[#024b12] focus:bg-white transition"
            >
              <option value="">All Approvals</option>
              <option value="cmda">CMDA Approved</option>
              <option value="dtcp">DTCP Approved</option>
              <option value="other">Other Applicable Approval</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="sm:col-span-2 lg:col-span-4 flex justify-center pt-2">
            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-3.5 bg-[#024b12] hover:bg-[#01380d] text-white font-semibold rounded-full shadow-md transition transform active:scale-95 text-center cursor-pointer border border-[#024b12]"
            >
              Enquire About Matching Plots
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}