import { ShoppingCartIcon } from 'lucide-react'
import Link from 'next/link'



const AccountDetails = ({ userid }: { userid: string }) => {



    return (
        <div className='flex flex-col lg:flex-row justify-between gap-3 items-center'>
            <Link className={`w-full cursor-pointer ${userid !== "" ? "" : "hidden"}`} href={"/cart"} >
                <div className='relative'>
                    <ShoppingCartIcon className='flex w-11 h-11 p-3 rounded-full bg-[#f1f1f1] justify-center items-center' />
                    <span className='flex justify-center items-center w-4 h-4 absolute top-0 right-0 bg-red-500 rounded-full text-white text-sm'>
                        {""}
                    </span>
                </div>
            </Link>
            <Link className={`text-lg font-medium cursor-pointer ${userid !== "" ? "" : "hidden"}`} href={"/log-out"}>Logout</Link>

            <Link className={`text-lg font-medium cursor-pointer ${userid !== "" ? "hidden" : ""}`} href={"/sign-in"}>Sign In</Link>
            <Link className={`text-lg font-medium cursor-pointer ${userid !== "" ? "hidden" : ""}`} href={"/sign-up"}>Sign Up</Link>
        </div>
    )
}

export default AccountDetails
