import React from "react";

export default function CaseStudies() {
  return (
    <section className="bg-dark text-white py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h1 className="text-4xl font-bold mb-12 text-center text-primary">
          AI Product Case Studies
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">
              Board ESG Intelligence
            </h2>
            <p className="text-gray-400">
              AI-powered decision intelligence platform helping executives
              track ESG performance using industrial data and sustainability metrics.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">
              Industrial AI Search
            </h2>
            <p className="text-gray-400">
              LLM-powered semantic search system designed for industrial
              knowledge retrieval and asset information platforms.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-3">
              Sustainability AI Advisor
            </h2>
            <p className="text-gray-400">
              AI system designed to analyze operational data and recommend
              strategies to improve sustainability performance.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
