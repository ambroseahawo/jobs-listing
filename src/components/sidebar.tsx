const Sidebar = () => {
  return (
    <aside className="cjx7n crf2m cc7q4 ctnpq cmvfi cu2gg cfh68 cy519">
      <div className="c5uys ctbeu">
        <div className="cwq9z c7z1d cqwhl czhnl c2cn0 ck73f">
          <div className="c6kdq cv23o cx5ip cv5zz">
            <button className="cf37z c4vrg cw2fq c4von">Clear</button>
          </div>

          <div className="c8dcm c3ma2 cx1zb cr8k3">
            <div>
              <div className="cd67x cf37z c3774 cznhr">Job Type</div>
              <ul className="czodn">
                <li>
                  <label className="c8og8 cduop">
                    <input type="checkbox" className="cicja" />
                    <span className="cvhuf cf37z cm87k">Full-time</span>
                  </label>
                </li>
                <li>
                  <label className="c8og8 cduop">
                    <input type="checkbox" className="cicja" />
                    <span className="cvhuf cf37z cm87k">Part-time</span>
                  </label>
                </li>
                <li>
                  <label className="c8og8 cduop">
                    <input type="checkbox" className="cicja" />
                    <span className="cvhuf cf37z cm87k">Intership</span>
                  </label>
                </li>
                <li>
                  <label className="c8og8 cduop">
                    <input type="checkbox" className="cicja" />
                    <span className="cvhuf cf37z cm87k">Contract / Freelance</span>
                  </label>
                </li>
                <li>
                  <label className="c8og8 cduop">
                    <input type="checkbox" className="cicja" />
                    <span className="cvhuf cf37z cm87k">Co-founder</span>
                  </label>
                </li>
              </ul>
            </div>

            <div>
              <div className="cd67x cf37z c3774 cznhr">Job Roles</div>
              <ul className="czodn">
                <li>
                  <label className="c8og8 cduop">
                    <input type="checkbox" className="cicja" checked />
                    <span className="cvhuf cf37z cm87k">Programming</span>
                  </label>
                </li>
                <li>
                  <label className="c8og8 cduop">
                    <input type="checkbox" className="cicja" />
                    <span className="cvhuf cf37z cm87k">Design</span>
                  </label>
                </li>
                <li>
                  <label className="c8og8 cduop">
                    <input type="checkbox" className="cicja" />
                    <span className="cvhuf cf37z cm87k">Management / Finance</span>
                  </label>
                </li>
                <li>
                  <label className="c8og8 cduop">
                    <input type="checkbox" className="cicja" />
                    <span className="cvhuf cf37z cm87k">Customer Support</span>
                  </label>
                </li>
                <li>
                  <label className="c8og8 cduop">
                    <input type="checkbox" className="cicja" />
                    <span className="cvhuf cf37z cm87k">Sales / Marketing</span>
                  </label>
                </li>
              </ul>
            </div>

            <div>
              <div className="cd67x cf37z c3774 cznhr">Remote Only</div>
              <div className="c8og8 cduop" x-data="{ checked: false }">
                <div className="cumo3">
                  <input type="checkbox" id="remote-toggle" className="cxbaz" x-model="checked" />
                  <label className="cg72j" htmlFor="remote-toggle">
                    <span className="cz0l8 ctpla" aria-hidden="true"></span>
                    <span className="cxbaz">Remote Only</span>
                  </label>
                </div>
                <div className="cvhuf cf37z c75bs ccyd8" x-text="checked ? 'On' : 'Off'"></div>
              </div>
            </div>

            <div>
              <div className="cd67x cf37z c3774 cznhr">Salary Range</div>
              <ul className="czodn">
                <li>
                  <label className="c8og8 cduop">
                    <input type="checkbox" className="cicja" />
                    <span className="cvhuf cf37z cm87k">$20K - $50K</span>
                  </label>
                </li>
                <li>
                  <label className="c8og8 cduop">
                    <input type="checkbox" className="cicja" />
                    <span className="cvhuf cf37z cm87k">$50K - $100K</span>
                  </label>
                </li>
                <li>
                  <label className="c8og8 cduop">
                    <input type="checkbox" className="cicja" />
                    <span className="cvhuf cf37z cm87k">&gt; $100K</span>
                  </label>
                </li>
                <li>
                  <label className="c8og8 cduop">
                    <input type="checkbox" className="cicja" />
                    <span className="cvhuf cf37z cm87k">Drawing / Painting</span>
                  </label>
                </li>
              </ul>
            </div>

            <div>
              <div className="cd67x cf37z c3774 cznhr">Location</div>
              <label className="cxbaz">Location</label>
              <select className="coiqx cn582">
                <option>Anywhere</option>
                <option>London</option>
                <option>San Francisco</option>
                <option>New York</option>
                <option>Berlin</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
