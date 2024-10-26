import BackgroundImage from "@/components/BackgroundImage";
import Confirm from "@/components/Confirm";
import Counter from "@/components/Counter";
import DressCode from "@/components/DressCode";
import Header from "@/components/Header";
import ProgramCard from "@/components/ProgramCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>    
      <BackgroundImage quest={undefined} team={undefined}/>
      <div className="grid grid-rows-12 grid-cols-12 h-[100dvh] w-[100vw]">
        <div className="relative col-start-4 col-end-10 row-span-3">
          <Counter date={new Date("2024-11-09")}/>
        </div>
        <div className="relative col-start-1 col-end-4 row-start-2 row-end-6 text-center">
          <div className="absolute bottom-full inset-x-0 m-auto text-white text-center">Tu zaczynamy:</div>
          <Card className="absolute bottom-0 inset-x-0 h-full aspect-[5/4] bg-[url('https://wiki.openstreetmap.org/w/images/thumb/6/69/Baclaran_and_Pasay_Rotunda_-_in_Standard_map_layer.png/250px-Baclaran_and_Pasay_Rotunda_-_in_Standard_map_layer.png')] bg-cover bg-center m-auto"></Card>
        </div>
        <div className="relative col-start-4 col-end-9 row-start-4 row-end-8">
          <Header nickname="&lt;Nickname&gt;"></Header>
        </div>
        <div className="relative col-start-2 col-end-4 row-start-7 row-end-11">
          <ProgramCard id="questThumb" title="Quest" imageUrl="/quest/01.jpg" time="16:00"/>
        </div>
        <div className="relative col-start-7 col-end-9 row-start-8 row-end-12">
          <ProgramCard className="relative -top-3" id="laserarenaThumb" title="Lasertag" imageUrl="/laserarena/01.jpg" time="17:00"/>
        </div>
        <div className="relative col-start-10 col-end-12 row-start-2 row-end-6">
          <ProgramCard className="relative -top-[4vh] left-[4vw]" id="partyhouseThumb" title="Lokal" imageUrl="/partyhouse/salon/01.jpg" time="18:45"/>
        </div>
        <div className="relative col-start-1 col-end-7 row-start-12 row-end-13">
          <DressCode />
        </div>
        <div className="relative col-start-10 col-end-13 row-start-6 row-end-10">
          <div className="bg-[url('https://freepngimg.com/save/99099-apex-legends-png-download-free/920x786')] bg-cover bg-top w-full h-full"></div>
          {/* <h1 className="text-center text-3xl">Jubilarians</h1> */}
        </div>
        <div className="relative col-start-9 col-end-13 row-start-10 row-end-12 inline-flex justify-end">
          <Confirm />
        </div>
        <div className="relative col-start-9 col-end-13 row-start-12 row-end-13 ">
          <h1 className="text-center text-xl underline text-white ">&#9432; Więcej informacji</h1>
        </div>
      </div>
    </>
  );
}
