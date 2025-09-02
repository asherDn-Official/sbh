import React from 'react'

function TermsOfUsePage() {
  return (
    <section className="py-20 px-6 lg:px-32 bg-white pt-20 lg:pt-30 pb-20">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-3xl lg:text-4xl font-serif text-gray-900">
          Terms of Use – Sri Balaji Homes
        </h1>
        <p className="text-gray-600 max-w-3xl mx-auto mt-4">
          By accessing and using the services of Sri Balaji Homes, including our website,
          property listings, and advisory services, you agree to be bound by these Terms of Use.
          If you do not agree, please do not use our services.
        </p>
      </div>

      {/* Terms Content */}
      <div className="max-w-5xl mx-auto space-y-12">
        {/* 1 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <h2 className="font-semibold text-lg text-gray-900">
            1. Services Provided
          </h2>
          <div className="md:col-span-2 space-y-2 text-gray-700">
            <p>
              We specialize in the sale and resale of DTCP/CMDA-approved plots in Chennai.
              All property listings are subject to availability and verification.
            </p>
          </div>
        </div>

        {/* 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <h2 className="font-semibold text-lg text-gray-900">
            2. Accuracy of Information
          </h2>
          <div className="md:col-span-2 text-gray-700">
            <p>
              While we strive to provide accurate and up-to-date property details, we do not
              guarantee that all information is free from errors. Buyers are encouraged to
              independently verify property details, documents, and approvals before purchase.
            </p>
          </div>
        </div>

        {/* 3 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <h2 className="font-semibold text-lg text-gray-900">
            3. Pricing and Offers
          </h2>
          <div className="md:col-span-2 text-gray-700">
            <p>
              All prices, offers, and availability are subject to change without prior notice.
              Quoted prices do not include government taxes, registration charges, or other
              applicable fees unless specified.
            </p>
          </div>
        </div>

        {/* 4 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <h2 className="font-semibold text-lg text-gray-900">
            4. Client Responsibilities
          </h2>
          <ul className="md:col-span-2 list-disc list-inside space-y-1 text-gray-700">
            <li>Provide accurate and complete information during inquiries and transactions.</li>
            <li>Conduct due diligence before making any purchase decision.</li>
            <li>Abide by all applicable local laws and regulations.</li>
          </ul>
        </div>

        {/* 5 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <h2 className="font-semibold text-lg text-gray-900">
            5. Limitation of Liability
          </h2>
          <div className="md:col-span-2 text-gray-700">
            <p>
              We are not responsible for any losses, damages, or delays caused by circumstances
              beyond our control, including but not limited to legal disputes, government actions,
              or natural events.
            </p>
          </div>
        </div>

        {/* 6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <h2 className="font-semibold text-lg text-gray-900">
            6. Intellectual Property
          </h2>
          <div className="md:col-span-2 text-gray-700">
            <p>
              All content on our website, including text, images, and branding, is the property
              of Sri Balaji Homes and may not be used without prior written consent.
            </p>
          </div>
        </div>

        {/* 7 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <h2 className="font-semibold text-lg text-gray-900">
            7. Changes to Terms
          </h2>
          <div className="md:col-span-2 text-gray-700">
            <p>
              We may update these Terms of Use at any time without prior notice. Continued use
              of our services constitutes acceptance of the updated terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TermsOfUsePage