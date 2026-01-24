const HeaderDescription = () => {
  const accentureLink: string = "https://www.accenture.com/in-en";

  return (
    <div className="headerDescription text-sm text-neutral-500">
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
        Currently reading AI Engineering by Chip Huyen
      </div>
    </div>
  );
};

export default HeaderDescription;
