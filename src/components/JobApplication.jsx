import { ArrowUpRight, CheckCircle } from "lucide-react";

const JobApplication = () => {
    return (
        <div className="flex flex-col justify-center w-full max-w-[1100px] mx-auto gap-12 px-6 sm:px-8 md:px-12 xl:px-0 py-16 text-[#0649E7]">
            
            {/* Header */}
            <h2 className="text-4xl font-medium tracking-tight text-center md:text-left">
                Job Application Service Plans
            </h2>

            {/* Plans Section */}
            <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8 mt-10">

                {/* Plan Cards */}
                {[
                    {
                        title: "April Promo",
                        price: "$35",
                        duration: "/Week",
                        features: [
                            "Curated jobs from 1M+ listings, refreshed every 48 hours",
                            "Up to 20 human-applied roles per week (no bots, no fluff — real company)",
                            "Need more? Add extra apps for just $1.5 each",
                            "Your own dedicated application analyst",
                            "Personalized with up to 10 filters & 5 job titles",
                        ],
                    },
                    {
                        title: "Starter",
                        price: "$50",
                        duration: "/Week",
                        tag: "Popular",
                        additionalFeature: "All the perks of the Promo Plan, plus:",
                        features: [
                            "Resume review & story-focused feedback",
                            "Dedicated search specialist",
                            "Up to 50 job apps/week",
                            "Extra apps at $1.5 each",
                            "Analyst support within 6 hours (SLA/PST hours)",
                        ],
                    },
                    {
                        title: "Plus",
                        price: "$100",
                        duration: "/Week",
                        additionalFeature: "Everything in Starter, with more muscle:",
                        features: [
                            "Up to 75 apps/week",
                            "Apply to 15 job titles",
                            "Analyst + full application team on Pacific hours",
                        ],
                    },
                ].map((plan, idx) => (
                    <div key={idx} className="flex flex-col w-full md:w-[320px] border-2 border-[#0649E7] rounded-[20px] p-6 gap-6 h-[580px]">
                        
                        {/* Title + Tag */}
                        <div className="flex justify-between items-center">
                            <h3 className="text-2xl font-semibold tracking-tight">{plan.title}</h3>
                            {plan.tag && (
                                <span className="text-[#0649E7] border border-[#0649E7] px-2 py-1 rounded-full bg-slate-100 text-base">
                                    {plan.tag}
                                </span>
                            )}
                        </div>

                        {/* Price */}
                        <div className="flex items-end gap-1 text-[#0649E7]">
                            <span className="text-5xl font-bold">{plan.price}</span>
                            <span className="text-base font-bold">{plan.duration}</span>
                        </div>

                        {/* Features */}
                        <ul className="flex flex-col gap-3 mt-2 text-md">
                            <hr />
                            {plan.additionalFeature && (
                                <li className="flex items-start gap-3 font-semibold">
                                    <span>{plan.additionalFeature}</span>
                                </li>
                            )}
                            {plan.features.map((text, idx2) => (
                                <li key={idx2} className="flex items-start gap-3">
                                    <CheckCircle className="w-5 h-5 text-green-500 mt-[2px]" />
                                    <span>{text}</span>
                                </li>
                            ))}
                        </ul>

                        {/* Button */}
                        <button className="flex items-center w-fit text-white bg-[#0649E7] px-6 py-2 rounded-full text-lg font-normal hover:bg-white hover:text-[#0649E7] border border-[#0649E7] transition mt-auto">
                            Get Started
                            <ArrowUpRight className="w-5 h-5 ml-2" />
                        </button>

                    </div>
                ))}

            </div>

            <div className="flex flex-col gap-8 bg-[#0649E7] p-8 rounded-[20px] text-white mt-12">

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                    <div>
                        <h3 className="text-3xl font-semibold tracking-tight">Advance</h3>
                        <p className="text-base">Top-tier support for serious job hunters:</p>
                    </div>
                    <div className="flex items-end gap-1">
                        <span className="text-5xl font-bold tracking-tighter">$150</span>
                        <span className="text-base font-bold">/Week</span>
                    </div>
                </div>

                <hr className="border-t-2 border-gray-300 w-56" />
                <div className="flex flex-col text-lg">

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-green-400 w-5 h-5" />
                            <span>Everything in Plus</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-green-400 w-5 h-5" />
                            <span>Custom Resumes & Cover Letters</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-green-400 w-5 h-5" />
                            <span>20 fully customized applications/week</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-green-400 w-5 h-5" />
                            <span>Help with complex job searches</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-2">
                            <CheckCircle className="text-green-400 w-5 h-5" />
                            <span>Access to senior resume experts, Founder & Exec Coaches</span>
                        </div>

                        <button className="flex items-center w-fit text-[#0649E7] bg-white px-6 py-2 rounded-full text-lg font-normal hover:bg-[#0649E7] hover:text-white hover:border-white border border-[#0649E7] transition text-nowrap ">
                            Get Started
                            <ArrowUpRight className="w-5 h-5 ml-2" />
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default JobApplication;
