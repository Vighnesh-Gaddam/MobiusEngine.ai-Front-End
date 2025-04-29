import { ArrowUpRight, CheckCircle } from "lucide-react";

const BuildingCoaching = () => {
    return (
        <div className="flex flex-col justify-center w-full max-w-[1100px] mx-auto gap-12 px-6 sm:px-8 md:px-12 xl:px-0 py-16 text-[#0649E7]">
            {/* Heading Section */}
            <div className="flex flex-col gap-2">
                <h2 className="text-4xl font-medium tracking-tight text-left">Resume Building & Coaching</h2>
                <p className="text-lg font-normal max-w-[650px]">
                    Let’s talk about where you’re headed — and how your resume can get you there.{" "}
                    <span className="font-semibold">Schedule a call to get started. </span>
                </p>
            </div>

            {/* Cards Section */}
            <div className="flex flex-col md:flex-row md:justify-evenly gap-8">
                {/* Card 1 */}
                <div className="h-auto md:h-[675px] w-full md:w-[360px] rounded-[20px] border-2 border-[#0649E7] p-6 flex flex-col gap-6">
                    <div>
                        <h3 className="text-2xl font-semibold tracking-tight">Resume Rebuild</h3>
                        <p className="text-base font-normal leading-5">Crafted for senior to VP-level professionals ready for their next big step.</p>
                    </div>
                    <div className="flex items-end gap-1 font-bold text-[#0649E7]">
                        <span className="text-5xl">$1000</span>
                        <span className="text-lg">one time</span>
                    </div>
                    <ul className="flex flex-col gap-2 mt-2 text-md">
                        <hr />
                        {[
                            "3x 30-min coaching",
                            "Focused on storytelling, not just formatting",
                            "Analyst + full application team on Pacific hours",
                            "Tailored to your target industry, company, or role",
                            "Direct work with our co-founder (ex-Google, JP Morgan)",
                            "Executive coaching from UC Berkeley alum with 10+ yrs experience",
                            "Resume Rebuild portfolio available upon request",
                        ].map((text, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="min-w-[20px] min-h-[20px] text-green-500 mt-[2px]" />
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="flex items-center w-fit text-white bg-[#0649E7] px-6 py-2 rounded-full text-lg font-normal hover:bg-white hover:text-[#0649E7] border border-[#0649E7] transition mt-auto">
                        Get Started
                        <ArrowUpRight className="w-5 h-5 ml-2" />
                    </button>
                </div>

                {/* Card 2 */}
                <div className="h-auto md:h-[675px] w-full md:w-[360px] rounded-[20px] border-2 border-[#0649E7] p-6 flex flex-col gap-6">
                    <div>
                        <h3 className="text-2xl font-semibold tracking-tight">Interview Prep</h3>
                        <p className="text-base font-normal leading-5">Two sessions to sharpen your story, confidence, and clarity — fast.</p>
                    </div>
                    <div className="flex items-end gap-1 font-bold text-[#0649E7]">
                        <span className="text-5xl">$500</span>
                        <span className="text-lg">one time</span>
                    </div>
                    <ul className="flex flex-col gap-2 mt-2 text-md">
                        <hr />
                        {[
                            "2 x 45-min live coaching with our co-founder",
                            "Real-time, practical feedback",
                            "Build clarity, empathy & executive presence",
                            "For senior and leadership roles — technical & non-technical",
                        ].map((text, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="min-w-[20px] min-h-[20px] text-green-500 mt-[2px]" />
                                <span>{text}</span>
                            </li>
                        ))}
                    </ul>

                    <button className="flex items-center w-fit text-white bg-[#0649E7] px-6 py-2 rounded-full text-lg font-normal hover:bg-white hover:text-[#0649E7] border border-[#0649E7] transition mt-auto">
                        Get Started
                        <ArrowUpRight className="w-5 h-5 ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default BuildingCoaching;
