import { ArrowRight } from "lucide-react"

const Contact = () => {
  return (
    <div className="flex flex-row justify-between w-11/12 max-w-[1100px] mx-auto my-12 gap-16 px-6 sm:px-8 md:px-12 xl:px-16 py-20 bg-[#0649E7] text-white rounded-[20px] items-center">
        <h2 className="text-xl font-medium tracking-tight md:3xl lg:text-4xl hidden md:flex ">STILL HAVE <br />DOUBTS?</h2>
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-normal tracking-tight">Contact us</h1>
        <div className="h-16 w-16 md:h-20 md:w-20 lg:h-28 lg:w-28 bg-white rounded-full flex justify-center items-center text-[#0649E7] ">
            <ArrowRight className="w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 font-bold" />
        </div>
    </div>
  )
}
export default Contact
