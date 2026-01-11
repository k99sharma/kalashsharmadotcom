// imports
import { useState } from "react";
import CustomHeader from "../../shared/customHeader";

function Cta() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="cta p-3">
      <div className="cta__header mb-10 flex justify-center md:justify-start">
        <CustomHeader heading="Let's Work" subheading="Together" />
      </div>

      <div className="cta__form p-3">
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="flex flex-col md:flex-row md:gap-4">
            <div className="cta__form__name w-full md:w-1/2 mb-3">
              <input
                className="w-full h-10 p-3 bg-neutral-700 rounded-lg text-neutral-300"
                type="text"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="cta__form__email w-full md:w-1/2 mb-3">
              <input
                className="w-full h-10 p-3 bg-neutral-700 rounded-lg text-neutral-300"
                type="email"
                placeholder="Your@email.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="cta__form__message mb-3">
            <textarea
              className="w-full h-30 p-3 bg-neutral-700 rounded-lg text-neutral-300"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="cta__form__button">
            <button
              type="submit"
              className="w-full bg-amber-500 p-2 rounded-lg text-neutral-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Cta;
