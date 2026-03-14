import React from "react";

export default function Hero() {
  return (
    <section className="bg-dark text-white py-20 px-6 text-center">

      {/* ⭐ PROFILE IMAGE (PUT YOUR IMAGE IN /public/profile.png) */}
      <img
        src="/_ALE3719.jpg"
        alt="Shashank profile"
        className="w-40 h-40 rounded-full mx-auto mb-6 object-cover object-[center_20%] border-4 border-primary"
      />

      <h1 className="text-5xl font-bold mb-4">
        Shashank T K
      </h1>

      <h2 className="text-xl text-primary mb-6">
        Software Developer • AI Engineer • Researcher
      </h2>

      <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed">
        I’m an engineer and AI builder focused on creating intelligent digital products 
        that solve real-world industrial and sustainability challenges. With experience 
        in machine learning, cloud platforms, and industrial data systems, I have worked 
        on LLM-powered search systems, smart manufacturing solutions, and AI-driven 
        decision tools.
        
        Currently pursuing a Master’s in Sustainability Management at SDA Bocconi, I am 
        interested in building AI products that combine technology, data, and sustainability 
        to drive scalable impact across global industries.
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


