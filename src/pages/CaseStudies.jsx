import React from "react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  return (
    <div className="px-6 md:px-20 py-16 bg-[#0B1A2B] min-h-screen text-white">

      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Case Studies</h1>

      </div>

      {/* GRID LAYOUT */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

        {/* ZOMATO CARD */}
        <Link to="/case-studies/zomato">
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden backdrop-blur-md hover:border-red-500 hover:scale-[1.02] transition duration-300 cursor-pointer">

            {/* IMAGE */}
            <div className="h-48 w-full overflow-hidden">
              <img
                src="/zomato.png"
                alt="Zomato case study"
                className="w-full h-full object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">

              <h2 className="text-xl font-semibold text-red-400 mb-2">
                Reducing Cart Abandonment by Improving Price Transparency on Zomato
              </h2>

              <p className="text-gray-400 text-sm mb-4">
                Improved Zomato’s checkout conversion by addressing hidden fee friction through a data-driven pricing transparency solution, reducing cart abandonment and increasing average order value.
              </p>





            </div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default CaseStudies;
