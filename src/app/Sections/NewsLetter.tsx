import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const NewsLetter = () => {
    return (
        <section className='relative w-10/12 mx-auto my-16 flex items-center justify-center'>

            {/* Bg Text */}
            <div className='absolute'>
                <h1 className='z-0 text-[#212121] text-4xl sm:text-[6rem] md:text-[7rem] leading-none font-extrabold opacity-[0.07]'>
                    NEWSLETTER
                </h1>
            </div>

            {/* Main Content */}
            <div className='flex flex-col gap-5 text-center'>
                <h1 className='text-3xl sm:text-4xl font-bold'>Subscribe Our Newsletter</h1>
                <p className=''>Get the latest information and promo offers directly</p>
                <div className='flex gap-3 mt-8'>
                    <Input className='w-2/3 border border-black rounded-none' placeholder='Input email address' />
                    <Button className='w-1/3 rounded-none'>Get Started</Button>
                </div>
            </div>
        </section>
    )
}

export default NewsLetter
