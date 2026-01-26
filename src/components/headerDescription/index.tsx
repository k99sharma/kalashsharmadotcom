// imports
import data from "../../resources/data.json";

const HeaderDescription = () => {
  const accentureLink: string = "https://www.accenture.com/in-en";
  const bookLabel: string = data.header.description.book;
  const bookLink: string = data.header.description.url;

  return (
    <div className="headerDescription text-xs md:text-sm text-neutral-700">
      <div className="headerDescription__introduction text-center mb-3">
        I’m a Software Engineer at{" "}
        <span>
          <a
            className="underline"
            href={accentureLink}
            target="_blank"
            aria-label="Accenture website link"
          >
            @ Accenture
          </a>
        </span>{" "}
        with a background in full-stack development, building scalable and
        reliable web applications. Learning Applied AI with a focus on
        real-world software problems.
      </div>

      <div className="headerDescription__reading text-center">
        Currently reading{" "}
        <span>
          <a
            className="hover:underline"
            href={bookLink}
            target="_blank"
            aria-label="AI Engineering book amazon link"
          >
            {bookLabel}
          </a>
        </span>
      </div>
    </div>
  );
};

export default HeaderDescription;
