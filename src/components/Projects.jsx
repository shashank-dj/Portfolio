import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "Sustainable Performance Optimization in Formula 1",
      tech: "Numpy, Pandas, Plotly, Streamlit",
      desc: "This project analyzes Formula 1 race telemetry and lap data to evaluate how tyre management, degradation patterns, and pit stop strategy affect both race performance and sustainability efficiency. Using real telemetry data from the 2024 Formula 1 season, this dashboard compares any two drivers within a selected race and calculates a new Sustainability Performance Score to assess tyre usage efficiency and resource optimization.",
      link: "https://github.com/shashank-dj/f1-sustainable-performance-dashboard",
      dashboard: "https://f1-sustainable-performance-dashboard-shashank.streamlit.app/"
    },
    {
      title: "Industrial Carbon & Energy Sustainability Analytics Dashboard",
      tech: "Python, Pandas, Plotly, and Streamlit",
      desc: "Green Asset Monitor is a data-driven sustainability analytics system .It analyzes energy generation, demand, storage behavior, and carbon emissions in a low-carbon industrial park, providing actionable insights for sustainability teams and operations engineers.This project uses the publicly available Low-Carbon Industrial Park Energy Dataset from Kaggle and demonstrates how industrial facilities can measure, monitor, and optimize their carbon footprint.",
      link: "https://github.com/shashank-dj/Green-Asset-Management",
      dashboard: "https://green-asset-management-shashank-tk.streamlit.app/"
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
            <p className="text-gray-700 mt-2">{p.desc}</p>
            <p className="text-sm text-gray-500 mt-1 font-semibold">
              Tech: {p.tech}
            </p>

            {/* BUTTONS */}
            <div className="flex gap-4 mt-4">
              {/* View Code */}
              <a
                href={p.link}
                target="_blank"
                className="px-4 py-2 bg-primary text-white rounded hover:opacity-90 transition"
              >
                View Code
              </a>

              {/* Dashboard button only if exists */}
              {p.dashboard && (
                <a
                  href={p.dashboard}
                  target="_blank"
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
