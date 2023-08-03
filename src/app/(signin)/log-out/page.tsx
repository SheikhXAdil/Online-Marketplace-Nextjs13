"use client"
import Cookies from "js-cookie"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

const Logout = () => {


    const router = useRouter()

    const handleLogout = async (router: any) => {

        Cookies.set("userid", "")
        router.push("/sign-in")
    }

    useEffect(() => {

        handleLogout(router)

    })


    return (
        <main className="w-10/12 mx-auto flex items-center justify-center">
            <div className="flex items-center justify-center">
                <div className="text-2xl font-bold">Logged out successfully</div>
            </div>
        </main>
    )
}

export default Logout
