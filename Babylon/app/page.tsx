import Hero from "@/components/main/Hero";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className="flex flex-col ">
        <Hero/>
        <div className="flex flex-col gap-20">
        <Encryption/>
        <Footer/>
        </div>
      </div>
    </main>
  )
}