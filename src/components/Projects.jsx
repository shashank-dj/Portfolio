import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "ESG Reporting & Finance Intelligence Platform (CSRD-Ready)",
      Stack: "Python, Streamlit, Pandas, Plotly, ESG Frameworks (CSRD, GRI, SASB, TCFD)",
      desc: "A decision-grade ESG reporting platform that calculates Scope 1–3 emissions, aligns metrics with CSRD, GRI, SASB, and TCFD frameworks, assesses audit readiness and ESG maturity, and translates sustainability performance into financial risk and value signals. The platform introduces an ESG–to–Finance linkage layer, enabling executives to understand how ESG actions impact cost volatility, regulatory risk, and long-term value creation. Designed as a modular, audit-ready ESG intelligence system.",
      link: "https://github.com/shashank-dj/esg-reporting-ai",
      dashboard: "https://esg-reporting-ai-shashank-tk.streamlit.app/"
    },
    {
      title: "Sustainable Performance Optimization in Formula 1",
      Stack: "NumPy, Pandas, Plotly, Streamlit",
      desc: "Analyzes Formula 1 race telemetry and lap data to evaluate how tyre management, degradation patterns, and pit stop strategy affect both race performance and sustainability efficiency. The dashboard enables driver-to-driver comparison within a selected race and introduces a custom Sustainability Performance Score to quantify resource efficiency and operational stability.",
      link: "https://github.com/shashank-dj/f1-sustainable-performance-dashboard",
      dashboard: "https://f1-sustainable-performance-dashboard-shashank.streamlit.app/"
    },
    {
      title: "Industrial Carbon & Energy Sustainability Analytics Dashboard",
      Stack: "Python, Pandas, Plotly, Streamlit",
      desc: "Green Asset Monitor is a sustainability analytics system that analyzes energy generation, demand, storage behavior, and carbon emissions in a low-carbon industrial park. Built using a publicly available dataset, the project demonstrates how industrial facilities can measure, monitor, and optimize carbon footprint and energy efficiency through data-driven insights.",
      link: "https://github.com/shashank-dj/Green-Asset-Management",
      dashboard: "https://green-asset-management-shashank-tk.streamlit.app/"
    },
    {
      title: "Building Chisel Ubuntu Image",
      Stack: "Docker, AWS, C#, Linux",
      desc: "Developed a custom Ubuntu-based Chisel image to enable secure tunneling and remote access. The project focused on lightweight container optimization, Linux system configuration, and secure networking, ensuring efficient deployment and scalability for cloud-based access control scenarios."
    }
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-xl font-bold text-primary">{p.title}</h3>

            <p className="text-gray-700 mt-3">{p.desc}</p>

            <p className="text-sm text-gray-500 mt-2 font-semibold">
              Stack: {p.Stack}
            </p>

            <div className="flex gap-4 mt-5">
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-white rounded hover:opacity-90 transition"
                >
                  View Code
                </a>
              )}

              {p.dashboard && (
                <a
                  href={p.dashboard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-primary text-primary rounded hover:bg-primary hover:text-white transition"
                >
                  Dashboard
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

