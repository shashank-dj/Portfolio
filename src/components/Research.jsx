import React from "react";
import { BookOpen, Microscope } from "lucide-react";

export default function Research() {
  return (
    <section className="py-20 px-6 bg-light">
      <h2 className="text-3xl font-bold text-center mb-12">
        Research & Publications
      </h2>

      <div className="max-w-4xl mx-auto space-y-10">

        {/* IAC 2024 Publication */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="text-primary" size={28} />
            <h3 className="text-xl font-bold">
              Leveraging Space R&D to Drive Societal Benefits through AI & ESG
            </h3>
          </div>

          <p className="text-gray-600 text-sm mb-3">
            Published at IAC 2024 — Milan
          </p>

          <p className="text-gray-700 leading-relaxed mb-4">
            Explores how AI, ESG frameworks, and engineering data ecosystems 
            accelerate sustainability, manufacturing transformation, and 
            planetary stewardship by leveraging insights from the space sector.
          </p>

          <a
            href="https://dl.iafastro.directory/event/IAC-2024/paper/89342/"
            target="_blank"
            className="inline-block px-5 py-2 bg-primary text-white rounded hover:opacity-90 transition"
          >
            View Publication →
          </a>
        </div>

        {/* Few-shot Publication */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <div className="flex items-center gap-3 mb-3">
            <Microscope className="text-primary" size={28} />
            <h3 className="text-xl font-bold">
              Application of Few-Shot Object Detection in the Field of Robotic Perception
            </h3>
          </div>

          <p className="text-gray-600 text-sm mb-3">Published July 2021</p>

          <p className="text-gray-700 leading-relaxed">
            Explores <strong>Few-Shot Learning for warehouse object detection</strong>,
            enabling robotic arms in ROS + Gazebo to detect and interact with objects 
            using minimal training data.
          </p>

          <p className="text-gray-700 mt-2 leading-relaxed">
            Contributed to <strong>robotic arm movement planning</strong> and 
            <strong> OpenCV-based detection pipelines</strong>, improving perception 
            accuracy in automated warehouse environments.
          </p>

          <p className="text-gray-700 mt-2 leading-relaxed mb-4">
            Presented at the <strong>International Conference of Intelligent Engineering Applications</strong>  
            and published in <strong>Global Transitions Proceedings (Elsevier)</strong>.
          </p>

          <a
            href="https://www.sciencedirect.com/science/article/pii/S2666285X22000607?via%3Dihub"
            target="_blank"
            className="inline-block px-5 py-2 bg-primary text-white rounded hover:opacity-90 transition"
          >
            View Publication →
          </a>
        </div>

      </div>
    </section>
  );
}
