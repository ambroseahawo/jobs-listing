"use client";

import { useState } from "react";
import jobsData from "../data/jobs.json";
import JobCard from "./JobCard";
import NewsLetterCta from "./NewsLetterCta";

const JobList = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  return (
    <div className="c8d05 c0ahj">
      <h2 className="c6cl6 cuad0 cfibj clt06">Latest jobs</h2>
      {/* List container */}
      <div className="c8og8 ca7zr">
        {jobsData.jobs.map((job, index) => (
          <JobCard
            key={job.id}
            job={job}
            isHovered={hoveredIndex === index}
            onMouseEnter={() => setHoveredIndex(index)}
          />
        ))}
        {/* Newsletter CTA */}
        <NewsLetterCta />
      </div>
    </div>
  );
};

export default JobList;
