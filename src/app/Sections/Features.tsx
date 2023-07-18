import Image from "next/image"
import feature from "/public/feature.webp"
import { Button } from "@/components/ui/button"
import Link from "next/link"



const featurs = ["Using Good Quality Materials", "100% Handmade Products", "Modern Fashion Design", "Discount for Bulk Orders"]

const Features = () => {
    return (
        <section className='my-8'>

            {/* Top Right Main Tagline */}
            <div className="py-2 pl-10 pr-32 lg:pl-2 lg:pr-2 flex lg:justify-center xl:justify-end bg-gradient-to-b from-transparent to-[#fbfcff]">
                <h1 className="w-full lg:w-4/5 xl:w-2/5 font-bold text-4xl md:text-5xl">Unique and Authentic Vintage Designer Jewellery</h1>
            </div>

            {/* Left Section */}
            <div className='flex flex-col xl:flex-row justify-between items-center px-2 md:px-6 lg:px-12 xl:px-32 py-10 bg-[#fbfcff] gap-16'>

                <div className='w-full xl:w-2/5'>

                    {/* Bg Text */}
                    <div className='relative z-10 grid grid-cols-2 items-center justify-center gap-8'>
                        <div className='absolute'>
                            <h1 className="z-0 text-[#212121] text-[3rem] sm:text-[4.0rem] md:text-[7rem] leading-none font-extrabold opacity-[0.07]">Different from others</h1>
                        </div>

                        {/* Features */}
                        {featurs.map((feature, index) => {
                            return (
                                <div key={index} className="w-full">
                                    <h6 className="text-xl font-bold text-[#212121] mb-4 -tracking-tight">{feature}</h6>
                                    <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                </div>
                            )
                        })}
                    </div>
                </div>

                {/* Right section */}
                <div className='w-full xl:w-1/2 flex flex-col sm:flex-row justify-center lg:justify-between items-center gap-10'>
                    <Image src={feature} alt="features" />
                    <div className="flex flex-col justify-center gap-6">
                        <p className="text-lg">
                            This piece is ethically crafted in our small family-owned workshop in Peru with unmatched attention to detail and care. The Natural color is the actual natural color of the fiber, undyed and 100% traceable.
                        </p>
                        <Link href={"/products"}>
                            <Button className="w-1/2 xl:w-3/5">See All Products</Button>
                        </Link>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Features
