import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "ESG F1 Copilot – LLM-powered Sustainability Intelligence",
      Stack: "Python, Streamlit, HuggingFace (FLAN-T5), TF-IDF, Pandas, NumPy",
      desc: "An LLM-powered sustainability assistant combined with a data-driven dashboard that translates Formula 1 race telemetry into corporate ESG insights. The system uses a retrieval-augmented approach to ground AI responses in curated ESG knowledge and live race metrics, demonstrating how operational efficiency, resource optimization, and strategic decision-making impact sustainability outcomes. Designed as a zero-cost, deployable ESG decision-support prototype.",
      link: "https://github.com/shashank-dj/Sustainability-copilot",
      dashboard: "https://sustainability-copilot-shashank-tk.streamlit.app/"
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

            {/* BUTTONS */}
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

