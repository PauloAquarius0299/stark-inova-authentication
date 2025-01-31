import { Metadata } from "next"
import Image from "next/image"
import signupImage from "@/assets/signupImage.jpg";
import Link from "next/link";
import SignUpForm from "./SignupForm";

export const metadata: Metadata = {
    title: "Cadastrar"
}

export default function Page() {
    return <main className='flex h-screen items-center justify-center p-5 bg-blue-100'>
        <div className='flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl'>
            <div className="md:w-1/2 w-full space-y-10 overflow-y-auto p-10 bg-white">
            <div className='space-y-1 text-center'>
                <h1 className="text-3xl font-bold">Cadastrar na <span className="text-blue-800">Stark</span> Inova</h1>
                <p className="text-muted-foreground">
                Seu negócio Tradicional e Digital em um só lugar.
                </p>
            </div>
            <div className='space-y-5'>
                Se cadastrar pelo formulário
                <SignUpForm />
                <Link href="/login" className='block text-center hover:underline'>
                Você já possui uma conta? Acesse aqui!
                </Link>
            </div>
            </div>
            <Image 
            src={signupImage}
            alt=''
            className='w-1/2 hidden object-cover md:block'
            />
        </div>
    </main>
}
