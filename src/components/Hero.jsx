import React from "react";

export default function Hero() {
  return (
    <section className="bg-dark text-white py-20 px-6 text-center">

      <img
        src="/_ALE3719.jpg"
        alt="Shashank profile"
        className="w-40 h-40 rounded-full mx-auto mb-6 object-cover object-[center_20%] border-4 border-primary"
      />

      <h1 className="text-5xl font-bold mb-4">
        Shashank T K
      </h1>

      <h2 className="text-xl text-primary mb-6">
        AI Product Management • Industrial AI • Sustainability Technology
      </h2>

      <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed">
        I build AI-powered products that transform complex industrial data
        into intelligent decision systems. My work combines machine learning,
        cloud platforms, and sustainability technology to create scalable
        digital solutions for global industries.

        <br /><br />

        Currently pursuing a Master’s in Sustainability Management at
        SDA Bocconi School of Management and part of the HelloPM Fellowship
        (Cohort 50), I focus on developing AI product management capabilities
        and designing intelligent systems that enable organizations to operate
        more efficiently and sustainably.
      </p>

      <div className="mt-8 space-x-4">

        <a
          href="https://linkedin.com/in/shashank-tk"
          target="_blank"
          rel="noreferrer"
          className="bg-primary text-white px-6 py-2 rounded"
        >
          LinkedIn
        </a>

        <a
          href="https://github.com/shashank-dj"
          target="_blank"
          rel="noreferrer"
          className="border border-primary text-primary px-6 py-2 rounded"
        >
          GitHub
        </a>

      </div>

    </section>
  );
}
