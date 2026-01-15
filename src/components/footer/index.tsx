import SocialBar from "../shared/socialBar";

function Footer() {
  const linkedInUrl: string = "https://linkedin.com/in/kalashsharma99";
  const year: number = new Date().getFullYear();

  return (
    <div className="flex flex-col my-10">
      <div className="footer text-xs text-neutral-400">
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

      <div className="subfooter mt-5">
        <SocialBar size={"small"} whiteIcon={true} />
      </div>
    </div>
  );
}

export default Footer;
