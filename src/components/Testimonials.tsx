import Image from "next/image";

const Testimonials = () => {
  return (
    <div>
      <h2 className="c6cl6 cuad0 cfibj clt06">Our customers love us</h2>
      {/* Testimonials container */}
      <div className="c2i7x">
        {/* Item */}
        <div className="c7z1d cqwhl ch4ps ch7jl ck73f cww2f comjk cmwpt casko csmwo cao76">
          <div className="c8og8 cduop cv4ej">
            <div className="cwq9z ctzpc">
              <Image
                className="c1g5q"
                src="/images/testimonial-01.jpg"
                width={102}
                height={102}
                alt="Testimonial 01"
              />
              <svg
                className="c6kdq cyzod c753i cflao"
                width={26}
                height={17}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z"></path>
              </svg>
            </div>
            <figure>
              <blockquote className="cg9ly cmn18 cqdqx clt06">
                <p>
                  Hiring a Senior Laravel engineer through JobBoard has been incredible. The best job
                  board experience we&apos;ve ever had.
                </p>
              </blockquote>
              <figcaption className="cf37z c4vrg">
                Patrick Metzger, CEO{" "}
                <a className="c0bjb c4von" href="#0">
                  App.com
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
        {/* Item */}
        <div className="c7z1d cqwhl crhpi c0s3t ck73f cww2f comjk cmwpt casko csmwo cao76">
          <div className="c8og8 cduop cv4ej">
            <div className="cwq9z ctzpc">
              <Image
                className="c1g5q"
                src="/images/testimonial-02.jpg"
                width={102}
                height={102}
                alt="Testimonial 02"
              />
              <svg
                className="c6kdq cyzod c753i cflao"
                width={26}
                height={17}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z"></path>
              </svg>
            </div>
            <figure>
              <blockquote className="cg9ly cmn18 cqdqx clt06">
                <p>
                  Hiring a Senior Laravel engineer through JobBoard has been incredible. The best job
                  board experience we&apos;ve ever had.
                </p>
              </blockquote>
              <figcaption className="cf37z c4vrg">
                Annie Patrick, CEO{" "}
                <a className="cpjz5 c4von" href="#0">
                  TrueThing
                </a>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
