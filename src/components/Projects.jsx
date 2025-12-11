export default function Projects() {
  const projects = [
    {
      title: "AI-Based Industrial Sustainability Target System (DST)",
      tech: "Python, AWS Lambda, ML, Pandas",
      desc: "Dynamic sustainability targets based on equipment load, weather, and material variability.",
      link: "https://github.com/shashank-dj/dst-sustainability"
    },
    {
      title: "Carbon Footprint Engine (Scope 1–3)",
      tech: "AWS, Python, GHG Protocol",
      desc: "Cloud-native emissions calculator for industrial environments.",
      link: "https://github.com/shashank-dj/carbon-engine"
    },
    {
      title: "ESG Reporting Automation (RAG + LLM)",
      tech: "LLMs, RAG, Vector DB",
      desc: "Automates ESG disclosures from engineering documents.",
      link: "https://github.com/shashank-dj/esg-rag"
    },
    {
      title: "F1 Sustainability Score",
      tech: "Pandas, Plotly, Streamlit",
      desc: "Sustainability-aware performance scoring for motorsport telemetry.",
      link: "https://github.com/shashank-dj/f1-sustainability"
    }
  ];

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((p) => (
          <div
            key={p.title}
            className="border border-gray-300 rounded-lg p-6 bg-white shadow-sm"
          >
            <h3 className="text-xl font-bold text-primary">{p.title}</h3>
            <p className="text-gray-700 mt-2">{p.desc}</p>
            <p className="text-sm text-gray-500 mt-1">Tech: {p.tech}</p>
            <a
              href={p.link}
              className="text-primary mt-3 inline-block font-semibold"
            >
              → View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
