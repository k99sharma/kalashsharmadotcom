function Footer() {
  const linkedInUrl: string = "https://linkedin.com/in/kalashsharma99";
  const year: number = new Date().getFullYear();

  return (
    <div className="footer my-10 text-xs text-neutral-400">
      Designed & Developed by{" "}
      <span>
        <a
          className="hover:underline text-amber-500"
          href={linkedInUrl}
          target="_blank"
        >
          Kalash Sharma
        </a>
      </span>
      {` © ${year}.  All rights reserved.`}
    </div>
  );
}

export default Footer;
