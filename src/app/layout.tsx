import React from "react";

import Navbar from "@/components/navbar";
import "./globals.css";

export const metadata = {
  title: "Job Listing Platform",
  description: "Find your dream job today!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <div className="container mx-auto px-4 lg:px-8 py-6">{children}</div>
      </body>
    </html>
  );
}
