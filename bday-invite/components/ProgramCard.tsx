// @ts-nocheck
import { Card, CardTitle } from "@/components/ui/card";
import { ProgramPoint } from "@/model/ProgramPoint";

export default function ProgramCard({className, programPoint}:{className?:string, programPoint:ProgramPoint}){
    return (
        <>
            <span className={className}>
                <span className="relative block mx-auto -top-2
                aspect-square h-full overflow-hidden rounded-lg p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                    <span className="absolute inset-[-100%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                            <Card 
                            style={{ '--image-url': `url(${programPoint.imageUrl})` }} 
                            className={`h-full aspect-square bg-[url:var(--image-url)] bg-cover bg-center m-auto text-center align-middle text-white font-semibold text-2xl 
                                rounded-lg bg-slate-950  backdrop-blur-3xl`}
                            title={programPoint.title}
                            >
                                <span className="text-lg">RV {programPoint.rv}:</span>
                                <CardTitle>{programPoint.title}</CardTitle>
                            </Card>
                    </span>
                <div className="relative -top-2 mx-auto text-center text-2xl text-white">{programPoint.time}</div>
            </span>
        </>
    )
}

