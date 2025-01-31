import { Metadata } from "next"
import LoginForm from "./LoginForm"
import Link from "next/link"
import Image from "next/image"
import signLogin from "@/assets/signLogin.jpg"

export const metadata: Metadata = {
    title: "Acessar"
}

export default function Page(){
    return <main className="flex h-screen items-center justify-center p-5 bg-blue-100">
        <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className='w-full space-y-10 overflow-y-auto p-10 md:w-1/2 bg-white'>
        <h1 className="text-3xl font-bold">Acessar <span className="text-blue-800">Stark</span> Inova</h1>
        <div className='space-y-5'>
            <LoginForm />
            <Link href="/signup" className='block text-center hover:underline'>
            Não possui uma conta? Cadastre-se aqui!
            </Link>
        </div>
        </div>
        <Image 
        src={signLogin}
        alt=""
        className="hidden w-1/2 object-cover md:block"
        />
        </div>
        
    </main>
}