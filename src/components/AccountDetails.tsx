import Link from 'next/link'
import Cart from './Cart'



const AccountDetails = ({ userid }: { userid: string }) => {



    return (
        <div className='flex flex-col lg:flex-row justify-between gap-3 items-center'>
            <Link className={`w-full cursor-pointer ${userid !== "" ? "" : "hidden"}`} href={"/cart"} >
                <Cart />
            </Link>
            <Link className={`text-lg font-medium cursor-pointer ${userid !== "" ? "" : "hidden"}`} href={"/log-out"}>Logout</Link>

            <Link className={`text-lg font-medium cursor-pointer ${userid !== "" ? "hidden" : ""}`} href={"/sign-in"}>Sign In</Link>
            <Link className={`text-lg font-medium cursor-pointer ${userid !== "" ? "hidden" : ""}`} href={"/sign-up"}>Sign Up</Link>
        </div>
    )
}

export default AccountDetails
