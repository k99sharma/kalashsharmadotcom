const Avatar = () => {
  const imgSrc: string = "/icons/logo_512.png";

  return (
    <div className="avatar flex flex-col items-center">
      <div className="avatar__logo">
        <img
          className="h-30 w-30 md:h-40 md:w-40"
          src={imgSrc}
          alt="logo"
          aria-label="logo"
        />
      </div>

      <div className="avatar__header font-bold text-2xl md:text-4xl md:mb-1 -mt-4 md:-mt-5 z-5 text-shadow-md">
        Kalash Sharma
      </div>

      <div className="avatar__subheader font-semibold text-md md:text-lg">
        Software Engineer and Learning Applied AI
      </div>
    </div>
  );
};

export default Avatar;
