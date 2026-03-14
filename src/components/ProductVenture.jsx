import React from "react";

export default function ProductVenture() {
  return (
    <section className="bg-dark text-white py-20 px-6">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-center text-primary mb-12">
          Product Venture
        </h2>

        <div className="grid md:grid-cols-1 gap-8">

          <div className="bg-light text-dark rounded-xl p-10 shadow-lg">

            <h3 className="text-2xl font-bold text-primary mb-4">
              Board ESG Intelligence
            </h3>

            <p className="text-gray-700 mb-6">
              AI-powered decision intelligence platform designed to help
              executives track sustainability performance, analyze ESG
              metrics, and make strategic decisions using industrial data.
            </p>

            <p className="text-primary font-medium mb-8">
              Looking for collaborators
            </p>

            <div className="flex gap-4 flex-wrap">

              <button className="bg-primary text-white px-6 py-2 rounded-lg">
                View Concept
              </button>

              <button className="border border-primary text-primary px-6 py-2 rounded-lg">
                GitHub
              </button>

              <button className="border border-primary text-primary px-6 py-2 rounded-lg">
                Product Roadmap
              </button>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
