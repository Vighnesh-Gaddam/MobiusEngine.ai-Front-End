const Section2Steps = ({ number, content }) => {
  return (
    <div className="flex flex-col items-center sm:items-start gap-4 max-w-full sm:max-w-xs md:max-w-sm lg:max-w-none">
      <h3 className="text-4xl sm:text-6xl font-normal h-20 w-20 border rounded-full text-center flex justify-center items-center">
        {number}
      </h3>

      <div className="w-full h-1 bg-[#0649E7] mt-2 mb-4 lg:w-10/12"></div>

      <p className="text-base sm:text-lg md:text-lg font-medium text-[#0649E7] text-center sm:text-left">
        {content}
      </p>
    </div>
  );
};

export default Section2Steps;
