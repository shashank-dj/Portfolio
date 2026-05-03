import React from "react";

const CaseStudies = () => {
  return (
    <div className="px-6 md:px-20 py-12">
      <h1 className="text-3xl font-bold mb-6">Case Studies</h1>

      <p className="text-gray-600 mb-10 max-w-2xl">
        A collection of product thinking exercises focused on solving real-world
        problems using user-centric and business-driven approaches.
      </p>

      {/* ZOMATO CASE STUDY */}
      <div className="mb-12 border rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">
          Improving Food Discovery on Zomato
        </h2>

        <p className="text-gray-500 mb-4">
          Reducing decision fatigue and increasing conversion rates.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Problem</h3>
            <p className="text-gray-600">
              Users face difficulty choosing what to eat due to too many options,
              leading to drop-offs.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Solution</h3>
            <p className="text-gray-600">
              Introduced AI-based recommendations, mood filters, and one-click reorder
              to simplify decision-making.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Impact</h3>
            <p className="text-gray-600">
              Increased conversion rate, reduced decision time, and improved user retention.
            </p>
          </div>
        </div>
      </div>

      {/* SUSTAINABILITY AI CASE */}
      <div className="mb-12 border rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">
          AI-driven Sustainability Platform
        </h2>

        <p className="text-gray-500 mb-4">
          Helping industries track emissions and optimize sustainability.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Problem</h3>
            <p className="text-gray-600">
              Industries lack real-time insights into emissions and sustainability performance.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Solution</h3>
            <p className="text-gray-600">
              Built an AI system that analyzes industrial data, weather, and raw materials
              to generate emission insights and targets.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Impact</h3>
            <p className="text-gray-600">
              Enables data-driven ESG decisions and reduces environmental impact.
            </p>
          </div>
        </div>
      </div>

      {/* LLM CASE STUDY */}
      <div className="border rounded-2xl p-6 shadow-sm">
        <h2 className="text-2xl font-semibold mb-2">
          Reducing Hallucinations in LLM Systems
        </h2>

        <p className="text-gray-500 mb-4">
          Improving reliability of AI-generated outputs.
        </p>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold">Problem</h3>
            <p className="text-gray-600">
              LLMs produce incorrect outputs due to poor input data (GIGO problem).
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Solution</h3>
            <p className="text-gray-600">
              Added validation layers, semantic filtering, and feedback loops to improve accuracy.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Impact</h3>
            <p className="text-gray-600">
              Reduced hallucination rate and improved trust in AI systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
