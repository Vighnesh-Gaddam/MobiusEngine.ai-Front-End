import { ArrowRight } from 'lucide-react';
import { ArrowDownLeft } from 'lucide-react';
import Header from './Header';

const Section1 = () => {
    return (
        <div
            className="bg-cover bg-center min-h-[95vh] bg-no-repeat"
            style={{ backgroundImage: "url('/assets/images/Gradient.png')" }}
        >
            <Header />

            <div className="flex flex-col lg:flex-row justify-center w-full xl:w-[1300px] mx-auto gap-8 sm:gap-12 md:gap-16 lg:gap-24 xl:gap-40 mt-16 sm:mt-20 md:mt-24 lg:mt-28 px-6 sm:px-8 md:px-12 xl:px-0">

                <div className="flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
                    <h1 className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold">
                        Land job interviews <br className="hidden lg:block" /> <span className="text-[#0649E7] stroke-1">10x</span> faster
                    </h1>
                    <p className="text-white text-base sm:text-lg md:text-xl xl:text-base font-normal">
                        Custom-built resumes that match your goals, keywords, and <br />
                        recruiter expectations.
                    </p>
                    <div className="flex justify-center mt-4 xl:mt-0">
                        <button className="w-fit text-[#022183] bg-white px-6 sm:px-9 py-2 rounded-full text-lg sm:text-xl font-normal flex justify-center items-center hover:bg-[#022183] hover:text-white">
                            Get Started
                            <ArrowRight className="w-5 h-5 font-bold ml-2" />
                        </button>
                    </div>
                </div>

                <div className="flex justify-center xl:justify-start mt-8 xl:mt-0">
                    <div className="relative flex flex-col items-center">
                        <img src="/assets/images/S1i1.png" alt="" height={340} width={250} />

                        <div className="absolute bottom-0 right-0 translate-x-[40%] translate-y-[-10%] backdrop-blur-md rounded-full h-24 w-24 border border-white flex justify-center items-center">
                            <img src="/assets/images/book.png" alt="" height={50} width={50} />

                            <div className="absolute bottom-1 left-1 bg-white rounded-full p-1">
                                <ArrowDownLeft className="w-3 h-3 text-[#0649E7]" />
                            </div>
                        </div>

                        <p className="text-sm font-normal text-center text-white mt-6">
                            Download Free E-Book
                        </p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Section1;
