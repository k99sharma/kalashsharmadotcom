// imports
import { CiLinkedin, CiReceipt } from "react-icons/ci";
import { VscGithubAlt } from "react-icons/vsc";
import type { SocialType } from "./illustration.types";
import type { IconType } from "react-icons";

const SocialLink = ({ label, icon, url }: SocialType) => {
  const Icon: IconType = icon;

  const handleClick = () => {};

  return <Icon onClick={() => handleClick()} className="h-7 w-7 mx-3" />;
};

function Illustration() {
  const imgUrl: string =
    "https://plus.unsplash.com/premium_photo-1675435644687-562e8042b9db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29mZmVlfGVufDB8fDB8fHww";

  const socials: SocialType[] = [
    {
      label: "linkedin",
      icon: CiLinkedin,
      url: "",
    },
    {
      label: "github",
      icon: VscGithubAlt,
      url: "",
    },
    {
      label: "blog",
      icon: CiReceipt,
      url: "",
    },
  ];

  return (
    <div className="illustration md:h-screen flex items-center justify-center w-full">
      <div className="illustration__content bg-neutral-100 h-full w-5/6  md:w-4/6 rounded-xl flex flex-col p-5 justify-between mb-8 md:mb-0">
        <div className="illustration__content__first">
          <div className="illustration__content__first__img flex items-center justify-center p-3 mb-3">
            <img
              className="rounded-lg h-60 md:h-80 w-60 md:w-100"
              src={imgUrl}
            />
          </div>

          <div className="illustration__content__first__name text-center text-4xl font-bold mb-3 md:mb-0">
            Kalash Sharma
          </div>
        </div>

        <div className="illustration__content__second">
          <div className="illustration__content__second__bio text-center text-md text-neutral-500 font-semibold mb-8">
            A Software Engineer who has developed countless innovative
            solutions.
          </div>

          <div className="illustration__content__second__socials my-5 flex items-center justify-center">
            {socials.map((social) => (
              <SocialLink
                label={social.label}
                icon={social.icon}
                url={social.url}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Illustration;
