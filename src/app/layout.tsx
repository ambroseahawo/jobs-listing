import React from "react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Job Listing Platform",
  description: "find your dream job today!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="cz0l8 cuad0 c1222 cznhr cztc9">
        <div className="c8og8 cbrwb ca7zr cj019 c3nl1">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
