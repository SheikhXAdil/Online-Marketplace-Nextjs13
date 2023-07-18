import Image from 'next/image'
import Logo from "/public/Logo.png"
import { Twitter, Facebook, Linkedin } from 'lucide-react'


const companyItems = ["About", "Terms of Use", "Privacy Policy", "How it Works", "Contact Us"]
const supportItems = ["Support Carrer", "24h Service", "Quick Chat"]
const contactItems = ["Whatsapp", "Support 24h"]

const Footer = () => {
    return (
        <footer className='mt-32'>

            <div className='w-10/12 mx-auto flex flex-col md:flex-row justify-between gap-20'>

                {/* Logo, tagline and socials */}
                <div className='w-full md:w-1/3 flex flex-col justify-between gap-6'>
                    <Image src={Logo} alt='logo' width={180} height={30} />
                    <p className='w-full md:w-4/5 text-lg'>Small, artisan label that offers a thoughtfully curated collection of high quality everyday essentials made.</p>
                    <div className='flex gap-2'>
                        <Twitter className='flex w-12 h-12 p-3 rounded-full bg-[#f1f1f1] justify-center items-center' />
                        <Facebook className='flex w-12 h-12 p-3 rounded-full bg-[#f1f1f1] justify-center items-center' />
                        <Linkedin className='flex w-12 h-12 p-3 rounded-full bg-[#f1f1f1] justify-center items-center' />
                    </div>
                </div>

                {/* Links */}
                <div className='flex flex-col sm:flex-row justify-between gap-6 w-full md:w-2/3'>

                    {/* Company links */}
                    <div className='flex-1'>
                        <h2 className='text-2xl font-semibold mb-6'>Company</h2>
                        <ul>
                            {companyItems.map((company, index) => {
                                return (
                                    <li key={index} className='text-lg my-2 cursor-pointer'>{company}</li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Support links */}
                    <div className='flex-1'>
                        <h2 className='text-2xl font-semibold mb-6'>Support</h2>
                        <ul>
                            {supportItems.map((support, index) => {
                                return (
                                    <li key={index} className='text-lg my-2 cursor-pointer'>{support}</li>
                                )
                            })}
                        </ul>
                    </div>

                    {/* Contact links */}
                    <div className='flex-1'>
                        <h2 className='text-2xl font-semibold mb-6'>Contact</h2>
                        <ul>
                            {contactItems.map((contact, index) => {
                                return (
                                    <li key={index} className='text-lg my-2 cursor-pointer'>{contact}</li>
                                )
                            })}
                        </ul>
                    </div>

                </div>

            </div>

            {/* Copyright Details */}
            <div className='mt-8 bg-black h-[0.05rem]' />
            <div className='w-10/12 mx-auto flex flex-col sm:flex-row justify-between gap-4 py-8'>
                <p className='text-xl'>Copyright © 2022 Dine Market</p>
                <p className='text-xl'>Design by. <span className='font-bold'>Weird Design Studio</span></p>
                <p className='text-xl'>Code by. <span className='font-bold'>SheikhXAdil on github</span></p>
            </div>

        </footer>
    )
}

export default Footer
