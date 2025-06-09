// import React from "react";

const AstraLandingPage = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-gray-900 flex flex-col items-center justify-center p-6">
      {/* Header */}
      <header className="w-full max-w-6xl flex justify-between items-center py-6">
        <h1 className="text-3xl font-bold text-[#0080FF]">Astra UI</h1>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li className="hover:text-[#0080FF] cursor-pointer">Components</li>
            <li className="hover:text-[#0080FF] cursor-pointer">Docs</li>
            <li className="hover:text-[#0080FF] cursor-pointer">GitHub</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="text-center mt-16">
        <h2 className="text-5xl font-extrabold text-gray-900">
          Minimal. Elegant. Astronomically Fast.
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          Astra UI is a sleek, lightweight, and highly customizable React
          component library.
        </p>
        <div className="mt-6">
          <button className="px-6 py-3 bg-[#0080FF] text-white rounded-2xl shadow-lg text-lg font-semibold hover:bg-[#0056D2] transition-all">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl text-center">
        <div className="p-6 bg-white shadow-xl rounded-2xl">
          <h3 className="text-xl font-semibold">Lightweight</h3>
          <p className="mt-2 text-gray-600">
            Optimized for performance with minimal overhead.
          </p>
        </div>
        <div className="p-6 bg-white shadow-xl rounded-2xl">
          <h3 className="text-xl font-semibold">Elegant Design</h3>
          <p className="mt-2 text-gray-600">
            Inspired by Apple-like minimalism with smooth animations.
          </p>
        </div>
        <div className="p-6 bg-white shadow-xl rounded-2xl">
          <h3 className="text-xl font-semibold">Highly Customizable</h3>
          <p className="mt-2 text-gray-600">
            Tailor components to fit any design system with ease.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-16 py-6 text-center text-gray-500">
        &copy; 2025 Astra UI. All rights reserved.
      </footer>
    </div>
  );
};

export default AstraLandingPage;
