import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarTrigger,
} from "@/components/ui/menubar"
import Cookies from "js-cookie"
// import { ShoppingCartIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const AccountDetails = async ({ children, handleMenu }: { children: React.ReactNode, handleMenu: (state: boolean) => void }) => {

    const userid = Cookies.get("userid")
    const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));
    const router = useRouter()

    const handleLogout = async (router: any) => {

        Cookies.remove("userid")
        await sleep()
        handleMenu(false)
        router.refresh()

    }


    return (
        userid
            ?
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">{children}</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem>
                            <Link className="w-full" href={"/cart"} onClick={() => handleMenu(false)}>
                                <div className="w-full flex justify-between cursor-pointer">
                                    <p>Cart</p>
                                    <span className="flex justify-center items-center w-5 h-5 bg-red-500 rounded-full text-white"></span>
                                </div>
                            </Link>
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem className="cursor-pointer" onClick={() => handleLogout(router)}>Logout</MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>

            :
            <Menubar>
                <MenubarMenu>
                    <MenubarTrigger className="cursor-pointer">{children}</MenubarTrigger>
                    <MenubarContent>
                        <MenubarItem><Link href={"/sign-in"} onClick={() => handleMenu(false)}>Sign In</Link></MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem><Link href={"/sign-up"} onClick={() => handleMenu(false)}>Sign Up</Link></MenubarItem>
                    </MenubarContent>
                </MenubarMenu>
            </Menubar>
    )





}

export default AccountDetails
