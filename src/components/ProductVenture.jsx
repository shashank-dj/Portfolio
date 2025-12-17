import React from "react";

export default function ProductVenture() {
  return (
    <section className="py-24 px-6 bg-bgsoft">
      <h2 className="text-3xl font-bold text-center mb-12 text-primary">
        Product Venture
      </h2>

      <div className="max-w-4xl mx-auto">
        <div className="border border-borderlight rounded-xl p-8 bg-white shadow-sm hover:shadow-md transition-shadow">

          {/* PRODUCT TITLE */}
          <h3 className="text-2xl font-bold text-primary">
            Board ESG Intelligence
          </h3>

          <p className="text-sm text-textsub mt-1 italic">
            Founder & Product Builder
          </p>

          {/* DESCRIPTION */}
          <p className="text-textsub mt-6 leading-relaxed">
            Board ESG Intelligence is a governance-focused ESG decision
            intelligence platform designed for Private Equity firms and
            Boards of Directors. The product creates a system of record
            for board-level ESG decisions, enabling defensible evidence
            for Limited Partner (LP) reviews, regulatory scrutiny, and
            exit due diligence.
          </p>

          {/* WHAT I BUILT */}
          <div className="mt-8">
            <h4 className="text-lg font-semibold text-primary mb-3">
              What I built & led
            </h4>

            <ul className="list-disc list-inside text-textsub space-y-2">
              <li>
                Identified a governance gap in how ESG decisions are
                documented at board level
              </li>
              <li>
                Designed the product architecture and end-to-end user
                flows focused on PE and board governance
              </li>
              <li>
                Built a multi-page React web application to showcase the
                product structure and capabilities
              </li>
              <li>
                Authored comprehensive product documentation covering
                problem framing, users, security, and roadmap
              </li>
              <li>
                Positioned the product for LP expectations, audits, and
                governance defensibility
              </li>
            </ul>
          </div>

          {/* COLLABORATORS */}
          <div className="mt-10">
            <h4 className="text-lg font-semibold text-primary mb-3">
              Looking for Collaborators
            </h4>

            <p className="text-textsub mb-4">
              Board ESG Intelligence is currently in an early validation
              phase. I’m looking to collaborate with a small number of
              people who have direct exposure to ESG governance and
              board-level decision-making.
            </p>

            <ul className="list-disc list-inside text-textsub space-y-2">
              <li>
                <span className="font-medium text-textmain">
                  ESG & Sustainability Professionals
                </span>{" "}
                with experience in corporate ESG strategy, reporting,
                or risk management
              </li>
              <li>
                <span className="font-medium text-textmain">
                  Private Equity or Governance Professionals
                </span>{" "}
                familiar with LP expectations, board processes, or
                portfolio oversight
              </li>
              <li>
                <span className="font-medium text-textmain">
                  Product-minded Engineers
                </span>{" "}
                interested in governance, sustainability, or enterprise
                software (for future pilot development)
              </li>
            </ul>

            <p className="text-textsub mt-4 text-sm">
              The focus at this stage is collaborative validation and
              refinement — not fundraising or rapid scaling.
            </p>

            <p className="text-textsub mt-3 text-sm italic">
              If this resonates, feel free to reach out via the contact page.
            </p>
          </div>

          {/* STACK */}
          <p className="text-sm text-textsub mt-8 font-semibold">
            Stack: React, Tailwind CSS, Product Architecture, ESG Governance
          </p>

          {/* LINKS */}
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
              href="https://github.com/your-username/board-esg-intelligence"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
            >
              GitHub Repository
            </a>

            <a
              href="https://docs.google.com/document/d/1QJofjPtpwGQ8jSHTaRk7pD1TKxxlYpQIq000gaJg3Qs/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
            >
              Product Documentation
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
