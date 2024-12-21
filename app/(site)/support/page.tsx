import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support Page - Solid SaaS Boilerplate",
  description: "This is Support page for Solid Pro",
  // other metadata
};

const SupportPage = () => {
  return (
    <div className="pb-10 pt-20 sm:pb-15 sm:pt-25 md:pb-20 md:pt-30 lg:pb-25 lg:pt-35 xl:pb-30 xl:pt-40">
      <Contact />
    </div>
  );
};

export default SupportPage;
