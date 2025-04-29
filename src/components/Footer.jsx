import { Linkedin } from "lucide-react"

const Footer = () => {
    return (
        <div className="mt-28">

            <div className="flex flex-col gap-10 text-[#0649E7] mx-24 mb-12">
                <div>
                    <img src="/assets/images/LogoBlue.png" alt="" />
                </div>
                <hr className="w-72" />



                <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between">
                    <div className="flex gap-8 lg:gap-20 flex-col md:flex-row">

                        <div className="flex flex-col md:gap-2">
                            <h4 className="text-base font-medium underline">Address</h4>
                            <p className="text-lg leading-5 text-nowrap">1875 Mission St Ste 103 #450 <br />San Francisco, CA 94103</p>
                        </div>

                        <div className="flex flex-col md:gap-2">
                            <h4 className="text-base font-medium underline">Email</h4>
                            <p className="text-lg text-nowrap">finance@mobiusengine.ai</p>
                        </div>

                        <div className="flex flex-col gap-2">
                            <h4 className="text-base font-medium underline">Phone</h4>
                            <p className="text-lg text-nowrap">650-889-6026</p>
                        </div>

                    </div>

                    <div className="flex flex-col gap-2">
                        <h4 className="text-base font-medium underline">Socials</h4>
                        <div className="flex gap-4">
                            <div className="h-11 w-11 rounded-full flex justify-center items-center border-2 border-[#0649E7]">
                                <Linkedin className="w-5 h-5" />
                            </div>
                            <div className="h-11 w-11 rounded-full flex justify-center items-center border-2 border-[#0649E7]">
                                <Linkedin className="w-5 h-5" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full bg-[#0649E7]">

                <div className="flex items-center justify-between mx-16 flex-col md:flex-row">
                    <p className="text-white text-center py-4 text-nowrap">© 2023 Mobius Engine. All rights reserved.</p>

                    <div className="flex gap-16 flex-row">
                        <p className="text-nowrap">Terms and Conditions</p>
                        <p className="text-nowrap">Privacy Policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer