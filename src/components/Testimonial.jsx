import { CirclePlay, ArrowUpRight } from 'lucide-react';

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center w-full xl:w-[1100px] mx-auto gap-8 px-6 sm:px-8 md:px-12 xl:px-0 py-16 text-[#0649E7]">
      <h2 className="text-3xl font-medium tracking-tight text-center md:text-left">
        What our clients have to say
      </h2>

      <div className="flex flex-wrap justify-center md:justify-between gap-6 mt-10">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-[300px] md:w-80 h-[400px] rounded-[20px] bg-[#0649E7] p-0.5 flex flex-col justify-between"
          >
            <div className="flex flex-col justify-center items-center h-56 bg-white rounded-[20px]">
              <CirclePlay className="w-10 h-10 text-[#0649E7]" />
            </div>
            <div>
              <p className="text-white px-6 pt-4 text-lg leading-5">
                Holly is a <b>senior executive</b> who got over <b>10 job interviews</b> and an offer she accepted
              </p>
            </div>
            <div className="flex justify-end px-6 pb-4">
              <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center text-[#0649E7] hover:bg-[#0649E7] hover:text-white border transition">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-6 justify-center pt-10">
        <button className="flex items-center text-[#0649E7] text-lg hover:underline border-2 border-[#0649E7] rounded-full px-6 py-2">
          More customer testimonials
          <ArrowUpRight className="w-5 h-5 ml-2" />
        </button>

        <button className="flex items-center w-fit text-white bg-[#0649E7] px-6 sm:px-9 py-2 rounded-full text-lg sm:text-xl font-normal hover:bg-white hover:text-[#0649E7] border border-[#0649E7] transition">
          Get Started
          <ArrowUpRight className="w-5 h-5 ml-2" />
        </button>
      </div>
    </div>
  );
};

export default Testimonial;
