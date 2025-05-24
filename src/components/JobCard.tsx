"use client";

import Image from "next/image";

interface JobCardProps {
  job: {
    id: number;
    company: string;
    title: string;
    salary?: string;
    location: string;
    type: string;
    posted: string;
    icon: string;
  };
  isHovered: boolean;
  onMouseEnter: () => void;
}

const JobCard = ({ job, isHovered, onMouseEnter }: JobCardProps) => {
  return (
    <div className={`cokkt czhnl c6kou cmd8n ${isHovered ? "ct79c" : ""}`} onMouseEnter={onMouseEnter}>
      <div className="cwkz1 c0qn4">
        <div className="cduop cb7bz cp1au c6rln cclz8">
          <div className="ctzpc">
            <Image src={job.icon} width={56} height={56} alt={`${job.company} icon`} />
          </div>
          <div className="cycys cduop chu3i cyhe5 cb04d c966h clhjg">
            <div>
              <div className="c8og8 c5li5 ccgu6">
                <div className="ck6q6 cf37z c3774 cznhr">{job.company}</div>
              </div>
              <div className="cmi0k">
                <a className="cqdqx clt06 cznhr" href="/">
                  {job.title}
                </a>
              </div>
              <div className="c0zhl">
                {job.salary && (
                  <a
                    className="cfhya cy6kr ch6sm ceip1 c49bb ce33e c7d26 c9eyc c4vrg ca6yp cww2f comjk cmwpt cv6oq"
                    href="#0"
                  >
                    {job.salary}
                  </a>
                )}
                <a
                  className="cfhya cy6kr ch6sm ceip1 cdxuw ce33e c7d26 c9eyc c4vrg ca6yp cww2f comjk cmwpt cv6oq"
                  href="#0"
                >
                  {job.type}
                </a>
                <a
                  className="cfhya cy6kr ch6sm ceip1 cdxuw ce33e c7d26 c9eyc c4vrg ca6yp cww2f comjk cmwpt cv6oq"
                  href="#0"
                >
                  {job.location}
                </a>
              </div>
            </div>
            <div className="c8og8 co7yr cduop c40vg c16gq c56h7">
              <div className="ct4vx cjjz8">
                <a className="c40tu ce7qj c50eh c2fn4 cyky3 ctpla czwz3 c6kou" href="/">
                  Apply Now <span className="ce3ah ccolo cndda clfy9 comjk cmwpt c8bku">-&gt;</span>
                </a>
              </div>
              <div className="cf37z c75bs ca6yp c2vtk">{job.posted}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
