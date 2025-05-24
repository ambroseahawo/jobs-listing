"use client";

import { useState } from "react";
import filtersData from "../data/filters.json";
import { CheckboxList, FilterSection, Select } from "./FilterSection";

const Sidebar = () => {
  const [jobTypes, setJobTypes] = useState<Record<string, boolean>>(
    Object.fromEntries(filtersData.jobTypes.options.map((opt) => [opt.id, false])),
  );

  const [jobRoles, setJobRoles] = useState<Record<string, boolean>>(
    Object.fromEntries(filtersData.jobRoles.options.map((opt) => [opt.id, false])),
  );

  const [remoteOnly, setRemoteOnly] = useState(false);

  const [salaryRange, setSalaryRange] = useState<Record<string, boolean>>(
    Object.fromEntries(filtersData.salaryRange.options.map((opt) => [opt.id, false])),
  );

  const [location, setLocation] = useState(filtersData.locations.options[0]);

  const handleJobTypeChange = (id: string) => {
    setJobTypes((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleJobRoleChange = (id: string) => {
    setJobRoles((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleSalaryRangeChange = (id: string) => {
    setSalaryRange((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleClear = () => {
    setJobTypes(Object.fromEntries(filtersData.jobTypes.options.map((opt) => [opt.id, false])));
    setJobRoles(Object.fromEntries(filtersData.jobRoles.options.map((opt) => [opt.id, false])));
    setRemoteOnly(false);
    setSalaryRange(Object.fromEntries(filtersData.salaryRange.options.map((opt) => [opt.id, false])));
    setLocation(filtersData.locations.options[0]);
  };

  return (
    <aside className="cjx7n crf2m cc7q4 ctnpq cmvfi cu2gg cfh68 cy519">
      <div className="c5uys ctbeu">
        <div className="cwq9z c7z1d cqwhl czhnl c2cn0 ck73f">
          <div className="c6kdq cv23o cx5ip cv5zz">
            <button className="cf37z c4vrg cw2fq c4von" onClick={handleClear}>
              Clear
            </button>
          </div>

          <div className="c8dcm c3ma2 cx1zb cr8k3">
            <FilterSection title={filtersData.jobTypes.title}>
              <CheckboxList
                options={filtersData.jobTypes.options}
                values={jobTypes}
                onChange={handleJobTypeChange}
              />
            </FilterSection>

            <FilterSection title={filtersData.jobRoles.title}>
              <CheckboxList
                options={filtersData.jobRoles.options}
                values={jobRoles}
                onChange={handleJobRoleChange}
              />
            </FilterSection>

            <FilterSection title="Remote Only">
              <div className="c8og8 cduop">
                <div className="cumo3">
                  <input
                    type="checkbox"
                    id="remote-toggle"
                    className="cxbaz"
                    checked={remoteOnly}
                    onChange={(e) => setRemoteOnly(e.target.checked)}
                  />
                  <label className="cg72j" htmlFor="remote-toggle">
                    <span className="cz0l8 ctpla" aria-hidden="true"></span>
                    <span className="cxbaz">Remote Only</span>
                  </label>
                </div>
                <div className="cvhuf cf37z c75bs ccyd8">{remoteOnly ? "On" : "Off"}</div>
              </div>
            </FilterSection>

            <FilterSection title={filtersData.salaryRange.title}>
              <CheckboxList
                options={filtersData.salaryRange.options}
                values={salaryRange}
                onChange={handleSalaryRangeChange}
              />
            </FilterSection>

            <FilterSection title={filtersData.locations.title}>
              <Select options={filtersData.locations.options} value={location} onChange={setLocation} />
            </FilterSection>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
