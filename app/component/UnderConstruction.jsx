"use client";
import React from "react";
import { Construction } from "lucide-react";

const UnderConstruction = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-50 text-gray-800 p-6">
      <Construction className="w-16 h-16 text-yellow-600 mb-4" />
      <h1 className="text-3xl font-bold mb-2">Page Under Construction</h1>
      <p className="text-center max-w-md">
        We're working hard to finish the development of this page. Please check
        back soon!
      </p>
    </div>
  );
};

export default UnderConstruction;
