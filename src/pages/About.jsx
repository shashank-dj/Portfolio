import React from "react";

export default function About() {
  return (
    <section className="bg-dark text-white py-20 px-6">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6 text-primary">About Me</h1>

        <p className="text-gray-300 leading-relaxed mb-6">
          I am a software engineer and AI practitioner focused on building
          intelligent digital products that solve complex industrial and
          sustainability challenges. My work combines machine learning,
          cloud systems, and industrial data platforms to build scalable
          technology solutions.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          I have experience developing AI-powered systems including LLM
          search pipelines, industrial data platforms, and machine learning
          applications in robotics and smart manufacturing.
        </p>

        <p className="text-gray-300 leading-relaxed">
          Currently pursuing a Master's in Sustainability Management at
          SDA Bocconi School of Management, I aim to build AI products
          that drive sustainable transformation across global industries.
        </p>

      </div>
    </section>
  );
}
