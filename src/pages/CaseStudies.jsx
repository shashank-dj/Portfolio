import React from "react";
import { Link } from "react-router-dom";

const CaseStudies = () => {
  return (
    <div className="px-6 md:px-20 py-16 bg-[#0B1A2B] min-h-screen text-white">
      
      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Case Studies</h1>
        <p className="text-gray-400 max-w-2xl">
          A collection of product thinking exercises focused on solving real-world
          problems using user-centric and business-driven approaches.
        </p>
      </div>

      {/* CARDS */}
      <div className="space-y-10">

        {/* ZOMATO */}
        <Link to="/case-studies/zomato">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md hover:border-blue-500 hover:scale-[1.01] transition duration-300 cursor-pointer">
            
            <h2 className="text-2xl font-semibold text-blue-400 mb-2">
              Improving Food Discovery on Zomato
            </h2>

            <p className="text-gray-400 mb-6">
              Reducing decision fatigue and increasing conversion rates.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              
              <div>
                <h3 className="text-sm font-semibold text-white mb-2">Problem</h3>
                <p className="text-gray-400 text-sm">
                  Users struggle to decide what to eat due to too many options,
                  leading to drop-offs.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-2">Solution</h3>
                <p className="text-gray-400 text-sm">
                  AI-powered recommendations, mood filters, and one-click reorder
                  to simplify decision-making.
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-white mb-2">Impact</h3>
                <p className="text-gray-400 text-sm">
                  Increased conversion rate, reduced decision time, and improved retention.
                </p>
              </div>

            </div>

            <p className="text-sm text-blue-400 mt-6">
              View Case Study →
            </p>
          </div>
        </Link>

        
      </div>
    </div>
  );
};

export default CaseStudies;
