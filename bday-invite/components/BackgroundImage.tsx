// @ts-nocheck
export default function BackgroundImage({team, quest}:{team?:"orange"|"lime"|undefined,quest?:"accepted"|"denied"|undefined}){
    return (
        <div
            style={{'--image-url':`url('/backgrounds/${quest=="accepted"?`cantina${team==undefined?"":"-"+team}`:quest=="denied"?"ship":"sewers"}.jpg')`}}
            className="bg-[url:var(--image-url)] bg-cover bg-center fixed -z-100 w-full h-full blur-sm"
        />
    )
}