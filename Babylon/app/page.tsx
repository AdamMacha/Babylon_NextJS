import Hero from "@/components/main/Hero";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className="flex flex-col gap-20">
        <Hero/>
        <Footer/>
      </div>
    </main>
  )
}