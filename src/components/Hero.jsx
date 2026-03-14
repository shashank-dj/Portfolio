import React from "react";

export default function Hero() {
return ( <section className="bg-dark text-white min-h-screen flex items-center justify-center px-6 py-20">

```
  <div className="max-w-4xl text-center">

    {/* Profile Image */}
    <img
      src="/_ALE3719.jpg"
      alt="Shashank T K"
      className="w-44 h-44 mx-auto rounded-full border-4 border-primary object-cover object-[center_20%] mb-6"
    />

    {/* Name */}
    <h1 className="text-5xl md:text-6xl font-bold mb-4">
      Shashank T K
    </h1>

    {/* Headline */}
    <h2 className="text-xl md:text-2xl text-primary font-medium mb-6">
      AI Product Builder • Industrial AI • Sustainability Technology
    </h2>

    {/* Description */}
    <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed mb-8">
      I build AI-powered products that transform complex industrial data into
      intelligent decision systems. My work combines machine learning, cloud
      platforms, and sustainability technology to create scalable digital
      solutions for global industries.
      <br /><br />
      Currently pursuing a Master’s in Sustainability Management at
      SDA Bocconi School of Management, I focus on designing AI products
      that enable organizations to operate more intelligently and sustainably.
    </p>

    {/* Buttons */}
    <div className="flex justify-center gap-4 flex-wrap">

      <a
        href="https://linkedin.com/in/shashank-tk"
        target="_blank"
        rel="noreferrer"
        className="bg-primary px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/shashank-dj"
        target="_blank"
        rel="noreferrer"
        className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition"
      >
        GitHub
      </a>

    </div>

  </div>

</section>
```

);
}
