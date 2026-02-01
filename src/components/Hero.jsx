import React from "react";

export default function Hero() {
  return (
    <section className="bg-dark text-white py-20 px-6 text-center">

      {/* ⭐ PROFILE IMAGE (PUT YOUR IMAGE IN /public/profile.png) */}
      <img
        src="/profile.jpg"
        alt="Shashank profile"
        className="w-40 h-40 rounded-full mx-auto mb-6 object-cover border-4 border-primary"
      />

      <h1 className="text-5xl font-bold mb-4">
        Shashank T K
      </h1>

      <h2 className="text-xl text-primary mb-6">
        Software Developer • AI Engineer • Researcher
      </h2>

      <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed">
        I’m a software developer and AI engineer with a foundation in
        engineering and hands-on experience in computer vision, deep learning,
        and cloud-based industrial systems. I have contributed to LLM-powered
        search features, smart manufacturing projects, and research across
        robotics, ESG technology, and applied machine learning. 
        With multiple international research publications and a currently studying Master in
        Sustainability Management at SDA Bocconi, I bring together engineering,
        AI, and data-driven problem-solving to build scalable, impactful solutions.
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


