import { Star, UserRound, HeartHandshake } from "lucide-react";

const Choose = () => {
  return (
    <div className="flex flex-col justify-center w-full xl:w-[1100px] mx-auto gap-8 px-6 sm:px-8 md:px-12 xl:px-0 py-16 text-[#022183]">
      <h2 className="text-4xl font-medium tracking-tight text-center md:text-left">
        Why choose us?
      </h2>

      <div className="flex flex-wrap justify-center md:justify-center gap-6 md:gap-10 mt-10">
        <div className="w-[320px] h-72 border-2 border-[#022183] rounded-[20px] p-8">
          <HeartHandshake className="w-16 h-16 text-[#022183]" />
          <div className="mt-10 flex flex-col gap-6">
            <h4 className="text-2xl font-semibold leading-4">
              Tried, Tested, Trusted
            </h4>
            <p>
              Built by folks with 40+ years in tech and hiring — we know the
              game, and we’ve got your back.
            </p>
          </div>
        </div>

        <div className="w-[320px] h-72 border-2 border-[#022183] rounded-[20px] p-8">
          <UserRound className="w-16 h-16 text-[#022183]" />
          <div className="mt-10 flex flex-col gap-6">
            <h4 className="text-2xl font-semibold leading-4">
              Real People, Real Help
            </h4>
            <p>
              A hands-on team that actually cares — guiding you through every
              twist in your career path.
            </p>
          </div>
        </div>

        <div className="w-[320px] h-72 border-2 border-[#022183] rounded-[20px] p-8">
          <Star className="w-16 h-16 text-[#022183]" />
          <div className="mt-10 flex flex-col gap-6">
            <h4 className="text-2xl font-semibold leading-4">Beat the Line</h4>
            <p>
              We search, shortlist, and apply for you, so your name shows up
              first — every single day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
