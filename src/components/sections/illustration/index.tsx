import SocialBar from "../../shared/socialBar";

function Illustration() {
  const imgUrl: string = "/assets/profile.jpg";

  return (
    <div className="illustration md:h-screen flex items-center justify-center w-full">
      <div className="illustration__content bg-neutral-100 h-full w-5/6  md:w-4/6 rounded-xl flex flex-col p-5 justify-between mb-8 md:mb-0">
        <div className="illustration__content__first">
          <div className="illustration__content__first__img flex items-center justify-center p-3 mb-3">
            <img
              className="rounded-lg h-60 md:h-80 w-60 md:w-100 object-cover"
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

          <div className="illustration__content__second__socials my-5">
            <SocialBar size="large" whiteIcon={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Illustration;
