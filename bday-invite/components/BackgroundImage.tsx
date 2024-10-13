import Image from "next/image"

export default function BackgroundImage({team, quest}:{team?:"orange"|"lime"|undefined,quest?:"accepted"|"denied"|undefined}){
    return (
        <Image 
            className="fixed -z-100 w-full h-full blur-sm"
            src={`/${quest=="accepted"?`cantina${team==undefined?"":"-"+team}`:quest=="denied"?"ship":"sewers"}.jpg`}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt={`${quest=="accepted"?`cantina-lime`:"sewers"} background`}
        />
    )
}