function Footer() {
  const linkedInUrl: string = "https://linkedin.com/in/kalashsharma99";
  const year: number = new Date().getFullYear();

  return (
    <div className="footer my-10 text-xs">
      Designed & Developed by{" "}
      <span>
        <a className="hover:underline" href={linkedInUrl} target="_blank">
          Kalash Sharma
        </a>
      </span>
      {` © ${year}.  All right reserved.`}
    </div>
  );
}

export default Footer;
