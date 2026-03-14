import React from "react";

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300 py-10 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Shashank T K
      </p>
    
      <p className="text-sm mt-2 text-gray-400">
        AI Product Builder • Industrial AI • Sustainability Technology
      </p>
    </footer>
  );
}

