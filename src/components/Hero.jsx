export default function Hero() {
  return (
    <section className="bg-dark text-white py-20 px-6 text-center">
      <h1 className="text-5xl font-bold mb-4">
        Shashank Thoppanahalli Krishnakumar
      </h1>
      <h2 className="text-xl text-primary mb-6">
        Engineering × AI × Sustainability
      </h2>
      <p className="max-w-2xl mx-auto text-gray-300">
        Sustainability-driven technologist with experience in mechanical
        engineering, industrial data systems, and cloud development.
        I build AI-powered tools for decarbonization, ESG automation, and
        industrial sustainability analytics.
      </p>

      <div className="mt-8 space-x-4">
        <a
          href="https://linkedin.com/in/shashank-tk"
          className="bg-primary text-white px-6 py-2 rounded"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/shashank-dj"
          className="border border-primary text-primary px-6 py-2 rounded"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
