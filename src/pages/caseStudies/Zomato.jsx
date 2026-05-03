const ZomatoCaseStudy = () => {
  return (
    <div className="px-6 md:px-20 py-16 bg-[#0B1A2B] text-white">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-6">
        Improving Checkout Trust & Conversion on Zomato
      </h1>

      {/* PROBLEM */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Problem</h2>
        <p className="text-gray-400">
          Users cannot predict the final order cost while browsing. Additional fees 
          (delivery, platform, packaging) appear only at checkout, creating price shock, 
          reducing trust, and leading to cart abandonment.
        </p>
      </section>

      {/* USER RESEARCH */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">User Research</h2>
        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li>5 user interviews + 25+ survey responses</li>
          <li>62% users switch restaurants at checkout</li>
          <li>69% users cite hidden fees as top frustration</li>
          <li>Users develop mental buffers due to lack of trust</li>
        </ul>
      </section>

      {/* KEY INSIGHTS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Key Insights</h2>
        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li>Checkout is the highest drop-off point</li>
          <li>Hidden fees break trust at the most critical moment</li>
          <li>Users adapt with workarounds instead of trusting the platform</li>
        </ul>
      </section>

      {/* OPPORTUNITY */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Opportunity</h2>
        <p className="text-gray-400">
          No major Indian food delivery platform provides full price transparency before checkout. 
          Solving this creates a strong differentiation and directly improves conversion and retention.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Solution</h2>
        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li>Live Total Price Preview (including all fees)</li>
          <li>Smart Cart Estimator with real-time updates</li>
          <li>Fee Alerts before adding items</li>
          <li>Price Range Indicator (₹250–₹300 estimate)</li>
        </ul>
      </section>

      {/* PRIORITIZATION TABLE */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Prioritization (RICE)</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-400 border border-white/10">
            <thead className="text-white border-b border-white/10">
              <tr>
                <th className="p-3">Solution</th>
                <th className="p-3">Reach</th>
                <th className="p-3">Impact</th>
                <th className="p-3">Confidence</th>
                <th className="p-3">Effort</th>
                <th className="p-3">Score</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="p-3">Live Price Preview</td>
                <td className="p-3">3</td>
                <td className="p-3">3</td>
                <td className="p-3">3</td>
                <td className="p-3">2</td>
                <td className="p-3">13.5</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-3">Smart Cart Estimator</td>
                <td className="p-3">3</td>
                <td className="p-3">3</td>
                <td className="p-3">3</td>
                <td className="p-3">2</td>
                <td className="p-3">13.5</td>
              </tr>
              <tr>
                <td className="p-3">Fee Alert</td>
                <td className="p-3">3</td>
                <td className="p-3">2</td>
                <td className="p-3">3</td>
                <td className="p-3">1</td>
                <td className="p-3">18</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FINAL PRODUCT */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Final Product</h2>
        <p className="text-gray-400">
          Introduced a Progressive Price Transparency System that gradually reveals 
          real order cost throughout the user journey, eliminating checkout surprises 
          while maintaining a clean user experience.
        </p>
      </section>

      {/* PROTOTYPE */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Prototype</h2>
        <a
          href="https://zomato-prototype-cohort50.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          View Interactive Prototype →
        </a>
      </section>

      {/* METRICS TABLE */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-4">Success Metrics</h2>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-400 border border-white/10">
            <thead className="text-white border-b border-white/10">
              <tr>
                <th className="p-3">Metric</th>
                <th className="p-3">Type</th>
                <th className="p-3">Why it matters</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-white/10">
                <td className="p-3">Checkout Conversion Rate</td>
                <td className="p-3">Primary</td>
                <td className="p-3">Direct measure of success</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-3">Cart Abandonment</td>
                <td className="p-3">Secondary</td>
                <td className="p-3">Indicates reduced price shock</td>
              </tr>
              <tr className="border-b border-white/10">
                <td className="p-3">Average Order Value</td>
                <td className="p-3">Secondary</td>
                <td className="p-3">Users stop removing items</td>
              </tr>
              <tr>
                <td className="p-3">Order Cancellation Rate</td>
                <td className="p-3">Guardrail</td>
                <td className="p-3">Ensures estimates are reliable</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* RISKS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold mb-2">Risks & Trade-offs</h2>
        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li>Incorrect estimates can reduce trust</li>
          <li>Too much information can overwhelm users</li>
          <li>Higher transparency may increase price sensitivity</li>
        </ul>
      </section>

    </div>
  );
};

export default ZomatoCaseStudy;
