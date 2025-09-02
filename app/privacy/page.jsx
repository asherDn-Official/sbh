import React from 'react'

function PrivacyPolicyPage() {
  return (
       <section className="py-20 px-6 lg:px-32 bg-white pt-20 lg:pt-30 pb-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-3xl lg:text-4xl font-serif  text-gray-900">
          Privacy Policy – Sri Balaji Homes
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          We respect your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and
          safeguard your information when you interact with us, whether online,
          in person, or via our marketing channels.
        </p>
      </div>

      {/* Policy Content */}
      <div className="max-w-5xl mx-auto space-y-12">
        {/* 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <h2 className="font-semibold text-lg text-gray-900">
            1. Information We Collect
          </h2>
          <div className="md:col-span-2 space-y-2 text-gray-700">
            <p>
              <span className="font-medium">Personal Details:</span> Name,
              contact number, email address, and address when you fill out
              inquiry forms or contact us.
            </p>
            <p>
              <span className="font-medium">Transaction Details:</span>{" "}
              Information about your property preferences, budget, and purchase
              history.
            </p>
            <p>
              <span className="font-medium">Website Data:</span> Non-personal
              data such as IP address, browser type, and pages visited (for
              website analytics).
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <h2 className="font-semibold text-lg text-gray-900">
            2. How We Use Your Information
          </h2>
          <ul className="md:col-span-2 list-disc list-inside space-y-1 text-gray-700">
            <li>To respond to your inquiries and provide property details.</li>
            <li>To process bookings, legal formalities, and related services.</li>
            <li>
              To send updates, offers, and promotional materials (if you opt in).
            </li>
            <li>To comply with legal obligations and resolve disputes.</li>
          </ul>
        </div>

        {/* 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <h2 className="font-semibold text-lg text-gray-900">
            3. Sharing Your Information
          </h2>
          <div className="md:col-span-2 text-gray-700 space-y-2">
            <p>
              We do not sell, rent, or share your personal information with
              third parties except:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>With your consent.</li>
              <li>When required by law or legal processes.</li>
              <li>
                With trusted partners who assist in delivering our services
                (e.g., legal advisors, banking partners).
              </li>
            </ul>
          </div>
        </div>

        {/* 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <h2 className="font-semibold text-lg text-gray-900">
            4. Data Security
          </h2>
          <p className="md:col-span-2 text-gray-700">
            We implement industry-standard security measures to protect your
            information from unauthorized access, alteration, disclosure, or
            destruction.
          </p>
        </div>

        {/* 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <h2 className="font-semibold text-lg text-gray-900">
            5. Your Rights
          </h2>
          <ul className="md:col-span-2 list-disc list-inside space-y-1 text-gray-700">
            <li>
              Request a copy of the personal information we hold about you.
            </li>
            <li>
              Request corrections to any inaccurate or outdated information.
            </li>
            <li>
              Withdraw consent for marketing communications at any time.
            </li>
          </ul>
        </div>

        {/* 6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <h2 className="font-semibold text-lg text-gray-900">
            6. Policy Updates
          </h2>
          <p className="md:col-span-2 text-gray-700">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on our website with the updated effective date.
          </p>
        </div>
      </div>
    </section>
  )
}

export default PrivacyPolicyPage