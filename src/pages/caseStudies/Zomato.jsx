const ZomatoCaseStudy = () => {
  return (
    <div className="px-6 md:px-20 py-16 bg-[#0B1A2B] text-white">

      {/* TITLE */}
      <h1 className="text-4xl font-bold mb-6 text-red-400">
        Improving Food Discovery & Checkout Trust on Zomato
      </h1>

      {/* PROBLEM */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-red-400 mb-2">Problem</h2>
        <p className="text-gray-400">
          Users cannot predict the final order cost while browsing. Additional fees 
          (delivery, platform, packaging) appear only at checkout, causing price shock, 
          cart abandonment, and reduced trust.
        </p>
      </section>

      {/* USER RESEARCH */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-red-400 mb-2">User Research</h2>
        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li>Interviewed 5 users + surveyed 25+ users</li>
          <li>62% users switch restaurants at checkout due to price mismatch</li>
          <li>69% users cite hidden fees as top frustration</li>
          <li>Users build mental “₹50 buffer” due to lack of trust</li>
        </ul>
      </section>

      {/* KEY INSIGHTS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-red-400 mb-2">Key Insights</h2>
        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li>Hidden fees create a trust deficit at the most critical conversion stage</li>
          <li>Users adapt with workarounds instead of trusting the system</li>
          <li>Checkout is the highest drop-off point</li>
        </ul>
      </section>

      {/* OPPORTUNITY */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-red-400 mb-2">Opportunity</h2>
        <p className="text-gray-400">
          No major Indian competitor shows full price transparency before checkout. 
          Solving this creates a strong differentiation and directly improves 
          conversion and user trust.
        </p>
      </section>

      {/* SOLUTION */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-red-400 mb-2">Solution</h2>
        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li>Live Total Price Preview (including all fees)</li>
          <li>Smart Cart Estimator (dynamic pricing updates)</li>
          <li>Fee Alert before adding items</li>
          <li>Price Range Indicator (₹250–₹300 estimate)</li>
        </ul>
      </section>

      {/* PRIORITIZATION */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-red-400 mb-2">Prioritization (RICE)</h2>
        <p className="text-gray-400">
          Top features selected based on reach, impact, and feasibility:
          Live Price Preview, Smart Cart Estimator, Fee Alerts.
        </p>
      </section>

      {/* FINAL PRODUCT */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-red-400 mb-2">Final Product</h2>
        <p className="text-gray-400">
          Introduced a Progressive Price Transparency System that reveals 
          real order cost gradually across the user journey, eliminating 
          checkout surprises while maintaining UI simplicity.
        </p>
      </section>

      {/* METRICS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-red-400 mb-2">Success Metrics</h2>
        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li>Checkout Conversion Rate ↑</li>
          <li>Cart Abandonment ↓</li>
          <li>Average Order Value ↑</li>
          <li>Order Cancellation Rate (guardrail)</li>
        </ul>
      </section>

      {/* RISKS */}
      <section className="mb-10">
        <h2 className="text-xl font-semibold text-red-400 mb-2">Risks & Trade-offs</h2>
        <ul className="list-disc ml-6 text-gray-400 space-y-2">
          <li>Incorrect price estimates may reduce trust</li>
          <li>Too much information can overwhelm users</li>
          <li>Higher transparency may increase price sensitivity</li>
        </ul>
      </section>

    </div>
  );
};

export default ZomatoCaseStudy;
