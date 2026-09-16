import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">404 - Page Not Found</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        The property or page you are looking for may have been sold, moved, or updated.
      </p>
      <div className="flex gap-4">
        <Link 
          href="/properties" 
          className="bg-[#024b12] text-white px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-green-800 transition"
        >
          View Active Plots
        </Link>
        <Link 
          href="/contact-us" 
          className="border border-gray-300 px-6 py-2.5 rounded-xl text-sm font-medium hover:bg-gray-50 transition"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}