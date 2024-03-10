import Hero from "@/components/main/Hero";
import Encryption from "@/components/main/Encryption";
import Part_2 from "@/components/main/Part_2";
import RoadMap from "@/components/main/RoadMap";
import Footer from "@/components/main/Footer";

export default function Home() {
  return (
    <main className='h-full w-full'>
      <div className="flex flex-col ">
        <Hero/>
        <div className="flex flex-col gap-20">
        <Encryption/>
        <Part_2/>
        <RoadMap/>
        <Footer/>

        </div>
      </div>
    </main>
  )
}