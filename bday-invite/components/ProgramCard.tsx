// @ts-nocheck
import { Card, CardTitle } from "@/components/ui/card";

export default function ProgramCard({id, className, title, imageUrl, time}:{id?:string, className?:string, title:string,imageUrl:string,time:string}){
    return (
        <>
            <span className={className}>
            <Card id={id}
                style={{ '--image-url': `url(${imageUrl})` }} 
                className={`h-full aspect-square bg-[url:var(--image-url)] bg-cover bg-center m-auto text-center align-middle text-white font-semibold text-2xl`}
                title={title}
                >
                    <CardTitle>{title}</CardTitle>
                </Card>
                <div className="my-auto text-center text-2xl text-white">{time}</div>
            </span>
        </>
    )
}