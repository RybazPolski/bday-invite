"use client"

import BackgroundImage from "@/components/BackgroundImage";
import { ConfirmSheet } from "@/components/ConfirmSheet";
import Counter from "@/components/Counter";
import DressCode from "@/components/DressCode";
import Header from "@/components/Header";
import ProgramCard from "@/components/ProgramCard";
import { Card } from "@/components/ui/card";
import { PartyhouseModal } from "@/components/PartyhouseModal";
import { BedIcon, CakeIcon,  DicesIcon, PizzaIcon, ShowerHeadIcon } from "lucide-react";
import ExpandableProgramPoint from "@/components/ExpandableProgramCard";
import { MoreInfoModal } from "@/components/MoreInfoModal";
import { useEffect, useState } from "react";
import { Guest } from "@/model/Guest";
import { getCookie } from "cookies-next";

export default function PageContent(){
    
    const [guest, setGuest] = useState<Guest>()
    
    useEffect(() => {
      setGuest({
        nickname: getCookie("nickname") as string,
        team: getCookie("team") ? getCookie("team") as "lime"|"orange" : null
      })
    }, []);

    const programPointQuest = {
        imageUrl: "/quest/01.jpg", title: "Quest", rv: "Alpha", time: "16:00", address: "Poznań, nad przystankiem Piaśnicka\uFEFF/\uFEFFKurlandzka", description: "", content: 
        (<>
          <i>&quot;Imiona i nazwiska: nieznane, zdjęcia: brak, cechy wyróżniające: nieznane, ostatnie lokalizacje: Oba cele przebywają ukryte wśród aktywnych w regionie NANZOP drużyn łowców nagród. Los chciał, by te drużyny szukały właśnie ich...&quot;</i>
        </>),
      }
    
      const programPointLaserarena = {
        imageUrl: "/laserarena/01.jpg", title: "Lasertag", rv: "Beta", time: "17:00", address: "Poznań, Fort IIa", description: "", content: 
        (<>
          Podzielimy się na dwie pary drużyn i zagramy dwie gry po ok. 30minut. Jeżeli się uda, wbijemy wcześniej, aby przejść szkolenie już przed 17:00 i nie tracić czasu gry ;)
        </>),
      }
    
      const programPointPartyhouse = {
        imageUrl: "/partyhouse/salon/01.jpg", title: "Lokal", rv: "Gamma", time: "18:45", address: "Poznań, ul. Za Bramką 12A", description:  "", content: (<>
          <div className="flex  items-center justify-center">
            <CakeIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Wszamanie torta
              </span>
            </div>
            <div className="flex  items-center justify-center">
              <PizzaIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Pizza
              </span>
            </div>
            <div className="flex items-center justify-center">
              <DicesIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Towarzyski wieczór z gierami
              </span>
            </div>
            <div className="flex items-center justify-center">
              <BedIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Nocleg
              </span>
            </div>
            <div className="flex items-center justify-center">
              <ShowerHeadIcon className="mr-1 text-neutral-700 dark:text-neutral-300 h-4 w-4" />
              <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                Prysznice
              </span>
            </div>
        </>),
      }

    return (<>

        <BackgroundImage quest="accepted" team={guest?.team}/>
        <div className="grid grid-rows-12 grid-cols-12 h-[100dvh] w-[100vw] z-0">
            <div className="relative col-start-4 col-end-10 row-span-3">
                <Counter date={new Date("2024-11-09 16:00")}/>
            </div>
        <div className="relative col-start-1 col-end-4 row-start-2 row-end-6 text-center">
            <div className="absolute bottom-full inset-x-0 m-auto text-white text-center">Tu zaczynamy:</div>
            <a target="_blank" href="https://maps.app.goo.gl/zwYAKSw6jk6Rsc4Z6"><Card className="absolute bottom-0 inset-x-0 h-full aspect-[5/4] bg-[url('/map.jpg')] bg-cover bg-center m-auto"/></a>
        </div>
        <div className="relative col-start-4 col-end-9 row-start-4 row-end-8">
            <Header nickname={guest?.nickname?guest.nickname:"<Nickname>"}></Header>
        </div>
        <div className="relative col-start-2 col-end-4 row-start-7 row-end-11">
          <ExpandableProgramPoint triggerClassname="h-[35dvh]" programPoint={programPointQuest}>
            <ProgramCard programPoint={programPointQuest}/>
          </ExpandableProgramPoint>
        </div>
        <div className="relative col-start-7 col-end-9 row-start-8 row-end-12">
          <ExpandableProgramPoint triggerClassname="relative -top-3 h-[35dvh]" programPoint={programPointLaserarena}>
            <ProgramCard className="h-full" programPoint={programPointLaserarena}/>
          </ExpandableProgramPoint>
        </div>
        <div className="relative col-start-10 col-end-12 row-start-2 row-end-6">
          <PartyhouseModal triggerClassname="relative -top-[4vh] left-[4vw] aspect-square h-[35dvh] px-0 py-0 overflow-visible" programPoint={programPointPartyhouse}>
            <ProgramCard className="h-full" programPoint={programPointPartyhouse}/>
          </PartyhouseModal>
        </div>
        <div className="relative col-start-1 col-end-7 row-start-12 row-end-13">
          <DressCode />
        </div>
        <div className="relative col-start-10 col-end-13 row-start-6 row-end-10">
          <div className="bg-[url('/jnj.png')] bg-cover bg-center w-full h-full"></div>
          {/* <h1 className="text-center text-3xl">Jubilarians</h1> */}
        </div>
        <div className="relative col-start-9 col-end-13 row-start-10 row-end-12 inline-flex justify-end">
          <ConfirmSheet />
        </div>
        <div className="relative col-start-9 col-end-13 row-start-12 row-end-13 ">
          <MoreInfoModal>
            <h1 className="text-center text-xl underline text-white cursor-pointer">&#9432; Więcej informacji</h1>
          </MoreInfoModal>
        </div>
    </div>

    
    </>)

}