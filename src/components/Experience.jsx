export default function Experience() {
  return (
    <section className="py-20 px-6 bg-light">
      <h2 className="text-3xl font-bold text-center mb-10">Experience</h2>

      <div className="max-w-4xl mx-auto space-y-8">
        
        <div>
          <h3 className="text-xl font-bold">Software Developer — AVEVA</h3>
          <p className="text-gray-600">2023 – Present</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Developing cloud-based industrial data systems in the AIM team.</li>
            <li>Created LLM-powered Faceted Search for engineering document discovery.</li>
            <li>Built data pipelines for ESG and sustainability reporting workflows.</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold">
            AI Researcher & Engineer — CellStrat
          </h3>
          <p className="text-gray-600">2021 – 2022</p>
          <ul className="list-disc ml-6 mt-2 text-gray-700">
            <li>Worked on GANs, Few-Shot Learning & medical imaging systems.</li>
            <li>Built an AI-based bone deformity detection system.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
