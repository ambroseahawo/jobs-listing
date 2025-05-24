import Image from "next/image";

const Hero = () => {
  return (
    <section className="cwq9z cj019">
      <div className="cetod c6kdq cjxga c8f1b cfcbm ctjxe cjcd5" aria-hidden="true"></div>

      <div className="cetod c6kdq c8zq8 c8f1b cndjv codga c9rix" aria-hidden="true">
        <Image
          src="/images/hero-illustration.svg"
          className="co24w"
          width="1440"
          height="749"
          alt="Hero Illustration"
        />
      </div>

      <div className="cfd1l cnsl7 cwkz1 cwkio">
        <div className="c8d05 cef3h c0ahj cm48u">
          <div className="clxkp czbam chjqk">
            <h1 className="ckqm5 ccymi cuad0">
              Join the best tech startups in the <span className="c1laq chgw8 cw2fq">industry</span>
            </h1>
            <p className="cjx7n cqdqx ca6yp">
              Our landing page template works on all devices, so you only have to set it
              <br className="cndjv c9rix" /> up once, and get beautiful results forever.
            </p>

            <div className="cswe3 cp1au c8p1b crj19 c6rln cclz8 cua4c">
              <div>
                <a className="c0tyr ce7qj cyky3 ctpla czwz3" href="/">
                  Post a job - $299
                </a>
              </div>
              <div className="czodn cp1au c8p1b crj19 cypyb cclz8">
                <div className="cs3h1 cy6kr csd9h">
                  <Image
                    className="c52nt c1g5q caz15 c4146"
                    src="/images/avatar-01.jpg"
                    width="32"
                    height="32"
                    alt="Avatar 01"
                  />
                  <Image
                    className="c52nt c1g5q caz15 c4146"
                    src="/images/avatar-02.jpg"
                    width="32"
                    height="32"
                    alt="Avatar 02"
                  />
                  <Image
                    className="c52nt c1g5q caz15 c4146"
                    src="/images/avatar-03.jpg"
                    width="32"
                    height="32"
                    alt="Avatar 03"
                  />
                  <Image
                    className="c52nt c1g5q caz15 c4146"
                    src="/images/avatar-04.jpg"
                    width="32"
                    height="32"
                    alt="Avatar 04"
                  />
                </div>
                <div className="cf37z c4vrg ca6yp">
                  Reach <span className="cw2fq">100K+</span> Professionals
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
