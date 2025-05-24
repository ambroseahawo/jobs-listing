import Image from "next/image";

interface TestimonialItemProps {
  image: string;
  quote: string;
  name: string;
  title: string;
  company: string;
  companyUrl: string;
}

const TestimonialItem = ({ image, quote, name, title, company, companyUrl }: TestimonialItemProps) => {
  return (
    <div className="c7z1d cqwhl ch4ps ch7jl ck73f cww2f comjk cmwpt casko csmwo cao76">
      <div className="c8og8 cduop cv4ej">
        <div className="cwq9z ctzpc">
          <Image
            className="c1g5q"
            src={image}
            width={102}
            height={102}
            alt={`Testimonial from ${name}`}
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
            <p>{quote}</p>
          </blockquote>
          <figcaption className="cf37z c4vrg">
            {name}, {title}{" "}
            <a className="c0bjb c4von" href={companyUrl}>
              {company}
            </a>
          </figcaption>
        </figure>
      </div>
    </div>
  );
};

export default TestimonialItem;
