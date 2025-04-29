import { Linkedin, ArrowUpRight } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className="text-white bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: "url('/assets/images/Gradient2.png')" }}>
            <div className="flex flex-col justify-center w-full max-w-[1100px] mx-auto gap-8 px-6 sm:px-8 md:px-12 xl:px-0 pt-16">
                <h2 className="text-4xl font-semibold">About Us</h2>
                <div className="flex flex-col gap-12">

                    <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center md:px-8 py-8">
                        <div className="relative flex justify-center items-center">
                            <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-white flex justify-center items-center overflow-hidden">
                                <img src="/assets/images/male.png" alt="" className="mt-4 object-cover" />
                            </div>
                            <a
                                href="https://www.linkedin.com/in/agrawalashwin/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-0 right-0 translate-x-[15%] translate-y-[-15%] rounded-full h-12 w-12 sm:h-16 sm:w-16 border border-gray-300 flex justify-center items-center hover:bg-[#0649E7] transition backdrop-blur-lg"
                            >
                                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </a>
                        </div>

                        <div className="flex-1 text-base leading-6">
                            <p>
                                <b>Ashwin</b> is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.
                            </p>
                            <br />
                            <p>
                                Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center md:px-8 py-8">
                        <div className="relative flex justify-center items-center">
                            <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-white flex justify-center items-center overflow-hidden">
                                <img src="/assets/images/female.png" alt="" className="mt-4 object-cover" />
                            </div>
                            <a
                                href="https://www.linkedin.com/in/nicole-lau-01414517/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-0 right-0 translate-x-[15%] translate-y-[-15%] rounded-full h-12 w-12 sm:h-16 sm:w-16 border border-gray-300 flex justify-center items-center hover:bg-[#0649E7] transition backdrop-blur-lg"
                            >
                                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                            </a>
                        </div>

                        <div className="flex-1 text-base leading-6">
                            <p>
                                <b>Nicole</b> is an Executive coach at Mobius specializing in resume builds and career advisory.
                            </p>
                            <br />
                            <p>
                                With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-10 md:gap-20 items-center md:px-8 py-8">
                        <div className="relative justify-center items-center hidden md:flex">
                            <div className="w-52 h-36"></div>
                        </div>

                        <div className="flex-1 text-base leading-6 flex flex-row md:flex-col sm:gap-4 gap-0">
                            <p className="flex items-center gap-2">
                                Learn more about our Board of Advisors
                                <ArrowUpRight className="w-4 h-4" />
                            </p>
                            <p className="flex items-center gap-2">
                                Follow us on our Linkedin page
                                <ArrowUpRight className="w-4 h-4" />
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutUs;
