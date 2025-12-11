import React from "react";
import { Briefcase, Cpu, Brain } from "lucide-react";

export default function Experience() {
  return (
    <section className="py-20 px-6 bg-light">
      <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>

      <div className="max-w-4xl mx-auto space-y-10">

        {/* AVEVA */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <div className="flex items-center gap-3">
            <Briefcase className="text-primary" size={28} />
            <div>
              <h3 className="text-xl font-bold">Software Developer — AVEVA</h3>
              <p className="text-gray-600 text-sm">2023 – 2026</p>
            </div>
          </div>

          <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2 leading-relaxed">
            <li>
              Built cloud-native industrial data systems for the AIM platform using AWS and C# .NET.
            </li>
            <li>
              Led development of <strong>LLM-powered semantic & faceted search</strong> for engineering documents, reducing search friction for industrial users.
            </li>
            <li>
              Engineered <strong>end-to-end data pipeline workflows</strong> for ingestion, validation, and metadata quality across large-scale datasets.
            </li>
            <li>
              Managed <strong>deployment pipelines (CI/CD)</strong> and Docker-based releases across multi-region cloud environments.
            </li>
            <li>
              Improved <strong>code quality, system reliability, and API performance</strong> through architectural enhancements and testing strategies.
            </li>
          </ul>
        </div>

        {/* CellStrat */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <div className="flex items-center gap-3">
            <Brain className="text-primary" size={28} />
            <div>
              <h3 className="text-xl font-bold">AI Researcher & Engineer — CellStrat</h3>
              <p className="text-gray-600 text-sm">2021 – 2023</p>
            </div>
          </div>

          <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2 leading-relaxed">
            <li>
              Conducted research in <strong>GANs, Few-Shot Learning, and medical imaging</strong> for solving real-world deep learning challenges.
            </li>
            <li>
              Developed an <strong>AI-based bone deformity detection system</strong> using image classification + segmentation techniques.
            </li>
            <li>
              Implemented <strong>efficient inference pipelines</strong> addressing model optimization & data quality issues.
            </li>
            <li>
              Built reproducible ML workflows using Python, TensorFlow/PyTorch, and automation tooling.
            </li>
          </ul>
        </div>

        {/* IIT-AIA */}
        <div className="p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
          <div className="flex items-center gap-3">
            <Cpu className="text-primary" size={28} />
            <div>
              <h3 className="text-xl font-bold">
                ML Engineer — IIT-AIA Foundation for Smart Manufacturing, Delhi
              </h3>
              <p className="text-gray-600 text-sm">2022</p>
            </div>
          </div>

          <ul className="list-disc ml-6 mt-4 text-gray-700 space-y-2 leading-relaxed">
            <li>
              Worked on <strong>Power Line Fault Detection</strong> using ML models trained on the VSB dataset to support predictive maintenance.
            </li>
            <li>
              Performed <strong>Exploratory Data Analysis (EDA)</strong>, noise reduction, and feature engineering for improved signal quality.
            </li>
            <li>
              Optimized <strong>time-series feature extraction</strong> workflows for anomaly detection in electrical systems.
            </li>
            <li>
              Applied ML techniques to real industrial datasets, strengthening expertise in <strong>smart manufacturing and sensor analytics</strong>.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
