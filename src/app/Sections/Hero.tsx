import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ShoppingCartIcon } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import Featured1 from "/public/Featured1.webp"
import Featured2 from "/public/Featured2.webp"
import Featured3 from "/public/Featured3.webp"
import Featured4 from "/public/Featured4.webp"

const Hero = () => {
    return (
        <section className=' w-10/12 mx-auto flex flex-col lg:flex-row justify-center'>

            {/* left section */}
            <div className='flex w-full xl:w-1/2 flex-col justify-center gap-10'>

                {/* Blue Badge */}
                <Badge className='w-32 h-10 flex justify-center items-center rounded-lg text-lg font-bold text-[#0062F5] bg-[#0062F5]/10'>Sale 70%</Badge>

                {/* Main Taglines */}
                <h1 className='text-4xl sm:text-6xl lg:text-5xl xl:text-6xl font-bold lg:w-4/5 xl:w-full'>An Industrial Take on Streetwear</h1>
                <p className='w-4/5 md:w-3/5'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
                <Button className='w-52 h-16'>
                    <Link href={"/products"} className='text-lg flex gap-x-2 font-semibold'>
                        <ShoppingCartIcon />
                        <span>Start Shopping</span>
                    </Link>
                </Button>

                {/* Brand Logos */}
                <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 xl:mt-20'>
                    <Image src={Featured1} alt='featured 1' />
                    <Image src={Featured2} alt='featured 2' />
                    <Image src={Featured3} alt='featured 3' />
                    <Image src={Featured4} alt='featured 4' />
                </div>
            </div>

            {/* right section */}
            <div className='w-1/2 relative hidden lg:block'>
                <div className='-z-10 rounded-full w-[450px] xl:w-[600px] h-[450px] xl:h-[600px] -top-6 -right-2 bg-[#FFECE3] absolute'></div>
                <div className='w-[400px] xl:w-[600px] h-[400px] xl:h-[600px] absolute top-7 xl:-top-4 -right-2'>
                    <Image src={"/heroImage.webp"} alt='hero image' className='object-contain' fill />
                </div>
            </div>
        </section>
    )
}

export default Hero
