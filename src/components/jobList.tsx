import Image from "next/image";
import Link from "next/link";

const jobs = [
  {
    id: 1,
    company: "Linear company",
    companyLogo: "/images/linear-logo.png",
    title: "Software Engineer",
    location: "Brussels",
    type: "Full-time",
    salary: "50–55k",
    posted: "29 min ago",
    new: true,
    description:
      "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt.",
  },
  {
    id: 2,
    company: "Notion",
    companyLogo: "/images/notion-logo.png",
    title: "Junior UI Designer",
    location: "Madrid",
    type: "Full-time",
    salary: "30–32k",
    posted: "1 day ago",
    description:
      "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa.",
  },
  {
    id: 3,
    company: "Spline studio",
    companyLogo: "/images/spline-logo.png",
    title: "Technical Support Engineer",
    location: "United States",
    type: "Full-time",
    salary: "50–52k",
    posted: "1 day ago",
    description:
      "Mollit in laborum tempor Lorem incididunt irure. Aute eu ex ad sunt. Pariatur sint culpa do incididunt eiusmod eiusmod culpa. Mollit in laborum tempor Lorem incididunt irure.",
  },
];

const JobList = () => {
  return (
    <div>
      {/* Job Count and Filter Dropdown */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6">
        <p className="text-gray-700 font-medium text-lg">{jobs.length} Jobs</p>
        <select className="px-3 py-2 border rounded-lg bg-white text-gray-700 focus:outline-none focus:ring focus:ring-blue-200">
          <option value="" className="text-gray-500">
            Filter by
          </option>
          <option value="location" className="text-gray-700">
            Location
          </option>
          <option value="type" className="text-gray-700">
            Job Type
          </option>
          <option value="salary" className="text-gray-700">
            Salary
          </option>
        </select>
      </div>

      {/* Job Cards */}
      <div className="space-y-4">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="flex items-start p-4 border rounded-lg bg-white shadow-sm hover:shadow-md"
          >
            {/* Company Logo */}
            <div className="relative w-16 h-16 rounded-lg overflow-hidden mr-4 border">
              <Image
                src={job.companyLogo}
                alt={`${job.company} logo`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>

            {/* Job Details */}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <Link
                    href={`/job/${job.id}`}
                    className="font-semibold text-gray-800 hover:text-blue-500"
                    passHref
                  >
                    {job.title}
                  </Link>
                  <p className="text-sm text-gray-500">{job.company}</p>
                </div>
                {job.new && (
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
                    New post
                  </span>
                )}
              </div>
              <div className="flex items-center text-sm text-gray-500 space-x-4 mt-2">
                <p>
                  <i className="fas fa-map-marker-alt mr-1"></i> {job.location}
                </p>
                <p>
                  <i className="fas fa-clock mr-1"></i> {job.type}
                </p>
                <p>
                  <i className="fas fa-dollar-sign mr-1"></i> {job.salary}
                </p>
                <p>
                  <i className="fas fa-calendar-alt mr-1"></i> {job.posted}
                </p>
              </div>

              {/* Job Description (Truncated) */}
              <p className="text-sm text-gray-600 mt-3">
                {job.description.length > 170
                  ? `${job.description.substring(0, 170)}...`
                  : job.description}{" "}
                {job.description.length > 170 && (
                  <Link href={`/job/${job.id}`} className="text-blue-500">
                    more
                  </Link>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
