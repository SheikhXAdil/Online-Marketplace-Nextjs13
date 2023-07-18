"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link"
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const SignUp = () => {

    const router = useRouter()

    const [isUpdating, setIsUpdating] = useState(false)
    const [isPending, startTransition] = useTransition();
    const isMutating = isUpdating || isPending

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")


    const handlesignup = async (email: (string | null), password: (string | null), router: any) => {

        const sleep = (ms = 2000) => new Promise((r) => setTimeout(r, ms));

        setIsUpdating(true)

        try {

            if (email && password) {
                const res = await fetch("/api/signin", {
                    method: "POST",
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                })
                if (res.status === 403) {
                    throw new Error(`User Already Exists`);
                }
                else if (!res.ok) {
                    throw new Error(`HTTP Error: ${res.status}`);
                }
                else {
                    toast.success("Signed up successfully. Redicting to Sign in page....")

                    startTransition(async () => {
                        setEmail("")
                        setPassword("")
                        setConfirmPassword("")
                        await sleep()
                        router.replace("/sign-in")
                    })
                }
            }
            else {
                throw new Error("Please check if inputs are meeting the requirements and not empty");
            }

        } catch (error) {
            toast.error((error as { message: string }).message)
        }
        setIsUpdating(false)

    }

    return (
        <main className="flex flex-col w-10/12 mx-auto">

            <section className="flex flex-col w-11/12 md:w-3/5 lg:w-2/5 p-4 bg-slate-200 gap-2">
                <h1 className="font-semibold text-lg">Note:</h1>
                <p>The app isn&apos;t ready security wise yet so don&apos;t enter any sensitive details or password. Just use random password to test</p>
                <p className="font-semibold">OR</p>
                <div>
                    <p>Use following credentials if you want to test the app:</p>
                    <p>Email: test@email.com</p>
                    <p>Password: 12345</p>
                </div>
            </section>

            <section className="flex w-10/12 mx-auto">
                <Card className="w-11/12 md:w-3/5 lg:w-2/5 h-[600px] sm:h-3/5 p-4 flex flex-col justify-between gap-4">
                    <CardHeader>
                        <CardTitle className="font-bold text-2xl">Sign Up</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid w-full gap-4">
                            <div className="flex flex-col gap-5">

                                <h3 className="font-medium">Email</h3>
                                <Input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" />

                                <div className="flex gap-2">
                                    <h3 className="font-medium">Password</h3>
                                    <p className="">(Min length 5)</p>
                                </div>
                                <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter password" />

                                <h3 className="font-medium">Confirm Password</h3>
                                <Input value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm password" />
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col gap-4 items-start">
                        <div className="flex flex-col sm:flex-row gap-2">
                            <p>Already have an account?</p>
                            <Link href={"/sign-in"} className="font-medium cursor-pointer">Sign in</Link>
                        </div>
                        <Button className={isMutating ? "bg-gray-400 hover:bg-gray-400" : "bg-gray-800"} onClick={async () => await handlesignup(/\S/.test(email) ? email : null, (/^.{5,}/.test(password) && password === confirmPassword) ? password : null, router)}>Sign Up</Button>
                    </CardFooter>
                </Card>
            </section>

            <ToastContainer />

        </main>
    )
}

export default SignUp

