import React from "react";

export default function ProductVenture() {
  return (
    <section className="py-12 px-6 bg-bgsoft">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">
        Product Venture
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">

        {/* ============================= */}
        {/* BOARD ESG INTELLIGENCE */}
        {/* ============================= */}
        <div className="border border-borderlight rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">

          <h3 className="text-2xl font-bold text-primary">
            Board ESG Intelligence
          </h3>

          <p className="text-sm text-black mt-1 italic">
            Product Builder
          </p>

          <p className="text-black mt-6 leading-relaxed">
            Board ESG Intelligence is a governance-focused ESG decision
            intelligence platform designed for Private Equity firms and
            Boards of Directors. The product creates a system of record
            for board-level ESG decisions, enabling defensible evidence
            for Limited Partner (LP) reviews, regulatory scrutiny, and
            exit due diligence.
          </p>

          <div className="mt-10">
            <h4 className="text-lg font-semibold text-primary mb-3">
              Looking for Collaborators
            </h4>

            <p className="text-black mb-4">
              Board ESG Intelligence is currently in an early validation
              phase. I’m looking to collaborate with people with exposure
              to ESG governance and board-level decision-making.
            </p>

            <ul className="list-disc list-inside text-black space-y-2">
              <li>
                <span className="font-medium text-textmain">
                  ESG & Sustainability Professionals
                </span>{" "}
                with experience in ESG strategy or reporting
              </li>

              <li>
                <span className="font-medium text-textmain">
                  Private Equity or Governance Professionals
                </span>{" "}
                familiar with LP expectations and board processes
              </li>

              <li>
                <span className="font-medium text-textmain">
                  Product-minded Engineers
                </span>{" "}
                interested in governance, sustainability, or enterprise software
              </li>
            </ul>

            <p className="text-black mt-4 text-sm">
              The focus at this stage is collaborative validation and refinement.
            </p>

            <p className="text-black mt-3 text-sm italic">
              If this resonates, feel free to reach out via the contact page.
            </p>
          </div>

          <p className="text-sm text-black mt-8 font-semibold">
            Stack: React, Tailwind CSS, Product Architecture, ESG Governance
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="https://board-esg-intelligence.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white rounded hover:opacity-90 transition"
            >
              Live Product Walkthrough
            </a>

            <a
              href="https://github.com/shashank-dj/board-esg-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
            >
              GitHub Repository
            </a>

            <a
              href="https://docs.google.com/document/d/1QJofjPtpwGQ8jSHTaRk7pD1TKxxlYpQIq000gaJg3Qs/edit"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
            >
              Product Documentation
            </a>
          </div>

        </div>

        {/* ============================= */}
        {/* NORTHSTAR RETAIL */}
        {/* ============================= */}
        <div className="border border-borderlight rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">

          <h3 className="text-2xl font-bold text-primary">
            Northstar Retail Intelligence
          </h3>

          <p className="text-sm text-black mt-1 italic">
            AI Product Builder
          </p>

          <p className="text-black mt-6 leading-relaxed">
            Northstar Retail Intelligence is a geospatial retail location
            intelligence platform designed to help businesses identify the
            best locations to open new stores. The system analyzes geographic
            and economic signals to estimate the commercial potential of a
            location.
          </p>

          <p className="text-black mt-4 leading-relaxed">
            Using a scoring model, Northstar evaluates locations based on
            multiple parameters such as footfall intensity, household income,
            retail attractiveness, and competition density. These signals are
            combined to generate a location score that helps retailers compare
            potential sites and make data-driven expansion decisions.
          </p>

          <div className="mt-8">
            <h4 className="text-lg font-semibold text-primary mb-3">
              Core Capabilities
            </h4>

            <ul className="list-disc list-inside text-black space-y-2">
              <li>Geospatial retail site selection analysis</li>
              <li>Location scoring based on demand and competition signals</li>
              <li>Footfall and population-based demand estimation</li>
              <li>Household income and purchasing power analysis</li>
              <li>Retail activity and competition density evaluation</li>
              <li>Interactive dashboard for comparing potential store locations</li>
            </ul>
          </div>

          <p className="text-sm text-black mt-8 font-semibold">
            Stack: React, Tailwind CSS, Geospatial Analytics, Data Visualization, Product Strategy
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <a
              href="https://northstar-retail-intelligence.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white rounded hover:opacity-90 transition"
            >
              Live Dashboard
            </a>

            <a
              href="https://github.com/shashank-dj/northstar-retail-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
            >
              GitHub Repository
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
