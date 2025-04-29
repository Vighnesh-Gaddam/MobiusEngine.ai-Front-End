import Section2Steps from "./Section2Steps";

const Section2 = () => {
    return (
        <div className="flex flex-col justify-center w-full xl:w-[1100px] 2xl:w-[1200px] mx-auto gap-8 my-16 px-6 sm:px-8 md:px-12 xl:px-0">
            <h2 className="text-[#0649E7] text-4xl font-semibold mb-10 text-center xl:text-left">
                How we work?
            </h2>

            <div className="flex flex-col sm:flex-row sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 md:gap-16 lg:gap-24">
                <Section2Steps number={1} content={"Submit Intake Form"} />
                <Section2Steps number={2} content={"We do the search and curation for list of jobs"} />
                <Section2Steps number={3} content={"You approve, we do the tedious part (applying)"} />
                <Section2Steps number={4} content={"You get the interviews"} />
            </div>

        </div>
    );
};

export default Section2;
