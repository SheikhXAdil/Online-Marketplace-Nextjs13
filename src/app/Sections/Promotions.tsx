import Image from 'next/image'
import event1 from "/public/event1.webp"
import event2 from "/public/event2.webp"
import event3 from "/public/event3.webp"
import { Badge } from '@/components/ui/badge'

const Promotions = () => {
    return (
        <section className='w-10/12 mx-auto flex flex-col gap-10'>

            {/* Heading */}
            <div className='text-center flex flex-col gap-3'>
                <h2 className='text-[#0062F5] font-bold text-sm'>PROMOTIONS</h2>
                <h3 className='text-4xl font-bold'>Our Promotions Events</h3>
            </div>

            {/* Section */}
            <div className='flex flex-col lg:flex-row gap-8'>
                <div className='flex flex-col flex-1 gap-5'>

                    {/* Blue card */}
                    <div className='flex flex-col md:flex-row flex-1 justify-around bg-[#d6d6d8]'>
                        <div className='flex flex-col justify-center p-4 gap-2'>
                            <h4 className='text-lg sm:text-2xl md:text-3xl font-bold'>GET UP TO 60%</h4>
                            <p className='md:text-xl'>For the summer season</p>
                        </div>
                        <Image src={event1} alt='event banner 1' />
                    </div>

                    {/* Black card */}
                    <div className='flex flex-1 flex-col justify-center items-center gap-2 p-6 pt-10 text-white bg-[#212121]'>
                        <h4 className='text-3xl sm:text-4xl font-bold mb-3'>GET 30% Off</h4>
                        <p>USE PROMO CODE</p>
                        <Badge className='flex justify-center items-center px-4 sm:px-12 py-2 rounded-lg text-[1.05rem] sm:text-xl tracking-widest font-semibold bg-[#474747]'>DINEWEEKENDSALE</Badge>
                    </div>

                </div>

                {/* Product Sale cards */}
                <div className='flex flex-col md:flex-row flex-1 gap-4'>

                    {/* Skin card */}
                    <div className='flex-1 flex flex-col justify-between bg-[#efe1c7]'>
                        <div className='px-6 py-4'>
                            <h6>Flex Sweatshirt</h6>
                            <p>
                                <span className='text-lg line-through'>$55.00</span>
                                <span className='text-xl font-semibold'> $35.00</span>
                            </p>
                        </div>
                        <Image src={event2} alt='event banner 2' className='align-bottom mx-auto' />
                    </div>

                    {/* Blue card */}
                    <div className='flex-1 flex flex-col justify-between bg-[#d7d7d9]'>
                        <div className='px-6 py-4'>
                            <h6>Flex Push Button Bomber</h6>
                            <p>
                                <span className='text-lg line-through'>$60.00</span>
                                <span className='text-xl font-semibold'> $45.00</span>
                            </p>
                        </div>
                        <Image src={event3} alt='event banner 3' className='align-bottom mx-auto' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Promotions
